"use client"

import { useState } from "react"
import "./Header.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-logo">
            <div className="logo-icon">
              <span className="logo-text">T</span>
            </div>
            <span className="brand-name">TecnoLink</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            <a href="#" className="nav-link nav-link-active">
              Inicio
            </a>
            <a href="#" className="nav-link">
              Buscar
            </a>
            <a href="#" className="nav-link">
              Simulador
            </a>
            <a href="#" className="nav-link">
              Comparador
            </a>
            <a href="#" className="nav-link">
              Reseñas
            </a>
          </nav>

          <div className="header-actions">
            {/* Desktop User Button */}
            <button className="user-button desktop-only" >
              <svg className="user-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>

            {/* Mobile Menu Button */}
            <button className="mobile-menu-button" onClick={toggleMenu}>
              <svg className="menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <nav className={`mobile-nav ${isMenuOpen ? "mobile-nav-open" : ""}`}>
          <a href="#" className="mobile-nav-link mobile-nav-link-active">
            Inicio
          </a>
          <a href="#" className="mobile-nav-link">
            Buscar
          </a>
          <a href="#" className="mobile-nav-link">
            Simulador
          </a>
          <a href="#" className="mobile-nav-link">
            Comparador
          </a>
          <a href="#" className="mobile-nav-link">
            Reseñas
          </a>
          <div className="mobile-nav-divider"></div>
          <button className="mobile-nav-user">
            <svg className="user-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span>Mi Cuenta</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
