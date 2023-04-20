import React from 'react'
import { RiHome2Line } from "react-icons/ri";

function Sidebar() {
  return (
    <div className='bg-[#1f1d2b] fixed left-0 top-0 w-28 h-full'>
        <h1 className='text-2xl text-gray-300 uppercase font-bold text-center'>Logo</h1>
        <ul className='pl-4'>
            <li className='bg-[#242836] p-4 rounded-tl-lg rounded-bl-xl'>
                <a href="" className='bg-[#eb7b69] flex justify-center p-4 rounded-xl text-white'>
                    <RiHome2Line className='text-2xl'/>
                </a>
            </li>
            <li className='p-4 rounded-tl-lg rounded-bl-xl'>
                <a href="" className='flex justify-center p-4 rounded-xl text-[#eb7b69]'>
                    <RiHome2Line className='text-2xl'/>
                </a>
            </li>
            <li className='p-4 rounded-tl-lg rounded-bl-xl'>
                <a href="" className='flex justify-center p-4 rounded-xl text-[#eb7b69]'>
                    <RiHome2Line className='text-2xl'/>
                </a>
            </li>
            <li className='p-4 rounded-tl-lg rounded-bl-xl'>
                <a href="" className='flex justify-center p-4 rounded-xl text-[#eb7b69]'>
                    <RiHome2Line className='text-2xl'/>
                </a>
            </li>
            <li className='p-4 rounded-tl-lg rounded-bl-xl'>
                <a href="" className='flex justify-center p-4 rounded-xl text-[#eb7b69]'>
                    <RiHome2Line className='text-2xl'/>
                </a>
            </li>
            <li className='p-4 rounded-tl-lg rounded-bl-xl'>
                <a href="" className='flex justify-center p-4 rounded-xl text-[#eb7b69]'>
                    <RiHome2Line className='text-2xl'/>
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Sidebar