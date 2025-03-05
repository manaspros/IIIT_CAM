import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar2'
import HeroSection from './pages/HeroSection'
import Overview from './pages/Overview'
import Publications from './pages/Publications'
// import KeynoteSpeakers from './pages/KeynoteSpeakers'
import Programs from './pages/Program'
import Footer from './components/Footer/Footer'
import Team from './pages/Team'

function App() {

  return (
    <>
      <Navbar />
      <div className='bg-white max-sm:px-5' style={{'maxWidth': '1280px', 'margin': '0 auto'}}>
        <HeroSection />
        <Overview />
        {/* <KeynoteSpeakers /> */}
        <Programs />
        <Team />
        <Publications />
      </div>
      <Footer />
    </>
    
  )
}

export default App
