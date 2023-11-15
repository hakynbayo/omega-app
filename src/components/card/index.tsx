import React from "react";
import { CardItems, CardItem } from "../../constants/data";
import { FiAlertOctagon } from "react-icons/fi";
import { IoMdLink } from "react-icons/io";

function Navbar() {
  return (
    <div className="flex flex-col gap-8 flex-wrap w-full p-4 my-8 ml-auto">
      
        <div className="flex justify-between mb-12 flex-wrap">
          {CardItems &&
            CardItems.map((n) => (
              <div
                key={n.id}
                className="border shadow:xl w-full sm:w-[25%] gap-4 rounded-xl"
              >
                <div className="flex items-center gap-2 text-gray-500">
                  <img
                    src={n.imageSrc}
                    className="rounded-sm mb-4 w-full"
                    alt="project image"
                  />
                </div>
                <div className='px-4'>
                  <p className="text-[12px] text-card-blue">{n.name}</p>
                  <p className="text-2xl">{n.title}</p>
                </div>
                <div className="flex flex-1 px-4 w-[87%] my-4 items-center justify-between">
                  <p className="text-lg text-gray-300">
                    <span className="block text-sm text-gray-500">
                      {n.text}
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between px-4 mb-4 gap-2 text-gray-500">
                 
                    <div className='flex text-info-blue gap-2'>
                    <FiAlertOctagon size={20} />
                    <p className='text-sm'>View Details</p>
                  </div>
                    <div className='flex text-info-blue gap-2'>
                    <IoMdLink size={20} />
                    <p className='text-sm'>View AI</p>
                  </div>
                  
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-between flex-wrap">
          {CardItem &&
            CardItem.map((n) => (
              <div
                key={n.id}
                className="border shadow:xl w-full sm:w-[25%] gap-4 rounded-xl"
              >
                <div className="flex items-center gap-2 text-gray-500">
                  <img
                    src={n.imageSrc}
                    className="rounded-sm mb-4 w-full"
                    alt="project image"
                  />
                </div>
                <div className='px-4'>
                  <p className="text-[12px] text-card-blue">{n.name}</p>
                  <p className="text-2xl">{n.title}</p>
                </div>
                <div className="flex flex-1 px-4 w-[87%] my-4 items-center justify-between">
                  <p className="text-lg text-gray-300">
                    <span className="block text-sm text-gray-500">
                      {n.text}
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-between px-4 mb-4 gap-2 text-gray-500">
                 
                    <div className='flex text-info-blue gap-2'>
                    <FiAlertOctagon size={20} />
                    <p className='text-sm'>View Details</p>
                  </div>
                    <div className='flex text-info-blue gap-2'>
                    <IoMdLink size={20} />
                    <p className='text-sm'>View AI</p>
                  </div>
                  
                </div>
              </div>
            ))}
        </div>

        
      </div>
  );
}
export default Navbar;
