import React from 'react';
import SeasonalShelf from './SeasonalShelf.jsx';
import ProfitMarginShelf from './ProfitMargin.jsx';
import RatingsShelf from './RatingsShelf.jsx';
import OverallShelf from './OverallShelf.jsx';

const Visualizations = ({ activeTab }) => {
  const renderVisualization = () => {
    switch (activeTab) {
      case "Seasonal":
        return (
          <div>
            <div className="bg-blue-500 rounded-lg p-4 text-white" style={{ fontFamily: 'Cambria', fontSize: '1.1rem' }}>Seasonal Products Visualization</div>
            <SeasonalShelf />
          </div>
        );
      case "ProfitMargin":
        return (
          <div>
            <div className="bg-green-500 rounded-lg p-4 text-white" style={{ fontFamily: 'Cambria', fontSize: '1.1rem' }}>Profit Margin Products Visualization</div>
            <ProfitMarginShelf />
          </div>
        );
      case "Ratings":
        return (
          <div>
            <div className="bg-yellow-500 rounded-lg p-4 text-white" style={{ fontFamily: 'Cambria', fontSize: '1.1rem' }}>Ratings Visualization</div>
            <RatingsShelf />
          </div>
        );
      case "Overall":
        return (
          <div>
            <div className="bg-purple-500 rounded-lg p-4 text-white" style={{ fontFamily: 'Cambria', fontSize: '1.1rem' }}>Overall Visualization</div>
            <OverallShelf />
          </div>
        );
      default:
        return (
          <div className="bg-gray-300 rounded-lg p-4" style={{ fontFamily: 'Cambria', fontSize: '1.1rem' }}>Select a tab to view visualization</div>
        );
    }
  };

  return (
    <div className="flex-grow p-4">
      {renderVisualization()}
    </div>
  );
};

export default Visualizations;
