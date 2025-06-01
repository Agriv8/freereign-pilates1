import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-spa-charcoal pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <img 
              className="h-16 mx-auto md:mx-0 mb-6 opacity-90" 
              src="/client-content/branding/Main Logo-White-RGB.webp" 
              alt="Free Rein Pilates"
            />
            <p className="text-spa-ivory/70 text-sm leading-relaxed">
              Enabling all to access Pilates through community courses, private sessions, 
              and luxury retreats in beautiful Bedfordshire.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-spa-earth font-serif text-lg mb-6">Services</h4>
            <ul className="space-y-3 text-sm text-spa-ivory/70">
              <li><Link to="/services/mat-pilates" className="hover:text-spa-earth transition-colors">Mat Pilates Courses</Link></li>
              <li><Link to="/services/studio-pilates" className="hover:text-spa-earth transition-colors">1-2-1 Studio Sessions</Link></li>
              <li><Link to="/services/sports-therapy" className="hover:text-spa-earth transition-colors">Sports Therapy</Link></li>
              <li><Link to="/services/equestrian-pilates" className="hover:text-spa-earth transition-colors">Equestrian Pilates</Link></li>
              <li><Link to="/services/day-retreats" className="hover:text-spa-earth transition-colors">Day Retreats</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-spa-earth font-serif text-lg mb-6">Contact</h4>
            <div className="space-y-3 text-sm text-spa-ivory/70">
              <p>Erin Pitts</p>
              <p>Shefford, Bedfordshire</p>
              <p>01234 567890</p>
              <p>info@freereinpilates.com</p>
            </div>
            <div className="flex justify-center md:justify-end space-x-4 mt-6">
              <a href="#" className="text-spa-earth hover:text-spa-ivory transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-spa-earth hover:text-spa-ivory transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-spa-stone/20 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-spa-ivory/50 text-sm">
              &copy; 2024 Free Rein Pilates Ltd. All rights reserved.
            </p>
            <p className="text-spa-ivory/40 text-xs italic font-serif">
              "Change happens through movement and movement heals" — Joseph Pilates
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer