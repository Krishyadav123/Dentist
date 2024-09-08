import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Testimonials = () => {
    return (
        <div className='bg-white px-4 xl:px-24 py-20'>
            <div>
                <div className='flex items-center justify-center gap-2'>
                    <span><FontAwesomeIcon icon={faCircleCheck} className='text-[#0E384C]' /></span>
                    <p className='text-[#0E384C]'>TESTIMONIALS</p>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <h1 className='text-3xl text-center md:text-5xl mt-3 font-bold text-[#0E384C]'>
                        <span className='text-[#1E84B5]'>Diagnosis of </span> Dental Diseases
                    </h1>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <p className='mt-5 text-center text-lg text-gray-600'>We are committed to sustainability. eco-friendly initiatives.</p>
                </div>
                <div className='flex flex-col xl:flex-row justify-center sm:gap-10 mt-10 md:mt-16'>
                    <div className='w-full flex items-center justify-center xl:w-[45%]'>
                        <div className='w-full sm:w-[500px] h-[500px] relative'>
                            <div className='w-full sm:w-[380px]'>
                                <img className='w-full h-full object-cover rounded-3xl ' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/testimonials-img.jpg" alt="" />
                            </div>
                            <div >
                                <div id='star' className='absolute bottom-0 right-0 left-1/2 transform -translate-x-1/2 sm:left-auto sm:transform-none sm:-translate-x-0 p-3 md:p-7 w-[300px] md:w-[450px] border-[5px] border-white bg-[#1E84B5] rounded-3xl'>
                                    <div className='flex items-center justify-center gap-2 md:gap-5'>
                                        <span className='text-2xl md:text-5xl text-white font-bold'>4.7/5</span>
                                        <p className='text-white text-base md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing!</p>
                                    </div>
                                    <div>
                                        <hr className='md:mt-5 md:mb-5 mt-3 mb-3' />
                                        <p className='text-white text-base md:text-lg'>⭐⭐⭐⭐⭐ For Excellence Services</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full xl:w-[55%]'>
                        <Slider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials



export const Slider = () => {
    return (
        <>
            <Swiper
            navigation={false}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                modules={[Autoplay, Pagination, Navigation]}
                className="w-full h-[500px]" // Tailwind classes for swiper
            >
                <SwiperSlide className="flex justify-center items-center text-lg bg-white px-1">
                    {/* <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/testimonials-img.jpg" alt="Slide 1" className="w-full h-full object-cover" /> */}
                    <div>
                        <div>
                            <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-testimonial-quote.svg" alt="" />
                            <p className='mt-10 text-lg font-semibold text-[#0E384C]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum aut commodi eius sed corporis natus nobis at quam adipisci et voluptas odit nisi odio, modi porro nesciunt? Magni aspernatur non, nisi tempora ducimus enim provident odit labore, placeat vel ab eveniet fuga dolores?</p>
                        </div>
                        <div className='flex items-center gap-4 mt-10'>
                            <div>
                                <img className='rounded-full' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/author-3.jpg" alt="" />
                            </div>
                            <div>
                                <p className=' text-xl font-semibold text-[#0E384C]'>Thomas Lee</p>
                                <p className='text-gray-500'>Teacher</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-lg bg-white px-1">
                    {/* <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/testimonials-img.jpg" alt="Slide 1" className="w-full h-full object-cover" /> */}
                    <div>
                        <div>
                            <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-testimonial-quote.svg" alt="" />
                            <p className='mt-10 text-lg font-semibold text-[#0E384C]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum aut commodi eius sed corporis natus nobis at quam adipisci et voluptas odit nisi odio, modi porro nesciunt? Magni aspernatur non, nisi tempora ducimus enim provident odit labore, placeat vel ab eveniet fuga dolores?</p>
                        </div>
                        <div className='flex items-center gap-4 mt-10'>
                            <div>
                                <img className='rounded-full' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/author-3.jpg" alt="" />
                            </div>
                            <div>
                                <p className=' text-xl font-semibold text-[#0E384C]'>Thomas Lee</p>
                                <p className='text-gray-500'>Teacher</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-lg bg-white px-1">
                    {/* <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/testimonials-img.jpg" alt="Slide 1" className="w-full h-full object-cover" /> */}
                    <div>
                        <div>
                            <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-testimonial-quote.svg" alt="" />
                            <p className='mt-10 text-lg font-semibold text-[#0E384C]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum aut commodi eius sed corporis natus nobis at quam adipisci et voluptas odit nisi odio, modi porro nesciunt? Magni aspernatur non, nisi tempora ducimus enim provident odit labore, placeat vel ab eveniet fuga dolores?</p>
                        </div>
                        <div className='flex items-center gap-4 mt-10'>
                            <div>
                                <img className='rounded-full' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/author-3.jpg" alt="" />
                            </div>
                            <div>
                                <p className=' text-xl font-semibold text-[#0E384C]'>Thomas Lee</p>
                                <p className='text-gray-500'>Teacher</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-lg bg-white px-1">
                    {/* <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/testimonials-img.jpg" alt="Slide 1" className="w-full h-full object-cover" /> */}
                    <div>
                        <div>
                            <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-testimonial-quote.svg" alt="" />
                            <p className='mt-10 text-lg font-semibold text-[#0E384C]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum aut commodi eius sed corporis natus nobis at quam adipisci et voluptas odit nisi odio, modi porro nesciunt? Magni aspernatur non, nisi tempora ducimus enim provident odit labore, placeat vel ab eveniet fuga dolores?</p>
                        </div>
                        <div className='flex items-center gap-4 mt-10'>
                            <div>
                                <img className='rounded-full' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/author-3.jpg" alt="" />
                            </div>
                            <div>
                                <p className=' text-xl font-semibold text-[#0E384C]'>Thomas Lee</p>
                                <p className='text-gray-500'>Teacher</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center text-lg bg-white px-1">
                    {/* <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/testimonials-img.jpg" alt="Slide 1" className="w-full h-full object-cover" /> */}
                    <div>
                        <div>
                            <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-testimonial-quote.svg" alt="" />
                            <p className='mt-10 text-lg font-semibold text-[#0E384C]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum illum aut commodi eius sed corporis natus nobis at quam adipisci et voluptas odit nisi odio, modi porro nesciunt? Magni aspernatur non, nisi tempora ducimus enim provident odit labore, placeat vel ab eveniet fuga dolores?</p>
                        </div>
                        <div className='flex items-center gap-4 mt-10'>
                            <div>
                                <img className='rounded-full' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/author-3.jpg" alt="" />
                            </div>
                            <div>
                                <p className=' text-xl font-semibold text-[#0E384C]'>Thomas Lee</p>
                                <p className='text-gray-500'>Teacher</p>
                            </div>

                        </div>
                    </div>
                </SwiperSlide>
                
                {/* Repeat for other slides */}
            </Swiper>
        </>
    )
}