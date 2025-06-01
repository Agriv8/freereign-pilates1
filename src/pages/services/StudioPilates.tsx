const StudioPilates = () => {
  return (
    <div className="min-h-screen bg-spa-warm">
      {/* Hero Section */}
      <section className="py-20 bg-spa-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 right-8 w-40 h-40 bg-spa-accent/15 transform rotate-45"></div>
          <div className="absolute bottom-20 left-8 w-56 h-28 bg-spa-earth/20 transform -rotate-12" 
               style={{borderRadius: '60px'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif text-spa-text mb-6">
              1-2-1 Studio Pilates
            </h1>
            <div className="w-16 h-px bg-spa-earth mx-auto mb-8"></div>
            <p className="text-xl text-spa-text/80 leading-relaxed max-w-2xl mx-auto">
              Exclusive boutique home studio for private Reformer Pilates sessions tailored specifically to your fitness goals.
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
                src="/client-content/services/studio-pilates/1-2-1- Studio Pilates.webp"
                alt="Studio Pilates Session"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-spa-text">Why Reformer Pilates?</h2>
              
              <p className="text-spa-text leading-relaxed">
                Reformer Pilates is a dynamic form of exercise performed on a machine - the 'reformer'. Unlike traditional mat-based Pilates, the reformer adds resistance through a system of springs and pulleys, allowing for controlled, low-impact movements that strengthen and lengthen muscles.
              </p>
              
              <p className="text-spa-text leading-relaxed">
                One of the main reasons the reformer has become such a popular piece of equipment in our studio is its adaptability - It can be modified to suit anyone, from beginners to advanced athletes, and is particularly effective in rehabilitation and injury prevention.
              </p>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6 order-2 lg:order-1">
              <h2 className="text-3xl font-serif text-spa-text">Key Benefits</h2>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-spa-accent rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-spa-text">Stronger Core & Better Posture</h4>
                    <p className="text-spa-text/80">Many injuries stem from a weak core or poor postural habits. Reformer Pilates helps strengthen the deep abdominal and back muscles.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-spa-accent rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-spa-text">Enhanced Flexibility & Mobility</h4>
                    <p className="text-spa-text/80">Unlike static stretching, the reformer encourages active stretching while strengthening muscles, promoting healthy joint movement.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-spa-accent rounded-full mt-2"></span>
                  <div>
                    <h4 className="font-semibold text-spa-text">Reduced Pain & Injury Risk</h4>
                    <p className="text-spa-text/80">Whether it's back pain, joint stiffness, or sports injury, Pilates-based rehabilitation helps correct imbalances.</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6">
                <button className="bg-spa-accent text-spa-ivory hover:bg-spa-text transition-all duration-300 px-8 py-3 tracking-wider uppercase text-sm">
                  Book Your Session
                </button>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img
                className="w-full h-96 object-cover shadow-lg"
                src="/client-content/services/studio-pilates/1-2-1- Studio Pilates 2.webp"
                alt="Reformer Equipment"
              />
            </div>
          </div>

          {/* Studio Section */}
          <div className="bg-spa-cream p-8 rounded-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-serif text-spa-text mb-4">Our Sanctuary</h3>
                <p className="text-spa-text leading-relaxed mb-4">
                  Free Rein Pilates offers an exclusive 'spa like' boutique home studio for private studio practice. Our studio has been designed for personal sessions, tailored specifically to you and your fitness goals.
                </p>
                <p className="text-spa-text leading-relaxed">
                  Experience the luxury and tranquility of our purpose-built space, equipped with professional Reformer equipment and designed to help you achieve your wellness goals.
                </p>
              </div>
              <div>
                <img
                  className="w-full h-64 object-cover shadow-lg"
                  src="/client-content/services/studio-pilates/1-2-1- Studio Pilates 3.webp"
                  alt="Studio Interior"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StudioPilates