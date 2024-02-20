import React, { useState } from 'react';

const SeasonalShelf = ({ selectedSeason, onChangeSeason }) => {
  return (
    <div className="bg-blue-200 p-4 rounded-lg" style={{ fontFamily: 'Cambria' }}>
      <h3 className="text-xl font-semibold mb-2">Seasons</h3>
      {/* Search bar dropdown */}
      <div className="relative">
        <select
          value={selectedSeason}
          onChange={(e) => onChangeSeason(e.target.value)}
          className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
        >
          <option value="Summer">Summer</option>
          <option value="Winter">Winter</option>
          <option value="Monsoon">Monsoon</option>
          <option value="Spring">Spring</option>
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
          <svg
            className="fill-current h-4 w-4"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 5.293a1 1 0 011.414 0L10 6.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      <h3 className="text-xl font-semibold mt-4">Seasonal Products Shelf</h3>
      <div className="grid grid-cols-3 gap-4 mt-2">
        {/* Add your seasonal products here */}
        <div className="bg-white p-2 shadow rounded-lg">Product 1</div>
        <div className="bg-white p-2 shadow rounded-lg">Product 2</div>
        <div className="bg-white p-2 shadow rounded-lg">Product 3</div>
      </div>
    </div>
  );
};

export default SeasonalShelf;
