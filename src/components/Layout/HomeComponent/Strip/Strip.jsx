import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button'


const Strip = () => {
  return (
    <div className='bg-[#0E384C] px-4 lg:px-32 py-10'>
        <div className='flex lg:flex-row flex-col items-start lg:items-center justify-between gap-7'>
            <div className='flex lg:flex-row flex-col  gap-7 lg:gap-10'>
                <div className='flex items-center  gap-4'>
                    <div className='text-white'>
                    <FontAwesomeIcon className='text-4xl' icon={faPhoneVolume} />
                    </div>
                    <div>
                        <h1 className='text-white text-xl font-bold'>Need Dental Services ?</h1>
                        <p className='text-white mt-2 text-md'>Call on : (+01) 987 828 745</p>
                    </div>
                </div>
                <div className='w-px h-16 bg-gray-500 hidden lg:block'></div>
                <div className='flex items-center  gap-4'>
                    <div className='text-white'>
                    <FontAwesomeIcon className='text-4xl' icon={faClock} />
                    </div>
                    <div>
                        <h1 className='text-white text-xl font-bold'>Opening Hours</h1>
                        <p className='text-white mt-2 text-md'>Mon to Sat 9:00AM to 9:00PM</p>
                    </div>
                </div>
            </div>
            <div>
            <Button variant="outline" className="bg-white text-lg rounded-full w-64 h-12">Make An Appointment</Button>
            </div>
        </div>
    </div>
  )
}

export default Strip