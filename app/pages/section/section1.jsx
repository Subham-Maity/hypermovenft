import React from 'react';
import humanImage from '../../../public/HumanAi.png';

function Section1() {
  const handleClick = () => {
    // handle button click event here
  };

  return (
    <div className="flex items-center">
      <div className="w-1/2">
        <div className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold mb-4">Human mind is the king</h1>
          <div className="flex justify-between">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Left Button</button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg">Right Button</button>
          </div>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <img src={humanImage} alt="Human Image" className="max-w-full" />
      </div>
    </div>
  );
}

export default Section1;
