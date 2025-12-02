export function Pricing() {
  const plans = [
    {
      name: "WordPress Website",
      price: "₹10,000 - 20,000",
      description: "Professional WordPress website for your business",
      features: ["Responsive design", "SEO optimized", "Contact forms", "Basic customization", "Mobile friendly"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Custom Website with Admin Panel",
      price: "₹30,000 - 50,000",
      description: "Full-featured website with admin dashboard",
      features: [
        "Custom design & development",
        "Admin panel included",
        "Database integration",
        "2 months free support",
        "Advanced features",
        "Security & SSL",
      ],
      cta: "Consult Now",
      highlighted: true,
    },
    {
      name: "Mobile Apps (Android/iOS)",
      price: "₹50,000+",
      description: "Native mobile applications for your service",
      features: [
        "Native app development",
        "iOS & Android",
        "App store deployment",
        "2 months free support",
        "Performance optimized",
        "Real-time updates",
      ],
      cta: "Discuss Project",
      highlighted: false,
    },
  ]

  return (
    <section id="pricing" className="container mx-auto px-4 md:px-6 py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Simple Pricing</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Flexible packages starting from ₹10,000. Choose what suits your needs.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative rounded-lg border transition duration-300 p-8 flex flex-col ${
              plan.highlighted
                ? "border-blue-400/80 bg-gradient-to-br from-blue-950/50 to-purple-950/30 ring-2 ring-blue-400/30 md:scale-105"
                : "border-blue-500/20 hover:border-blue-400/50 bg-slate-900/50 hover:bg-slate-800/50"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold rounded-full">
                Most Popular
              </div>
            )}

            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
            <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
            <p className="text-3xl font-bold text-white mb-6">
              {plan.price}
              <span className="text-lg font-normal text-gray-400">/project</span>
            </p>

            <ul className="space-y-3 mb-8 flex-grow">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-2 text-gray-300">
                  <span className="text-blue-400 font-bold mt-0.5">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <a
              href="https://wa.me/7000015122"
              target="_blank"
              rel="noopener noreferrer"
              className={`w-full py-3 rounded-lg font-semibold transition text-center ${
                plan.highlighted
                  ? "bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white"
                  : "border border-blue-400/50 text-blue-400 hover:bg-blue-500/10"
              }`}
            >
              {plan.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
