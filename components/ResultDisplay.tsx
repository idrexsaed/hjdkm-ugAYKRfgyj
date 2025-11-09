
import React from 'react';
import type { GeoAnalysisResult, GeoFeatureDetail } from '../types';
import { AreaIcon, MountainIcon, DesertIcon, WaterIcon, IceIcon, ForestIcon } from './Icons';

interface ResultDisplayProps {
  result: GeoAnalysisResult;
}

const featureConfig: { [key: string]: { title: string; icon: React.FC<React.SVGProps<SVGSVGElement>> } } = {
  plane_area: { title: 'Plane Areas', icon: AreaIcon },
  mountain_ranges: { title: 'Mountain Ranges', icon: MountainIcon },
  desert_area: { title: 'Deserts', icon: DesertIcon },
  water_area: { title: 'Water Areas', icon: WaterIcon },
  ice_area: { title: 'Ice Areas', icon: IceIcon },
  forest_area: { title: 'Forest Areas', icon: ForestIcon },
};

const FeatureSection: React.FC<{ featureKey: string; details: GeoFeatureDetail }> = ({ featureKey, details }) => {
  const config = featureConfig[featureKey] || { title: featureKey.replace(/_/g, ' '), icon: AreaIcon };
  const Icon = config.icon;

  return (
    <div className="mb-6 p-4 bg-slate-800 rounded-lg border border-slate-700">
      <h3 className="text-2xl font-bold text-cyan-300 mb-4 flex items-center gap-3">
        <Icon className="w-7 h-7" />
        {config.title}
      </h3>
      
      <div className="bg-slate-900/50 p-3 rounded-md mb-4 border border-slate-700/50">
        <h4 className="font-semibold text-slate-300 mb-2">Summary</h4>
        <p className="text-sm text-slate-400"><strong className="text-slate-300">Total Area:</strong> {details.summary.total_area}</p>
        <p className="text-sm text-slate-400"><strong className="text-slate-300">Percentage of Land:</strong> {details.summary.percentage_of_land}</p>
        <p className="text-sm text-slate-400 mt-2">{details.summary.general_description}</p>
      </div>

      <h4 className="font-semibold text-slate-300 mb-2">Major Examples</h4>
      <div className="space-y-3">
        {details.examples.map((example, index) => (
          <div key={index} className="p-3 bg-slate-700/40 rounded-md">
            <p className="font-bold text-cyan-400">{example.name}</p>
            <p className="text-sm text-slate-400"><strong className="text-slate-300">Countries:</strong> {example.countries.join(', ')}</p>
            <p className="text-sm text-slate-400">{example.location_description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result }) => {
  return (
    <div className="w-full h-full overflow-y-auto pr-2">
      <h2 className="text-3xl font-bold mb-4 text-white text-center">Geographical Analysis</h2>
      {Object.entries(result).map(([key, value]) => 
        value ? <FeatureSection key={key} featureKey={key} details={value} /> : null
      )}
    </div>
  );
};
