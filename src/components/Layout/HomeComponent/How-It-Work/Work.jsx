import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const Work = () => {
    return (
        <div className='px-4 py-14 xl:px-32 lg:py-24'>
            <div className='flex flex-col lg:flex-row justify-center gap-7 md:gap-14'>
                <div className='w-full lg:w-1/2 '>
                    <img className='w-full h-full rounded-[50px]' src="https://demo.awaikenthemes.com/html-preview/dentaire/images/how-it-work-img.jpg" alt="" />
                </div>
                <div className='w-full lg:w-1/2 pt-0 md:pt-14'>
                    <div className='flex items-center gap-2'>
                        <span><FontAwesomeIcon icon={faCircleCheck} className='text-[#0E384C]' /></span>
                        <p className='text-[#0E384C]'>HOW IT WORK</p>
                    </div>
                    <div className='flex items-center lg:justify-center mt-1'>
                        <h1 className='text-3xl md:text-5xl mt-3 font-bold text-[#0E384C]'>
                            <span className='text-[#1E84B5]'>What We Do</span> for Your Teeth
                        </h1>
                    </div>
                    <div className='flex items-center justify-center mt-1'>
                        <p className='mt-5 text-lg text-gray-600'>We are committed to sustainability. Our clinic practices eco-friendly initiatives like digital records to reduce paper waste and energy-efficient equipment.</p>
                    </div>
                    <div>
                        <Faq />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work




export const Faq = () => {
    return (
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">


                <AccordionTrigger>Book An Appointment</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>

            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>How To Contact?
                </AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>Expert Care</AccordionTrigger>
                <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>

    )
}