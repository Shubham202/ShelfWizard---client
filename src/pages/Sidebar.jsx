import React from 'react';

const Sidebar = ({ handleSidebarClick }) => {
  return (
    <div className="bg-gray-800  h-full text-white p-4 flex flex-col justify-between">
      <div>
      <h2 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Cambria' }}>Retail Dashboard</h2>
        <ul className="space-y-2">
        <li onClick={() => handleSidebarClick("Seasonal")} className="cursor-pointer hover:text-yellow-400 transition duration-300" style={{ fontFamily: 'Cambria' }}>Seasonal Products</li>
        <li onClick={() => handleSidebarClick("ProfitMargin")} className="cursor-pointer hover:text-yellow-400 transition duration-300" style={{ fontFamily: 'Cambria' }}>Profit Margin Products</li>
        <li onClick={() => handleSidebarClick("Ratings")} className="cursor-pointer hover:text-yellow-400 transition duration-300" style={{ fontFamily: 'Cambria' }}>Ratings</li>
        <li onClick={() => handleSidebarClick("Overall")} className="cursor-pointer hover:text-yellow-400 transition duration-300" style={{ fontFamily: 'Cambria' }}>Overall</li>
        <button onClick={() => handleSidebarClick('Inventory')} className="cursor-pointer hover:text-yellow-400 transition duration-300" style={{ fontFamily: 'Cambria' }}>Inventory</button> {/* Add Inventory tab */}
    
        </ul>
      </div>
      <div className="text-center text-xs">© 2024 Retail Dashboard</div>
    </div>
  );
};

export default Sidebar;
