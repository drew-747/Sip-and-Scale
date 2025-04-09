// Footer Component

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-dark text-white" data-id="4gefo7zdi" data-path="components/Footer.js">
      <div className="container mx-auto px-4 md:px-6 py-12" data-id="mz4slsjtj" data-path="components/Footer.js">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12" data-id="wetqnj94g" data-path="components/Footer.js">
          <div data-id="mpgpot4zu" data-path="components/Footer.js">
            <div className="flex items-center mb-4" data-id="o0fow4rfb" data-path="components/Footer.js">
              <img src="https://newoaks.s3.us-west-1.amazonaws.com/AutoDev/9838/86599a77-92a7-498c-b0f4-a305f3f6f52b.png" alt="Sip & Scale Logo" className="h-8 mr-2" data-id="iii5snmai" data-path="components/Footer.js" />
              <h3 className="text-xl font-bold" data-id="2c9vgd4kb" data-path="components/Footer.js">Sip & Scale</h3>
            </div>
            <p className="text-gray-400 mb-4" data-id="yiefb0nff" data-path="components/Footer.js">
              A community-driven dinner series connecting students, founders, and innovators in cities around the world.
            </p>
            <div className="flex space-x-4" data-id="0kaj1dvoh" data-path="components/Footer.js">
              <a href="#" className="text-white hover:text-primary transition-colors" data-id="jyj875vsf" data-path="components/Footer.js">
                <i className="fab fa-instagram text-xl" data-id="q9z7031ke" data-path="components/Footer.js"></i>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" data-id="c2jx9y6xx" data-path="components/Footer.js">
                <i className="fab fa-twitter text-xl" data-id="aeq7l9md2" data-path="components/Footer.js"></i>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" data-id="51huvqzbb" data-path="components/Footer.js">
                <i className="fab fa-linkedin-in text-xl" data-id="g2krcd551" data-path="components/Footer.js"></i>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors" data-id="46lhzpazy" data-path="components/Footer.js">
                <i className="fab fa-facebook-f text-xl" data-id="wru940n3z" data-path="components/Footer.js"></i>
              </a>
            </div>
          </div>
          
          <div data-id="sfhqx1b89" data-path="components/Footer.js">
            <h4 className="text-lg font-bold mb-4" data-id="xu4mc6bkn" data-path="components/Footer.js">Quick Links</h4>
            <ul className="space-y-2" data-id="kbhldd4se" data-path="components/Footer.js">
              <li data-id="1nnjhc3h5" data-path="components/Footer.js">
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-gray-400 hover:text-white transition-colors" data-id="4rabbioc7" data-path="components/Footer.js">

                  About
                </button>
              </li>
              <li data-id="sxw4qtkj4" data-path="components/Footer.js">
                <button
                  onClick={() => scrollToSection('cities')}
                  className="text-gray-400 hover:text-white transition-colors" data-id="5slgnxvmr" data-path="components/Footer.js">

                  Cities
                </button>
              </li>
              <li data-id="s3v3p4a3l" data-path="components/Footer.js">
                <button
                  onClick={() => scrollToSection('events')}
                  className="text-gray-400 hover:text-white transition-colors" data-id="fwd9de2va" data-path="components/Footer.js">

                  Events
                </button>
              </li>
              <li data-id="l2z1u9qnw" data-path="components/Footer.js">
                <button
                  onClick={() => scrollToSection('testimonials')}
                  className="text-gray-400 hover:text-white transition-colors" data-id="3q2ts9ref" data-path="components/Footer.js">

                  Success Stories
                </button>
              </li>
              <li data-id="4u06omizn" data-path="components/Footer.js">
                <button
                  onClick={() => scrollToSection('register')}
                  className="text-gray-400 hover:text-white transition-colors" data-id="cp42uop23" data-path="components/Footer.js">

                  Join Us
                </button>
              </li>
            </ul>
          </div>
          
          <div data-id="9c8iqd6o7" data-path="components/Footer.js">
            <h4 className="text-lg font-bold mb-4" data-id="28nxbtj65" data-path="components/Footer.js">Upcoming Cities</h4>
            <ul className="space-y-2" data-id="csx55pb6w" data-path="components/Footer.js">
              <li className="text-gray-400" data-id="3bxik4mrp" data-path="components/Footer.js">Helsinki, Finland</li>
              <li className="text-gray-400" data-id="wu92nrycl" data-path="components/Footer.js">Manila, Philippines</li>
              <li className="text-gray-400" data-id="f4lp6f0fs" data-path="components/Footer.js">Singapore</li>
              <li className="text-gray-400" data-id="hxzhgbyo8" data-path="components/Footer.js">New York, USA</li>
            </ul>
          </div>
          
          <div data-id="jet9lj934" data-path="components/Footer.js">
            <h4 className="text-lg font-bold mb-4" data-id="r4s7u1bow" data-path="components/Footer.js">Contact Us</h4>
            <ul className="space-y-3" data-id="9aj3ssta1" data-path="components/Footer.js">
              <li className="flex items-start" data-id="a6h0ub9md" data-path="components/Footer.js">
                <i className="fas fa-envelope text-primary mt-1 mr-3" data-id="jn5b5q3gl" data-path="components/Footer.js"></i>
                <span className="text-gray-400" data-id="ttmprx4qi" data-path="components/Footer.js">hello@sipandscale.com</span>
              </li>
              <li className="flex items-start" data-id="xq5npes04" data-path="components/Footer.js">
                <i className="fas fa-globe text-primary mt-1 mr-3" data-id="zeehs3zzs" data-path="components/Footer.js"></i>
                <span className="text-gray-400" data-id="tqchb7vfs" data-path="components/Footer.js">www.sipandscale.com</span>
              </li>
              <li data-id="wz32qy6md" data-path="components/Footer.js">
                <button className="bg-primary text-white px-4 py-2 rounded-lg mt-2 hover:bg-opacity-90 transition-all" data-id="nmxm5axrh" data-path="components/Footer.js">
                  <i className="fas fa-envelope mr-2" data-id="h6xp5rs8t" data-path="components/Footer.js"></i>
                  Newsletter
                </button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8" data-id="x1np01tqh" data-path="components/Footer.js">
          <div className="flex flex-col md:flex-row justify-between items-center" data-id="pkp2fqkc3" data-path="components/Footer.js">
            <p className="text-gray-500 text-sm mb-4 md:mb-0" data-id="j5gb5su0a" data-path="components/Footer.js">
              &copy; {currentYear} Sip & Scale. All rights reserved.
            </p>
            <div className="flex space-x-6" data-id="q1k2k3iot" data-path="components/Footer.js">
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors" data-id="6uei6bdpt" data-path="components/Footer.js">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors" data-id="1vcmyapdn" data-path="components/Footer.js">
                Terms of Service
              </a>
              <a href="#" className="text-gray-500 text-sm hover:text-white transition-colors" data-id="d4ak1fsil" data-path="components/Footer.js">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>);

};