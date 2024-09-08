// SwiperComponent.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';




const AboutStrip = () => {
    return (
        <div className='px-4 xl:px-28 py-14 bg-[#EFF8FF]'>
            <div className='flex flex-col lg:flex-row items-center justify-center'>
                <div className='w-full lg:w-[30%] pr-5'>
                    <h1 className='text-2xl font-bold'>Trusted By The Industry's Leading Insurance Provider</h1>
                </div>
                <div className='w-full lg:w-[70%]'>
                    <AboutStripSlider />
                </div>
            </div>
        </div>
    )
}

export default AboutStrip

export const AboutStripSlider = () => {
    return (
        <div className="w-full cursor-pointer p-2 h-20 flex items-center justify-center lg:p-10">
            <Swiper
                breakpoints={{
                    // When screen width is >= 768px (md)
                    768: {
                      slidesPerView: 3,  // Show 3 slides on medium (md) and larger screens
                    },
                    // When screen width is < 768px (sm)
                    640: {
                      slidesPerView: 2,  // Show 2 slides on small screens
                    },
                    // When screen width is < 640px (extra small)
                    0: {
                      slidesPerView: 2,  // Show 1 slide on very small screens
                    },
                  }}
                spaceBetween={40}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true, // Pauses on hover
                }}
                loop={true}  // Enable infinite loop
                speed={1000} // Smooth sliding animation (1000ms)
                modules={[Autoplay, Pagination, Navigation]}
            >
                <SwiperSlide className="flex items-center justify-center text-xl">
                    <img className='w-[200px]' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/client-logo-3.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-xl">
                    <img className='w-[200px]' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/client-logo-3.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-xl">
                    <img className='w-[200px]' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/client-logo-3.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-xl">
                    <img className='w-[200px]' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/client-logo-3.svg" alt="" />
                </SwiperSlide>
                <SwiperSlide className="flex items-center justify-center text-xl">
                    <img className='w-[200px]' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/client-logo-3.svg" alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};