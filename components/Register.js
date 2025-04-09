// Register Component

const Register = () => {
  const upcomingEvents = getUpcomingEvents();

  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    role: '',
    city: '',
    motivation: '',
    agreeToTerms: false
  });

  const [formSubmitted, setFormSubmitted] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setFormSubmitted(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        role: '',
        city: '',
        motivation: '',
        agreeToTerms: false
      });
    }, 1500);
  };

  return (
    <section id="register" className="section-padding bg-white" data-id="zpgumj3aq" data-path="components/Register.js">
      <div className="container mx-auto px-4 md:px-6" data-id="3ddrg0uen" data-path="components/Register.js">
        <div className="text-center mb-16" data-id="k9ztcl56e" data-path="components/Register.js">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" data-id="0a8aux4i7" data-path="components/Register.js">Join the Community</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6 rounded-full" data-id="ys2p9tnfm" data-path="components/Register.js"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto" data-id="997olwpft" data-path="components/Register.js">
            Reserve your spot at an upcoming Sip & Scale dinner or express interest in future events in your city.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start" data-id="xta5shpn8" data-path="components/Register.js">
          <div data-id="oha0tbitj" data-path="components/Register.js">
            <h3 className="text-2xl font-bold mb-6" data-id="4e7yxe6hh" data-path="components/Register.js">Why Join Sip & Scale?</h3>
            <div className="space-y-6 mb-8" data-id="fdh7emk2a" data-path="components/Register.js">
              <div className="flex" data-id="6xlz45e3l" data-path="components/Register.js">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center mr-4" data-id="t9ratg77s" data-path="components/Register.js">
                  <i className="fas fa-users text-xl" data-id="e68t562z6" data-path="components/Register.js"></i>
                </div>
                <div data-id="0dn0h999o" data-path="components/Register.js">
                  <h4 className="font-bold text-lg mb-2" data-id="aw6hw7vk9" data-path="components/Register.js">Meaningful Connections</h4>
                  <p className="text-gray-600" data-id="m25v7r9xz" data-path="components/Register.js">Meet fellow founders, innovators, and professionals in an intimate, pressure-free environment.</p>
                </div>
              </div>
              <div className="flex" data-id="gq8dtxuoy" data-path="components/Register.js">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center mr-4" data-id="ysyz4kxuh" data-path="components/Register.js">
                  <i className="fas fa-comments text-xl" data-id="oc0w581hz" data-path="components/Register.js"></i>
                </div>
                <div data-id="l9iy5hfmw" data-path="components/Register.js">
                  <h4 className="font-bold text-lg mb-2" data-id="72ovw9b5r" data-path="components/Register.js">Quality Conversations</h4>
                  <p className="text-gray-600" data-id="4pxxba7b9" data-path="components/Register.js">Engage in deep discussions about innovation, entrepreneurship, and shared challenges.</p>
                </div>
              </div>
              <div className="flex" data-id="tm1p80eq9" data-path="components/Register.js">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center mr-4" data-id="b420bihr6" data-path="components/Register.js">
                  <i className="fas fa-lightbulb text-xl" data-id="x4oxvv58a" data-path="components/Register.js"></i>
                </div>
                <div data-id="ebaokp47t" data-path="components/Register.js">
                  <h4 className="font-bold text-lg mb-2" data-id="hbl8b6j71" data-path="components/Register.js">New Opportunities</h4>
                  <p className="text-gray-600" data-id="2unu9tbzs" data-path="components/Register.js">Discover potential collaborations, partnerships, investments, and friendships.</p>
                </div>
              </div>
              <div className="flex" data-id="9abwjaqxh" data-path="components/Register.js">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary bg-opacity-10 text-primary flex items-center justify-center mr-4" data-id="8y0ol4p9z" data-path="components/Register.js">
                  <i className="fas fa-globe text-xl" data-id="dryl6k2lu" data-path="components/Register.js"></i>
                </div>
                <div data-id="u50lpfa1i" data-path="components/Register.js">
                  <h4 className="font-bold text-lg mb-2" data-id="8a26ldx0l" data-path="components/Register.js">Global Community</h4>
                  <p className="text-gray-600" data-id="egxclufng" data-path="components/Register.js">Join a growing network of innovators across multiple cities and countries.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl" data-id="d46q1jbn5" data-path="components/Register.js">
              <h4 className="font-bold text-lg mb-4" data-id="8cgizni86" data-path="components/Register.js">Upcoming Dinners</h4>
              <div className="space-y-4" data-id="0iyke6o41" data-path="components/Register.js">
                {upcomingEvents.slice(0, 3).map((event) =>
                <div key={event.id} className="flex items-center" data-id="yc00uuz18" data-path="components/Register.js">
                    <div className="w-16 h-16 rounded-lg overflow-hidden mr-4 flex-shrink-0" data-id="xb8xzw326" data-path="components/Register.js">
                      <img
                      src={event.image}
                      alt={event.city}
                      className="w-full h-full object-cover" data-id="hezhk67jr" data-path="components/Register.js" />

                    </div>
                    <div data-id="6ywdvkzjh" data-path="components/Register.js">
                      <h5 className="font-bold" data-id="etubk5jrb" data-path="components/Register.js">{event.city}, {event.country}</h5>
                      <p className="text-gray-600 text-sm" data-id="xox2atlsw" data-path="components/Register.js">{event.date} • {event.time}</p>
                      <div className="flex items-center mt-1" data-id="4nm8xyfpe" data-path="components/Register.js">
                        <span className="text-xs bg-primary bg-opacity-10 text-primary px-2 py-0.5 rounded-full" data-id="3v47pv6lk" data-path="components/Register.js">
                          {event.availableSpots === 0 ? 'Sold Out' : `${event.availableSpots} spots left`}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl shadow-md" data-id="noudxuxlx" data-path="components/Register.js">
            {formSubmitted ?
            <div className="text-center py-8" data-id="tlsbytobx" data-path="components/Register.js">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4" data-id="3lwgyiw1d" data-path="components/Register.js">
                  <i className="fas fa-check text-2xl" data-id="ot9hszq9b" data-path="components/Register.js"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4" data-id="ycfgzx8eg" data-path="components/Register.js">Thank You for Registering!</h3>
                <p className="text-gray-600 mb-8" data-id="vk7fyc9zw" data-path="components/Register.js">
                  We've received your information and will be in touch soon with details about the upcoming Sip & Scale dinner in your city.
                </p>
                <button
                onClick={() => setFormSubmitted(false)}
                className="px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-opacity-90 transition-all btn-primary" data-id="1iosrid0q" data-path="components/Register.js">

                  Register for Another Event
                </button>
              </div> :

            <>
                <h3 className="text-2xl font-bold mb-6" data-id="9s2eyogtb" data-path="components/Register.js">Register for an Event</h3>
                <form onSubmit={handleSubmit} data-id="xk1vyyh7z" data-path="components/Register.js">
                  <div className="space-y-4 mb-6" data-id="oh6t29tl5" data-path="components/Register.js">
                    <div data-id="ck8mgzbzl" data-path="components/Register.js">
                      <label htmlFor="name" className="block text-gray-700 font-medium mb-2" data-id="rd3q71u19" data-path="components/Register.js">Full Name</label>
                      <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name" data-id="yojybz5sb" data-path="components/Register.js" />

                    </div>
                    <div data-id="l2jq48arl" data-path="components/Register.js">
                      <label htmlFor="email" className="block text-gray-700 font-medium mb-2" data-id="2xf5e1jrk" data-path="components/Register.js">Email</label>
                      <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your.email@example.com" data-id="hfoqaxw0u" data-path="components/Register.js" />

                    </div>
                    <div data-id="o1w41vmll" data-path="components/Register.js">
                      <label htmlFor="role" className="block text-gray-700 font-medium mb-2" data-id="v109yz1u8" data-path="components/Register.js">Your Role</label>
                      <select
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white" data-id="1ostrqyhb" data-path="components/Register.js">

                        <option value="" disabled data-id="4tkmb0mdv" data-path="components/Register.js">Select your role</option>
                        <option value="student" data-id="gywkg06pq" data-path="components/Register.js">Student</option>
                        <option value="founder" data-id="kjg4tuvvf" data-path="components/Register.js">Startup Founder</option>
                        <option value="professional" data-id="yv42ggk7a" data-path="components/Register.js">Professional</option>
                        <option value="investor" data-id="r1945t48o" data-path="components/Register.js">Investor</option>
                        <option value="other" data-id="omxldhrov" data-path="components/Register.js">Other</option>
                      </select>
                    </div>
                    <div data-id="5q5ztcv4a" data-path="components/Register.js">
                      <label htmlFor="city" className="block text-gray-700 font-medium mb-2" data-id="fuxlxy7aj" data-path="components/Register.js">Preferred City</label>
                      <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary appearance-none bg-white" data-id="9ytlivpnc" data-path="components/Register.js">

                        <option value="" disabled data-id="6ol9p56th" data-path="components/Register.js">Select a city</option>
                        {upcomingEvents.map((event) =>
                      <option key={event.id} value={event.city} data-id="w1ikmvfk8" data-path="components/Register.js">
                            {event.city}, {event.country} - {event.date}
                          </option>
                      )}
                        <option value="other" data-id="ypf5ykjh7" data-path="components/Register.js">Other (Future Event)</option>
                      </select>
                    </div>
                    <div data-id="k9wx1goxr" data-path="components/Register.js">
                      <label htmlFor="motivation" className="block text-gray-700 font-medium mb-2" data-id="6elq4zniw" data-path="components/Register.js">Why are you interested in Sip & Scale?</label>
                      <textarea
                      id="motivation"
                      name="motivation"
                      value={formData.motivation}
                      onChange={handleChange}
                      rows="3"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us a bit about why you'd like to join..." data-id="sg5w554jm" data-path="components/Register.js">
                    </textarea>
                    </div>
                    <div className="flex items-start" data-id="6ffo94zfi" data-path="components/Register.js">
                      <input
                      type="checkbox"
                      id="agreeToTerms"
                      name="agreeToTerms"
                      checked={formData.agreeToTerms}
                      onChange={handleChange}
                      required
                      className="mt-1 mr-2" data-id="xsxp8y541" data-path="components/Register.js" />

                      <label htmlFor="agreeToTerms" className="text-gray-600 text-sm" data-id="7e13g2q95" data-path="components/Register.js">
                        I agree to receive emails about upcoming events and community updates. We respect your privacy and will never share your information.
                      </label>
                    </div>
                  </div>
                
                  {error &&
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg" data-id="bifiwhmge" data-path="components/Register.js">
                      {error}
                    </div>
                }
                
                  <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full px-6 py-3 bg-primary text-white rounded-full font-bold hover:bg-opacity-90 transition-all btn-primary flex items-center justify-center" data-id="f9n6myozh" data-path="components/Register.js">

                    {isLoading ?
                  <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" data-id="ozeo76r09" data-path="components/Register.js">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" data-id="drov41zl6" data-path="components/Register.js"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" data-id="g4tgixm24" data-path="components/Register.js"></path>
                        </svg>
                        Processing...
                      </> :

                  'Secure Your Spot'
                  }
                  </button>
                </form>
              </>
            }
          </div>
        </div>
      </div>
    </section>);

};