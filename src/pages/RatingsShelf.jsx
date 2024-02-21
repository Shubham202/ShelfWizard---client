import React from 'react';

const RatingsShelf = () => {
  return (
    <div className="bg-yellow-200 p-4 rounded-lg" style={{ fontFamily: 'Cambria' }}>
      <h3 className="text-xl font-semibold mb-2">Ratings Products Shelf</h3>
      <div className="grid grid-cols-3 gap-4">
        {/* Add your products with ratings here */}
        <div className="bg-white p-2 shadow rounded-lg">Milk</div>
        <div className="bg-white p-2 shadow rounded-lg">Eggs</div>
        <div className="bg-white p-2 shadow rounded-lg">Bread</div>
      </div>
    </div>
  );
};

export default RatingsShelf;
