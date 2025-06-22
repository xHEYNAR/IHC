"use client"
import "./Hero.css"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="hero"
    >
      <div className="hero-container">
        <div className="hero-content">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hero-text"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="hero-title"
            >
              Conecta con el futuro,
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="hero-subtitle"
            >
              Encuentra tu equipo ideal
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="hero-description"
            >
              Encuentra las mejores computadoras y laptops para tus necesidades personales, académicas y profesionales.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="hero-buttons"
            >
              <Link href="/buscar"><button className="btnHero btn-primaryHero">Explorar productos</button></Link>
              <Link href="/asistente"><button className="btnHero btn-secondaryHero">Usar asistente virtual</button></Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hero-visual"
          >
            <motion.div
              whileHover={{ rotate: 3, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="hero-card"
            >
              <div className="hero-card-inner">
                <div className="hero-card-header">
                  <div className="hero-card-controls">
                    <div className="control control-red"></div>
                    <div className="control control-yellow"></div>
                    <div className="control control-green"></div>
                  </div>
                  <span className="hero-card-title">TecnoLink</span>
                </div>
                <div className="hero-card-content">
                  <div className="content-line content-line-1"></div>
                  <div className="content-line content-line-2"></div>
                  <div className="hero-card-highlight">
                    <span className="highlight-text">¡Tu equipo perfecto!</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="floating-element floating-element-1Hero"
            >
              💻
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
              className="floating-element floating-element-2Hero"
            >
              ⚡
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}
