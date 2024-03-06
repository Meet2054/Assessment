import BrandList from "./BrandList";
import Navbar from "./Navbar";
import SmallComponent from "./SmallComponent";

function MainListPage() {
  return (
    <div>
      <div className='flex flex-col w-[173vh] h-[5%] m-1 '>
        <Navbar />
      </div>
      <div className='flex'>
        <SmallComponent/>
      </div>
      <div className='flex flex-col'>
        <BrandList/>
        {/* Additional Content Goes Here */}
      </div>
    </div>
  );
}

export default MainListPage;
