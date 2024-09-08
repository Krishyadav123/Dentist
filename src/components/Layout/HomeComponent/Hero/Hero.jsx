import { Button } from '@/components/ui/button'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-[#EFF8FF] via-[#EFF8FF] to-blue-50'>
        <div className='px-3 xl:px-32'>
            <div className="lg:flex">
                <div className='border border-green-500 lg:w-1/2 lg:pr-16'>
                    <div className='mt-10 lg:mt-36'>
                        <div className='text-4xl lg:text-6xl font-bold text-[#0E384C]'>
                            Experience <span className='text-[#1E84B5]'>Dental Excellence</span> with a Gentle Touch
                        </div>
                        <div className='mt-8'>
                            <p className='text-lg text-gray-500'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal</p>
                        </div>
                        <div className='mt-10'>
                            <Button className="rounded-full w-64 h-12 text-lg">Make An Appointment</Button>
                        </div>
                        <div className='mt-10'>
                            <hr />
                            <p className='mt-5 px-10 lg:px-0 text-center lg:text-start text-lg'>Google Rating 5.0 ⭐⭐⭐⭐⭐ Based On 492 Reviews</p>
                        </div>
                    </div>
                </div>
                <div className='border border-blue-500 lg:w-1/2 h-full flex items-center justify-center'>
                    <div className='w-full h-full flex items-center justify-center '>
                        <img className='h-full object-cover' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/hero-img.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero