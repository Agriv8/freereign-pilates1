const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-pilates-sage font-semibold tracking-wide uppercase">Testimonials</h2>
          <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-pilates-charcoal sm:text-4xl">
            What Our Clients Say
          </p>
        </div>

        <div className="mt-16">
          <div className="bg-pilates-cream rounded-lg p-8 max-w-4xl mx-auto">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-pilates-sage" fill="currentColor" viewBox="0 0 32 32">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <blockquote className="mt-6 text-xl text-pilates-charcoal">
                "I've been attending Erin's mat courses for nearly a year. I really enjoy her classes, she's very 
                informative and unlike other classes I've been to, I understand fully the muscles used and benefits 
                of the exercises. Her tailored approach whilst in a group setting is much appreciated."
              </blockquote>
              <footer className="mt-6">
                <p className="text-base font-semibold text-pilates-sage">Hannah</p>
                <p className="text-sm text-gray-600">Facebook Review</p>
              </footer>
            </div>
          </div>
        </div>

        {/* Studio showcase */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-pilates-charcoal mb-4">Our Beautiful Studio</h3>
            <p className="text-gray-600 mb-6">
              Free Rein Pilates offers an exclusive 'spa like' boutique home studio for private studio practice. 
              Our studio has been designed for personal sessions, tailored specifically to you and your fitness goals.
            </p>
            <p className="text-gray-600">
              Experience the luxury and tranquility of our purpose-built space, equipped with professional 
              Reformer equipment and designed to help you achieve your wellness goals.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              className="rounded-lg shadow-lg"
              src="/client-content/studio.webp"
              alt="Free Rein Pilates Studio"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials