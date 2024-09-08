import Choose from '@/components/Layout/HomeComponent/Choose-Us/Choose'
import Footer from '@/components/Layout/HomeComponent/Footer/Footer'
import Navbar from '@/components/Layout/HomeComponent/Navbar/Navbar'
import Testimonials from '@/components/Layout/HomeComponent/Testimonials/Testimonials'
import ServiceCard from '@/components/Layout/ServiceComponent/Service-Card/ServiceCard'
import Title from '@/components/Title/Title'
import React from 'react'

const Services = () => {
  return (
    <div>
        <Navbar/>
        <Title title={"Our Services"}/>
        <ServiceCard/>
        <Choose/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Services