"use client"

import { useState } from "react"
import { User, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="bg-white/95 backdrop-blur-md shadow-sm fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center group">
              <div className="w-8 h-8 bg-gradient-to-r from-[#712581] to-[#8B2F9B] rounded-full flex items-center justify-center mr-2 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                <span className="text-white text-sm font-bold">T</span>
              </div>
              <span className="text-xl font-semibold text-gray-900 transition-colors duration-300 group-hover:text-[#712581]">
                TecnoLink
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="/"
              className="text-gray-500 hover:text-[#712581] px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#712581] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/buscar"
              className="text-gray-500 hover:text-[#712581] px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Buscar
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#712581] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/simulador"
              className="text-gray-500 hover:text-[#712581] px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Simulador
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#712581] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/comparador"
              className="text-gray-500 hover:text-[#712581] px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Comparador
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#712581] transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="/resenas"
              className="text-gray-500 hover:text-[#712581] px-3 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 relative group"
            >
              Reseñas
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#712581] transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          <div className="flex items-center">
            {/* Desktop User Button */}
            <Button
              variant="ghost"
              size="sm"
              className="hidden md:flex hover:bg-[#712581]/10 transition-all duration-300 hover:scale-110"
            >
              <User className="h-5 w-5" />
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden hover:bg-[#712581]/10 transition-all duration-300"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="h-6 w-6 text-gray-600" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 py-4 bg-white/95 backdrop-blur-md border-t border-gray-100">
            <div className="space-y-2">
              <a
                href="/"
                className="block px-3 py-2 text-gray-600 hover:text-[#712581] hover:bg-[#712581]/5 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </a>
              <a
                href="/buscar"
                className="block px-3 py-2 text-gray-600 hover:text-[#712581] hover:bg-[#712581]/5 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Buscar
              </a>
              <a
                href="/simulador"
                className="block px-3 py-2 text-gray-600 hover:text-[#712581] hover:bg-[#712581]/5 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Simulador
              </a>
              <a
                href="/comparador"
                className="block px-3 py-2 text-gray-600 hover:text-[#712581] hover:bg-[#712581]/5 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Comparador
              </a>
              <a
                href="/resenas"
                className="block px-3 py-2 text-gray-600 hover:text-[#712581] hover:bg-[#712581]/5 rounded-lg transition-all duration-200 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Reseñas
              </a>

              <div className="border-t border-gray-200 my-3"></div>

              <button className="flex items-center w-full px-3 py-2 text-gray-600 hover:text-[#712581] hover:bg-[#712581]/5 rounded-lg transition-all duration-200 font-medium">
                <User className="h-5 w-5 mr-2" />
                Mi Cuenta
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
