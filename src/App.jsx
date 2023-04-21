import {RiMenu3Fill, RiUser3Line, RiAddFill, RiPieChartLine, RiCloseLine, RiSearchLine} from 'react-icons/ri'
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
        <header className=''>
          <div className='flex flex-col gap-4'>
            <div className="">
              <h1 className='text-2xl text-gray-300'>Jeager Resto</h1>
              <p className='text-gray-500'>April 20th 2023</p>
            </div>
            <form className='w-full relative'>
              <RiSearchLine className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-300'/>
              <input type="text" placeholder='Search for food, cofee, etc' className='bg-[#1f1d2b] w-full py-2 pr-4 pl-10 rounded-lg text-gray-300 outline-none' />
            </form>
          </div>

        </header>
     </div>
      <div className='bg-red-100 lg:col-span-2 fixed right-0 lg:static'>Carrito</div>
    </main>
   </div>
  )
}

export default App
