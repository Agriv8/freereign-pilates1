const MatPilates = () => {
  return (
    <div className="min-h-screen bg-spa-warm">
      {/* Hero Section */}
      <section className="py-20 bg-spa-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-8 w-64 h-64 bg-spa-earth/15 transform rotate-45"
               style={{borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'}}></div>
          <div className="absolute bottom-20 left-8 w-96 h-96 bg-spa-accent/10 transform -rotate-12" 
               style={{borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif text-spa-text mb-6">
              Mat Pilates Courses
            </h1>
            <div className="w-16 h-px bg-spa-earth mx-auto mb-8"></div>
            <p className="text-xl text-spa-text/80 leading-relaxed max-w-2xl mx-auto">
              Community Mat work courses designed to improve flexibility, posture and muscular strength. 
              Mixed ability levels welcome.
            </p>
          </div>
        </div>
      </section>

      {/* Course Details */}
      <section className="py-16 bg-spa-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                className="w-full h-96 object-cover shadow-lg"
                src="/client-content/services/mat-pilates/Mat Pilates Courses.webp"
                alt="Mat Pilates Classes"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-spa-text">Why Mat Pilates?</h2>
              
              <p className="text-spa-text leading-relaxed">
                Mat Pilates is a low impact form of exercise that focuses on strengthening and toning muscles 
                through sequences mat-based movements 'flows'. The goal of Mat Pilates is to improve posture 
                and increase flexibility encouraging correct posture, alignment of the spine and core strength.
              </p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-serif text-spa-text">Course Features:</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-spa-text">
                    <span className="w-2 h-2 bg-spa-accent rounded-full mr-3"></span>
                    Mixed ability levels welcome
                  </li>
                  <li className="flex items-center text-spa-text">
                    <span className="w-2 h-2 bg-spa-accent rounded-full mr-3"></span>
                    Complete beginners welcome
                  </li>
                  <li className="flex items-center text-spa-text">
                    <span className="w-2 h-2 bg-spa-accent rounded-full mr-3"></span>
                    Held in Shefford, Bedfordshire (SG17)
                  </li>
                  <li className="flex items-center text-spa-text">
                    <span className="w-2 h-2 bg-spa-accent rounded-full mr-3"></span>
                    6 week course blocks
                  </li>
                  <li className="flex items-center text-spa-text">
                    <span className="w-2 h-2 bg-spa-accent rounded-full mr-3"></span>
                    50 minutes to 1 hour sessions
                  </li>
                </ul>
              </div>
              
              <div className="pt-6">
                <button className="bg-spa-accent text-spa-ivory hover:bg-spa-text transition-all duration-300 px-8 py-3 tracking-wider uppercase text-sm">
                  Book Your Spot
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Image */}
      <section className="py-16 bg-spa-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <img
            className="w-full h-64 object-cover shadow-lg"
            src="/client-content/services/mat-pilates/Mat Pilates Courses2.webp"
            alt="Mat Pilates Session"
          />
        </div>
      </section>
    </div>
  )
}

export default MatPilates