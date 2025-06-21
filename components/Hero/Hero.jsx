import "./Hero.css"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">Conecta con el futuro,</h1>
            <h2 className="hero-subtitle">Encuentra tu equipo ideal</h2>
            <p className="hero-description">
              Encuentra las mejores computadoras y laptops para tus necesidades personales, académicas y profesionales.
            </p>
            <div className="hero-buttons">
              <Link href="/buscar"><button className="btn btn-primary">Explorar productos</button></Link>
              <Link href="/asistente"><button className="btn btn-secondary">Usar asistente virtual</button></Link>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-card">
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
            </div>

            <div className="floating-element floating-element-1">💻</div>
            <div className="floating-element floating-element-2">⚡</div>
          </div>
        </div>
      </div>
    </section>
  )
}
