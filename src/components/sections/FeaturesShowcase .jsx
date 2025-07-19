const FeaturesShowcase = () => {
  const [featuresRef, isFeaturesVisible] = useIntersectionObserver(0.1);

  const features = [
    {
      title: "Meta-Orchestration",
      description: "Manage multi-cloud infrastructure from a single control plane",
      icon: Settings,
      demo: "Live multi-cloud dashboard preview"
    },
    {
      title: "Developer-First UX",
      description: "Intuitive APIs and CLI tools built for modern development workflows",
      icon: Code,
      demo: "Interactive code editor"
    },
    {
      title: "Edge Computing",
      description: "Deploy workloads closer to users for ultra-low latency",
      icon: Zap,
      demo: "Real-time latency map"
    },
    {
      title: "AI/ML Optimization",
      description: "Purpose-built infrastructure for machine learning workloads",
      icon: Brain,
      demo: "Performance analytics"
    },
    {
      title: "Sustainability",
      description: "Carbon-efficient computing with renewable energy tracking",
      icon: Leaf,
      demo: "Carbon footprint tracker"
    },
    {
      title: "Enterprise Security",
      description: "Zero-trust architecture with end-to-end encryption",
      icon: Shield,
      demo: "Security dashboard"
    }
  ];

  return (
    <section ref={featuresRef} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className={`
          text-center mb-16 transition-all duration-1000
          ${isFeaturesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need. Nothing You Don't.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive platform features designed for modern infrastructure needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`
                transition-all duration-1000 delay-${index * 100}
                ${isFeaturesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              <GlassCard className="h-full group">
                <feature.icon className="w-12 h-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <div className="text-sm text-cyan-400 font-medium">{feature.demo}</div>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
