const SportsTherapy = () => {
  return (
    <div className="min-h-screen bg-spa-warm">
      {/* Hero Section */}
      <section className="py-20 bg-spa-cream relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-8 w-32 h-64 bg-spa-accent/15 transform rotate-45" style={{borderRadius: '60px'}}></div>
          <div className="absolute bottom-20 right-8 w-44 h-44 bg-spa-earth/20 transform -rotate-30"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-serif text-spa-text mb-6">
              Sports Therapy Sessions
            </h1>
            <div className="w-16 h-px bg-spa-earth mx-auto mb-8"></div>
            <p className="text-xl text-spa-text/80 leading-relaxed max-w-2xl mx-auto">
              Professional therapy techniques to treat soft tissue injuries and muscular discomfort. Qualified Sports Therapist with years of experience.
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
                src="/client-content/services/sports-therapy/ Sports Therapy Sessions .webp"
                alt="Sports Therapy Session"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-3xl font-serif text-spa-text">Professional Treatment</h2>
              
              <p className="text-spa-text leading-relaxed">
                Erin is our qualified and insured Sports Therapist, she can offer a range of well practiced manual therapy techniques to help treat many soft tissue injuries and other minor ailments.
              </p>
              
              <p className="text-spa-text leading-relaxed">
                Many people live their lives with chronic muscular pain and sadly often give up on finding a solution to treat it. Erin has years of experience helping many clients to manage pain and recover to full movement.
              </p>
              
              <p className="text-spa-text leading-relaxed">
                The sessions we offer help you recover and rehabilitate. From chronic back pain or Tendonitis to Lymphatic drainage, we can offer a treatment plan to get you moving pain free and back to fitness.
              </p>
            </div>
          </div>

          {/* Treatments Section */}
          <div className="bg-spa-cream p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-serif text-spa-text mb-8 text-center">Treatments Offered</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-spa-ivory p-6 rounded-lg">
                <h4 className="font-semibold text-spa-text mb-2">LLLT</h4>
                <p className="text-spa-text/80 text-sm">Low Level Laser Therapy for tissue healing and pain relief</p>
              </div>
              
              <div className="bg-spa-ivory p-6 rounded-lg">
                <h4 className="font-semibold text-spa-text mb-2">Manual Lymphatic Drainage</h4>
                <p className="text-spa-text/80 text-sm">Specialized massage to reduce swelling and improve circulation</p>
              </div>
              
              <div className="bg-spa-ivory p-6 rounded-lg">
                <h4 className="font-semibold text-spa-text mb-2">Pregnancy Support</h4>
                <p className="text-spa-text/80 text-sm">Muscular tension release for pregnancy-related discomfort</p>
              </div>
              
              <div className="bg-spa-ivory p-6 rounded-lg">
                <h4 className="font-semibold text-spa-text mb-2">Dry Needling</h4>
                <p className="text-spa-text/80 text-sm">Trigger point therapy for muscle pain and dysfunction</p>
              </div>
              
              <div className="bg-spa-ivory p-6 rounded-lg">
                <h4 className="font-semibold text-spa-text mb-2">Medical Acupuncture</h4>
                <p className="text-spa-text/80 text-sm">Evidence-based acupuncture for pain management</p>
              </div>
              
              <div className="bg-spa-ivory p-6 rounded-lg">
                <h4 className="font-semibold text-spa-text mb-2">Injury Taping</h4>
                <p className="text-spa-text/80 text-sm">Therapeutic taping for support and rehabilitation</p>
              </div>
              
              <div className="bg-spa-ivory p-6 rounded-lg">
                <h4 className="font-semibold text-spa-text mb-2">Sports Massage</h4>
                <p className="text-spa-text/80 text-sm">Deep tissue massage for athletic performance and recovery</p>
              </div>
              
              <div className="bg-spa-ivory p-6 rounded-lg">
                <h4 className="font-semibold text-spa-text mb-2">Exercise Rehabilitation</h4>
                <p className="text-spa-text/80 text-sm">Targeted exercises to restore function and prevent re-injury</p>
              </div>
            </div>
          </div>

          {/* Additional Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img
              className="w-full h-64 object-cover shadow-lg"
              src="/client-content/services/sports-therapy/ Sports Therapy Sessions 2.webp"
              alt="Therapy Treatment"
            />
            <img
              className="w-full h-64 object-cover shadow-lg"
              src="/client-content/services/sports-therapy/ Sports Therapy Sessions 3.webp"
              alt="Sports Therapy"
            />
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <p className="text-spa-text mb-6">
              Contact us to discuss your needs and book an initial consultation.
            </p>
            <button className="bg-spa-accent text-spa-ivory hover:bg-spa-text transition-all duration-300 px-8 py-3 tracking-wider uppercase text-sm">
              Book Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SportsTherapy