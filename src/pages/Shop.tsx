const Shop = () => {
  return (
    <div className="min-h-screen bg-spa-warm">
      {/* Hero Section */}
      <section className="py-20 bg-spa-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-8 w-80 h-80 bg-spa-accent/15 transform rotate-45" 
               style={{borderRadius: '50% 60% 40% 50% / 60% 50% 60% 40%'}}></div>
          <div className="absolute bottom-20 right-8 w-96 h-48 bg-spa-earth/20 transform -rotate-12" 
               style={{borderRadius: '120px'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif text-spa-text mb-6">
              Shop
            </h1>
            <div className="w-16 h-px bg-spa-earth mx-auto mb-8"></div>
            <p className="text-xl text-spa-text/80 leading-relaxed max-w-2xl mx-auto">
              Our wellness boutique is coming soon
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Content */}
      <section className="py-16 bg-spa-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-12">
            {/* Coming Soon Message */}
            <div className="bg-spa-ivory p-12 max-w-3xl mx-auto">
              <h2 className="text-3xl font-serif text-spa-text mb-6">
                Coming Soon
              </h2>
              <p className="text-lg text-spa-text/80 leading-relaxed mb-8">
                We're currently curating a beautiful collection of wellness products to support your Pilates journey. 
                From premium equipment to luxurious self-care essentials, our shop will offer everything you need 
                to continue your practice at home.
              </p>
              <div className="w-12 h-px bg-spa-earth mx-auto"></div>
            </div>

            {/* What to Expect */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-spa-accent/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-3xl">🧘‍♀️</span>
                </div>
                <h3 className="text-xl font-serif text-spa-text">Pilates Equipment</h3>
                <p className="text-spa-text/70">
                  Professional-grade mats, resistance bands, and small equipment for home practice
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-spa-accent/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-3xl">🌿</span>
                </div>
                <h3 className="text-xl font-serif text-spa-text">Wellness Products</h3>
                <p className="text-spa-text/70">
                  Natural aromatherapy, recovery balms, and self-care essentials
                </p>
              </div>

              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-spa-accent/20 rounded-full mx-auto flex items-center justify-center">
                  <span className="text-3xl">👕</span>
                </div>
                <h3 className="text-xl font-serif text-spa-text">Apparel</h3>
                <p className="text-spa-text/70">
                  Comfortable, stylish activewear designed for movement and mindfulness
                </p>
              </div>
            </div>

            {/* Notification Signup */}
            <div className="bg-spa-cream p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-serif text-spa-text mb-4">
                Be the First to Know
              </h3>
              <p className="text-spa-text/80 mb-6">
                Sign up to receive updates when our shop launches and get exclusive early access to our collection.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-spa-sand bg-spa-ivory focus:outline-none focus:border-spa-earth"
                />
                <button className="bg-spa-accent text-spa-ivory hover:bg-spa-text transition-all duration-300 px-6 py-3 tracking-wider uppercase text-sm">
                  Notify Me
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Shop