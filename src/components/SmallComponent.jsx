import { PlusCircle } from 'lucide-react';
import { FileDown } from 'lucide-react';
import { Cross } from 'lucide-react';
import { ChevronDown } from 'lucide-react';
import { ArrowDownAZ } from 'lucide-react';
import { SlidersHorizontal } from 'lucide-react';

const SmallComponent = () => {
  return (
      <div className='flex flex-row h-[7%] w-full p-3 justify-between'>
       <div className="flex flex-row  ">
       <button className="inline-flex mr-2 items-center justify-center px-2 py-2 border-2 rounded-md shadow-sm text-base font-small hover:bg-gray-400 ">
            <Cross className="h-6 w-6 mr-2 rotate-45" />
            All Brands
            <ChevronDown />
          </button>
          <button className="inline-flex mr-2 items-center justify-center px-2 py-2 border-2 rounded-md shadow-sm text-base font-small hover:bg-gray-400 ">
            Desk
            <ChevronDown />
          </button>
          <button className="inline-flex mr-2 items-center justify-center px-2 py-2 border-2 rounded-md shadow-sm text-base font-small hover:bg-gray-400 ">
            Tag
            <ChevronDown />
          </button>
          <button className="inline-flex mr-2 items-center justify-center px-2 py-2 border-1 border-gray-400  rounded-md shadow-sm text-base font-small text-gray-500 hover:bg-gray-600 bg-gray-100 ">
            <ArrowDownAZ className="w-4 h-4 "/>
            Sort
          </button>
          <button className="inline-flex mr-2 items-center justify-center px-2 py-2 border-1 border-gray-400  rounded-md shadow-sm text-base font-small text-gray-500 hover:bg-gray-600 bg-gray-100 ">
            <SlidersHorizontal className="h-4 w-4" />
            Filter
          </button>
        </div>
        <div className="flex flex-row">

        <div className="flex flex-row  px-4">
        <button className="inline-flex mr-2 items-center justify-center px-2 py-2 border-2 rounded-md shadow-sm text-base font-small hover:bg-gray-400 ">
            <PlusCircle className="h-6 w-6 mr-2" />
              Meeting
            </button>
          </div>
          <div className="flex flex-row">
          <button className="inline-flex mr-2 items-center justify-center px-2 py-2 border-2 rounded-md shadow-sm text-base font-small hover:bg-gray-400 ">
              <FileDown className="h-6 w-6 mr-2" />
              Import/Export
            </button>
          </div>
        </div>
    </div>
  )
}

export default SmallComponent
