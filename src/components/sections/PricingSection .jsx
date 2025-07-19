const PricingSection = () => {
  const [pricingRef, isPricingVisible] = useIntersectionObserver(0.1);
  const [resources, setResources] = useState({ cpu: 4, memory: 8, storage: 100 });
  
  const estimatedCost = Math.round((resources.cpu * 10 + resources.memory * 5 + resources.storage * 0.1) * 0.75);

  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for learning and small projects",
      features: ["2 CPU cores", "4GB RAM", "50GB storage", "Community support"],
      gradient: "from-gray-500 to-gray-600"
    },
    {
      name: "Pro",
      price: `$${estimatedCost}`,
      description: "Ideal for production applications",
      features: ["Custom resources", "Priority support", "Advanced monitoring", "SLA guarantee"],
      gradient: "from-blue-500 to-cyan-500",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Built for scale and compliance",
      features: ["Unlimited resources", "Dedicated support", "Custom integrations", "SOC 2 compliance"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section ref={pricingRef} className="py-20 px-4 sm:px-6 lg:px-8" id="pricing">
      <div className="max-w-7xl mx-auto">
        <div className={`
          text-center mb-16 transition-all duration-1000
          ${isPricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        `}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Start Free, Scale Seamlessly
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Transparent, usage-based pricing that grows with your business.
          </p>
        </div>

        {/* Interactive Resource Calculator */}
        <div className="max-w-2xl mx-auto mb-16">
          <GlassCard>
            <h3 className="text-xl font-bold text-white mb-6">Resource Calculator</h3>
            <div className="space-y-6">
              {[
                { key: 'cpu', label: 'CPU Cores', max: 32, unit: 'cores' },
                { key: 'memory', label: 'Memory', max: 128, unit: 'GB' },
                { key: 'storage', label: 'Storage', max: 1000, unit: 'GB' }
              ].map(({ key, label, max, unit }) => (
                <div key={key}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-300">{label}</span>
                    <span className="text-cyan-400">{resources[key]} {unit}</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max={max}
                    value={resources[key]}
                    onChange={(e) => setResources({ ...resources, [key]: parseInt(e.target.value) })}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              ))}
              <div className="text-center pt-4 border-t border-white/10">
                <div className="text-3xl font-bold text-white mb-2">${estimatedCost}/month</div>
                <div className="text-gray-400">Estimated cost with 25% savings vs traditional cloud</div>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`
                transition-all duration-1000 delay-${index * 200}
                ${isPricingVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                ${plan.popular ? 'transform scale-105' : ''}
              `}
            >
              <GlassCard className={`h-full relative ${plan.popular ? 'border-cyan-500/50' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">{plan.price}</div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className={`w-full bg-gradient-to-r ${plan.gradient}`}
                  size="lg"
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </GlassCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};