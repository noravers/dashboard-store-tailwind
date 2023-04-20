import {RiMenu3Fill, RiUser3Line, RiAddFill, RiPieChartLine} from 'react-icons/ri'
import Sidebar from "./components/shared/Sidebar"

function App() {
  return (
   <div className='bg-[#242836] w-full min-h-screen'>
    <Sidebar/>
    <nav className="bg-[#1f1d2b] lg:hidden fixed w-full bottom-0 left-0 text-gray-400 text-3xl py-4 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
      <button>
        <RiUser3Line/>
      </button>
      <button>
        <RiAddFill/>
      </button>
      <button>
        <RiPieChartLine/>
      </button>
      <button className='text-white'>
        <RiMenu3Fill/>
      </button>
    </nav>
   </div>
  )
}

export default App
