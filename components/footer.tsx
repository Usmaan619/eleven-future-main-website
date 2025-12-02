import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="border-t border-blue-500/20 bg-slate-950 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 relative">
                <Image
                  src="/eft-logo.png"
                  alt="EFT Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <p className="font-bold text-white text-sm">Eleven Future</p>
                <p className="text-xs text-gray-400">Technologies</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Transforming businesses with innovative digital solutions since day one.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#services" className="hover:text-blue-400 transition">
                  Custom Websites
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-400 transition">
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-blue-400 transition">
                  Web Applications
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="#portfolio" className="hover:text-blue-400 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-blue-400 transition">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <a
                href="mailto:elevenfuturetech@gmail.com"
                className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg transition font-medium text-sm border border-blue-400/30"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                Email
              </a>
              <a
                href="https://wa.me/7000015122"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition font-medium text-sm w-full justify-center"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.734.732 5.41 2.122 7.723L.957 24l8.305-2.176A9.857 9.857 0 0012.04 24c5.43 0 9.856-4.426 9.856-9.854 0-2.629-.636-5.128-1.855-7.34M12.04 1.24C5.597 1.24 1.24 5.6 1.24 12.04c0 2.734.732 5.41 2.122 7.723L.957 24l8.305-2.176A9.857 9.857 0 0012.04 24c5.43 0 9.856-4.426 9.856-9.854 0-2.629-.636-5.128-1.855-7.34m-9.992-.024h.004" />
                </svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© 2025 Eleven Future Technologies. All rights reserved.</p>
          <p className="text-gray-400 text-sm">Built with expertise and innovation for your success.</p>
        </div>
      </div>
    </footer>
  )
}
