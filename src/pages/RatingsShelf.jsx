import React from 'react';

const RatingsShelf = () => {
  return (
    <div className="bg-yellow-200 p-4 rounded-lg" style={{ fontFamily: 'Cambria' }}>
      <h3 className="text-xl font-semibold mb-2">Ratings Products Shelf</h3>
      <div className="grid grid-cols-3 gap-4">
        {/* Add your products with ratings here */}
        <div className="bg-white p-2 shadow rounded-lg">Product X (4.5 stars)</div>
        <div className="bg-white p-2 shadow rounded-lg">Product Y (4.0 stars)</div>
        <div className="bg-white p-2 shadow rounded-lg">Product Z (4.8 stars)</div>
      </div>
    </div>
  );
};

export default RatingsShelf;
