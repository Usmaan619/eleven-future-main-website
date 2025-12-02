"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-blue-500/20 bg-slate-950/90 backdrop-blur-md">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3 md:px-6">
        <Link href="#" className="flex items-center gap-2 md:gap-3 flex-shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 relative flex-shrink-0">
            <Image
              src="/eft-logo.png"
              alt="Eleven Future Technologies Logo"
              width={48}
              height={48}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-blue-300">Eleven Future</p>
            <p className="text-xs text-gray-400">Technologies</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-gray-300 hover:text-blue-400 transition text-sm">
            Services
          </Link>
          <Link href="#pricing" className="text-gray-300 hover:text-blue-400 transition text-sm">
            Pricing
          </Link>
          <Link href="#portfolio" className="text-gray-300 hover:text-blue-400 transition text-sm">
            Portfolio
          </Link>
          <a
            href="https://wa.me/7000015122"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition font-medium text-sm"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-slate-950/95 border-b border-blue-500/20 p-4 flex flex-col gap-4 md:hidden">
            <Link
              href="#services"
              className="text-gray-300 hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#pricing"
              className="text-gray-300 hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-300 hover:text-blue-400 transition"
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <a
              href="https://wa.me/7000015122"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition font-medium text-center"
            >
              WhatsApp
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}
