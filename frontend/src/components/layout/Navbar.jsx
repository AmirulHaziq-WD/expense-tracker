import React, { useState } from 'react'
import {HiOutlineMenu, HiOutlineX} from "react-icons/hi";
import { LuTrendingUpDown } from 'react-icons/lu';
import SideMenu from './SideMenu';

const Navbar = ({activeMenu}) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    <div className="flex gap-5 bg-white border border-b border-gray-200/50 backdrop-blur-[2px] py-4 px-7 sticky top-0 z-300">
        <button 
        className="block lg:hidden text-black"
        onClick={() => {
            setOpenSideMenu(!openSideMenu);
        }}
        >
            {openSideMenu ? (
                <HiOutlineX className="text-2xl" />
            ):(
                <HiOutlineMenu className="text-2xl" />
            )}
        </button>

        <div className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center text-[30px] text-white bg-primary rounded-full drop-shadow-xl">
                <LuTrendingUpDown size={20}/>
            </div>
            <h2 className="text-lg font-medium text-black">Meon Expense Tracker</h2>
        </div>

        {openSideMenu && (
            <div className="fixed top-[61px] -ml-4 bg-white">
                <SideMenu activeMenu={activeMenu} />
            </div>
        )}
    </div>
  )
}

export default Navbar