import { Image } from 'lucide-react'
import React from 'react'
import { PenTool } from 'lucide-react';
import { Plus } from 'lucide-react';
import { PlusSquare } from 'lucide-react';

const Menubar = () => {
  return (
    <div className="flex flex-col m-3">
      <div className='flex flex-row justify-between'>
        <div className="flex flex-row">
          <div className="w-10 h-10 bg-black rounded-md">
            <h1 className='text-white pl-2 pt-1'>Lg</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-400 pl-2 text-[12px]">INC</h1>
            <h1 className='text-[15px] pl-2'>InnovateHub</h1>
          </div>
        </div>
        <div className='bg-red-400 w-10 h-10 rounded-2xl p-2 ml-10'>
          <Image/>
        </div>
      </div>
      <div className='mt-7 flex flex-col'>
        <div>
          <button className='w-[100%] h-15 rounded-md border-2 inline-flex p-2 hover:bg-gray-100 justify-between'>
            <div className="flex flex-row">
              <PenTool className='h-6 w-6' />
              <h2 className='ml-2'>Design Team</h2>
            </div>
            <div className="w-10 h-6 rounded-md bg-gray-300 flex flex-row">
              <Plus className='rotate-45 h-6 w-6 ' /> {/* Adjust the size here */}
              +1
            </div>
          </button>
        </div>
        <div>
          <button className='w-[100%] h-15 rounded-md border-2 inline-flex p-2 hover:bg-gray-100 justify-between'>
            <div className="flex flex-row">
              <PenTool className='h-6 w-6' />
              <h2 className='ml-2 '>Marketing Team</h2>
            </div>
            <div className="w-10 h-6 rounded-md bg-gray-300 flex flex-row">
              <Plus className='rotate-45 h-6 w-6 ' /> {/* Adjust the size here */}
              +2
            </div>
          </button>
        </div> 
       <div>
          <button className='w-[100%] h-15 rounded-md border-2 inline-flex p-2 hover:bg-gray-100 justify-between'>
            <div className="flex flex-row">
              <PenTool className='h-6 w-6' />
              <h2 className='text-[14px] '>Development Team</h2>
            </div>
            <div className="w-10 h-6 rounded-md bg-gray-300 flex flex-row">
              <Plus className='rotate-45 h-6 w-6 ' /> {/* Adjust the size here */}
              +3
            </div>
          </button>
        </div>
        <div>
          <button className='w-[100%] h-15 rounded-md border-2 inline-flex p-2 hover:bg-gray-100  text-gray-400'>
              <PlusSquare className='h-6 w-6 ' />
              <h2 className='ml-2'>Create a Team</h2>            
          </button>
        </div>
      </div>
      <div>
        <h1>Folder</h1>
      </div>
      <div>
        <h1>footer</h1>
      </div>
    </div>
  )
}

export default Menubar
