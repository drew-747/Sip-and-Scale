const LoadingAnimation = ({ onComplete }) => {
    React.useEffect(() => {
        // Trigger the completion after animation
        const timer = setTimeout(() => {
            onComplete();
        }, 2500); // Animation duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
            <div className="relative">
                {/* Main text animation */}
                <div className="text-4xl md:text-6xl font-bold loading-text opacity-0">
                    <span className="inline-block transform translate-y-full animate-text-up delay-100">
                        Sip
                    </span>
                    <span className="inline-block transform translate-y-full animate-text-up delay-200 mx-3">
                        &
                    </span>
                    <span className="inline-block transform translate-y-full animate-text-up delay-300">
                        Scale
                    </span>
                </div>

                {/* Animated lines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
                    <div className="absolute inset-0 animate-line-draw">
                        <svg className="w-full h-full" viewBox="0 0 400 100">
                            <path 
                                d="M0,50 Q200,0 400,50" 
                                fill="none" 
                                stroke="url(#gradient)" 
                                strokeWidth="2"
                                className="path-animation"
                            />
                            <defs>
                                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="var(--primary)" />
                                    <stop offset="50%" stopColor="var(--secondary)" />
                                    <stop offset="100%" stopColor="var(--accent)" />
                                </linearGradient>
                            </defs>
                        </svg>
                    </div>
                </div>

                {/* Animated dots */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-8 flex space-x-2">
                    <div className="w-2 h-2 rounded-full bg-primary animate-bounce delay-100"></div>
                    <div className="w-2 h-2 rounded-full bg-secondary animate-bounce delay-200"></div>
                    <div className="w-2 h-2 rounded-full bg-accent animate-bounce delay-300"></div>
                </div>
            </div>
        </div>
    );
};

export default LoadingAnimation; 