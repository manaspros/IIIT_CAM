import { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Navbar2 from './components/Navbar2';
import LoadingAnimation from './components/LoadingAnimation';
import HeroSection from './pages/HeroSection'
import Overview from './pages/Overview'
import Publications from './pages/Publications'
import KeynoteSpeakers from './pages/KeynoteSpeakers'
import Programs from './pages/Programs'
import Footer from './components/Footer/Footer'
import Team from './pages/Team'
import PrevICMS from './pages/PrevICMS'
// Lazy load components for better performance
const Home = lazy(() => import('./pages/Home'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingAnimation />;
  }

  return (
    <BrowserRouter>
      <Navbar2 />
      <Suspense fallback={<LoadingAnimation />}>
        <Routes>
          <Route path="/" element={<>
            <div className='bg-white px-5 7xl:px-0' style={{ 'maxWidth': '1280px', 'margin': '0 auto' }}>
              <HeroSection />
              <Overview />
              <KeynoteSpeakers />
              <Programs />
              <Team />
              <Publications />
              <PrevICMS />
            </div>
            <Footer /></>} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
