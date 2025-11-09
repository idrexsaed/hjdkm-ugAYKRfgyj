
import { GoogleGenAI, Type } from "@google/genai";
import type { GeoAnalysisResult } from '../types';

if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const fileToGenerativePart = async (file: File) => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result.split(',')[1]);
      }
    };
    reader.readAsDataURL(file);
  });
  const data = await base64EncodedDataPromise;
  return {
    inlineData: {
      data,
      mimeType: file.type,
    },
  };
};

const featureSchema = {
    type: Type.OBJECT,
    description: "Detailed analysis of a specific geographical feature.",
    properties: {
        summary: {
            type: Type.OBJECT,
            properties: {
                total_area: { type: Type.STRING, description: "e.g., '10 million sq km'" },
                percentage_of_land: { type: Type.STRING, description: "e.g., '7%'" },
                general_description: { type: Type.STRING }
            },
            required: ['total_area', 'percentage_of_land', 'general_description']
        },
        examples: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    name: { type: Type.STRING },
                    countries: { type: Type.ARRAY, items: { type: Type.STRING } },
                    location_description: { type: Type.STRING }
                },
                required: ['name', 'countries', 'location_description']
            }
        }
    },
    required: ['summary', 'examples']
};


const responseSchema = {
    type: Type.OBJECT,
    properties: {
        plane_area: featureSchema,
        mountain_ranges: featureSchema,
        desert_area: featureSchema,
        water_area: featureSchema,
        ice_area: featureSchema,
        forest_area: featureSchema,
    },
};

export const analyzeMapImage = async (imageFile: File, prompt: string): Promise<GeoAnalysisResult> => {
    try {
        const imagePart = await fileToGenerativePart(imageFile);

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: {
                parts: [
                    { text: prompt },
                    imagePart,
                ]
            },
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema,
            }
        });
        
        const text = response.text;
        if (!text) {
            throw new Error("API returned an empty response.");
        }
        
        const cleanedText = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(cleanedText);

    } catch (error) {
        console.error("Error calling Gemini API:", error);
        if (error instanceof Error) {
            throw new Error(`Failed to analyze image: ${error.message}`);
        }
        throw new Error("An unknown error occurred during image analysis.");
    }
};
