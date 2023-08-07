'use client';
import React from 'react';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const ErrorPage: React.FC<ErrorProps> = ({ error, reset }) => {
  console.log(error.message);

  return (
    <html>
      <body>
        <h1>Something went wrong</h1>
      </body>
    </html>
  );
};

export default ErrorPage;
