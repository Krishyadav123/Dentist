import ContactField from '@/components/Layout/ContactComponent/Contact-Field/ContactField'
import ContactInfo from '@/components/Layout/ContactComponent/Contact-Info/ContactInfo'
import Footer from '@/components/Layout/HomeComponent/Footer/Footer'
import Navbar from '@/components/Layout/HomeComponent/Navbar/Navbar'
import Title from '@/components/Title/Title'
import React from 'react'

const ContactUs = () => {
  return (
    <div>
        <Navbar/>
        <Title title={"Contact Us"}/>
        <ContactInfo/>
        <ContactField/>
        <Footer/>
    </div>
  )
}

export default ContactUs