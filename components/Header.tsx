import React, { useState } from 'react';

const Logo = () => {
  return (
    <svg
      className="inline-block"
      xmlns="http://www.w3.org/2000/svg"
      width="45.568"
      height="38.189"
      viewBox="0 0 68.568 62.189"
    >
      <g
        id="Group_11"
        data-name="Group 11"
        transform="translate(-544.447 -18.921)"
      >
        <line
          id="Line_6"
          data-name="Line 6"
          x1="24.154"
          y1="57.693"
          transform="translate(580.085 22.856) rotate(-7)"
          fill="none"
          stroke="#638ca6"
          stroke-width="4"
        />
        <line
          id="Line_7"
          data-name="Line 7"
          x1="23.47"
          y1="38.839"
          transform="translate(571.03 38.661)"
          fill="none"
          stroke="#638ca6"
          stroke-width="2"
        />
        <g
          id="Polygon_1"
          data-name="Polygon 1"
          transform="translate(544.447 25.411)"
          fill="none"
        >
          <path d="M31.043,0,62.086,54.144H0Z" stroke="none" />
          <path
            d="M 31.04279708862305 12.06311416625977 L 10.35617828369141 48.14445114135742 L 51.72941589355469 48.14445114135742 L 31.04279708862305 12.06311416625977 M 31.04279708862305 -3.814697265625e-06 L 62.08559799194336 54.14445114135742 L -3.814697265625e-06 54.14445114135742 L 31.04279708862305 -3.814697265625e-06 Z"
            stroke="none"
            fill="#638ca6"
          />
        </g>
      </g>
    </svg>
  );
};


const DISTANCE_OPTIONS = [5, 10, 15, 30, 50, 100];

const Header = ({ compact }) => {
  const [selectedDistance, setSelectedDistance] = useState(50);

  const handleDistanceChange = (event) => {
    setSelectedDistance(parseInt(event.target.value, 10));
  };

  if (compact) {
    return <Logo />;
  } else {
    return (
      <header className="flex mb-4 bg-white pl-4 pt-5 h-20">
        <div className="flex w-1/4">
          <Logo />
          <div className="font-['krok'] text-2xl ml-3 mt-1 text-pinblue-500">
            Pin B
          </div>
        </div>
        <div className="flex justify-center w-3/4">
          <input
            className="bg-pingray-100 pr-3 pl-3 rounded h-10 text-pingray-500 w-2/3"
            placeholder="Search"
          />
          <select
            className="bg-pingray-100 rounded h-10 ml-6 mr-2 pr-2 pl-4 font-bold text-pingray-500"
            value={selectedDistance}
            onChange={handleDistanceChange}
          >
            {DISTANCE_OPTIONS.map((distance) => (
              <option key={distance} value={distance}>
                {distance} Miles
              </option>
            ))}
          </select>
        </div>
      </header>
    );
  }
};

export default Header;