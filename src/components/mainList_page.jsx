import BrandList from "./BrandList";
import Navbar from "./Navbar";
import SmallComponent from "./SmallComponent";

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
      
    </div>
  );
}

export default MainListPage;
