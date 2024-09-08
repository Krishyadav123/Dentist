import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook, faTwitter, faLinkedin, faYoutube, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
// import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bg-[#0E384C] px-5 md:px-28 xl:px-28 py-8 md:pt-24'>
            <div className='lg:flex justify-between'>
                <div>
                    <div className='flex items-center gap-4'>
                        <div className='border border-indigo-50 h-20 w-20 bg-[#9CB2E6]'>

                        </div>
                        <div>
                            <p className='text-white text-3xl font-semibold'>Dentist</p>
                        </div>
                    </div>
                    <div className='w-[300px] mt-9'>
                        <p className='text-white text-lg'>The goal our clinic is provide friendly, caring dentistry and highest level of general, cosmetic, and specialist dental treatments.</p>
                    </div>
                    {/* <div className='mt-8 flex gap-4 cursor-pointer'>
                        <FontAwesomeIcon icon={faInstagram} className='text-white text-4xl' />
                        <FontAwesomeIcon icon={faFacebook} className='text-white text-4xl' />
                        <FontAwesomeIcon icon={faTwitter} className='text-white text-4xl' />
                        <FontAwesomeIcon icon={faLinkedin} className='text-white text-4xl' />
                    </div> */}
                </div>
                <div className='flex gap-20 sm:gap-28 mt-7 md:mt-0 flex-wrap'>
                    <div className='mt-7 md:mt-0'>
                        <div>
                            <h1 className='text-white text-2xl font-semibold'>Quick Links</h1>
                        </div>
                        <div className='mt-5'>
                            <ul className='flex flex-col gap-2'>
                                <li className='text-white text-lg cursor-pointer'>Home</li>
                                <li className='text-white text-lg cursor-pointer'>About</li>
                                <li className='text-white text-lg cursor-pointer'>Services</li>
                                <li className='text-white text-lg cursor-pointer'>Book Appoinment</li>
                            </ul>
                        </div>
                    </div>

                    <div className='mt-7 md:mt-0'>
                        <div>
                            <h1 className='text-white text-2xl font-semibold'>Social Media</h1>
                        </div>
                        <div className='mt-5'>
                            <ul className=' flex flex-col gap-2'>
                                <li className='text-white text-lg cursor-pointer'>
                                    <span><FontAwesomeIcon
                                        icon={faYoutube}
                                        className='text-white text-base'
                                    /></span> <span>Youtube</span></li>
                                <li className='text-white text-lg cursor-pointer'>
                                    <span><FontAwesomeIcon
                                        icon={faInstagram}
                                        className='text-white text-base'
                                    /></span> <span>Instagram</span></li>
                                <li className='text-white text-lg cursor-pointer'>
                                    <span><FontAwesomeIcon
                                        icon={faFacebook}
                                        className='text-white text-base'
                                    /></span> <span>Facebook</span></li>
                                <li className='text-white text-lg cursor-pointer'>
                                    <span><FontAwesomeIcon
                                        icon={faTwitter}
                                        className='text-white text-base'
                                    /></span> <span>Twitter</span></li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-white text-2xl font-semibold'>Contact Us</h1>
                        </div>
                        <div className='mt-5'>
                            <ul className='flex flex-col gap-2'>
                                <li className='text-white text-lg cursor-pointer'>+91 123456789</li>
                                <li className='text-white text-lg cursor-pointer'>Contact ;- xyz@gmail.com</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-10'>
                <hr className='text-[#9CB2E6]' />
            </div>
            <div className='mt-5'>
                <p className='text-white text-center'>Copyright © 2022. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer