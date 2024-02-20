import React from 'react';

const OverallShelf = () => {
  return (
    <div className="bg-purple-200 p-4 rounded-lg" style={{ fontFamily: 'Cambria' }}>
      <h3 className="text-xl font-semibold mb-2">Overall Products Shelf</h3>
      <div className="grid grid-cols-3 gap-4">
        {/* Add your overall products here */}
        <div className="bg-white p-2 shadow rounded-lg">Product P</div>
        <div className="bg-white p-2 shadow rounded-lg">Product Q</div>
        <div className="bg-white p-2 shadow rounded-lg">Product R</div>
      </div>
    </div>
  );
};

export default OverallShelf;
