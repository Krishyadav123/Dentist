import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

const Choose = () => {
    return (
        <div className='bg-[#EFF8FF] px-4 xl:px-24 py-20'>
            <div>
                <div className='flex items-center justify-center gap-2'>
                    <span><FontAwesomeIcon icon={faCircleCheck} className='text-[#0E384C]' /></span>
                    <p className='text-[#0E384C]'>WHY CHOOSE US</p>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <h1 className='text-3xl text-center md:text-5xl mt-3 font-bold text-[#0E384C]'>
                        <span className='text-[#1E84B5]'>Diagnosis of </span> Dental Diseases
                    </h1>
                </div>
                <div className='flex items-center justify-center mt-1'>
                    <p className='mt-5 text-center text-lg text-gray-600'>We are committed to sustainability. eco-friendly initiatives.</p>
                </div>
                <div className='flex flex-col lg:flex-row items-center justify-center mt-10 md:mt-20 gap-10'>
                    <div className='flex flex-col gap-10'>
                        <div className='flex flex-row-reverse md:flex-row items-center justify-center lg:text-end md:gap-3 gap-5'>
                            <div>
                                <h1 className='text-[#0E384C] text-xl font-bold mt-2'>Experienced Doctor</h1>
                                <p className='text-lg text-gray-500 mt-2'>The goal of our clinic is to provide friendly, caring dentistry and the.</p>
                            </div>
                            <div className='w-20'>
                                <img  src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-why-us-1.svg" alt="" />
                            </div>
                        </div>
                        <div className='flex flex-row-reverse md:flex-row items-center justify-center lg:text-end md:gap-3 gap-5'>
                            <div>
                                <h1 className='text-[#0E384C] text-xl font-bold mt-2'>Personalized Care</h1>
                                <p className='text-lg text-gray-500 mt-2'>The goal of our clinic is to provide friendly, caring dentistry and the.</p>
                            </div>
                            <div className='w-20'>
                                <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-why-us-2.svg" alt="" />
                            </div>
                        </div>
                        <div className='flex flex-row-reverse md:flex-row items-center justify-center lg:text-end md:gap-3 gap-5'>
                            <div>
                                <h1 className='text-[#0E384C] text-xl font-bold mt-2'>Flexible Payment Options</h1>
                                <p className='text-lg text-gray-500 mt-2'>The goal of our clinic is to provide friendly, caring dentistry and the.</p>
                            </div>
                            <div className='w-20'>
                                <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-services-4.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='w-full sm:w-[600px]'>
                        <img className='w-full h-full ' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/why-choose-us-img.png" alt="" />
                    </div>
                    <div>
                        <div className='flex flex-col gap-10'>
                            <div className='flex items-center justify-center text-start gap-5 md:gap-3'>
                                <div className='w-20'>
                                    <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-why-us-4.svg" alt="" />
                                </div>
                                <div>
                                    <h1 className='text-[#0E384C] text-xl font-bold mt-2'>Experienced Doctor</h1>
                                    <p className='text-lg text-gray-500 mt-2'>The goal of our clinic is to provide friendly, caring dentistry and the.</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center text-start gap-5 md:gap-3'>
                                <div className='w-20'>
                                    <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-why-us-5.svg" alt="" />
                                </div>
                                <div>
                                    <h1 className='text-[#0E384C] text-xl font-bold mt-2'>Personalized Care</h1>
                                    <p className='text-lg text-gray-500 mt-2'>The goal of our clinic is to provide friendly, caring dentistry and the.</p>
                                </div>
                            </div>
                            <div className='flex items-center justify-center text-start gap-5 md:gap-3'>
                                <div className='w-20'>
                                    <img src="https://demo.awaikenthemes.com/html-preview/dentaire/images/icon-why-us-6.svg" alt="" />
                                </div>
                                <div>
                                    <h1 className='text-[#0E384C] text-xl font-bold mt-2'>Flexible Payment Options</h1>
                                    <p className='text-lg text-gray-500 mt-2'>The goal of our clinic is to provide friendly, caring dentistry and the.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Choose