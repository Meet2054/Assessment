import BrandList from "./BrandList";
import Navbar from "./Navbar";
import SmallComponent from "./SmallComponent";
import { Archive, ChevronDown, Plus, Trash } from 'lucide-react';

function MainListPage() {
  return (
    <div className="flex flex-col justify-between w-full">
      <div>
        <Navbar />
        <div className="flex">
          <SmallComponent />
        </div>
        <div className="flex flex-col ml-1">
          <BrandList />
          {/* Additional Content Goes Here */}
        </div>
      </div>
      <div className="flex justify-center items-end">
        <div className="flex flex-row w-[55vh] h-[6vh] border-2 border-gray-200 rounded-2xl">
          <div className="flex flex-row">
            <div className="w-6 h-6 bg-black m-4 p-1 text-white px-2 rounded-md">
              3
              {/* Instead of 3 there will be useState var*/}
            </div>
            <h2 className="pt-5">selected</h2>
          </div>
          <div>
            <button className="w-[100px] h-10 rounded-md border-2 border-gray-300 m-2 inline-flex hover:bg-gray-200 ">
              <Archive className="h-5 w-5 m-2" />
              <h2 className="mt-[10px]">Archive</h2>
            </button>
          </div>
          <div>
            <button className="w-[100px] h-10 rounded-md border-2 border-gray-300 m-2 inline-flex hover:bg-gray-200 ">
              <Trash className="h-5 w-5 m-2" />
              <h2 className="mt-[10px]">Delete</h2>
            </button>
          </div>
          <div>
            <button className="w-[100px] h-10 rounded-md border-2 border-gray-300 m-2 inline-flex hover:bg-gray-200 ">
              <h2 className="mt-[10px] ml-4 ">More</h2>
              <ChevronDown className="h-5 w-5 m-2" />
            </button>
          </div>
          <div>
            <Plus className="h-5 w-5 m-2 mt-4 rotate-45 hover:bg-gray-200" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainListPage;
