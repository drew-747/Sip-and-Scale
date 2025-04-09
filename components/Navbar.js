// Navbar Component

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center space-x-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Sip & Scale
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-dark hover:text-primary transition-colors">About</a>
            <a href="#cities" className="text-dark hover:text-primary transition-colors">Cities</a>
            <a href="#events" className="text-dark hover:text-primary transition-colors">Events</a>
            <a href="#testimonials" className="text-dark hover:text-primary transition-colors">Testimonials</a>
            <a 
              href="#register" 
              className="btn-primary px-4 py-2 text-sm"
            >
              Join Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-dark">
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;