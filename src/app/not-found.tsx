'use client';
import React from 'react';

const NotFound = () => {
  const handleOnClick = () => {
    window.history.back();
  };
  return (
    <div className="bg-[#393D3F] h-screen w-full flex flex-col items-center justify-between pt-32">
      <div>
        <img src="/img/tron_404.png" alt="Tron 404 Page" height="285" width="870" />
      </div>
      <div>
        <button className="btn btn-wide bg-[#0065B2] border-current shadow-xl w-full" onClick={handleOnClick}>
          <p className="text-white text-lg">Return to Previous Page</p>
        </button>
      </div>
      <div>
        <img src="/poweredbytron.png" alt="Tron Logo" height="150" width="350" />
      </div>
    </div>
  );
};

export default NotFound;
