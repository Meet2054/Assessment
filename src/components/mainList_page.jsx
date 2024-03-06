import React from 'react';
import { Search } from "lucide-react";



function SearchBar() {
  return (
    <form>
      <Search
        className="absolute  "
      />
      <input className=' rounded-md  ' type="text" placeholder="         Search" />
    </form>
  );
}


function MainListPage() {
  return (
    <div>
      <div className='flex flex-col bg-green-300 w-[173vh] h-[3%] m-1 '>
        <div className="flex flex-row justify-between px-4">
          <h1>Products</h1>
        <div className="flex flex-row">
          <SearchBar />
          {/* Content Goes Here */}
        </div>
        </div>
      </div>
      <div className='flex flex-col'>
        {/* Additional Content Goes Here */}
      </div>
      <div className='flex flex-col'>
        {/* Additional Content Goes Here */}
      </div>
    </div>
  );
}

export default MainListPage;
