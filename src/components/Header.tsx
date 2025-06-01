import { Link } from 'react-router-dom'
import { useState } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-spa-ivory shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              className="h-12 w-auto filter brightness-0" 
              src="/client-content/branding/Main Logo-White-RGB.webp" 
              alt="Free Rein Pilates"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/" className="text-spa-text hover:text-spa-accent px-3 py-2 text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              <div className="relative group">
                <button className="text-spa-text hover:text-spa-accent px-3 py-2 text-sm font-medium transition-colors duration-200">
                  Services
                </button>
                {/* Mega Menu */}
                <div className="absolute left-0 mt-2 w-[800px] bg-spa-ivory shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  <div className="grid grid-cols-2 lg:grid-cols-3 gap-1 p-4">
                    <Link to="/services/mat-pilates" className="group/item p-4 hover:bg-spa-cream transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="/client-content/services/mat-pilates/Mat Pilates Courses.webp" 
                          alt="Mat Pilates"
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-semibold text-spa-text group-hover/item:text-spa-accent">Mat Pilates Courses</h4>
                          <p className="text-xs text-spa-text/70 mt-1">Group classes for all fitness levels</p>
                        </div>
                      </div>
                    </Link>
                    
                    <Link to="/services/studio-pilates" className="group/item p-4 hover:bg-spa-cream transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="/client-content/services/studio-pilates/1-2-1- Studio Pilates.webp" 
                          alt="Studio Pilates"
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-semibold text-spa-text group-hover/item:text-spa-accent">1-2-1 Studio Pilates</h4>
                          <p className="text-xs text-spa-text/70 mt-1">Private Reformer sessions</p>
                        </div>
                      </div>
                    </Link>
                    
                    <Link to="/services/sports-therapy" className="group/item p-4 hover:bg-spa-cream transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="/client-content/services/sports-therapy/ Sports Therapy Sessions .webp" 
                          alt="Sports Therapy"
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-semibold text-spa-text group-hover/item:text-spa-accent">Sports Therapy</h4>
                          <p className="text-xs text-spa-text/70 mt-1">Professional treatment & recovery</p>
                        </div>
                      </div>
                    </Link>
                    
                    <Link to="/services/equestrian-pilates" className="group/item p-4 hover:bg-spa-cream transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="/client-content/services/equestrian-pilates/Equestrian Pilates Sessions .webp" 
                          alt="Equestrian Pilates"
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-semibold text-spa-text group-hover/item:text-spa-accent">Equestrian Pilates</h4>
                          <p className="text-xs text-spa-text/70 mt-1">Specialized training for riders</p>
                        </div>
                      </div>
                    </Link>
                    
                    <Link to="/services/day-retreats" className="group/item p-4 hover:bg-spa-cream transition-colors duration-200">
                      <div className="flex items-center space-x-3">
                        <img 
                          src="/client-content/services/day-retreats/Wrest Park Day Retreats.webp" 
                          alt="Day Retreats"
                          className="w-16 h-16 object-cover rounded"
                        />
                        <div>
                          <h4 className="font-semibold text-spa-text group-hover/item:text-spa-accent">Day Retreats</h4>
                          <p className="text-xs text-spa-text/70 mt-1">Luxury wellness experiences</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              <Link to="/about" className="text-spa-text hover:text-spa-accent px-3 py-2 text-sm font-medium transition-colors duration-200">
                About
              </Link>
              <Link to="/contact" className="text-spa-text hover:text-spa-accent px-3 py-2 text-sm font-medium transition-colors duration-200">
                Contact
              </Link>
              <button className="bg-spa-accent text-spa-ivory px-6 py-2 rounded-full hover:bg-spa-text transition-all duration-200">
                Book Now
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-spa-text hover:text-spa-accent p-2"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-spa-ivory border-t">
              <Link to="/" className="text-spa-text hover:text-spa-accent block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link to="/services/mat-pilates" className="text-spa-text hover:text-spa-accent block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Mat Pilates
              </Link>
              <Link to="/services/studio-pilates" className="text-spa-text hover:text-spa-accent block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Studio Pilates
              </Link>
              <Link to="/services/sports-therapy" className="text-spa-text hover:text-spa-accent block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Sports Therapy
              </Link>
              <Link to="/services/equestrian-pilates" className="text-spa-text hover:text-spa-accent block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Equestrian Pilates
              </Link>
              <Link to="/services/day-retreats" className="text-spa-text hover:text-spa-accent block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Day Retreats
              </Link>
              <Link to="/about" className="text-spa-text hover:text-spa-accent block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/contact" className="text-spa-text hover:text-spa-accent block px-3 py-2 text-base font-medium" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
              <button className="w-full bg-spa-accent text-spa-ivory px-6 py-2 rounded-full hover:bg-spa-text transition-all duration-200 mt-4">
                Book Now
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header