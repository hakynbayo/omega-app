import React from 'react';
import { TbFilterSearch } from "react-icons/tb";

export default function Navbar() {
  return (
    <div className='bg-[#FFFFFF] w-[1131px] h-[96px] border p-5 ml-auto'>
        <div className='flex justify-between'>
            <form className='flex   bg-[#E6F2FF]  border p-3 rounded-full '>
                <input type="text" placeholder="Search for AI" className='bg-transparent outline-none'/> 
                <TbFilterSearch />

            </form>
            <button className='text-[#FFFFFF] bg-[#0B88DF] border p-3 rounded-lg'>Submit AI</button>

        </div>
        <div>

        </div>

    </div>
  )
}
