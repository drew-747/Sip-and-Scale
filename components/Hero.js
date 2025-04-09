// Hero Component

const Hero = () => {
  const scrollToRegister = () => {
    const registerSection = document.getElementById('register');
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-90">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAzNGM0LjQxOCAwIDgtMy41ODIgOC04cy0zLjU4Mi04LTgtOC04IDMuNTgyLTggOCAzLjU4MiA4IDggOHoiIHN0cm9rZT0iI0ZGRiIgc3Ryb2tlLW9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white">
            Connect. Dine. <span className="text-accent">Innovate.</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">
            Join a global dinner series connecting students, founders, and innovators
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#register" 
              className="btn-primary bg-white text-primary hover:bg-accent hover:text-white transition-all duration-300"
            >
              Join the Next Dinner
            </a>
            <a 
              href="#cities" 
              className="btn-primary bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-300"
            >
              Find Your City
            </a>
          </div>
        </div>

        {/* Animated stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20">
          {[
            { number: "50+", label: "Cities" },
            { number: "1000+", label: "Members" },
            { number: "200+", label: "Events" },
            { number: "24", label: "Countries" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="glass-card p-6 text-center animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-light to-transparent"></div>
    </section>
  );
};

export default Hero;