export function Services() {
  const services = [
    {
      icon: "🌐",
      title: "Custom Websites",
      description: "Professional, responsive websites built with the latest technologies and best practices.",
    },
    {
      icon: "📱",
      title: "Android Apps",
      description: "Feature-rich Android applications designed for performance and user engagement.",
    },
    {
      icon: "📱",
      title: "iOS Apps",
      description: "Native iOS applications that deliver seamless experiences on Apple devices.",
    },
    {
      icon: "💻",
      title: "Web Applications",
      description: "Scalable web apps with admin panels, databases, and advanced functionality.",
    },
    {
      icon: "🔒",
      title: "Security & Support",
      description: "2 months of free technical support and security maintenance included.",
    },
    {
      icon: "⚡",
      title: "Fast Deployment",
      description: "Quick turnaround times with efficient project management and delivery.",
    },
  ]

  return (
    <section id="services" className="container mx-auto px-4 md:px-6 py-20 md:py-32">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Comprehensive digital solutions tailored to your business needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="group p-6 rounded-lg border border-blue-500/20 hover:border-blue-400/50 bg-slate-900/50 hover:bg-slate-800/50 transition duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
