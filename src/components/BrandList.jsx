import { useState } from 'react';
import { Archive, ChevronDown, Hash, Plus, Trash } from 'lucide-react';

const PEOPLE_URL = [
    '/person-1.png',
    '/person-2.png',
    '/person-3.png',
    '/person-4.png',
];

const brand = [
    {
        logo: "/paypal.png",
        name: "Nike",
        description: "this is a description of the brand Nike",
        member: "2",
        categories: "Shoes", // corrected typo
        tags: "Sports",
        nextMeeting: "30 min"
    },
    {
        logo: "/paypal.png",
        name: "Nike",
        description: "USA",
        member: "2",
        categories: "Shoes", // corrected typo
        tags: "Sports",
        nextMeeting: "tommorow"
    },{
        logo: "/paypal.png",
        name: "Nike",
        description: "USA",
        member: "2",
        categories: "Shoes", // corrected typo
        tags: "Sports",
        nextMeeting: "1 week"
    },{
        logo: "/paypal.png",
        name: "Nike",
        description: "USA",
        member: "2",
        categories: "Shoes", // corrected typo
        tags: "Sports",
        nextMeeting: "12/12/2022"
    },{
        logo: "/paypal.png",
        name: "Nike",
        description: "USA",
        member: "2",
        categories: "Shoes", // corrected typo
        tags: "Sports",
        nextMeeting: "12/12/2022"
    },{
        logo: "/paypal.png",
        name: "Nike",
        description: "USA",
        member: "2",
        categories: "Shoes", // corrected typo
        tags: "Sports",
        nextMeeting: "12/12/2022"
    },
    // Add more brand objects as needed
];
const BrandList = () => {
    const [selectedRows, setSelectedRows] = useState([]);
    const [isBoxVisible, setIsBoxVisible] = useState(false);

    const handleCheckboxClick = (index) => {
        setSelectedRows((prevSelectedRows) => {
            const isSelected = prevSelectedRows.includes(index);

            if (isSelected) {
                setIsBoxVisible(false); // Hide the box when unchecking
                return prevSelectedRows.filter((selectedIndex) => selectedIndex !== index);
            } else {
                setIsBoxVisible(true); // Show the box when checking
                return [...prevSelectedRows, index];
            }
        });
    };

    const checkedCheckboxCount = selectedRows.length;
    // const selectedBrand = brand[selectedRows[0]]; // Assuming only one brand can be selected

    return (
    <div className=''>

        <div className="w-full pt-3 flex flex-col justify-between">
            <table className="table-auto divide-gray-500 border-2 border-black rounded-md  w-full">
                <thead className="h-[40px] align">
                    <tr>
                        <th className="px-4 py-2 border-2 border-gray-200">Brand</th>
                        <th className="px-4 py-2 border-2 border-gray-200">Description</th>
                        <th className="px-4 py-2 border-2 border-gray-200">Member</th>
                        <th className="px-4 py-2 border-2 border-gray-200">Categories</th>
                        <th className="px-4 py-2 border-2 border-gray-200">Tags</th>
                        <th className="px-4 py-2 border-2 border-gray-200">Next meeting</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-500">
                    {brand.map((brandItem, index) => (
                        <tr key={index} className={selectedRows.includes(index) ? 'bg-gray-100' : ''}>
                            <td className="px-4 py-2 border-2 border-gray-200">
                                <div className="flex items-center">
                                    <input type="checkbox" onClick={() => handleCheckboxClick(index)} className="mr-2" />
                                    <img src={brandItem.logo} alt="Brand.logo" className="w-6 h-6 mr-2" />
                                    <span className="px-4 py-2 border-gray-200">{brandItem.name}</span>
                                </div>
                            </td>
                            <td className="px-4 py-2 border-2 border-gray-200 overflow-hidden whitespace-nowrap">
                                <span className="inline-block max-w-[200px] overflow-hidden overflow-ellipsis">{brandItem.description}</span>
                            </td>                            
                            <td className="px-4 py-2 border-2 border-gray-200 ">
                                <div className="flex ml-[-2]">
                                <span className="flex -space-x-3 overflow-hidden ">
                                    {PEOPLE_URL.map((url, idx) => (
                                        <img src={url} key={idx} alt="person" className="w-6 h-6 ml-[-2]" />
                                        ))}
                                    {/* <span>{brandItem.member}</span> */}
                                </span>    
                                </div>
                            </td>
                            <td className="px-4 py-2 border-2 border-gray-200">
                                <div className='flex flex-row items-center'>
                                    <div className="border-2 rounded-md text-gray-500 bg-red-200 flex flex-row" style={{ width: `${brandItem.categories.length * 14}px` }}>
                                    <Hash className="h-4 w-4" />
                                        {brandItem.categories}
                                    </div>
                                </div>
                            </td>
                            <td className="px-4 py-2 border-2 border-gray-200">
                            <div className='border-2 w-[80px] pl-1 h-auto rounded-xl flex flex-row text-gray-500'>
                                <Hash className="h-4 w-4 " />
                                {brandItem.tags}
                            </div>
                            </td>
                            <td className="px-4 py-2 border-2 border-gray-200">
                                <div className='flex flex-row items-center'>
                                    <div className="border-2 rounded-md text-gray-500 bg-red-200 flex flex-row pl-2" style={{ width: `${brandItem.categories.length * 20}px` }}>
                                        {brandItem.nextMeeting}
                                    </div>
                                </div>
                            </td> 
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <div>
                {isBoxVisible && (
                    <div className="fixed bottom-4 left-0 right-0  p-4">
                        <div className="flex justify-center items-end  border-black">
                            <div className="flex flex-row w-auto h-auto border-2 border-gray-200 rounded-2xl " >
                              <div className="flex flex-row ">
                                  <div className="w-6 h-6 bg-black m-4 p-1 text-white px-2 rounded-md" >
                                  <p>{`${checkedCheckboxCount}`}</p>
                                  </div>
                                  <h2 className="pt-5">selected</h2>
                              </div>
                              <div>
                                  <button className="w-[100px] h-10 rounded-md border-2 border-gray-300 m-2 pr-1 inline-flex hover:bg-gray-200 ">
                                  <Archive className="h-5 w-5 m-2" />
                                  <h2 className="mt-[10px] font-bold">Archive</h2>
                                  </button>
                              </div>
                              <div>
                                  <button className="w-[100px] h-10 rounded-md text-red-700 border-2 border-gray-300 m-2 inline-flex hover:bg-gray-200 ">
                                  <Trash className="h-5 w-5 m-2" />
                                  <h2 className="mt-[10px] font-bold ">Delete</h2>
                                  </button>
                              </div>
                              <div>
                                  <button className="w-[100px] h-10 rounded-md border-2 border-gray-300 m-2 inline-flex hover:bg-gray-200 ">
                                  <h2 className="mt-[10px] ml-4 font-bold ">More</h2>
                                  <ChevronDown className="h-5 w-5 m-2" />
                                  </button>
                              </div>

                              <div>
                                  <Plus className="h-5 w-5 m-2 mt-4 rotate-45 hover:bg-gray-200" />
                              </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
         </div>
        
    </div>    
    );
};

export default BrandList;