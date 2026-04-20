import React from 'react'
import { RxDashboard } from "react-icons/rx";
import { FaTasks } from "react-icons/fa";
import { IoAnalytics } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa6";

const Sidebar = () => {
  return (
   <>
 <aside className="text-md font-semibold flex flex-col gap-5 p-5 py-8 sticky w-full  top-10 h-full overflow-y-auto">
 
    <p className='inline-flex items-center gap-2'> <RxDashboard size={20}/>Dashboard</p>
    <p className='inline-flex items-center gap-2'><FaTasks size={20} />Tasks</p>
    <p className='inline-flex items-center gap-2'><IoAnalytics size={20}/>Analytics</p>
    <p className='inline-flex items-center gap-2'><FaTrophy size={20}/>Rewards</p>
    <button className='bg-purple-800 text-white p-2 rounded-sm mt-50'>Logout</button>
   </aside>
   </>
  )
}

export default Sidebar