import Link from "next/link"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950 py-20 md:py-32 lg:py-40">
      {/* Background gradient elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Main hero grid: Logo left, content right */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left: Logo with glow effect */}
          <div className="flex-shrink-0 lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-2xl rounded-full scale-125"></div>
              <Image
                src="/eft-logo.png"
                alt="Eleven Future Technologies"
                width={300}
                height={300}
                className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <div className="space-y-3">
              <p className="text-blue-400 text-sm md:text-base font-semibold tracking-wider uppercase">
                Eleven Future Technologies
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
                Transform Your Business with{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Cutting-Edge Technology
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-300 leading-relaxed max-w-xl">
              Custom websites, Android & iOS apps, and comprehensive digital solutions. We deliver professional, modern,
              and responsive applications tailored to your business needs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
              <a
                href="https://wa.me/7000015122"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-xl font-semibold transition transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Get Free Consultation
              </a>
              <Link
                href="#portfolio"
                className="px-8 py-4 border-2 border-blue-400/50 hover:bg-blue-500/10 text-white rounded-xl font-semibold transition"
              >
                View Our Work
              </Link>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <div className="space-y-1">
                <p className="text-xl md:text-2xl font-bold text-blue-400">50+</p>
                <p className="text-xs md:text-sm text-gray-400">Projects Done</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl md:text-2xl font-bold text-purple-400">100%</p>
                <p className="text-xs md:text-sm text-gray-400">Satisfaction</p>
              </div>
              <div className="space-y-1">
                <p className="text-xl md:text-2xl font-bold text-cyan-400">2M+</p>
                <p className="text-xs md:text-sm text-gray-400">Users Served</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
