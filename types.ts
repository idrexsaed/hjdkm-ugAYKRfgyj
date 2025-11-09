
export interface GeoFeatureExample {
  name: string;
  countries: string[];
  location_description: string;
}

export interface GeoFeatureDetail {
  summary: {
    total_area: string;
    percentage_of_land: string;
    general_description: string;
  };
  examples: GeoFeatureExample[];
}

export interface GeoAnalysisResult {
  plane_area?: GeoFeatureDetail;
  mountain_ranges?: GeoFeatureDetail;
  desert_area?: GeoFeatureDetail;
  water_area?: GeoFeatureDetail;
  ice_area?: GeoFeatureDetail;
  forest_area?: GeoFeatureDetail;
  [key: string]: GeoFeatureDetail | undefined;
}
