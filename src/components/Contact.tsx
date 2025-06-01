const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-spa-charcoal relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Organic Blob Shapes - Much Bigger */}
        <div className="absolute top-24 left-16 w-48 h-48 bg-spa-earth/20 transform rotate-45"
             style={{borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%'}}></div>
        <div className="absolute top-40 right-20 w-40 h-64 bg-spa-sand/15 transform -rotate-12" 
             style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}></div>
        <div className="absolute bottom-40 left-32 w-56 h-56 bg-spa-stone/15"
             style={{borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%'}}></div>
        <div className="absolute bottom-24 right-40 w-64 h-32 bg-spa-earth/10 transform rotate-12" 
             style={{borderRadius: '72% 28% 48% 48% / 28% 28% 72% 72%'}}></div>
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-5"
             style={{
               backgroundImage: `linear-gradient(rgba(180, 160, 130, 0.1) 1px, transparent 1px), 
                                linear-gradient(90deg, rgba(180, 160, 130, 0.1) 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-spa-ivory mb-6">
            Get In Touch
          </h2>
          <div className="w-16 h-px bg-spa-earth mx-auto mb-8"></div>
          <p className="text-lg text-spa-ivory/80 max-w-2xl mx-auto leading-relaxed">
            Contact Erin today to discuss your goals and find the perfect service for you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-serif text-spa-ivory mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-spa-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-spa-ivory font-medium">Erin Pitts</p>
                  <p className="text-spa-ivory/70">01234 567890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-spa-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-spa-ivory font-medium">Email</p>
                  <p className="text-spa-ivory/70">info@freereinpilates.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="h-5 w-5 text-spa-earth" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-spa-ivory font-medium">Location</p>
                  <p className="text-spa-ivory/70">Shefford, Bedfordshire (SG17)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-lg font-serif text-spa-ivory mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-spa-earth hover:text-spa-ivory transition-colors duration-200">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.987-5.367 11.987-11.988C24.004 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.553 3.62 13.116 3.62 11.5s.578-3.053 1.506-4.191c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.928 1.138 1.506 2.575 1.506 4.191s-.578 3.053-1.506 4.191c-.875.807-2.026 1.297-3.323 1.297z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-spa-earth hover:text-spa-ivory transition-colors duration-200">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-spa-ivory p-8">
            <h3 className="text-2xl font-serif text-spa-charcoal mb-6">Send us a message</h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-spa-charcoal/80 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="w-full border border-spa-sand rounded-none p-3 focus:ring-spa-earth focus:border-spa-earth bg-spa-cream"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-spa-charcoal/80 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full border border-spa-sand rounded-none p-3 focus:ring-spa-earth focus:border-spa-earth bg-spa-cream"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-spa-charcoal/80 mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="w-full border border-spa-sand rounded-none p-3 focus:ring-spa-earth focus:border-spa-earth bg-spa-cream"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-spa-charcoal/80 mb-2">Message</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="w-full border border-spa-sand rounded-none p-3 focus:ring-spa-earth focus:border-spa-earth bg-spa-cream"
                ></textarea>
              </div>
              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-spa-earth text-spa-ivory hover:bg-spa-charcoal transition-all duration-300 py-3 px-4 tracking-wider uppercase text-sm"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-16 border-t border-spa-earth/30">
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
                <li><a href="#services" className="hover:text-spa-earth transition-colors">Mat Pilates Courses</a></li>
                <li><a href="#services" className="hover:text-spa-earth transition-colors">1-2-1 Studio Sessions</a></li>
                <li><a href="#services" className="hover:text-spa-earth transition-colors">Sports Therapy</a></li>
                <li><a href="#services" className="hover:text-spa-earth transition-colors">Equestrian Pilates</a></li>
                <li><a href="#services" className="hover:text-spa-earth transition-colors">Day Retreats</a></li>
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
        </footer>
      </div>
    </section>
  )
}

export default Contact