const Services = () => {
  const services = [
    {
      name: 'Mat Pilates Courses',
      description: 'Community courses designed to improve flexibility, posture and strength. All levels welcome.',
      image: '/client-content/services/mat-pilates/Mat Pilates Courses.webp',
      details: 'Mixed ability levels • Beginners welcome • Shefford location • 6 week blocks'
    },
    {
      name: '1-2-1 Studio Pilates',
      description: 'Private Reformer sessions in our boutique home studio, tailored to your goals.',
      image: '/client-content/services/studio-pilates/1-2-1- Studio Pilates.webp',
      details: 'Private sessions • Reformer Pilates • Spa-like studio • Personalized programs'
    },
    {
      name: 'Sports Therapy',
      description: 'Professional therapy techniques to treat injuries and muscular discomfort.',
      image: '/client-content/services/sports-therapy/ Sports Therapy Sessions .webp',
      details: 'LLLT therapy • Lymphatic drainage • Sports massage • Rehabilitation'
    },
    {
      name: 'Equestrian Pilates',
      description: 'Specialized programme to improve your riding position and horse partnership.',
      image: '/client-content/services/equestrian-pilates/Equestrian Pilates Sessions .webp',
      details: 'Riding focused • Balance training • Core stability • Individual plans'
    },
    {
      name: 'Day Retreats',
      description: 'Luxury wellness retreats in beautiful venues for complete relaxation.',
      image: '/client-content/services/day-retreats/Wrest Park Day Retreats.webp',
      details: 'Luxury venues • Full day experience • Wellness packages • Small groups'
    }
  ]

  return (
    <section id="services" className="py-20 bg-spa-warm relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Darker Solid Shapes */}
        <div className="absolute top-20 right-8 w-64 h-32 bg-spa-charcoal/18 transform rotate-12" 
             style={{borderRadius: '80px'}}></div>
        
        <div className="absolute top-96 left-4 w-48 h-48 bg-spa-earth/22 transform -rotate-45"></div>
        
        <div className="absolute bottom-32 right-20 w-36 h-72 bg-spa-stone/16 transform rotate-6" 
             style={{borderRadius: '100px'}}></div>
        
        <div className="absolute bottom-80 left-16 w-40 h-40 bg-spa-charcoal/14 rounded-full"></div>
        
        <div className="absolute top-1/2 right-1/3 w-28 h-56 bg-spa-earth/20 transform -rotate-12" 
             style={{borderRadius: '70px'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-spa-charcoal mb-6">
            Our Services
          </h2>
          <div className="w-16 h-px bg-spa-earth mx-auto mb-8"></div>
          <p className="max-w-2xl text-lg text-spa-charcoal/80 mx-auto leading-relaxed">
            We offer different services to find one that tailors to you and your own Pilates goals.
          </p>
        </div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}>
                <div className="relative group">
                  <img
                    className="w-full h-80 object-cover shadow-lg transition-transform duration-500 group-hover:scale-105"
                    src={service.image}
                    alt={service.name}
                  />
                  <div className="absolute inset-0 bg-spa-charcoal/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                <h3 className="text-3xl font-serif text-spa-charcoal">
                  {service.name}
                </h3>
                
                <p className="text-lg text-spa-charcoal/80 leading-relaxed">
                  {service.description}
                </p>
                
                <p className="text-sm text-spa-earth tracking-wide">
                  {service.details}
                </p>
                
                <div className="pt-4">
                  <button className="border border-spa-earth text-spa-earth hover:bg-spa-earth hover:text-spa-ivory transition-all duration-300 px-8 py-3 tracking-wider uppercase text-sm">
                    Learn More
                  </button>
                </div>
                
                <div className="w-12 h-px bg-spa-earth"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Event */}
        <div className="mt-24 bg-spa-cream p-12 text-center">
          <h3 className="text-3xl font-serif text-spa-charcoal mb-8">
            Featured Experience
          </h3>
          
          <div className="max-w-2xl mx-auto space-y-6">
            <h4 className="text-xl text-spa-earth font-semibold">
              Wrest Park Morning Retreat
            </h4>
            
            <p className="text-spa-charcoal/80 leading-relaxed">
              Immerse yourself in the beautiful setting of Wrest Park's Orangery. A place of true elegance 
              and grandeur, featured in Bridgerton's 'Aubrey Hall'.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-6">
              <div className="text-center">
                <div className="text-sm text-spa-earth tracking-wide">Duration</div>
                <div className="text-lg font-serif text-spa-charcoal">4 Hours</div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-spa-sand"></div>
              
              <div className="text-center">
                <div className="text-sm text-spa-earth tracking-wide">Investment</div>
                <div className="text-2xl font-serif text-spa-charcoal">£115</div>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-spa-sand"></div>
              
              <button className="bg-spa-earth text-spa-ivory hover:bg-spa-charcoal transition-all duration-300 px-8 py-3 tracking-wider uppercase text-sm">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services