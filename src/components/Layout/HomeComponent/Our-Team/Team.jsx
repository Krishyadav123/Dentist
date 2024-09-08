import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Team = () => {
  return (
    <div className='bg-[#EFF8FF] px-4 xl:px-24 py-16 xl:py-20'>
            <div>
                <div className='flex items-center justify-center gap-2'>
                    <span><FontAwesomeIcon icon={faCircleCheck} className='text-[#0E384C]' /></span>
                    <p className='text-[#0E384C]'>OUR TEAM</p>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <h1 className='text-3xl text-center md:text-5xl mt-3 font-bold text-[#0E384C]'>
                        <span className='text-[#1E84B5]'>Our Friendly </span> Dentists Team
                    </h1>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <p className='mt-3 md:mt-5 text-center text-lg text-gray-600'>We are committed to sustainability. eco-friendly initiatives.</p>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-7 mt-10 md:mt-16'>
                    <div className='w-[full] sm:w-[300px]'>
                        <div className='h-[350px] w-full'>
                            <img className='h-full w-full rounded-3xl object-cover' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/team-1.jpg" alt="" />
                        </div>
                        <div className='mt-2'>
                            <p className='text-[#0E384C] text-xl font-bold text-center'>Dr.Johan Joe</p>
                            <p className='text-lg mt-1 text-gray-500 text-center'>Lead Dentist</p>
                        </div>
                    </div>
                    <div className='w-[full] sm:w-[300px]'>
                        <div className=' h-[350px] w-full'>
                            <img className='h-full w-full rounded-3xl object-cover' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/team-2.jpg" alt="" />
                        </div>
                        <div className='mt-2'>
                            <p className='text-[#0E384C] text-xl font-bold text-center'>Dr.Johan Joe</p>
                            <p className='text-lg mt-1 text-gray-500 text-center'>Lead Dentist</p>
                        </div>
                    </div>
                    <div className='w-[full] sm:w-[300px]'>
                        <div className=' h-[350px] w-full'>
                            <img className='h-full w-full rounded-3xl object-cover' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/team-3.jpg" alt="" />
                        </div>
                        <div className='mt-2'>
                            <p className='text-[#0E384C] text-xl font-bold text-center'>Dr.Johan Joe</p>
                            <p className='text-lg mt-1 text-gray-500 text-center'>Lead Dentist</p>
                        </div>
                    </div>
                    <div className='w-[full] sm:w-[300px]'>
                        <div className=' h-[350px] w-full'>
                            <img className='h-full w-full rounded-3xl object-cover' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/team-4.jpg" alt="" />
                        </div>
                        <div className='mt-2'>
                            <p className='text-[#0E384C] text-xl font-bold text-center'>Dr.Johan Joe</p>
                            <p className='text-lg mt-1 text-gray-500 text-center'>Lead Dentist</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Team