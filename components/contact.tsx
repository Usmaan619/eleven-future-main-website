export function Contact() {
  const whatsappMessage =
    "Hi Eleven Future Technologies! I'm interested in discussing a project. Can you help me with a custom website/app? Please send me more details about your services and pricing."

  return (
    <section id="contact" className="container mx-auto px-4 md:px-6 py-20 md:py-32">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-gray-400 text-lg">
            Ready to transform your vision into reality? Get in touch with us today for a free consultation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <a
            href={`https://wa.me/7000015122?text=${encodeURIComponent(whatsappMessage)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-lg border border-blue-500/20 hover:border-green-400/50 bg-slate-900/50 hover:bg-slate-800/50 transition text-center cursor-pointer group"
          >
            <svg
              className="w-8 h-8 text-green-500 mx-auto mb-3 group-hover:scale-110 transition"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <h3 className="font-semibold text-white mb-1">WhatsApp</h3>
            <p className="text-gray-400 text-sm">7000015122</p>
            <p className="text-blue-400 text-xs mt-2">Click to message us</p>
          </a>

          <div className="p-6 rounded-lg border border-blue-500/20 bg-slate-900/50 text-center">
            <svg className="w-8 h-8 text-blue-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948-.684l1.498-4.493a1 1 0 011.502-.684l1.498 4.493a1 1 0 00.948.684H19a2 2 0 012 2v1M3 5l6.159-1.95m0 0l-.814 2.881a2 2 0 001.946 2.569H9.25m6.159-1.95l.814 2.881a2 2 0 01-1.946 2.569M9.25 9a1 1 0 11-2 0m8 0a1 1 0 11-2 0m-8 4h12M5 19h14a2 2 0 002-2V9a2 2 0 00-2-2"
              />
            </svg>
            <h3 className="font-semibold text-white mb-1">Phone</h3>
            <p className="text-gray-400 text-sm">+91 7000015122</p>
          </div>

          <div className="p-6 rounded-lg border border-blue-500/20 bg-slate-900/50 text-center">
            <svg className="w-8 h-8 text-purple-400 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <h3 className="font-semibold text-white mb-1">Email</h3>
            <p className="text-gray-400 text-sm">elevenfuturetech@gmail.com</p>
          </div>
        </div>

        <div className="p-8 rounded-lg border border-blue-400/30 bg-gradient-to-br from-blue-950/30 to-purple-950/20">
          <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
          <ul className="space-y-3 text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold mt-1">•</span>
              <span>Custom websites with admin panels: ₹30,000 - 50,000 (includes 2 months support)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold mt-1">•</span>
              <span>Professional WordPress websites: ₹10,000 - 20,000</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold mt-1">•</span>
              <span>Android & iOS mobile applications: ₹50,000+ with latest designs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold mt-1">•</span>
              <span>Free technical support for 2 months with all packages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-400 font-bold mt-1">•</span>
              <span>50+ successful projects completed across various industries</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
