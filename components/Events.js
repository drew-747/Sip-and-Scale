// Events Component

const Events = () => {
  const upcomingEvents = getUpcomingEvents();

  const scrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="events" className="section-padding bg-white" data-id="tzs61dltx" data-path="components/Events.js">
      <div className="container mx-auto px-4 md:px-6" data-id="icrwtlvrs" data-path="components/Events.js">
        <div className="text-center mb-16" data-id="axljcrc5h" data-path="components/Events.js">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="dw4ddld7l" data-path="components/Events.js">Upcoming Dinners</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" data-id="egxmx6xq9" data-path="components/Events.js"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-id="1iadrl41s" data-path="components/Events.js">
            Our dinners are limited to small groups to ensure quality conversations and connections. 
            Secure your spot at an upcoming event!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" data-id="l33z0amy4" data-path="components/Events.js">
          {upcomingEvents.map((event) =>
          <div key={event.id} className="event-card bg-white border border-gray-100 rounded-xl overflow-hidden shadow-md" data-id="wzemk2j8o" data-path="components/Events.js">
              <div className="relative h-48 overflow-hidden" data-id="8c0wt491q" data-path="components/Events.js">
                <img
                src={event.image}
                alt={`${event.city}, ${event.country}`}
                className="w-full h-full object-cover" data-id="wdd7oz82q" data-path="components/Events.js" />

                {event.availableSpots <= 5 && event.availableSpots > 0 &&
              <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full" data-id="xnh0a6nlk" data-path="components/Events.js">
                    Only {event.availableSpots} spots left!
                  </div>
              }
                {event.availableSpots === 0 &&
              <div className="absolute top-4 right-4 bg-gray-800 text-white text-xs font-bold px-3 py-1 rounded-full" data-id="5x9w6e1se" data-path="components/Events.js">
                    Sold Out
                  </div>
              }
              </div>
              <div className="p-6" data-id="xtfs077yi" data-path="components/Events.js">
                <div className="flex items-center mb-4" data-id="75rvksyhj" data-path="components/Events.js">
                  <i className="fas fa-calendar-alt text-primary mr-2" data-id="xz0lcvoej" data-path="components/Events.js"></i>
                  <span className="text-gray-600 text-sm" data-id="e9vh2pc0n" data-path="components/Events.js">{event.date} • {event.time}</span>
                </div>
                <h3 className="text-xl font-bold text-dark mb-1" data-id="btgq2ako3" data-path="components/Events.js">
                  {event.city}
                </h3>
                <p className="text-gray-600 mb-3" data-id="x2qnpkbap" data-path="components/Events.js">{event.country}</p>
                <div className="flex items-center mb-4" data-id="1yy58uo92" data-path="components/Events.js">
                  <i className="fas fa-map-marker-alt text-primary mr-2" data-id="wgjmwd8fj" data-path="components/Events.js"></i>
                  <span className="text-gray-600 text-sm" data-id="zl0h3z50s" data-path="components/Events.js">{event.venue}</span>
                </div>
                <div className="flex items-center justify-between" data-id="rvb2xqa3d" data-path="components/Events.js">
                  <div className="text-sm text-gray-600" data-id="dgpt03t4s" data-path="components/Events.js">
                    <span className="font-semibold" data-id="hoz6nzfpp" data-path="components/Events.js">{event.availableSpots}</span> of {event.capacity} spots available
                  </div>
                  <button
                  onClick={scrollToRegister}
                  disabled={event.availableSpots === 0}
                  className={`px-3 py-1 rounded-full text-sm font-bold ${
                  event.availableSpots === 0 ?
                  'bg-gray-200 text-gray-500 cursor-not-allowed' :
                  'bg-primary text-white hover:bg-opacity-90'} transition-all`
                  } data-id="roni0kmnj" data-path="components/Events.js">

                    {event.availableSpots === 0 ? 'Sold Out' : 'RSVP'}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-16 bg-gray-50 rounded-2xl p-8 md:p-12" data-id="90blgr8tl" data-path="components/Events.js">
          <div className="grid md:grid-cols-2 gap-8 items-center" data-id="fbj86a4d7" data-path="components/Events.js">
            <div data-id="xe1uf92sb" data-path="components/Events.js">
              <h3 className="text-2xl md:text-3xl font-bold mb-4" data-id="oec8q9sbx" data-path="components/Events.js">What happens at a Sip & Scale dinner?</h3>
              <div className="space-y-4 mb-6" data-id="zvsr7hxf2" data-path="components/Events.js">
                <div className="flex" data-id="wp2230npt" data-path="components/Events.js">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4" data-id="dpsfofyd5" data-path="components/Events.js">
                    1
                  </div>
                  <div data-id="8myia04bd" data-path="components/Events.js">
                    <h4 className="font-bold text-lg" data-id="ezj9hv8vl" data-path="components/Events.js">Welcome & Introductions</h4>
                    <p className="text-gray-600" data-id="gjux7l526" data-path="components/Events.js">Everyone gets a chance to introduce themselves briefly.</p>
                  </div>
                </div>
                <div className="flex" data-id="l36etjkj8" data-path="components/Events.js">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4" data-id="623ecqb3x" data-path="components/Events.js">
                    2
                  </div>
                  <div data-id="c66q3aswo" data-path="components/Events.js">
                    <h4 className="font-bold text-lg" data-id="eqmrgg6hu" data-path="components/Events.js">Dinner & Discussions</h4>
                    <p className="text-gray-600" data-id="l3jvsgqda" data-path="components/Events.js">Enjoy a great meal while engaging in organic conversations.</p>
                  </div>
                </div>
                <div className="flex" data-id="gsttsw5ld" data-path="components/Events.js">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4" data-id="5uqjlerdh" data-path="components/Events.js">
                    3
                  </div>
                  <div data-id="e06sob3km" data-path="components/Events.js">
                    <h4 className="font-bold text-lg" data-id="6c0p6lc8r" data-path="components/Events.js">Guided Activity</h4>
                    <p className="text-gray-600" data-id="ds6ipt2ll" data-path="components/Events.js">A short activity to spark deeper conversations around innovation.</p>
                  </div>
                </div>
                <div className="flex" data-id="2zrr7acg3" data-path="components/Events.js">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center mr-4" data-id="796fmjhva" data-path="components/Events.js">
                    4
                  </div>
                  <div data-id="az2gkblx7" data-path="components/Events.js">
                    <h4 className="font-bold text-lg" data-id="xhwrtu3oy" data-path="components/Events.js">Open Networking</h4>
                    <p className="text-gray-600" data-id="mgqg77ula" data-path="components/Events.js">Continue conversations and exchange contacts.</p>
                  </div>
                </div>
              </div>
              <button
                onClick={scrollToRegister}
                className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-opacity-90 transition-all btn-primary" data-id="dcpowqr99" data-path="components/Events.js">

                Join Next Dinner
              </button>
            </div>
            <div className="relative" data-id="su0c3i2pe" data-path="components/Events.js">
              <img
                src="https://placehold.co/800x500/5E17EB/FFFFFF?text=Dinner+Experience"
                alt="Sip & Scale dinner experience"
                className="rounded-xl shadow-lg w-full h-auto" data-id="u4dfihg4v" data-path="components/Events.js" />

              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg" data-id="mpfx0uzy6" data-path="components/Events.js">
                <div className="flex items-center" data-id="yrd7gil9k" data-path="components/Events.js">
                  <div className="flex -space-x-2 mr-4" data-id="tfeagf63s" data-path="components/Events.js">
                    <img src="https://placehold.co/64x64/FF6B6B/FFFFFF?text=A" alt="Attendee" className="w-10 h-10 rounded-full border-2 border-white" data-id="2ccyjy872" data-path="components/Events.js" />
                    <img src="https://placehold.co/64x64/FFD166/FFFFFF?text=B" alt="Attendee" className="w-10 h-10 rounded-full border-2 border-white" data-id="c7jhlw9rc" data-path="components/Events.js" />
                    <img src="https://placehold.co/64x64/5E17EB/FFFFFF?text=C" alt="Attendee" className="w-10 h-10 rounded-full border-2 border-white" data-id="290k38xi1" data-path="components/Events.js" />
                  </div>
                  <div className="text-sm" data-id="g4ww6g163" data-path="components/Events.js">
                    <p className="font-bold" data-id="057yb52i9" data-path="components/Events.js">Happy Attendees</p>
                    <p className="text-gray-600" data-id="ick3y28fx" data-path="components/Events.js">95% satisfaction rate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

};