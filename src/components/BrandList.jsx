import React from 'react';

const brand = [
    {
        name: "Nike",
        description: "USA",
        member: "2",
        catogories: "Shoes",
        tags: "Sports",
        nextMeeting: "12/12/2022"
    },
    {
      name: "Nike",
      description: "USA",
      member: "2",
      catogories: "Shoes",
      tags: "Sports",
      nextMeeting: "12/12/2022"
  },{
    name: "Nike",
    description: "USA",
    member: "2",
    catogories: "Shoes",
    tags: "Sports",
    nextMeeting: "12/12/2022"
},{
  name: "Nike",
  description: "USA",
  member: "2",
  catogories: "Shoes",
  tags: "Sports",
  nextMeeting: "12/12/2022"
},
];

const BrandList = () => {
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
                        <tr key={index}>
                            <td className="px-4 py-2 border-2 border-gray-200">{brandItem.name}</td>
                            <td className="px-4 py-2 border-2 border-gray-200">{brandItem.description}</td>
                            <td className="px-4 py-2 border-2 border-gray-200">{brandItem.member}</td>
                            <td className="px-4 py-2 border-2 border-gray-200">{brandItem.catogories}</td>
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
