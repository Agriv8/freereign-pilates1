const EquestrianPilates = () => {
  return (
    <div className="min-h-screen bg-spa-warm">
      {/* Hero Section */}
      <section className="py-20 bg-spa-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-32 right-16 w-40 h-40 bg-spa-accent/15 transform rotate-45"></div>
          <div className="absolute bottom-40 left-12 w-56 h-28 bg-spa-earth/20 transform -rotate-12" style={{borderRadius: '60px'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif text-spa-text mb-6">
              Equestrian Pilates
            </h1>
            <div className="w-16 h-px bg-spa-earth mx-auto mb-8"></div>
            <p className="text-xl text-spa-text/80 leading-relaxed max-w-2xl mx-auto">
              Specialized Pilates programme designed with equestrian movement in mind to improve your seat and partnership with your horse.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-spa-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                className="w-full h-96 object-cover shadow-lg"
                src="/client-content/services/equestrian-pilates/Equestrian Pilates Sessions .webp"
                alt="Equestrian Pilates Session"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-spa-text">For Horse & Rider</h2>
              
              <p className="text-spa-text leading-relaxed">
                As a novice Equestrian and horse owner herself, Erin understands the physical demands of riding and frustrations when your horse doesn't respond effectively to your cues from the saddle. Often it is our own postural imbalances causing confusion.
              </p>
              
              <p className="text-spa-text leading-relaxed">
                Our Equestrian Pilates programme has been designed with Equestrian movement in mind to create a deeper seat and partnership between horse and rider.
              </p>
              
              <p className="text-spa-text leading-relaxed">
                Imbalances can develop over time, based on physiology, posture and lifestyle. How you move or stand when not riding (for example, with rounded shoulders) can directly affect how you function in the saddle.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-spa-cream p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-serif text-spa-text mb-8 text-center">How Pilates Helps Riders</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-spa-accent rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-spa-text">Increased Body Awareness</h4>
                    <p className="text-spa-text/80">Develop better understanding of your position and movement patterns</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-spa-accent rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-spa-text">Improved Flexibility</h4>
                    <p className="text-spa-text/80">Greater range of motion for better communication with your horse</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-spa-accent rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-spa-text">Enhanced Balance</h4>
                    <p className="text-spa-text/80">Develop stability and independence in the saddle</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-spa-accent rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-spa-text">Core Strength</h4>
                    <p className="text-spa-text/80">Build the deep stability needed for an effective riding position</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-spa-accent rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-spa-text">Neutral Spine</h4>
                    <p className="text-spa-text/80">Achieve optimal posture that absorbs movement effectively</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-spa-accent rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-spa-text">Better Partnership</h4>
                    <p className="text-spa-text/80">Clear communication leads to greater trust with your horse</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Session Focus */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl font-serif text-spa-text">Session Focus</h2>
              
              <p className="text-spa-text leading-relaxed">
                Pilates exercises help to increase your body awareness and improve flexibility, balance and strength in order for a rider to facilitate an optimal riding position.
              </p>
              
              <p className="text-spa-text leading-relaxed">
                Whether you wish to improve your range of motion, flexibility, posture or general fitness, our Pilates sessions will help you to achieve your goals. The sessions are planned to work on strengthening and stabilising core muscle groups.
              </p>
              
              <p className="text-spa-text leading-relaxed">
                This allows you as a rider to achieve a neutral, shock absorbing spine and pelvis, which will in turn develop a trusting riding relationship where your horse responds to your commands and is confident in your leading ability.
              </p>
              
              <div className="pt-6">
                <button className="bg-spa-accent text-spa-ivory hover:bg-spa-text transition-all duration-300 px-8 py-3 tracking-wider uppercase text-sm">
                  Start Your Training
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img
                className="w-full h-96 object-cover shadow-lg"
                src="/client-content/services/equestrian-pilates/Equestrian Pilates Sessions 2.webp"
                alt="Rider Training"
              />
            </div>
          </div>

          {/* Additional Image */}
          <div className="text-center">
            <img
              className="w-full max-w-2xl mx-auto h-64 object-cover shadow-lg"
              src="/client-content/services/equestrian-pilates/Equestrian Pilates Sessions 3.webp"
              alt="Equestrian Pilates Training"
            />
            <p className="text-spa-text mt-6">
              Get in touch to let me know your needs and I can create an individual training plan for you.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default EquestrianPilates