import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { Sheet } from './components/ui/sheet'
import Navbar from './components/Layout/HomeComponent/Navbar/Navbar'
import Hero from './components/Layout/HomeComponent/Hero/Hero'
import Strip from './components/Layout/HomeComponent/Strip/Strip'
import Home from './components/Pages/Home/Home'
import AboutUs from './components/Pages/About-Us/AboutUs'
import { BrowserRouter as Router } from 'react-router-dom'
import RoutesComponent from './Routes/RoutesComponents'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      {/* <Home/> */}
      {/* <AboutUs/> */}
      <Router>
        <RoutesComponent/>
      </Router>

    </div>
    </>
  )
}

export default App
