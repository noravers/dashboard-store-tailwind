import React from 'react'
import { RiHome2Line, RiSettings5Fill, RiLogoutBoxRLine, RiNotification2Line, RiSettings5Line, RiPieChart2Line } from "react-icons/ri";
import { FaCircleNotch, FaChartPie, FaBell } from "react-icons/fa";


function Sidebar(props) {
    const { showMenu } = props
  return (
    <div className={`bg-[#1f1d2b] transitions-all fixed lg:left-0 top-0 w-28 h-full flex flex-col justify-between py-6 rounded-tr-xl
     rounded-br-xl z-50 ${showMenu ? "left-0":"-left-full" } `}>
        <div>
            <ul className='pl-4'>
                <li className='p-4 mb-3'>
                    <h1 className='text-2xl text-gray-300 uppercase font-bold text-center'>Logo</h1>
                </li>
                <li className='bg-[#242836] p-4 rounded-tl-lg rounded-bl-xl'>
                    <a href="" className='bg-[#eb7b69] flex justify-center p-4 rounded-xl text-white'>
                        <RiHome2Line className='text-2xl'/>
                    </a>
                </li>
                <li className='hover:bg-[#242836] group p-4 rounded-tl-lg rounded-bl-xl transition-colors'>
                    <a href="" className='group-hover:bg-[#eb7b69] group-hover:text-white flex justify-center p-4 rounded-xl text-[#eb7b69] transition-colors'>
                        <FaCircleNotch className='text-2xl'/>
                    </a>
                </li>
                <li className='hover:bg-[#242836] group p-4 rounded-tl-lg rounded-bl-xl transitions-colors'>
                    <a href="" className='group-hover:bg-[#eb7b69] group-hover:text-white flex justify-center p-4 rounded-xl text-[#eb7b69] transitions-colors'>
                        <RiPieChart2Line className='text-2xl'/>
                    </a>
                </li>
                <li className='hover:bg-[#242836] group p-4 rounded-tl-lg rounded-bl-xl transitions-colors'>
                    <a href="" className='group-hover:bg-[#eb7b69] group-hover:text-white flex justify-center p-4 rounded-xl text-[#eb7b69] transitions-colors'>
                        <RiNotification2Line className='text-2xl'/>
                    </a>
                </li>
                <li className='hover:bg-[#242836] group p-4 rounded-tl-lg rounded-bl-xl transitions-colors'>
                    <a href="" className='group-hover:bg-[#eb7b69] group-hover:text-white flex justify-center p-4 rounded-xl text-[#eb7b69] transitions-colors'>
                        <RiSettings5Line className='text-2xl'/>
                    </a>
                </li>
            </ul>
        </div>
        <div>
            <ul className='pl-4'>
                <li className='hover:bg-[#242836] group p-4 rounded-tl-lg rounded-bl-xl transitions-colors'>
                    <a href="" className='group-hover:bg-[#eb7b69] group-hover:text-white flex justify-center p-4 rounded-xl text-[#eb7b69] transitions-colors'>
                        <RiLogoutBoxRLine className='text-2xl'/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Sidebar