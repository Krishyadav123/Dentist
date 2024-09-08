import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { Button } from '@/components/ui/button'

const Service = () => {
    return (
        <div className='bg-[#EFF8FF] px-4 xl:px-32 py-20'>
            <div>
                <div className='flex items-center justify-center gap-2'>
                    <span><FontAwesomeIcon icon={faCircleCheck} className='text-[#0E384C]' /></span>
                    <p className='text-[#0E384C]'>OUR SERVICES</p>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <h1 className='text-3xl text-center md:text-5xl mt-3 font-bold text-[#0E384C]'>
                        <span className='text-[#1E84B5]'>Hight Quality</span> Services for You.
                    </h1>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <p className='mt-5 text-lg text-center text-gray-600'>We are committed to sustainability. eco-friendly initiatives.</p>
                </div>
                <div className='mt-20 flex flex-wrap items-center justify-center gap-9'>
                    <div className='w-72 h-[320px] rounded-3xl bg-white  p-7 flex flex-col justify-between'>
                        <div>
                            <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-hero-theeth-2.svg" alt="" />
                            <p className='mt-3 text-2xl text-[#0E384C] font-semibold'>General Dental Care</p>
                            <p className='mt-3 text-gray-600 text-lg'>We are excited to meet you and provide the best dental care for your family.</p>
                        </div>
                        <div className='text-[#1E84B5] text-base font-semibold'>
                            Read More
                        </div>
                    </div>
                    <div className='w-72 h-[320px] rounded-3xl bg-white  p-7 flex flex-col justify-between'>
                        <div>
                            <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-hero-theeth-2.svg" alt="" />
                            <p className='mt-3 text-2xl text-[#0E384C] font-semibold'>General Dental Care</p>
                            <p className='mt-3 text-gray-600 text-lg'>We are excited to meet you and provide the best dental care for your family.</p>
                        </div>
                        <div className='text-[#1E84B5] text-base font-semibold'>
                            Read More
                        </div>
                    </div>
                    <div className='w-72 h-[320px] rounded-3xl bg-white  p-7 flex flex-col justify-between'>
                        <div>
                            <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-hero-theeth-2.svg" alt="" />
                            <p className='mt-3 text-2xl text-[#0E384C] font-semibold'>General Dental Care</p>
                            <p className='mt-3 text-gray-600 text-lg'>We are excited to meet you and provide the best dental care for your family.</p>
                        </div>
                        <div className='text-[#1E84B5] text-base font-semibold'>
                            Read More
                        </div>
                    </div>
                    <div className='w-72 h-[320px] rounded-3xl bg-white  p-7 flex flex-col justify-between'>
                        <div>
                            <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-hero-theeth-2.svg" alt="" />
                            <p className='mt-3 text-2xl text-[#0E384C] font-semibold'>General Dental Care</p>
                            <p className='mt-3 text-gray-600 text-lg'>We are excited to meet you and provide the best dental care for your family.</p>
                        </div>
                        <div className='text-[#1E84B5] text-base font-semibold'>
                            Read More
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center mt-16'>
                    <p className='text-center text-gray-600 text-lg'>We believe in using the latest technology and techniques to <br className='hidden md:block' /> ensure the best outcomes for our patients.</p>
                </div>
                <div className='flex items-center justify-center mt-10'>
                    <Button variant="Default" className="rounded-full w-48 text-white h-12 text-base  bg-[#1E84B5]">View All Service</Button>
                </div>
            </div>
        </div>
    )
}

export default Service