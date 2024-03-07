import { Search } from "lucide-react";
import { Settings } from 'lucide-react';
import { MessagesSquare } from 'lucide-react';


function SearchBar() {
    return (
      <form className=''>
  
        <Search
          className="absolute mt-[3px] ml-1"
        />
        <input className=' rounded-md h-[30px]  border-gray-200 border-2 ' type="text" placeholder="         Search" />
      </form>
    );
  }
  
  function Navbar() {
    return (
      <div className='flex flex-row justify-between px-4 p-3'>
        <h1>Products</h1>
        <div className="flex flex-row justify-around">
          <div className='flex justify-around px-2'>
            <SearchBar />
          </div>
          <div className='flex justify-around px-2 border-2 rounded-md mr-2'>
            <MessagesSquare />
          </div>
          <div className='flex justify-around px-2 border-2 rounded-md'>
            <Settings />
          </div>
        </div>
      </div>
    );
  
    }

export default Navbar
