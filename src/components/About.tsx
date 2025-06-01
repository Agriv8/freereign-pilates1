const About = () => {
  return (
    <section id="about" className="py-20 bg-spa-cream relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Organic Shapes - Much Bigger */}
        <div className="absolute top-16 left-0 w-80 h-80 bg-spa-sand/15 transform -translate-x-40 rotate-12" 
             style={{borderRadius: '50% 60% 40% 50% / 60% 50% 60% 40%'}}></div>
        
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-spa-earth/10 transform translate-x-48 -rotate-12" 
             style={{borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%'}}></div>
        
        {/* Additional Darker Shapes - Much Bigger */}
        <div className="absolute top-1/2 left-8 w-64 h-96 bg-spa-charcoal/16 transform rotate-45" 
             style={{borderRadius: '100px'}}></div>
        
        <div className="absolute bottom-16 right-12 w-80 h-80 bg-spa-earth/20 transform -rotate-30"
             style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* About Us Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-spa-text mb-6">
            About Us
          </h2>
          <div className="w-16 h-px bg-spa-earth mx-auto"></div>
        </div>

        {/* Main About Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Erin's Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <img
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
                src="/client-content/about/erin 2.webp"
                alt="Erin - Pilates Instructor"
              />
            </div>
          </div>
          
          {/* About Content */}
          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="text-3xl font-serif text-spa-charcoal mb-6">
              About Erin
            </h3>
            
            <p className="text-spa-charcoal/80 leading-relaxed text-lg">
              I'm Erin, a certified Pilates instructor and Sports therapist with nearly a decade of experience 
              teaching and treating muscular discomfort.
            </p>
            
            <p className="text-spa-charcoal/80 leading-relaxed">
              Over the years I have gained a wealth of knowledge and understanding of the human body and how 
              beneficial regular Pilates practice can be for all. I hope for years to come, that I will continue 
              my own professional development and share my expertise with many.
            </p>

            <div className="pt-4">
              <div className="w-12 h-px bg-spa-earth"></div>
            </div>
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* What is Pilates */}
          <div className="bg-spa-ivory p-8 space-y-6">
            <h3 className="text-2xl font-serif text-spa-charcoal">
              What is Pilates?
            </h3>
            <p className="text-spa-charcoal/80 leading-relaxed">
              Joseph Pilates choreographed a low impact body-conditioning exercise method that works by targeting 
              and isolating the deep postural (core) muscles. With emphasis on slow controlled breathing and 
              movement to rebalance the body and improve posture.
            </p>
          </div>

          {/* Why Pilates */}
          <div className="space-y-6">
            <h3 className="text-2xl font-serif text-spa-charcoal">
              Why Pilates?
            </h3>
            
            <blockquote className="border-l-2 border-spa-earth pl-6 py-4 bg-spa-warm/50">
              <p className="text-xl font-serif italic text-spa-charcoal mb-2">
                "Change happens through movement and movement heals"
              </p>
              <cite className="text-sm text-spa-earth not-italic">— Joseph Pilates</cite>
            </blockquote>
            
            <p className="text-spa-charcoal/80 leading-relaxed">
              Pilates achieves the perfect balance between strength and flexibility and is a great way to 
              help relieve unwanted stress and tension.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About