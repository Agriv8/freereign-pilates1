const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen bg-spa-warm overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 z-0">
        {/* Large Circle */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-spa-sand/20 rounded-full transform translate-x-48"></div>
        
        {/* Medium Circle */}
        <div className="absolute bottom-32 left-0 w-64 h-64 bg-spa-earth/10 rounded-full transform -translate-x-32"></div>
        
        {/* Small Scattered Circles */}
        <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-spa-earth/30 rounded-full"></div>
        <div className="absolute top-1/2 right-1/3 w-6 h-6 bg-spa-sand/40 rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/3 w-4 h-4 bg-spa-stone/50 rounded-full"></div>
        
        {/* Organic Blob Shape */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-spa-cream/30 transform rotate-45" 
             style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}></div>
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-10">
        <img
          className="w-full h-full object-cover opacity-70"
          src="/client-content/general/home page banner.webp"
          alt="Pilates studio"
        />
        <div className="absolute inset-0 bg-spa-warm/50"></div>
        
        {/* Subtle Pattern Overlay */}
        <div className="absolute inset-0 opacity-10" 
             style={{
               backgroundImage: `radial-gradient(circle at 20% 50%, rgba(180, 160, 130, 0.3) 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, rgba(180, 160, 130, 0.2) 0%, transparent 50%),
                                radial-gradient(circle at 40% 80%, rgba(180, 160, 130, 0.2) 0%, transparent 50%)`
             }}>
        </div>
      </div>


      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
        <div className="text-center max-w-2xl">
          {/* Logo */}
          <div className="mb-12">
            <img 
              className="h-32 md:h-40 w-auto mx-auto filter brightness-0" 
              src="/client-content/branding/Main Logo-White-RGB.webp" 
              alt="Free Rein Pilates"
            />
          </div>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-spa-text font-light leading-relaxed mb-12 max-w-lg mx-auto">
            Enabling all to access Pilates through mindful movement, expert guidance, and serene spaces
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="px-8 py-3 border border-spa-accent text-spa-accent hover:bg-spa-accent hover:text-spa-ivory transition-all duration-300 tracking-wider uppercase text-sm"
            >
              Explore Services
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-spa-accent text-spa-ivory hover:bg-spa-text transition-all duration-300 tracking-wider uppercase text-sm"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border border-spa-earth rounded-full flex justify-center">
          <div className="w-1 h-3 bg-spa-earth rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero