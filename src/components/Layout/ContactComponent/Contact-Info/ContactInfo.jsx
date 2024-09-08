import { faCircleCheck, faClock, faEnvelope, faLocationDot, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@/components/ui/button'

const ContactInfo = () => {
    return (
        <div className='bg-white px-4 xl:px-24 py-20'>
            <div className='flex flex-col xl:flex-row items-center justify-center gap-16'>
                <div className='w-full xl:w-1/2'>
                    <div className='flex items-center gap-2'>
                        <span><FontAwesomeIcon icon={faCircleCheck} className='text-[#0E384C]' /></span>
                        <p className='text-[#0E384C]'>CONTACT INFO</p>
                    </div>
                    <div className=' mt-1'>
                        <h1 className='text-3xl md:text-5xl mt-3 font-bold text-[#0E384C]'>
                            <span className='text-[#1E84B5]'>Connecting </span>  Near & Far
                        </h1>
                        <p className='text-lg text-gray-600 mt-5'>For emergency dental care or to schedule an appointment, contact our office at visit our clinic.
                        </p>
                    </div>
                    <div className='mt-10 flex items-center justify-center flex-wrap gap-10'>
                        <div className='w-full sm:w-[280px] h-[230px] rounded-[30px] p-6 border border-slate-200'>
                            <img className='bg-[#EFF8FF] rounded-full p-3' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-location.svg" alt="" />
                            <h2 className='text-[#0E384C] mt-4 text-xl font-bold'>Visit Us On</h2>
                            <p className='text-lg text-gray-600 mt-5'>24/11 Robert Road , New York , USA</p>
                        </div>
                        <div className='w-full sm:w-[280px] h-[230px] rounded-[30px] p-6 border border-slate-200'>
                            <img className='bg-[#EFF8FF] rounded-full p-3' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-location.svg" alt="" />
                            <h2 className='text-[#0E384C] mt-4 text-xl font-bold'>Visit Us On</h2>
                            <p className='text-lg text-gray-600 mt-5'>24/11 Robert Road , New York , USA</p>
                        </div>
                        <div className='w-full sm:w-[280px] h-[230px] rounded-[30px] p-6 border border-slate-200'>
                            <img className='bg-[#EFF8FF] rounded-full p-3' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-location.svg" alt="" />
                            <h2 className='text-[#0E384C] mt-4 text-xl font-bold'>Visit Us On</h2>
                            <p className='text-lg text-gray-600 mt-5'>24/11 Robert Road , New York , USA</p>
                        </div>
                        <div className='w-full sm:w-[280px] h-[230px] rounded-[30px] p-6 border border-slate-200'>
                            <img className='bg-[#EFF8FF] rounded-full p-3' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-location.svg" alt="" />
                            <h2 className='text-[#0E384C] mt-4 text-xl font-bold'>Visit Us On</h2>
                            <p className='text-lg text-gray-600 mt-5'>24/11 Robert Road , New York , USA</p>
                        </div>
                       
                    </div>

                </div>
                <div className='w-full xl:w-1/2 rounded-[30px] bg-slate-600 h-[380px] md:h-screen'>

                </div>
            </div>
        </div>
    )
}

export default ContactInfo