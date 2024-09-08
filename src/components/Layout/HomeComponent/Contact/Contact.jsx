import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faClock, faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button'
const Contact = () => {
    return (
        <div className='bg-white px-4 xl:px-24 py-20'>
            <div className='flex flex-col lg:flex-row items-center justify-center gap-16'>
                <div className='w-full lg:w-1/2 rounded-[30px] bg-slate-600 h-[380px] md:h-[600px]'>

                </div>
                <div className='w-full lg:w-1/2'>
                    <div className='flex items-center gap-2'>
                        <span><FontAwesomeIcon icon={faCircleCheck} className='text-[#0E384C]' /></span>
                        <p className='text-[#0E384C]'>CONTACT NOW</p>
                    </div>
                    <div className=' mt-1'>
                        <h1 className='text-3xl md:text-5xl mt-3 font-bold text-[#0E384C]'>
                            <span className='text-[#1E84B5]'>Get Free </span> Professional Consultation
                        </h1>
                    </div>
                    <div className='flex items-center gap-3 mt-10'>
                        <span><FontAwesomeIcon className='text-3xl text-[#1E84B5]' icon={faLocationDot} /></span>
                        <p className='text-lg text-gray-600'>24/11 Robert Road , New York , USA</p>
                    </div>
                    <div className='flex items-center gap-3 mt-7'>
                        <span><FontAwesomeIcon className='text-3xl text-[#1E84B5]' icon={faPhoneVolume} /></span>
                        <p className='text-lg text-gray-600'>+(123) 698-5245</p>
                    </div>
                    <div className='flex items-center gap-3 mt-7'>
                        <span><FontAwesomeIcon className='text-3xl text-[#1E84B5]' icon={faEnvelope} /></span>
                        <p className='text-lg text-gray-600'>info@domain.com</p>
                    </div>
                    <div className='flex items-center gap-3 mt-7'>
                        <span><FontAwesomeIcon className='text-3xl text-[#1E84B5]' icon={faClock} /></span>
                        <p className='text-lg text-gray-600'>Mon to Sat 9:00AM to 9:00PM</p>
                    </div>
                    <div className='mt-10'>
                    <Button variant="Default" className="rounded-full w-56 text-white h-12 text-base  bg-[#1E84B5]">Book An Appoinment</Button>
                </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact