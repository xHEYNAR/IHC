"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { FaUserCircle } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import "../styles/header.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
  <div className="header-container">
    <div className="header-inner">
      <div className="flex items-center">
        <div className="logo-group group">
          <div className="logo-circle">
            <img src="/logoP.png" alt="Logo" className="logo-image" />
          </div>
          <span className="logo-text22 animate-gradient-text">TecnoLink</span>
        </div>
      </div>

      {/* Navegación escritorio */}
      <nav className="hidden md:flex space-x-8">
        <a href="/" className={`nav-link ${pathname === "/" ? "active-nav-link" : ""}`}>Inicio</a>
        <a href="/buscar" className={`nav-link ${pathname === "/buscar" ? "active-nav-link" : ""}`}>Buscar</a>
        <a href="/simulador" className={`nav-link ${pathname === "/simulador" ? "active-nav-link" : ""}`}>Simulador</a>
        <a href="/comparador" className={`nav-link ${pathname === "/comparador" ? "active-nav-link" : ""}`}>Comparador</a>
        <a href="/resenas" className={`nav-link ${pathname === "/resenas" ? "active-nav-link" : ""}`}>Reseñas</a>
      </nav>

      <div className="flex items-center">
          <div className="icon-box"><TiShoppingCart className="logo-user"  color="#1abc9c" /></div>
          <div className="icon-box"><FaUserCircle className="logo-user"  color="#1abc9c" /></div> 
        <Button variant="ghost" size="sm" className="menu-button" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6 text-gray-600" /> : <Menu className="menu-btn2" />}
        </Button>
      </div>
    </div>

    {/* Menú móvil */}
    <div
      className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
        isMenuOpen ? "max-h-96 opacity-100 pointer-events-auto" : "max-h-0 opacity-0 pointer-events-none"
      }`}
    >
      <nav className="mobile-nav">
        <div className="space-y-2">
          <a href="/" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Inicio</a>
          <a href="/buscar" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Buscar</a>
          <a href="/simulador" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Simulador</a>
          <a href="/comparador" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Comparador</a>
          <a href="/resenas" className="mobile-link" onClick={() => setIsMenuOpen(false)}>Reseñas</a>
          
          <div className="mobile-divider"></div>
          <button className="mobile-account">
            <div className="icon-box2"><FaUserCircle className="logo-user1"  color="#1abc9c" /></div> 
            <div className="icon-box2"><TiShoppingCart className="logo-user1"  color="#1abc9c" /></div>
          </button>
        </div>
      </nav>
    </div>
  </div>
</header>

  )
}
