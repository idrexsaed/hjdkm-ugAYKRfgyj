
import React, { useState, useCallback } from 'react';
import { GoogleGenAI } from '@google/genai';

import type { GeoAnalysisResult } from './types';
import { analyzeMapImage } from './services/geminiService';

import { ImageUploader } from './components/ImageUploader';
import { ResultDisplay } from './components/ResultDisplay';
import { Loader } from './components/Loader';
import { ErrorMessage } from './components/ErrorMessage';
import { WorldIcon } from './components/Icons';

const App: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [prompt, setPrompt] = useState<string>(
    'Analyze the provided physical world map. For the following geographical features: Plane Areas, Mountain Ranges, Deserts, Water Areas, Ice Areas, and Forest Areas, provide a detailed breakdown. For each feature, include a summary with its estimated total area and percentage of the Earth\'s surface it covers, along with a list of major examples detailing their names, associated countries, and specific locations.'
  );
  const [analysisResult, setAnalysisResult] = useState<GeoAnalysisResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleAnalyzeClick = useCallback(async () => {
    if (!imageFile || !prompt) {
      setError('Please provide an image and a prompt.');
      return;
    }

    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    try {
      const result = await analyzeMapImage(imageFile, prompt);
      setAnalysisResult(result);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred.';
      setError(`Analysis failed: ${errorMessage}`);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [imageFile, prompt]);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex items-center justify-center gap-4 mb-2">
            <WorldIcon className="w-10 h-10 text-cyan-400" />
            <h1 className="text-4xl sm:text-5xl font-bold text-white tracking-tight">
              Geo Map Analyzer
            </h1>
          </div>
          <p className="text-lg text-slate-400">
            Upload a world map and get a detailed geographical analysis powered by Gemini.
          </p>
        </header>

        <main className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6 p-6 bg-slate-800/50 rounded-2xl border border-slate-700 shadow-lg">
            <div>
              <label htmlFor="image-upload" className="block text-lg font-semibold mb-2 text-cyan-300">1. Upload Map Image</label>
              <ImageUploader onImageSelect={setImageFile} />
            </div>
            
            <div>
              <label htmlFor="prompt" className="block text-lg font-semibold mb-2 text-cyan-300">2. Analysis Prompt</label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-40 p-3 bg-slate-900 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-colors duration-200 text-slate-300 placeholder-slate-500"
                placeholder="Enter your analysis prompt here..."
              />
            </div>

            <button
              onClick={handleAnalyzeClick}
              disabled={isLoading || !imageFile}
              className="w-full py-3 px-6 bg-cyan-600 text-white font-bold rounded-lg hover:bg-cyan-500 disabled:bg-slate-600 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 shadow-cyan-500/30 shadow-lg"
            >
              {isLoading ? 'Analyzing...' : 'Analyze Map'}
            </button>
          </div>

          <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 shadow-lg min-h-[400px] flex flex-col justify-center items-center">
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {analysisResult && <ResultDisplay result={analysisResult} />}
            {!isLoading && !error && !analysisResult && (
              <div className="text-center text-slate-400">
                <WorldIcon className="w-24 h-24 mx-auto text-slate-600 mb-4" />
                <h2 className="text-2xl font-semibold text-slate-300">Analysis Results</h2>
                <p>Your geographical analysis will appear here.</p>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
