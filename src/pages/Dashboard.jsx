import React, { useState } from 'react';
import Sidebar from './Sidebar.jsx';
import Visualizations from './Visualization.jsx';
import SeasonalShelf from './SeasonalShelf.jsx';
import ProfitMarginShelf from './ProfitMargin.jsx';
import RatingsShelf from './RatingsShelf.jsx';
import OverallShelf from './OverallShelf.jsx';
import InventoryShelf from './InventoryShelf.jsx'; // Import the InventoryShelf component

function App() {
  const [activeTab, setActiveTab] = useState("Seasonal");

  const handleSidebarClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="grid grid-cols-5 lg:flex-row h-screen">
      <Sidebar handleSidebarClick={handleSidebarClick} />
      <div className='col-span-4'>

      <Visualizations activeTab={activeTab}>
        {activeTab === 'Seasonal' && <SeasonalShelf />}
        {activeTab === 'ProfitMargin' && <ProfitMarginShelf />}
        {activeTab === 'Ratings' && <RatingsShelf />}
        {activeTab === 'Overall' && <OverallShelf />}
        {activeTab === 'Inventory' && <InventoryShelf />} {/* Render InventoryShelf when activeTab is 'Inventory' */}
      </Visualizations>
      </div>
    </div>
  );
}

export default App;
