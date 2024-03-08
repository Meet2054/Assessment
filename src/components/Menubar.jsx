import { ChevronsLeftRight, PlusCircle} from 'lucide-react'
import { useState } from 'react';

// import React from 'react'
import { PenTool, Plus, PlusSquare, File, ChevronDown, UserPlus, HelpCircle, Volume1 } from 'lucide-react';

const Menubar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleProductsDropdown = () => {
    setIsProductsOpen((prevIsOpen) => !prevIsOpen);
  };

  const productButtons = [
    { label: 'Roadmap', onClick: () => console.log('Roadmap clicked') },
    { label: 'Feedback', onClick: () => console.log('Feedback clicked') },
    { label: 'Performance', onClick: () => console.log('Performance clicked') },
    { label: 'Team', onClick: () => console.log('Team clicked') },
    { label: 'Analytics', onClick: () => console.log('Analytics clicked') },
    {  label: 'Add New Button', onClick: () => console.log('Add New Button Clicked') },
  ];
  
  return (
    <div className="flex flex-col min-h-screen m-3 justify-between w-full overflow-x-auto">
    <div className='flex flex-col justify-between'>
      <div className='flex justify-between w-auto'>
        <div className="flex flex-row">
          <div className="w-10 h-10 bg-black rounded-md">
            <h1 className='text-white pl-2 pt-1'>Lg</h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-gray-400 pl-2 text-[12px]">INC</h1>
            <h1 className='text-[15px] pl-2'>InnovateHub</h1>
          </div>
        </div>
        <img src="/Avater.jpg" className=' w-10 h-10 rounded-full' alt="Avatar"/>
      </div>
      <div className='mt-7 flex flex-col border-2 rounded-md'>
        <div className=''>
          <button className='w-[100%] h-15 rounded-md  inline-flex p-2 hover:bg-gray-100 justify-between hover:border-2 '>
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
          <button className='w-[100%] h-15 rounded-md hover:border-2 inline-flex p-2 hover:bg-gray-100 justify-between'>
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
          <button className='w-[100%] h-15 rounded-md hover:border-2 inline-flex p-2 hover:bg-gray-100 justify-between'>
            <div className="flex flex-row">
              <ChevronsLeftRight className='h-6 w-6' />
              <h2 className='text-[14px] '>Development Team</h2>
            </div>
            <div className="w-10 h-6 rounded-md bg-gray-300 flex flex-row">
              <Plus className='rotate-45 h-6 w-6 ' />
              +3
            </div>
          </button>
        </div>
        <div>
          <button className='w-[100%] h-15 rounded-md border-2 inline-flex p-2  hover:bg-gray-100  text-gray-400'>
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
            <button
              className={`w-[100%] h-15 rounded-md inline-flex p-2 justify-between hover:bg-gray-100 text-black ${isProductsOpen ? 'bg-gray-100' : ''}`}
                onClick={toggleProductsDropdown}
              >
                  <div className='flex flex-row'>
                    <File className='h-6 w-6 ' />
                    <h2 className='ml-2'>Products</h2>
                  </div>
                  <div>
                  <ChevronDown className={`h-6 w-6 transform ${isProductsOpen ? 'rotate-180' : 'rotate-0'}`} />
                  </div>
                </button>
                {isProductsOpen && (
              <div className='flex flex-col'>
                {/* Your dropdown content for the "Products" section */}
                {productButtons.map((button, index) => (
                  <button
                    key={index}
                    className='w-[100%] h-15 rounded-md  inline-flex p-2 justify-between hover:bg-gray-100  text-black ml-8'
                    onClick={button.onClick}
                  >
                    {}
                    {button.label}
                  </button>
                ))}
                <div>
                <button className='w-[100%] h-15 rounded-md inline-flex p-2  hover:bg-gray-100  text-gray-400 ml-8'>
                    <PlusCircle className='h-5 w-5 ' />
                    <h2 className='ml-2'>Add New Sub</h2>
                  </button>
                </div>
                {/* Add more dropdown items as needed */}
              </div>
            )}
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
      <footer className='flex justify-center mb-5 flex-col '>
        <button className='w-[95%] h-10 rounded-md p-2 mb-2 inline-flex '>
          <UserPlus className='h-6 w-6 mr-2' />
          <h2>Invite teammates</h2>
        </button>
        <button className='w-[95%] h-10 rounded-md p-2 mb-2 inline-flex '>
          <HelpCircle className='h-6 w-6 mr-2' />
          <h2>Help and first step</h2>
        </button>
        <button className='w-[95%] h-10 bg-gray-300 rounded-md p-2 inline-flex  flex-row justify-between '>
        <div className='flex'>
          <div className="w-6 h-6 bg-white flex flex-row ml-2 pl-2">
            <h2>7</h2>  
          </div>  
            <h2 className='mr-8 ml-3'>days left on trail</h2>
          </div>
          <button className='w-[35%] h-8 rounded-md inline-flex text-white bg-black text-[10px] p-1  pl-3'>
            <h2 className=' text-[15px]' >Add billing</h2>
          </button>
        </button>
      </footer>
  </div>  )
}

export default Menubar