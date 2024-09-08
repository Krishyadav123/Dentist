import About from '@/components/Layout/HomeComponent/About/About'
import Blog from '@/components/Layout/HomeComponent/Blog/Blog'
import Choose from '@/components/Layout/HomeComponent/Choose-Us/Choose'
import Contact from '@/components/Layout/HomeComponent/Contact/Contact'
import Footer from '@/components/Layout/HomeComponent/Footer/Footer'
import Hero from '@/components/Layout/HomeComponent/Hero/Hero'
import Work from '@/components/Layout/HomeComponent/How-It-Work/Work'
import Navbar from '@/components/Layout/HomeComponent/Navbar/Navbar'
import Team from '@/components/Layout/HomeComponent/Our-Team/Team'
import Service from '@/components/Layout/HomeComponent/Service/Service'
import Strip from '@/components/Layout/HomeComponent/Strip/Strip'
import Testimonials from '@/components/Layout/HomeComponent/Testimonials/Testimonials'
import Video from '@/components/Layout/HomeComponent/VideoSection/Video'
import Title from '@/components/Title/Title'
import React from 'react'

const Home = () => {
  return (
    <div>
        <Navbar/>
        {/* <Title title={"About Us"}/> */}
        <Hero/>
        <Strip/>
        <About/>
        <Service/>
        <Video heading="VISIT CLINIC" backgroundImage="https://demo.awaikenthemes.com/html-preview/dentaire/images/visit-clinic-bg.jpg"/>
        <Choose/>
        <Work/>
        <Team/>
        <Testimonials/>
        <Blog/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home