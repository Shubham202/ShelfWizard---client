import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import Visualizations from './Visualization.jsx';
import SeasonalShelf from './SeasonalShelf.jsx';
import ProfitMarginShelf from './ProfitMargin.jsx';
import RatingsShelf from './RatingsShelf.jsx';
import OverallShelf from './OverallShelf.jsx';


function App() {
  const [activeTab, setActiveTab] = useState("Seasonal");

  const handleSidebarClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      <Sidebar handleSidebarClick={handleSidebarClick} />
      <Visualizations activeTab={activeTab}>
        {activeTab === 'Seasonal' && <SeasonalShelf />}
        {activeTab === 'ProfitMargin' && <ProfitMarginShelf />}
        {activeTab === 'Ratings' && <RatingsShelf />}
        {activeTab === 'Overall' && <OverallShelf />}
      </Visualizations>
    </div>
  );
}

export default App;
