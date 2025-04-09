const CityLeads = () => {
    const cityLeads = [
        {
            name: "Sarah Johnson",
            city: "San Francisco",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
            bio: "Tech entrepreneur and community builder. Passionate about connecting innovators and creating meaningful experiences.",
            linkedin: "https://linkedin.com/in/sarahjohnson"
        },
        {
            name: "Michael Chen",
            city: "New York",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
            bio: "Startup founder and angel investor. Dedicated to fostering the next generation of tech leaders.",
            linkedin: "https://linkedin.com/in/michaelchen"
        },
        {
            name: "Emma Rodriguez",
            city: "London",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
            bio: "Venture capitalist and startup mentor. Focused on building strong tech communities across Europe.",
            linkedin: "https://linkedin.com/in/emmarodriguez"
        }
    ];

    return (
        <section className="section-padding bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-4">Meet Our City Leads</h2>
                <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Passionate leaders driving innovation and connection in their cities
                </p>
                
                <div className="grid-modern">
                    {cityLeads.map((lead, index) => (
                        <div key={index} className="city-lead-card animate-on-scroll">
                            <img 
                                src={lead.image} 
                                alt={lead.name}
                                className="city-lead-image"
                            />
                            <h3 className="text-2xl font-bold text-center mb-2">{lead.name}</h3>
                            <p className="text-primary text-center font-medium mb-4">{lead.city}</p>
                            <p className="city-lead-bio mb-6">{lead.bio}</p>
                            <div className="text-center">
                                <a 
                                    href={lead.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center text-primary hover:text-secondary transition-colors"
                                >
                                    <i className="fab fa-linkedin text-xl mr-2"></i>
                                    Connect on LinkedIn
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CityLeads; 