const DeveloperResourcesSection = () => {
  const [resourcesRef, isResourcesVisible] = useIntersectionObserver(0.1);
  
  const resources = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API references",
      icon: BookOpen,
      stats: "500+ pages",
      link: "#docs",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "API Playground",
      description: "Interactive testing environment",
      icon: Code,
      stats: "Live testing",
      link: "#api",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Community",
      description: "Connect with developers worldwide",
      icon: Users,
      stats: "5K+ members",
      link: "#community",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "GitHub",
      description: "Open source tools and examples",
      icon: GitBranch,
      stats: "2.5K stars",
      link: "#github",
      gradient: "from-gray-500 to-gray-600"
    }
  ];

  return (
    <section ref={resourcesRef} className="py-20 px-4 sm:px-6 lg:px-8" id="docs">
      <div className="max-w-7xl mx-auto">
        <div className={`
          text-center mb-16 transition-all duration-1000
          ${isResourcesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Built for Developers, by Developers
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to build, deploy, and scale with RoDAC.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <div
              key={resource.title}
              className={`
                transition-all duration-1000 delay-${index * 100}
                ${isResourcesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
              <GlassCard className="h-full group cursor-pointer">
                <div className={`
                  w-16 h-16 rounded-2xl bg-gradient-to-r ${resource.gradient} 
                  flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300
                `}>
                  <resource.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                <p className="text-gray-400 mb-4">{resource.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-cyan-400 font-medium">{resource.stats}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 group-hover:translate-x-1 transition-all duration-200" />
                </div>
              </GlassCard>
            </div>
          ))}
        </div>

        {/* Code Example */}
        <div className="mt-16">
          <GlassCard className="p-0 overflow-hidden">
            <div className="bg-black/50 p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400 ml-4">Quick Start Example</span>
                </div>
                <Button size="sm" variant="ghost">
                  <ExternalLink size={16} className="mr-1" />
                  Open in Playground
                </Button>
              </div>
              <pre className="text-green-400 font-mono text-sm leading-relaxed">
                <code>{`# Install RoDAC CLI
npm install -g @rodac/cli

# Initialize new project  
rodac init my-app --template=nextjs

# Deploy globally
rodac deploy --regions=global

# Scale automatically
rodac scale --min=2 --max=10 --cpu-target=70%`}</code>
              </pre>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
};