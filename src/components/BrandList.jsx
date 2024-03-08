import { useState } from 'react';

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
        description: "USA",
        member: "2",
        categories: "Shoes",
        tags: "Sports",
        nextMeeting: "12/12/2022"
    },
    {
        logo: "/paypal.png",
        name: "Nike",
        description: "USA",
        member: "2",
        categories: "Shoes",
        tags: "Sports",
        nextMeeting: "12/12/2022"
    },
    {
        logo: "/paypal.png",
        name: "Nike",
        description: "USA",
        member: "2",
        categories: "Shoes",
        tags: "Sports",
        nextMeeting: "12/12/2022"
    },
    {
        logo: "/paypal.png",
        name: "Nike",
        description: "This is a description of the brand , it is a very long description of the brand and it is very long",
        member: "2",
        categories: "Shoes",
        tags: "Sports",
        nextMeeting: "12/12/2022"
    },
    {
        logo: "/paypal.png",
        name: "Nike",
        description: "USA",
        member: "2",
        categories: "Shoes",
        tags: "Sports",
        nextMeeting: "12/12/2022"
    },
    // Add more brand objects as needed
];

const BrandList = () => {
    const [selectedRows, setSelectedRows] = useState([]);

    const handleCheckboxClick = (index) => {
        setSelectedRows((prevSelectedRows) => {
            const isSelected = prevSelectedRows.includes(index);

            if (isSelected) {
                return prevSelectedRows.filter((selectedIndex) => selectedIndex !== index);
            } else {
                return [...prevSelectedRows, index];
            }
        });
    };

    return (
        <div className="w-full pt-3">
            <table className="table-auto divide-gray-500 border-2 border-black rounded-md w-full">
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
                            <td className="px-4 py-2 border-2 border-gray-200">{brandItem.categories}</td>
                            <td className="px-4 py-2 border-2 border-gray-200">{brandItem.tags}</td>
                            <td className="px-4 py-2 border-2 border-gray-200">{brandItem.nextMeeting}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default BrandList;
