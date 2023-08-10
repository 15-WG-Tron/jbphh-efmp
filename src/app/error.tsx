'use client';
import React from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  const handleOnClick = () => {
    window.history.back();
  };
  return (
    <html className="bg-[#393D3F]">
      <body className="h-screen w-full flex flex-col items-center justify-between pt-32">
        <div>
          <img src="/img/tron_500.png" alt="Tron 404 Page" height="285" width="870" />
        </div>
        <div className="w-1/8 ">
          <button className="btn btn-wide bg-[#0065B2] border-current shadow-xl w-full" onClick={handleOnClick}>
            <p className="text-white text-lg">return to previous page</p>
          </button>
        </div>
        <div>
          <img src="/poweredbytron.png" alt="Tron Logo" height="150" width="350" />
        </div>
      </body>
    </html>
  );
};

export default ErrorPage;
