import './App.css'
import Navbar from './components/Navbar2'
import HeroSection from './pages/HeroSection'
import Overview from './pages/Overview'
import Publications from './pages/Publications'
import KeynoteSpeakers from './pages/KeynoteSpeakers'
import Programs from './pages/Programs'
import Footer from './components/Footer/Footer'
import Team from './pages/Team'
import PrevICMS from './pages/PrevICMS'

function App() {

  return (
    <>
      <Navbar />
      <div className='bg-white px-5 7xl:px-0' style={{'maxWidth': '1280px', 'margin': '0 auto'}}>
        <HeroSection />
        <Overview />
        <KeynoteSpeakers />
        <Programs />
        <Team />
        <Publications />
        <PrevICMS />
      </div>
      <Footer />
    </>
    
  )
}

export default App
