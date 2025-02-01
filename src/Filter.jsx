import React, { useState } from 'react';

const Filter = (props) => {
  const { filterData, tellCategory } = props;
  
  // State to track the active filter
  const [activeFilter, setActiveFilter] = useState(filterData[0]?.title || '');

  const handleClick = (title) => {
    setActiveFilter(title);
    tellCategory(title);
  };

  return (
    <div className='w-11/12 flex justify-center gap-4 mt-5'>
      {filterData.map((data) => (
        <button
          key={data.id}
          onClick={() => handleClick(data.title)}
          className={`p-2 rounded-md transition-all ${
            activeFilter === data.title ? 'font-bold bg-gray-500 scale-x-110' : 'font-normal bg-gray-700'
          }`}
        >
          {data.title}
        </button>
      ))}
    </div>
  );
};

export default Filter;
