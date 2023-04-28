import {RiMenu3Fill, RiUser3Line, RiAddFill, RiPieChartLine, RiCloseLine, RiSearchLine, RiArrowDownSLine, RiDeleteBin6Line} from 'react-icons/ri'
import Sidebar from "./components/shared/Sidebar"

import { useState } from 'react'
import Card from './components/shared/Card'
import Header from './components/shared/Header'

function App() {
  const [showMenu, setShowMenu] = useState(false)
  const [showOrder, setShowOrder] = useState(false)

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }
  const toggleOrder = () => {
    setShowOrder(!showOrder)
    setShowMenu(false)
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
    <main className='lg:pl-32 pb-16 lg:pr-96'>
      <Header/>      
      {/* Condition Orders */}
      <Card toggleOrder={toggleOrder} showOrder={showOrder}/>
      
    </main>
   </div>
  )
}

export default App
