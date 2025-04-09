// Testimonials Component

const Testimonials = () => {
  const testimonials = getTestimonials();
  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50" data-id="fzsb16lci" data-path="components/Testimonials.js">
      <div className="container mx-auto px-4 md:px-6" data-id="1590ak9hi" data-path="components/Testimonials.js">
        <div className="text-center mb-16" data-id="t9vi7mjhq" data-path="components/Testimonials.js">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="t6b3omeyx" data-path="components/Testimonials.js">Success Stories</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" data-id="rqbz9fiwl" data-path="components/Testimonials.js"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-id="wneqpfe2n" data-path="components/Testimonials.js">
            Hear from our community members about their Sip & Scale experiences and the connections they've made.
          </p>
        </div>

        {/* Desktop Testimonials */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12" data-id="7xi9r1lu0" data-path="components/Testimonials.js">
          {testimonials.map((testimonial) =>
          <div key={testimonial.id} className="testimonial-card bg-white p-6 rounded-xl shadow-md" data-id="5jroefllm" data-path="components/Testimonials.js">
              <div className="mb-4" data-id="sunwlx8ij" data-path="components/Testimonials.js">
                <div className="flex text-yellow-400 mb-2" data-id="mh9gm42ji" data-path="components/Testimonials.js">
                  <i className="fas fa-star" data-id="y3yovhm44" data-path="components/Testimonials.js"></i>
                  <i className="fas fa-star" data-id="jnrzcwdij" data-path="components/Testimonials.js"></i>
                  <i className="fas fa-star" data-id="mx553tuxp" data-path="components/Testimonials.js"></i>
                  <i className="fas fa-star" data-id="cw10det1s" data-path="components/Testimonials.js"></i>
                  <i className="fas fa-star" data-id="su5jjfskr" data-path="components/Testimonials.js"></i>
                </div>
                <p className="text-gray-600 italic mb-4" data-id="pbvaj5rnx" data-path="components/Testimonials.js">{testimonial.quote}</p>
              </div>
              <div className="flex items-center" data-id="tw0akf4wj" data-path="components/Testimonials.js">
                <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4 object-cover" data-id="c0duvdh6c" data-path="components/Testimonials.js" />

                <div data-id="apksyycqz" data-path="components/Testimonials.js">
                  <h4 className="font-bold" data-id="qsgfpd67j" data-path="components/Testimonials.js">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm" data-id="gbnppappa" data-path="components/Testimonials.js">{testimonial.role}</p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Testimonials Carousel */}
        <div className="md:hidden relative mb-12" data-id="8h3lysoj5" data-path="components/Testimonials.js">
          <div className="overflow-hidden" data-id="jwdybgy7q" data-path="components/Testimonials.js">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }} data-id="k0nwv55n3" data-path="components/Testimonials.js">

              {testimonials.map((testimonial) =>
              <div key={testimonial.id} className="testimonial-card bg-white p-6 rounded-xl shadow-md min-w-full" data-id="36n1zmz81" data-path="components/Testimonials.js">
                  <div className="mb-4" data-id="32xi26l1x" data-path="components/Testimonials.js">
                    <div className="flex text-yellow-400 mb-2" data-id="u7aohz1mt" data-path="components/Testimonials.js">
                      <i className="fas fa-star" data-id="v3ev3n586" data-path="components/Testimonials.js"></i>
                      <i className="fas fa-star" data-id="dvs2tp1og" data-path="components/Testimonials.js"></i>
                      <i className="fas fa-star" data-id="gckhhjnaj" data-path="components/Testimonials.js"></i>
                      <i className="fas fa-star" data-id="k2573iyo2" data-path="components/Testimonials.js"></i>
                      <i className="fas fa-star" data-id="0jgxgdmat" data-path="components/Testimonials.js"></i>
                    </div>
                    <p className="text-gray-600 italic mb-4" data-id="q9r3odqx4" data-path="components/Testimonials.js">{testimonial.quote}</p>
                  </div>
                  <div className="flex items-center" data-id="3p9bikmou" data-path="components/Testimonials.js">
                    <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover" data-id="3rjrhbsbr" data-path="components/Testimonials.js" />

                    <div data-id="0jq6fs9wg" data-path="components/Testimonials.js">
                      <h4 className="font-bold" data-id="pg7vzz5ds" data-path="components/Testimonials.js">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm" data-id="7wkhh2xnx" data-path="components/Testimonials.js">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-center mt-4 space-x-2" data-id="ewzt4ci5n" data-path="components/Testimonials.js">
            {testimonials.map((_, index) =>
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === activeIndex ? 'bg-primary' : 'bg-gray-300'}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`} data-id="s2kz446cu" data-path="components/Testimonials.js" />

            )}
          </div>
          
          <button
            className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
            onClick={prevTestimonial}
            aria-label="Previous testimonial" data-id="n5jalz0mf" data-path="components/Testimonials.js">

            <i className="fas fa-chevron-left text-primary" data-id="fez3mtxbd" data-path="components/Testimonials.js"></i>
          </button>
          
          <button
            className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-1/2 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md z-10"
            onClick={nextTestimonial}
            aria-label="Next testimonial" data-id="2925nnuwe" data-path="components/Testimonials.js">

            <i className="fas fa-chevron-right text-primary" data-id="g540clxq2" data-path="components/Testimonials.js"></i>
          </button>
        </div>

        <div className="bg-primary rounded-2xl p-8 md:p-12 text-white" data-id="29c0j3zmp" data-path="components/Testimonials.js">
          <div className="grid md:grid-cols-2 gap-8 items-center" data-id="uhzgau5z6" data-path="components/Testimonials.js">
            <div data-id="ztqxwjt2k" data-path="components/Testimonials.js">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" data-id="11z6c6oz6" data-path="components/Testimonials.js">Impact Stories</h3>
              <p className="mb-6" data-id="7y854wp3w" data-path="components/Testimonials.js">
                At Sip & Scale, we measure success by the meaningful connections and collaborations 
                that emerge from our dinners. Here are just a few of the stories we're proud of:
              </p>
              <div className="space-y-4" data-id="cpi4faobz" data-path="components/Testimonials.js">
                <div className="flex" data-id="yoxu4kevu" data-path="components/Testimonials.js">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-primary font-bold flex items-center justify-center mr-4" data-id="p7sz6szir" data-path="components/Testimonials.js">
                    <i className="fas fa-lightbulb" data-id="frg2alj7w" data-path="components/Testimonials.js"></i>
                  </div>
                  <div data-id="aia8gfwgb" data-path="components/Testimonials.js">
                    <h4 className="font-bold text-lg" data-id="l6a96rn4k" data-path="components/Testimonials.js">15+ Startup Collaborations</h4>
                    <p className="text-white text-opacity-90" data-id="3s9dqbpfh" data-path="components/Testimonials.js">Founders who met at our dinners have formed partnerships and collaborations.</p>
                  </div>
                </div>
                <div className="flex" data-id="tkx2w8vro" data-path="components/Testimonials.js">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-primary font-bold flex items-center justify-center mr-4" data-id="hus0b4txi" data-path="components/Testimonials.js">
                    <i className="fas fa-briefcase" data-id="ln0ryjmtx" data-path="components/Testimonials.js"></i>
                  </div>
                  <div data-id="yo569e35w" data-path="components/Testimonials.js">
                    <h4 className="font-bold text-lg" data-id="9p2a9q0p6" data-path="components/Testimonials.js">25+ Career Opportunities</h4>
                    <p className="text-white text-opacity-90" data-id="95ksjjsyl" data-path="components/Testimonials.js">Students and professionals have found job opportunities through connections made at our events.</p>
                  </div>
                </div>
                <div className="flex" data-id="5ccjzirxm" data-path="components/Testimonials.js">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-primary font-bold flex items-center justify-center mr-4" data-id="4ls5s5hje" data-path="components/Testimonials.js">
                    <i className="fas fa-rocket" data-id="7l5bwmmro" data-path="components/Testimonials.js"></i>
                  </div>
                  <div data-id="tf5wkagam" data-path="components/Testimonials.js">
                    <h4 className="font-bold text-lg" data-id="ev9eim23i" data-path="components/Testimonials.js">5+ Investment Deals</h4>
                    <p className="text-white text-opacity-90" data-id="8auzyfl2m" data-path="components/Testimonials.js">Startups have secured funding through relationships built at Sip & Scale.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative" data-id="esy39qn9k" data-path="components/Testimonials.js">
              <img
                src="https://placehold.co/800x500/5E17EB/FFFFFF?text=Collaboration"
                alt="People collaborating"
                className="rounded-xl shadow-lg w-full h-auto" data-id="kfho8nh3r" data-path="components/Testimonials.js" />

              <div className="absolute -top-4 -right-4 bg-secondary p-4 rounded-xl text-white shadow-lg transform rotate-3" data-id="i2j4zt6os" data-path="components/Testimonials.js">
                <div className="text-sm" data-id="l4edlqa2v" data-path="components/Testimonials.js">
                  <div className="font-bold" data-id="3fywf5xvc" data-path="components/Testimonials.js">300+</div>
                  <div data-id="zzinl1jya" data-path="components/Testimonials.js">Connections Made</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};