// Main App Component

const App = () => {
  const [loading, setLoading] = React.useState(true);
  const [contentVisible, setContentVisible] = React.useState(false);

  React.useEffect(() => {
    // Handle smooth scroll behavior for anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });

    // Add scroll event listener for animations
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach((element) => {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight && position.bottom >= 0) {
          element.classList.add('animated');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle loading animation completion
  const handleLoadingComplete = () => {
    setLoading(false);
    // Add a small delay before showing content
    setTimeout(() => {
      setContentVisible(true);
    }, 100);
  };

  return (
    <React.Fragment>
      {loading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      <div className={`site-content ${contentVisible ? 'visible' : ''}`}>
        <Navbar />
        <Hero />
        <About />
        <Cities />
        <CityLeads />
        <Events />
        <Testimonials />
        <Register />
        <Footer />
      </div>
    </React.Fragment>
  );
};

// Create root and render app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);