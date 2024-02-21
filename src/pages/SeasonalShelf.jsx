import React, { useState } from 'react';

const SeasonalShelf = ({ selectedSeason, onChangeSeason }) => {
  // Define seasonal products for each season with their popularity
  const seasonalProducts = {
    Summer: [
      { name: 'Sunscreen', popularity: 10 },
      { name: 'Sunglasses', popularity: 8 },
      { name: 'Beach Towel', popularity: 6 },
    ],
    Winter: [
      { name: 'Coat', popularity: 10 },
      { name: 'Scarves', popularity: 9 },
      { name: 'Boots', popularity: 7 },
    ],
    Monsoon: [
      { name: 'Umbrella', popularity: 10 },
      { name: 'Raincoat', popularity: 9 },
      { name: 'Rain Boots', popularity: 8 },
    ],
    Spring: [
      { name: 'Umbrella', popularity: 9 },
      { name: 'Raincoat', popularity: 8 },
      { name: 'Garden Tools', popularity: 7 },
    ],
  };

  // State to store seasonal products based on the selected season
  const [seasonalProductsList, setSeasonalProductsList] = useState([]);

  // Update seasonal products when the selected season changes
  const handleSeasonChange = (season) => {
    onChangeSeason(season);
    const sortedProducts = seasonalProducts[season].sort((a, b) => b.popularity - a.popularity);
    setSeasonalProductsList(sortedProducts);
  };

  return (
    <>
      <div className="bg-blue-200 p-4 rounded-lg" style={{ fontFamily: 'Cambria' }}>
        <h3 className="text-xl font-semibold mb-2">Seasons</h3>
        {/* Search bar dropdown */}
        <div className="relative">
          <select
            value={selectedSeason}
            onChange={(e) => handleSeasonChange(e.target.value)}
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
          {/* Display seasonal products based on the selected season */}
          {seasonalProductsList.map((product, index) => (
            <div key={index} className="bg-white p-2 shadow rounded-lg">{product.name}</div>
          ))}
        </div>
      </div>
      {/* Table for seasonal products */}
      <div className="bg-blue-200 p-4 mt-4 rounded-lg" style={{ fontFamily: 'Cambria' }}>
        <h3 className="text-xl font-semibold mb-2">Seasonal Products Table</h3>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Product</th>
              <th className="px-4 py-2">Popularity</th>
            </tr>
          </thead>
          <tbody>
            {seasonalProductsList.map((product, index) => (
              <tr key={index} className="bg-white shadow rounded-lg">
                <td className="px-4 py-2">{product.name}</td>
                <td className="px-4 py-2">{product.popularity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default SeasonalShelf;
