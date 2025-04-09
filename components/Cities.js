// Cities Component

const Cities = () => {
  const cities = getEventCities();
  const activeCount = cities.filter((city) => city.status === "active").length;

  return (
    <section id="cities" className="section-padding bg-gray-50" data-id="4chjnxqgm" data-path="components/Cities.js">
      <div className="container mx-auto px-4 md:px-6" data-id="wtcl1yhw4" data-path="components/Cities.js">
        <div className="text-center mb-16" data-id="c0o7z6lff" data-path="components/Cities.js">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="n9eao0a9v" data-path="components/Cities.js">Our Global Community</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" data-id="snhri7fat" data-path="components/Cities.js"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-id="53ejab9xv" data-path="components/Cities.js">
            From Manila to New York, we're building communities of innovators around the world. 
            With {activeCount} active cities and more coming soon, there's likely a Sip & Scale dinner near you.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" data-id="p97swejjw" data-path="components/Cities.js">
          {cities.map((city) =>
          <div key={city.id} className="city-card bg-white rounded-xl overflow-hidden shadow-md" data-id="zsqkv8ecj" data-path="components/Cities.js">
              <div className="relative h-48 overflow-hidden" data-id="fovrqcgzo" data-path="components/Cities.js">
                <img
                src={city.image}
                alt={`${city.name}, ${city.country}`}
                className="w-full h-full object-cover" data-id="znvvryx0m" data-path="components/Cities.js" />

                {city.status === 'upcoming' &&
              <div className="absolute top-4 right-4 bg-secondary text-white text-xs font-bold px-3 py-1 rounded-full" data-id="lxsvabs6v" data-path="components/Cities.js">
                    Coming Soon
                  </div>
              }
              </div>
              <div className="p-6" data-id="3u8tkm6ir" data-path="components/Cities.js">
                <h3 className="text-xl font-bold text-dark mb-1" data-id="krmsgatn6" data-path="components/Cities.js">
                  {city.name}
                </h3>
                <p className="text-gray-600 mb-4" data-id="s6f11wzag" data-path="components/Cities.js">{city.country}</p>
                <div className="flex justify-between items-center" data-id="jqjkznz8v" data-path="components/Cities.js">
                  {city.status === 'active' ?
                <div className="text-sm text-gray-600" data-id="uq6gnosr1" data-path="components/Cities.js">
                      <span className="font-semibold" data-id="895wuw3uv" data-path="components/Cities.js">{city.attendees}+</span> community members
                    </div> :

                <div className="text-sm text-gray-600" data-id="bif1wlvox" data-path="components/Cities.js">
                      Launching soon
                    </div>
                }
                  
                  <div className={`flex items-center ${city.status === 'active' ? 'text-green-600' : 'text-gray-400'}`} data-id="pp4d1rrhw" data-path="components/Cities.js">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${city.status === 'active' ? 'bg-green-600' : 'bg-gray-400'}`} data-id="j4xrq6q1g" data-path="components/Cities.js"></span>
                    <span className="text-sm" data-id="3rjhybqx7" data-path="components/Cities.js">{city.status === 'active' ? 'Active' : 'Upcoming'}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="text-center mt-12" data-id="hi2n6krbz" data-path="components/Cities.js">
          <div className="inline-block px-4 py-1 rounded-full bg-primary bg-opacity-10 text-primary mb-4" data-id="j7tifsgbf" data-path="components/Cities.js">
            <span className="text-sm font-medium" data-id="zo2bk6xb0" data-path="components/Cities.js">Want to bring Sip & Scale to your city?</span>
          </div>
          <h3 className="text-2xl font-bold mb-6" data-id="akbudwksx" data-path="components/Cities.js">Interested in launching Sip & Scale in your city?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8" data-id="axya1pikv" data-path="components/Cities.js">
            We're always looking for passionate community builders to help us expand. 
            If you're interested in bringing Sip & Scale to your city, we'd love to hear from you!
          </p>
          <button className="px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-opacity-90 transition-all btn-primary" data-id="wxaskkkke" data-path="components/Cities.js">
            Become a Host
          </button>
        </div>
      </div>
    </section>);

};