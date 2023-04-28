import React from 'react'
import {RiSearchLine, RiArrowDownSLine} from 'react-icons/ri'


function Header() {
  return (
    <div className='md:p-8 p-4'>
        {/* Header */}
        <header className='lg:p-8'>
          {/* Title & Search */}
          <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center'>
            <div className="">
              <h1 className='text-2xl text-gray-300'>Jeager Resto</h1>
              <p className='text-gray-500'>April 20th 2023</p>
            </div>
            <form className='text-gray-100' >
              <div className='relative w-full bg-red'>
              <RiSearchLine className='absolute left-3 top-1/2 -translate-y-1/2'/>
              <input 
                type="text" 
                placeholder='Search for food, cofee, etc' 
                className='bg-[#1f1d2b] w-full py-2 pr-4 pl-10 rounded-lg text-gray-300 outline-none' />
            </div>
            </form>
          </div>
          {/* Tabs */}
          <nav className='text-gray-300 flex items-center justify-between border-b mb-6 md:justify-start md:gap-8'>
            <a 
              href="#" 
              className='relative py-2 pr-4 before:bg-[#eb7b69] before:absolute before:w-1/2 before:h-1 before:left-0 before:rounded-full before:-bottom-[1px] text-[#eb7b69]'>Hot dishes</a>
            <a 
              href="#" 
              className=''>Cold Dishes</a>
            <a 
              href="#" 
              className=''>Soup</a>
            <a 
              href="#" 
              className=''>Grill</a>
          </nav>
          <div className='flex items-center justify-between mb-16'>
            <h2 className='text-xl text-gray-300'>Choose Dishes</h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1f1d2b] py-2 px-4 rounded-lg'>
                <RiArrowDownSLine/> Dine in
            </button>
          </div>
          {/* Content */}
          <div className='p-8 grid  grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3'>
          {/* Card   */}
            <div className='bg-[#1f1d2b] p-10 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center'>
              <img 
                className='w-40 h-40  object-cover -mt-20 shadow-2xl rounded-full' 
                src="comida.png" 
                alt="" />
              <p className='text-xl'>Spicy seasoned safefood noodles</p>
              <span className='text-gray-400 mt-2'>$2.29</span>
              <p className='text-gray-600'>20 bowls available</p>
            </div>
            {/* Card   */}
            <div className='bg-[#1f1d2b] p-10 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center'>
              <img 
                className='w-40 h-40  object-cover -mt-20 shadow-2xl rounded-full' 
                src="comida.png" 
                alt="" />
              <p className='text-xl'>Spicy seasoned safefood noodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 bowls available</p>
            </div>
            {/* Card   */}
            <div className='bg-[#1f1d2b] p-10 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center'>
              <img 
                className='w-40 h-40  object-cover -mt-20 shadow-2xl rounded-full' 
                src="comida.png" 
                alt="" />
              <p className='text-xl'>Spicy seasoned safefood noodles</p>
              <span className='text-gray-400 mt-2'>$2.29</span>
              <p className='text-gray-600'>20 bowls available</p>
            </div>
            {/* Card   */}
            <div className='bg-[#1f1d2b] p-10 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center'>
              <img 
                className='w-40 h-40  object-cover -mt-20 shadow-2xl rounded-full' 
                src="comida.png" 
                alt="" />
              <p className='text-xl'>Spicy seasoned safefood noodles</p>
              <span className='text-gray-400 mt-2'>$2.29</span>
              <p className='text-gray-600'>20 bowls available</p>
            </div>
            {/* Card   */}
            <div className='bg-[#1f1d2b] p-10 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center'>
              <img 
                className='w-40 h-40  object-cover -mt-20 shadow-2xl rounded-full' 
                src="comida.png" 
                alt="" />
              <p className='text-xl'>Spicy seasoned safefood noodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 bowls available</p>
            </div>
            {/* Card   */}
            <div className='bg-[#1f1d2b] p-10 rounded-xl flex flex-col items-center gap-2 text-gray-300 text-center'>
              <img 
                className='w-40 h-40  object-cover -mt-20 shadow-2xl rounded-full' 
                src="comida.png" 
                alt="" />
              <p className='text-xl'>Spicy seasoned safefood noodles</p>
              <span className='text-gray-400'>$2.29</span>
              <p className='text-gray-600'>20 bowls available</p>
            </div>
          </div>
        </header>
     </div>
  )
}

export default Header