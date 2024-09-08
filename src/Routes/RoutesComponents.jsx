
// import AboutUs from '@/components/Pages/About-Us/AboutUs';
// import AboutUs from '@/components/Pages/About-Us/AboutUs';
// import Services from '@/components/Pages/Services/Services';
import ContactUs from '@/components/Pages/Contact-Us/ContactUs';
import React, { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


const Home = lazy(() => import('../components/Pages/Home/Home'));
const AboutUs = lazy(() => import('../components/Pages/About-Us/AboutUs'));
const Services = lazy(() => import('../components/Pages/Services/Services'));



const RoutesComponent = () => {
  return (
    <>
      {/* <Scrollup /> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<AboutUs/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/contact' element={<ContactUs/>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default RoutesComponent;
