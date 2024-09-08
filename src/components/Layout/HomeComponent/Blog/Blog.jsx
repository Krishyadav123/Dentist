import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowRight, faCircleCheck } from '@fortawesome/free-solid-svg-icons'


const Blog = () => {
    return (
        <div className='bg-[#EFF8FF] px-4 xl:px-24 py-20'>
            <div>
                <div className='flex items-center justify-center gap-2'>
                    <span><FontAwesomeIcon icon={faCircleCheck} className='text-[#0E384C]' /></span>
                    <p className='text-[#0E384C]'>BLOGS</p>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <h1 className='text-3xl md:text-5xl mt-3 font-bold text-[#0E384C]'>
                        <span className='text-[#1E84B5]'>Check Our </span> Latest Articles
                    </h1>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <p className='mt-5 text-center text-lg text-gray-600'>We are committed to sustainability. eco-friendly initiatives.</p>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-7 mt-10 md:mt-16'>
                    <div className=' w-[400px]'>
                        <div className='h-[250px] w-full'>
                            <img className='rounded-3xl h-full w-full object-cover' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/post-1.jpg" alt="" />
                        </div>
                        <div>
                            <p className='mt-5 md:mt-7 text-xl md:text-2xl text-[#0E384C] font-semibold'>The Importance of Regular Dental Check-Ups</p>
                            <p className='mt-4 text-gray-600 text-lg'>Our waiting room features a variety of plants that help purify the air.</p>
                            <div className='mt-3 text-base text-[#1E84B5] font-bold flex items-center gap-2'><span>Read More</span> <span><FontAwesomeIcon className='text-xl' icon={faCircleArrowRight} /></span></div>
                        </div>
                    </div>
                    <div className=' w-[400px]'>
                        <div className='h-[250px] w-full'>
                            <img className='rounded-3xl h-full w-full object-cover' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/post-2.jpg" alt="" />
                        </div>
                        <div>
                            <p className='mt-5 md:mt-7 text-xl md:text-2xl text-[#0E384C] font-semibold'>Top 5 Benefits of Professional Teeth Whitening</p>
                            <p className='mt-4 text-gray-600 text-lg'>We believe in promoting health and wellness in every aspect of our clinic.</p>
                            <div className='mt-3 text-base text-[#1E84B5] font-bold flex items-center gap-2'><span>Read More</span> <span><FontAwesomeIcon className='text-xl' icon={faCircleArrowRight} /></span></div>
                        </div>
                    </div>
                    <div className=' w-[400px]'>
                        <div className='h-[250px] w-full'>
                            <img className='rounded-3xl h-full w-full object-cover' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/post-3.jpg" alt="" />
                        </div>
                        <div>
                            <p className='mt-5 md:mt-7 text-xl md:text-2xl text-[#0E384C] font-semibold'>Understanding Dental Implants: What You Need to Know</p>
                            <p className='mt-4 text-gray-600 text-lg'>Our clinic donates dental care services to underprivileged families.</p>
                            <div className='mt-3 text-base text-[#1E84B5] font-bold flex items-center gap-2'><span>Read More</span> <span><FontAwesomeIcon className='text-xl' icon={faCircleArrowRight} /></span></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog