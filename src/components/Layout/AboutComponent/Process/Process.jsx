import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const Process = () => {
    return (
        <div className='bg-white px-4 xl:px-24 py-20'>
            <div>
                <div className='flex items-center justify-center gap-2'>
                    <span><FontAwesomeIcon icon={faCircleCheck} className='text-[#0E384C]' /></span>
                    <p className='text-[#0E384C]'>DENTAL IMPLANT PROCESS</p>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <h1 className='text-3xl text-center md:text-5xl mt-3 font-bold text-[#0E384C]'>
                        <span className='text-[#1E84B5]'>Guiding </span> you to optimal Teeth
                    </h1>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <p className='mt-5 text-center text-lg text-gray-600'>We are committed to sustainability. eco-friendly initiatives.</p>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-7 mt-10 md:mt-16'>
                    <div className=' w-[300px]'>
                        <div className='h-[300px] w-full'>
                            <img className='rounded-3xl h-full w-full object-cover' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/dental-process-img-1.jpg" alt="" />
                        </div>
                        <div>
                            <p className='mt-5 md:mt-7 text-xl md:text-2xl text-[#0E384C] font-semibold'>Crown Placement</p>
                            <p className='mt-4 text-gray-600 text-lg'>The goal of our clinic is to provide friendly, caring dentistry and the.</p>

                        </div>
                    </div>
                    <div className=' w-[300px]'>
                        <div className='h-[300px] w-full'>
                            <img className='rounded-3xl h-full w-full object-cover' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/dental-process-img-2.jpg" alt="" />
                        </div>
                        <div>
                            <p className='mt-5 md:mt-7 text-xl md:text-2xl text-[#0E384C] font-semibold'>Initial Examination</p>
                            <p className='mt-4 text-gray-600 text-lg'>The goal of our clinic is to provide friendly, caring dentistry and the.</p>
                        </div>
                    </div>
                    <div className=' w-[300px]'>
                        <div className='h-[300px] w-full'>
                            <img className='rounded-3xl h-full w-full object-cover' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/dental-process-img-3.jpg" alt="" />
                        </div>
                        <div>
                            <p className='mt-5 md:mt-7 text-xl md:text-2xl text-[#0E384C] font-semibold'>Tooth Extraction
                            </p>
                            <p className='mt-4 text-gray-600 text-lg'>Highest level of general, cosmetic, and specialist dental treatments.</p>

                        </div>
                    </div>
                    <div className=' w-[300px]'>
                        <div className='h-[300px] w-full'>
                            <img className='rounded-3xl h-full w-full object-cover' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/dental-process-img-4.jpg" alt="" />
                        </div>
                        <div>
                            <p className='mt-5 md:mt-7 text-xl md:text-2xl text-[#0E384C] font-semibold'>Bone Grafting</p>
                            <p className='mt-4 text-gray-600 text-lg'>Dental practices throughout the world.</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process