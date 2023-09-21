import React from 'react';

 const SearchBar = () => {
  return (
    
    <div> 
      <div className=" flex flex-col justify-center items-center h-screen">
        <div className="text-2xl ">
        Search Your Product Here 
        </div>
        <div className="flex w-3/4 px-40 h-10 items-center rounded-l-lg ">
          <input 
          type="text"
          placeholder="Enter Your Product Code"/>
        </div>
        <button> Search </button>
      </div>
    </div>
  );
}

export default SearchBar;