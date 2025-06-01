const About = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-pilates-sage font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-pilates-charcoal sm:text-4xl">
            Your Journey to Wellness Starts Here
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            {/* About Erin */}
            <div>
              <h3 className="text-2xl font-bold text-pilates-charcoal mb-4">About Erin</h3>
              <p className="text-gray-600 mb-6">
                I'm Erin, a certified Pilates instructor and Sports therapist with nearly a decade of experience 
                teaching and treating muscular discomfort. Over the years I have gained a wealth of knowledge 
                and understanding of the human body and how beneficial regular Pilates practice can be for all.
              </p>
              <p className="text-gray-600">
                I hope for years to come, that I will continue my own professional development and share my 
                expertise with many.
              </p>
            </div>
            
            <div className="flex justify-center">
              <img
                className="rounded-lg shadow-lg max-w-sm"
                src="/client-content/erin 2.webp"
                alt="Erin - Pilates Instructor"
              />
            </div>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            {/* What is Pilates */}
            <div>
              <h3 className="text-2xl font-bold text-pilates-charcoal mb-4">What is Pilates?</h3>
              <p className="text-gray-600">
                Joseph Pilates (founder) choreographed a low impact body-conditioning exercise method that works 
                by targeting and isolating the deep postural (core) muscles. With emphasis on slow controlled 
                breathing and movement to rebalance the body and improve posture which promotes subconscious 
                correct alignment.
              </p>
            </div>

            {/* Why Pilates */}
            <div>
              <h3 className="text-2xl font-bold text-pilates-charcoal mb-4">Why Pilates?</h3>
              <blockquote className="text-pilates-sage text-lg italic mb-4">
                "Change happens through movement and movement heals"
              </blockquote>
              <p className="text-gray-600 text-sm">— Joseph Pilates</p>
              <p className="text-gray-600 mt-4">
                Pilates achieves the perfect balance between strength and flexibility and is a great way to 
                help relieve unwanted stress and tension.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About