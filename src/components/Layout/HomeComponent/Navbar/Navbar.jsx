import React from 'react'
import { Button } from '@/components/ui/button'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-[#EFF8FF]'>
        <div className='px-4 md:px-12 lg:px-32 border h-24 flex items-center justify-between shadow-md rounded-md'>
            <div><h1 className='text-3xl font-bold'>Dentist</h1></div>
            <div>
                <ul className='flex gap-5'>
                    <Link to={"/"} className='hidden md:block text-lg font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Home</Link>
                    <Link to={"/about"} className='hidden md:block text-lg font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >About</Link> 
                    <Link to={"/services"} className='hidden md:block text-lg font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Services</Link>
                    <li className='hidden md:block text-lg font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Blog</li>
                    <Link to={"/contact"} className='hidden md:block text-lg font-medium text-gray-700 hover:border-gray-800 py-1 px-3 rounded-md hover:bg-gray-100 duration-200 cursor-pointer' >Contact</Link>
                </ul>
            </div>
            <div className='hidden md:block'><Button>Book your appointment</Button></div>
            <div className='md:hidden'>
                <Sidebar/>
            </div>
        </div>
    </div>
  )
}

export default Navbar