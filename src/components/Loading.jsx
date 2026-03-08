import React from 'react';
import '../styles/style.css'

const Loader = () => {
  return (
    <div className="loader">
      <svg className="ball" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="45" stroke="none" fill="black">
          <animate attributeName="stroke" values="black; white; black" dur="1s" repeatCount="indefinite" />
        </circle>
      </svg>
    </div>
  );
};

export default Loader;