import React from 'react'
import { Button } from '@/components/ui/button';

const Video = ({ heading, backgroundImage }) => {

    const parelaxStyle = {
        backgroundImage: `url(${backgroundImage})`,
    };

    return (
        <div className='px-4 md:px-5'>
            <div
                className="w-full h-[300px] md:h-[550px] rounded-[30px] md:rounded-[50px] bg-cover bg-center bg-fixed flex items-center justify-center text-white"
                style={parelaxStyle}
            >
                <div className="w-full rounded-[30px] md:rounded-[50px] h-full flex justify-center items-center bg-[#092c3c] bg-opacity-60">
                    <div className='text-center'>
                        <p>{heading}</p>
                        <h1 className='text-3xl px-2 md:px-0 md:text-5xl mt-3 text-white font-bold'>Comprehensive Dental Care <br className='hidden md:block'/> For All Ages</h1>
                        <Button variant="Default" className="rounded-full mt-10 w-48 bg-white h-12 text-base  text-[#1E84B5]">Play Video</Button>
                    </div>
                </div>
            </div>
            <div className='py-10 lg:p-24 flex flex-wrap items-center justify-center gap-5'>
                <div className='w-full md:w-72'>
                    <h1 className='text-3xl md:text-5xl font-bold text-[#0E384C] '>75+</h1>
                    <p className='text-[#0E384C] text-lg md:text-xl font-bold mt-2'>Insurance Covered</p>
                    <hr className='mt-3 md:mt-5' />
                    <p className='mt-4 md:mt-5 text-lg text-gray-600'>Our team loves dental trivia. Did you know that tooth enamel.</p>
                </div>
                <div className='w-full md:w-72'>
                    <h1 className='text-3xl md:text-5xl font-bold text-[#0E384C] '>2K</h1>
                    <p className='text-[#0E384C] text-lg md:text-xl font-bold mt-2'>Realized Projects</p>
                    <hr className='mt-3 md:mt-5' />
                    <p className='mt-4 md:mt-5 text-lg
                     text-gray-600'>Our team loves dental trivia. Did you know that tooth enamel.</p>
                </div>
                <div className='w-full md:w-72'>
                    <h1 className='text-3xl md:text-5xl font-bold text-[#0E384C] '>22K</h1>
                    <p className='text-[#0E384C] text-lg md:text-xl font-bold mt-2'>Happy Customers</p>
                    <hr className='mt-3 md:mt-5' />
                    <p className='mt-4 md:mt-5 text-lg
                     text-gray-600'>Our team loves dental trivia. Did you know that tooth enamel.</p>
                </div>
                <div className='w-full md:w-72'>
                    <h1 className='text-3xl md:text-5xl font-bold text-[#0E384C] '>18+</h1>
                    <p className='text-[#0E384C] text-lg md:text-xl font-bold mt-2'>Experience Doctors</p>
                    <hr className='mt-3 md:mt-5' />
                    <p className='mt-4 md:mt-5 text-lg
                     text-gray-600'>Our team loves dental trivia. Did you know that tooth enamel.</p>
                </div>
            </div>
        </div>
    )
}
export default Video


