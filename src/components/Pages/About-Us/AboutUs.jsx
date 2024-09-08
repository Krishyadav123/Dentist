import About from '@/components/Layout/HomeComponent/About/About'
import Navbar from '@/components/Layout/HomeComponent/Navbar/Navbar'
import Title from '@/components/Title/Title'
import React from 'react'
import AboutStrip from '@/components/Layout/AboutComponent/About-Strip/AboutStrip'
import Work from '@/components/Layout/HomeComponent/How-It-Work/Work'
import Choose from '@/components/Layout/HomeComponent/Choose-Us/Choose'
import Process from '@/components/Layout/AboutComponent/Process/Process'
import Experience from '@/components/Layout/AboutComponent/Experties-Experience/Experience'
import Video from '@/components/Layout/HomeComponent/VideoSection/Video'
import Team from '@/components/Layout/HomeComponent/Our-Team/Team'
import Testimonials from '@/components/Layout/HomeComponent/Testimonials/Testimonials'
import Footer from '@/components/Layout/HomeComponent/Footer/Footer'

const AboutUs = () => {
  return (
    <div>
        <Navbar/>
        <Title title={"About Us"}/>
        <About/>
        <AboutStrip/>
        <Work/>
        <Choose/>
        <Process/>
        <Experience/>
        <Video heading="VISIT CLINIC" backgroundImage="https://demo.awaikenthemes.com/html-preview/dentaire/images/visit-clinic-bg.jpg" />
        <Team/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default AboutUs