import Contact from '../components/Contact'

const About = () => {
  return (
    <div className="min-h-screen bg-spa-warm">
      {/* Hero Section */}
      <section className="py-20 bg-spa-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-16 left-0 w-80 h-80 bg-spa-accent/15 transform -translate-x-40 rotate-12" 
               style={{borderRadius: '50% 60% 40% 50% / 60% 50% 60% 40%'}}></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-spa-earth/10 transform translate-x-48 -rotate-12" 
               style={{borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%'}}></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif text-spa-text mb-6">
              About Free Rein Pilates
            </h1>
            <div className="w-16 h-px bg-spa-earth mx-auto mb-8"></div>
            <p className="text-xl text-spa-text/80 leading-relaxed max-w-2xl mx-auto">
              Enabling all to access Pilates through community courses, private sessions, and luxury retreats in beautiful Bedfordshire.
            </p>
          </div>
        </div>
      </section>

      {/* About Erin */}
      <section className="py-16 bg-spa-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="relative">
              <img
                className="w-full max-w-md mx-auto rounded-none shadow-lg"
                src="/client-content/about/erin 2.webp"
                alt="Erin - Pilates Instructor"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-spa-sand -z-10"></div>
            </div>
            
            <div className="space-y-6">
              <h2 className="text-4xl font-serif text-spa-text mb-6">
                Meet Erin
              </h2>
              
              <p className="text-lg text-spa-text leading-relaxed">
                I'm Erin, a certified Pilates instructor and Sports therapist with nearly a decade of experience 
                teaching and treating muscular discomfort.
              </p>
              
              <p className="text-spa-text leading-relaxed">
                Over the years I have gained a wealth of knowledge and understanding of the human body and how 
                beneficial regular Pilates practice can be for all. I hope for years to come, that I will continue 
                my own professional development and share my expertise with many.
              </p>

              <p className="text-spa-text leading-relaxed">
                As a novice Equestrian and horse owner myself, I understand the physical demands of riding and 
                the importance of having a balanced, strong body to communicate effectively with our horses.
              </p>

              <div className="pt-4">
                <div className="w-12 h-px bg-spa-earth"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-16 bg-spa-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* What is Pilates */}
            <div className="bg-spa-ivory p-8 space-y-6">
              <h3 className="text-3xl font-serif text-spa-text">
                What is Pilates?
              </h3>
              <p className="text-spa-text leading-relaxed">
                Joseph Pilates choreographed a low impact body-conditioning exercise method that works by targeting 
                and isolating the deep postural (core) muscles. With emphasis on slow controlled breathing and 
                movement to rebalance the body and improve posture which promotes subconscious correct alignment.
              </p>
              <p className="text-spa-text leading-relaxed">
                Pilates achieves the perfect balance between strength and flexibility and is a great way to 
                help relieve unwanted stress and tension.
              </p>
            </div>

            {/* Why Pilates */}
            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-spa-text">
                Why Pilates?
              </h3>
              
              <blockquote className="border-l-4 border-spa-earth pl-6 py-4 bg-spa-warm/50">
                <p className="text-2xl font-serif italic text-spa-text mb-2">
                  "Change happens through movement and movement heals"
                </p>
                <cite className="text-sm text-spa-earth not-italic">— Joseph Pilates</cite>
              </blockquote>
              
              <p className="text-spa-text leading-relaxed">
                This philosophy guides everything we do at Free Rein Pilates. Whether you're seeking to improve 
                your posture, recover from injury, enhance your riding, or simply feel better in your body, 
                movement is the key to transformation.
              </p>

              <p className="text-spa-text leading-relaxed">
                We believe that Pilates should be accessible to everyone, regardless of age, fitness level, or 
                physical limitations. That's why we offer such a diverse range of services - there's something 
                for everyone on their wellness journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className="py-16 bg-spa-warm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-serif text-spa-text">
                Our Sanctuary
              </h3>
              
              <p className="text-lg text-spa-text leading-relaxed">
                Free Rein Pilates offers an exclusive spa-like boutique home studio for private practice. 
                Our studio has been designed for personal sessions, tailored specifically to you and your wellness goals.
              </p>
              
              <p className="text-spa-text leading-relaxed">
                Experience the luxury and tranquility of our purpose-built space, equipped with professional 
                Reformer equipment in a serene environment designed to nurture your mind and body.
              </p>

              <p className="text-spa-text leading-relaxed">
                The studio provides a peaceful escape from daily life, where you can focus entirely on your 
                practice and personal growth in a supportive, non-judgmental environment.
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

      {/* Our Approach */}
      <section className="py-16 bg-spa-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-spa-text mb-8">Our Approach</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-spa-accent/20 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="text-xl font-serif text-spa-text">Personalized</h4>
              <p className="text-spa-text/80">Every session is tailored to your individual needs, goals, and physical capabilities.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-spa-accent/20 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="text-xl font-serif text-spa-text">Progressive</h4>
              <p className="text-spa-text/80">We build your practice gradually, ensuring proper form and sustainable progress.</p>
            </div>
            
            <div className="space-y-4">
              <div className="w-16 h-16 bg-spa-accent/20 rounded-full mx-auto flex items-center justify-center">
                <span className="text-2xl">💚</span>
              </div>
              <h4 className="text-xl font-serif text-spa-text">Holistic</h4>
              <p className="text-spa-text/80">We address not just physical movement, but overall wellness and mind-body connection.</p>
            </div>
          </div>
        </div>
      </section>

      <Contact />
    </div>
  )
}

export default About