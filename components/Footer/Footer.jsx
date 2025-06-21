import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="logo-icon">
                <img src="/logoNN.png" alt="Logo" className="logo-image33" />
              </div>
              <span className="brand-name22">TecnoLink</span>
            </div>
            <p className="brand-description">
              Ayudamos a estudiantes a encontrar el equipo perfecto para sus estudios.
            </p>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Herramientas</h3>
            <ul className="section-links">
              <li>
                <a href="/buscar" className="footer-link">
                  Filtro por Carrera
                </a>
              </li>
              <li>
                <a href="/simulador" className="footer-link">
                  Simulador de Compatibilidad
                </a>
              </li>
              <li>
                <a href="/comparador" className="footer-link">
                  Comparador Visual
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Ayuda</h3>
            <ul className="section-links">
              <li>
                <a href="/asistente" className="footer-link">
                  Asistente Virtual
                </a>
              </li>
              <li>
                <a href="/resenas" className="footer-link">
                  Reseñas de Estudiantes
                </a>
              </li>
              <li>
                <a className="footer-link">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="section-title">Legal</h3>
            <ul className="section-links">
              <li>
                <a  className="footer-link">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a  className="footer-link">
                  Términos de Uso
                </a>
              </li>
              <li>
                <a className="footer-link">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">© 2025 TecnoLink. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
