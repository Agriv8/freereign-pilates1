const DayRetreats = () => {
  return (
    <div className="min-h-screen bg-spa-warm">
      {/* Hero Section */}
      <section className="py-20 bg-spa-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-8 w-48 h-48 bg-spa-accent/15 transform -rotate-12" style={{borderRadius: '30% 70% 70% 30% / 40% 60% 40% 60%'}}></div>
          <div className="absolute bottom-20 right-8 w-32 h-32 bg-spa-earth/20 rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif text-spa-text mb-6">
              Day Retreats
            </h1>
            <div className="w-16 h-px bg-spa-earth mx-auto mb-8"></div>
            <p className="text-xl text-spa-text/80 leading-relaxed max-w-2xl mx-auto">
              Luxury wellness retreats in beautiful venues for complete relaxation and rejuvenation. Take time for you.
            </p>
          </div>
        </div>
      </section>

      {/* Wrest Park Retreat */}
      <section className="py-16 bg-spa-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                className="w-full h-96 object-cover shadow-lg"
                src="/client-content/services/day-retreats/Wrest Park Day Retreats.webp"
                alt="Wrest Park Orangery"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-spa-text">Wrest Park Morning Retreat</h2>
              
              <p className="text-spa-text leading-relaxed">
                Take time for you and immerse yourself for the day, within the beautiful setting of Wrest Parks Orangery based in Silsoe Bedfordshire. With its stunning gardens and architecture, it's often been a favoured venue for film sets including the hit show Bridgerton's 'Aubrey Hall'.
              </p>
              
              <p className="text-spa-text leading-relaxed">
                It's a place of true elegance and grandeur. Our Pilates morning retreat has been planned with luxury, relaxation and the feel good factor in mind.
              </p>
              
              <p className="text-spa-text leading-relaxed">
                With the awe inspiring surroundings, carefully planned workshops and a bag of gifts included to help you continue your own home practice, It's a great opportunity for you to recharge, reset, make good memories and most importantly, enjoy!
              </p>
              
              <div className="bg-spa-accent/10 p-6 rounded-lg">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-spa-text font-semibold">Duration: 4 hours</p>
                    <p className="text-2xl font-serif text-spa-accent">£115</p>
                  </div>
                  <button className="bg-spa-accent text-spa-ivory hover:bg-spa-text transition-all duration-300 px-6 py-2 tracking-wider uppercase text-sm">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Itinerary */}
          <div className="bg-spa-cream p-8 rounded-lg mb-16">
            <h3 className="text-2xl font-serif text-spa-text mb-8 text-center">Retreat Itinerary</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-spa-accent text-spa-ivory rounded-full w-16 h-16 flex items-center justify-center font-semibold">
                  9:00
                </div>
                <div>
                  <h4 className="font-semibold text-spa-text">Arrival & Welcome</h4>
                  <p className="text-spa-text/80">Grab a tea or coffee and your very own Free Rein Pilates goodie bag then make yourself at home.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-spa-accent text-spa-ivory rounded-full w-16 h-16 flex items-center justify-center font-semibold">
                  9:15
                </div>
                <div>
                  <h4 className="font-semibold text-spa-text">Session 1: 'Core Restore'</h4>
                  <p className="text-spa-text/80">Our first workshop deeply encompasses the principles of classical Mat Pilates, encouraging isolation of the core muscles to build strength and stability.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-spa-earth text-spa-ivory rounded-full w-16 h-16 flex items-center justify-center font-semibold">
                  10:15
                </div>
                <div>
                  <h4 className="font-semibold text-spa-text">Refreshment Break</h4>
                  <p className="text-spa-text/80">Time to relax, hydrate and connect with fellow participants.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-spa-accent text-spa-ivory rounded-full w-16 h-16 flex items-center justify-center font-semibold">
                  10:35
                </div>
                <div>
                  <h4 className="font-semibold text-spa-text">Session 2: 'Small Equipment'</h4>
                  <p className="text-spa-text/80">This workshop delves into the benefits of small equipment in Mat Pilates and teaches effective practice.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-spa-accent text-spa-ivory rounded-full w-16 h-16 flex items-center justify-center font-semibold">
                  11:40
                </div>
                <div>
                  <h4 className="font-semibold text-spa-text">Session 3: 'The Posterior Chain'</h4>
                  <p className="text-spa-text/80">This workshop focuses on flexibility. Participants will be guided through a flow of stretching and flexibility movements, promoting free movement.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-spa-earth text-spa-ivory rounded-full w-16 h-16 flex items-center justify-center font-semibold">
                  13:00
                </div>
                <div>
                  <h4 className="font-semibold text-spa-text">Finish & Explore</h4>
                  <p className="text-spa-text/80">Your day of relaxation doesn't end here! Included is a day ticket for Wrest Park. Explore the stunning grounds, bring a picnic or visit the onsite café.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Center Parcs */}
          <div className="bg-spa-ivory p-8 rounded-lg text-center">
            <h3 className="text-2xl font-serif text-spa-text mb-6">Coming Soon</h3>
            <img
              className="w-full max-w-md mx-auto h-48 object-cover shadow-lg mb-6"
              src="/client-content/services/day-retreats/Center Parcs Woburn Day Retreats.webp"
              alt="Center Parcs Woburn"
            />
            <h4 className="text-xl font-serif text-spa-text mb-4">Center Parcs Woburn Day Retreats</h4>
            <p className="text-spa-text/80 mb-6">
              We're excited to announce our upcoming day retreats at Center Parcs Woburn. 
              Stay tuned for more details about this new luxury wellness experience.
            </p>
            <button className="bg-spa-accent text-spa-ivory hover:bg-spa-text transition-all duration-300 px-6 py-2 tracking-wider uppercase text-sm">
              Get Notified
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DayRetreats