import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Shop from './pages/Shop'
import MatPilates from './pages/services/MatPilates'
import StudioPilates from './pages/services/StudioPilates'
import SportsTherapy from './pages/services/SportsTherapy'
import EquestrianPilates from './pages/services/EquestrianPilates'
import DayRetreats from './pages/services/DayRetreats'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-spa-warm">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services/mat-pilates" element={<MatPilates />} />
          <Route path="/services/studio-pilates" element={<StudioPilates />} />
          <Route path="/services/sports-therapy" element={<SportsTherapy />} />
          <Route path="/services/equestrian-pilates" element={<EquestrianPilates />} />
          <Route path="/services/day-retreats" element={<DayRetreats />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App