const Testimonials = () => {
  return (
    <section className="py-20 bg-spa-cream relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 z-0">
        {/* Darker Solid Geometric Shapes */}
        <div className="absolute top-32 right-16 w-40 h-40 bg-spa-charcoal/15 transform rotate-45"></div>
        
        <div className="absolute bottom-40 left-12 w-56 h-28 bg-spa-earth/25 transform -rotate-12" 
             style={{borderRadius: '60px'}}></div>
        
        <div className="absolute top-64 left-1/3 w-24 h-48 bg-spa-stone/20 transform rotate-12" 
             style={{borderRadius: '50px'}}></div>
        
        <div className="absolute bottom-64 right-1/4 w-32 h-32 bg-spa-charcoal/12 rounded-full"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-spa-charcoal mb-6">
            Client Stories
          </h2>
          <div className="w-16 h-px bg-spa-earth mx-auto"></div>
        </div>

        {/* Testimonial */}
        <div className="mb-20">
          <div className="bg-spa-ivory p-12 max-w-4xl mx-auto">
            <div className="text-center space-y-8">
              <div className="w-16 h-16 mx-auto">
                <svg className="w-full h-full text-spa-earth opacity-60" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              
              <blockquote className="text-xl md:text-2xl font-serif text-spa-charcoal leading-relaxed italic">
                "I've been attending Erin's mat courses for nearly a year. I really enjoy her classes, she's very 
                informative and unlike other classes I've been to, I understand fully the muscles used and benefits 
                of the exercises. Her tailored approach whilst in a group setting is much appreciated."
              </blockquote>
              
              <footer className="space-y-2">
                <div className="w-12 h-px bg-spa-earth mx-auto"></div>
                <p className="text-lg font-serif text-spa-earth">Hannah</p>
                <p className="text-sm text-spa-charcoal/60 tracking-wide">CLIENT REVIEW</p>
              </footer>
            </div>
          </div>
        </div>

        {/* Studio showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-spa-charcoal">
              Our Sanctuary
            </h3>
            
            <p className="text-lg text-spa-charcoal/80 leading-relaxed">
              Free Rein Pilates offers an exclusive spa-like boutique home studio for private practice. 
              Our studio has been designed for personal sessions, tailored specifically to you and your wellness goals.
            </p>
            
            <p className="text-spa-charcoal/80 leading-relaxed">
              Experience the luxury and tranquility of our purpose-built space, equipped with professional 
              Reformer equipment in a serene environment designed to nurture your mind and body.
            </p>
            
            <div className="pt-4">
              <div className="w-12 h-px bg-spa-earth"></div>
            </div>
          </div>
          
          <div className="relative">
            <img
              className="w-full shadow-lg"
              src="/client-content/about/studio.webp"
              alt="Free Rein Pilates Studio"
            />
            <div className="absolute -bottom-4 -left-4 w-full h-full border border-spa-sand -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials