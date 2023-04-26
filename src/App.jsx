import {RiMenu3Fill, RiUser3Line, RiAddFill, RiPieChartLine, RiCloseLine, RiSearchLine, RiArrowDownSLine} from 'react-icons/ri'
import Sidebar from "./components/shared/Sidebar"

import { useState } from 'react'

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const toggleOrder = () => {
    setShowOrder(!showOrder)
  }
  return (
   <div className='bg-[#242836] w-full min-h-screen'>
    <Sidebar showMenu={showMenu}/>
    <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-gray-400 text-3xl py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
      <button className='p-2'>
        <RiUser3Line/>
      </button>
      <button className='p-2'>
        <RiAddFill/>
      </button>
      <button onClick={toggleOrder} className='p-2'>
        <RiPieChartLine/>
      </button>
      <button onClick={toggleMenu} className='text-white p-2'>
        {
          !showMenu ? 
          <RiMenu3Fill/> :
          <RiCloseLine/> 
        }
          </button>
    </nav>
    <main className='lg:pl-32 grid grid-cols-1 lg:grid-cols-8 p-4 pb-16'>
      <div className='lg:col-span-6 md:p-8'>
        {/* Header */}
        <header className=''>
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
      <div className='lg:col-span-2 fixed right-0 lg:static top-0 bg-[#1f1d2b] w-full h-full'>
        {/* Orders */}
        <div className='relative text-gray-300 pt-20 p-8'>
          <RiCloseLine className='absolute left-4 top-4 p-3 box-content text-gray-300 rounded-full bg-[#242836] text-xl'/>          {/* </span> */}
          <h1 className='text-2xl my-4'>Orders #23445</h1>
          {/* Chips */}
          <div className='flex items-center gap-4 flex-wrap mb-8'>
            <button className='py-2 px-4 rounded-xl bg-[#eb7b69] text-white'>
              Dine In
            </button>
            <button className='py-2 px-4 rounded-xl text-[#eb7b69] border border-gray-500'>
              To Go
            </button>
            <button className='py-2 px-4 rounded-xl text-[#eb7b69] border border-gray-500'>
              Delivery
            </button>
          </div>
          {/* Cart */}
          <div>
            <div className='grid grid-cols-6 mb-4 px-4'>
              <h5 className='col-span-4'>Item</h5>
              <h5 className=''>Price</h5>
              <h5 className=''>Qty</h5>
            </div>
            {/* Product */}
            <div className='bg-[#242836] p-4 rounded-xl'>
              <div className='grid grid-cols-6'>
                {/* Product Description */}
                <div className='col-span-4 flex items-center gap-3'>
                  <img 
                    src="comida.png" 
                    alt=""
                    className='w-10 h-10'
                   />
                  <div>
                    <h5 className='text-sm'>Spicy seasoned sea...</h5>
                    <p className='text-xs text-gray-500'>$2.29</p>
                  </div>
                </div>
                <div >
                  <span>2</span>
                </div>
                <div >
                  <span>$4.67</span>
                </div>
              </div>
             
            </div>
          </div>
          
        </div>
      </div>
    </main>
   </div>
  )
}

export default App
