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
    <main className='lg:pl-28 grid grid-cols-1 lg:grid-cols-8'>
      <div className='lg:col-span-6 p-2'>
        {/* Header */}
        <header className=''>
          {/* Title & Search */}
          <div className='flex flex-col gap-4 md:flex-row md:justify-between md:items-center'>
            <div className="">
              <h1 className='text-2xl text-gray-300'>Jeager Resto</h1>
              <p className='text-gray-500'>April 20th 2023</p>
            </div>
            <form>
              <div className='relative w-full'></div>
              <RiSearchLine className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300'/>
              <input 
                type="text" 
                placeholder='Search for food, cofee, etc' 
                className='bg-[#1f1d2b] w-full py-2 pr-4 pl-10 rounded-lg text-gray-300 outline-none' />
            </form>
          </div>
          {/* Tabs */}
          <nav className='text-gray-300 flex items-center justify-between border-b mb-7 px-4'>
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
          <div className='flex items-center justify-between'>
            <h2 className='text-xl text-gray-300'>Choose Dishes</h2>
            <button className='flex items-center gap-4 text-gray-300 bg-[#1f1d2b] py-2 px-4 rounded-lg'>
                <RiArrowDownSLine/> Dine in
            </button>
          </div>
          

        </header>
     </div>
      <div className='bg-red-100 lg:col-span-2 fixed right-0 lg:static'>Carrito</div>
    </main>
   </div>
  )
}

export default App
