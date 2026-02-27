
import './App.css'
import AboutPage from './pages/AboutPage'
import HomePage from './pages/HomePage'
import Events from './pages/Events'
import SingleEvent from './components/SingleEvent'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Contact from './pages/Contact'
import { useEffect, useState } from 'react'
import Offers from './pages/Offers'
import MouseGlow from './components/MouseGlow'
import TechLoader from './components/TechLoader'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-tech-dark text-white overflow-x-hidden sm:overflow-hidden relative font-inter">
      <Navbar />
      {loading && <TechLoader />}
      <MouseGlow />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/events' element={<Events />} />
          <Route path='/events/:eventname' element={<SingleEvent />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/offers' element={<Offers />} />
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App
