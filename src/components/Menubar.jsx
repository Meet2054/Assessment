import { Image } from 'lucide-react'
import React from 'react'
import { PenTool, PlusSquare, File, ChevronDown ,Plus,UserPlus ,HelpCircle } from 'lucide-react';
import { Braces } from 'lucide-react';
import { Volume1 } from 'lucide-react';

const Menubar = () => {
  return (
    <>

<div className="flex flex-col min-h-screen m-3 justify-between">
    <div className='flex flex-col justify-between'>
      <div className='flex '>
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
              <Plus className='rotate-45 h-6 w-6 ' />
              +1
            </div>
          </button>
        </div>
        <div>
          <button className='w-[100%] h-15 rounded-md border-2 inline-flex p-2 hover:bg-gray-100 justify-between'>
            <div className="flex flex-row">
              <Volume1 className='h-6 w-6' />
              <h2 className='ml-2 '>Marketing Team</h2>
            </div>
            <div className="w-10 h-6 rounded-md bg-gray-300 flex flex-row">
              <Plus className='rotate-45 h-6 w-6 ' />
              +2
            </div>
          </button>
        </div> 
       <div>
          <button className='w-[100%] h-15 rounded-md border-2 inline-flex p-2 hover:bg-gray-100 justify-between'>
            <div className="flex flex-row">
              <Braces className='h-6 w-6' />
              <h2 className='text-[14px] '>Development Team</h2>
            </div>
            <div className="w-10 h-6 rounded-md bg-gray-300 flex flex-row">
              <Plus className='rotate-45 h-6 w-6 ' />
              +3
            </div>
          </button>
        </div>
        <div>
          <button className='w-[100%] h-15 rounded-md border-2 inline-flex p-2 justify-between hover:bg-gray-100  text-gray-400'>
              <PlusSquare className='h-6 w-6 ' />
              <h2 className='ml-2'>Create a Team</h2>            
          </button>
        </div>
      </div>
      <div className='pt-5 flex flex-col justify-between '>
        <div className='flex flex-col'>
          <div className=' flex text-gray-400  justify-between'>
            <h1>FOLDERS </h1>
            <Plus className='h-6 w-6 ml-2 text-gray-400' />
          </div>
          <div className='flex flex-col'>
            <button className='w-[100%] h-15 rounded-md  inline-flex p-2 justify-between hover:bg-gray-100  text-black'>
              <div className='flex flex-row'>
                <File className='h-6 w-6 ' />
                <h2 className='ml-2'>Products</h2>            
              </div>
              <div>
                <ChevronDown className='h-6 w-6' />
              </div>
            </button>
            <button className='w-[100%] h-15 rounded-md  inline-flex p-2 justify-between hover:bg-gray-100  text-black'>
              <div className='flex flex-row'>
                <File className='h-6 w-6 ' />
                <h2 className='ml-2'>Sales</h2>            
              </div>
              <div>
                <ChevronDown className='h-6 w-6' />
              </div>
            </button>
            <button className='w-[100%] h-15 rounded-md  inline-flex p-2 justify-between hover:bg-gray-100  text-black'>
              <div className='flex flex-row'>
                <File className='h-6 w-6 ' />
                <h2 className='ml-2'>Design</h2>            
              </div>
              <div>
                <ChevronDown className='h-6 w-6' />
              </div>
            </button>
            <button className='w-[100%] h-15 rounded-md  inline-flex p-2 justify-between hover:bg-gray-100  text-black'>
              <div className='flex flex-row'>
                <File className='h-6 w-6 ' />
                <h2 className='ml-2'>Office</h2>            
              </div>
              <div>
                <ChevronDown className='h-6 w-6' />
              </div>
            </button>
            <button className='w-[100%] h-15 rounded-md  inline-flex p-2 justify-between hover:bg-gray-100  text-black'>
              <div className='flex flex-row'>
                <File className='h-6 w-6 ' />
                <h2 className='ml-2'>Legal</h2>            
              </div>
              <div>
                <ChevronDown className='h-6 w-6' />
              </div>
            </button>
          </div>
        </div>
    </div>
      </div>
        <footer className='flex justify-center mb-5  flex-col '>
          <button   className='w-[95%] h-10 rounded-md p-2 mb-2 inline-flex '>
          <UserPlus className='h-6 w-6 mr-2' />
          <h2>Invite teammates</h2>
          </button>
          <button   className='w-[95%] h-10 rounded-md p-2 mb-2 inline-flex '>
          <HelpCircle className='h-6 w-6 mr-2' />
          <h2 >Help and first step</h2>
          </button>
          <button   className='w-[95%] h-10 bg-gray-300 rounded-md p-2 inline-flex  '>
            <h2 className='mr-1'>days left on trail</h2>
            <button   className='w-[35%] h-8   rounded-md  inline-flex  text-white bg-black text-[10px] pl-2 '>
              <h2 className='mt-1' >Add billing</h2>
          </button>
          </button>
        </footer>
    </div>
    </>
  )
}

export default Menubar
