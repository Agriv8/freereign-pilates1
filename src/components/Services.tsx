const Services = () => {
  const services = [
    {
      name: 'Mat Pilates Courses',
      description: 'Community Mat work courses designed to improve flexibility, posture and muscular strength. Mixed ability levels welcome.',
      image: '/client-content/Mat Pilates Courses.webp',
      features: ['Mixed ability levels', 'Complete beginners welcome', 'Held in Shefford (SG17)', '6 week blocks']
    },
    {
      name: '1-2-1 Studio Pilates',
      description: 'Exclusive boutique home studio for private Reformer Pilates sessions tailored specifically to your fitness goals.',
      image: '/client-content/1-2-1- Studio Pilates.webp',
      features: ['Private sessions', 'Reformer Pilates', 'Spa-like studio', 'Tailored to your goals']
    },
    {
      name: 'Sports Therapy Sessions',
      description: 'Qualified Sports Therapist offering manual therapy techniques to treat soft tissue injuries and muscular discomfort.',
      image: '/client-content/ Sports Therapy Sessions .webp',
      features: ['LLLT therapy', 'Manual Lymphatic Drainage', 'Sports massage', 'Exercise rehabilitation']
    },
    {
      name: 'Equestrian Pilates',
      description: 'Specialized Pilates programme designed with equestrian movement in mind to improve your seat and partnership with your horse.',
      image: '/client-content/Equestrian Pilates Sessions .webp',
      features: ['Equestrian focused', 'Improves riding position', 'Balance and stability', 'Individual training plans']
    },
    {
      name: 'Day Retreats',
      description: 'Luxury day retreats in beautiful venues including Wrest Park Orangery, designed for relaxation and rejuvenation.',
      image: '/client-content/Wrest Park Day Retreats.webp',
      features: ['Luxury venues', 'Full day experience', 'Goodie bags included', 'Small group settings']
    }
  ]

  return (
    <section id="services" className="py-16 bg-pilates-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-pilates-sage font-semibold tracking-wide uppercase">Our Services</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-pilates-charcoal sm:text-4xl">
            Find Your Perfect Pilates Experience
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            We offer different services in hope to find one that tailors to you and your own Pilates goals.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  src={service.image}
                  alt={service.name}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-pilates-charcoal mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="h-4 w-4 text-pilates-sage mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-pilates-sage text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-200">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Current Events Section */}
        <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
          <h3 className="text-2xl font-bold text-pilates-charcoal mb-6 text-center">Current Events</h3>
          <div className="bg-pilates-blush rounded-lg p-6">
            <h4 className="text-xl font-semibold text-pilates-charcoal mb-2">Wrest Park Morning Retreat</h4>
            <p className="text-gray-600 mb-4">
              Immerse yourself for the day within the beautiful setting of Wrest Park's Orangery. 
              A place of true elegance and grandeur, featured in Bridgerton's 'Aubrey Hall'.
            </p>
            <div className="flex justify-between items-center">
              <div>
                <span className="text-sm text-gray-600">Duration: 4 hours</span>
                <span className="block text-2xl font-bold text-pilates-sage">£115</span>
              </div>
              <button className="bg-pilates-sage text-white px-6 py-2 rounded-md hover:bg-opacity-90 transition-colors duration-200">
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