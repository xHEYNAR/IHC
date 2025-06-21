import "../styles/footerMorado.css";

export default function Footer() {
  return (
    <footer className="footerM">
      <div className="footerM-container">
        <div className="footerM-content">
          <div className="footerM-brand">
            <div className="footerM-logo">
              <div className="logoM-icon">
                <img src="/logoB.png" alt="Logo" className="logo-imageM" />
              </div>
              <span className="brandM-name">TecnoLink</span>
            </div>
            <p className="brandM-description">
              Ayudamos a estudiantes a encontrar el equipo perfecto para sus estudios.
            </p>
          </div>

          <div className="footerM-section">
            <h3 className="sectionM-title">Herramientas</h3>
            <ul className="sectionM-links">
              <li>
                <a href="/buscar" className="footerM-link">
                  Filtro por Carrera
                </a>
              </li>
              <li>
                <a href="/simulador" className="footerM-link">
                  Simulador de Compatibilidad
                </a>
              </li>
              <li>
                <a href="/comparador" className="footerM-link">
                  Comparador Visual
                </a>
              </li>
            </ul>
          </div>

          <div className="footerM-section">
            <h3 className="sectionM-title">Ayuda</h3>
            <ul className="sectionM-links">
              <li>
                <a href="/asistente" className="footerM-link">
                  Asistente Virtual
                </a>
              </li>
              <li>
                <a href="/resenas" className="footerM-link">
                  Reseñas de Estudiantes
                </a>
              </li>
              <li>
                <a className="footerM-link">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div className="footerM-section">
            <h3 className="sectionM-title">Legal</h3>
            <ul className="sectionM-links">
              <li>
                <a  className="footerM-link">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a  className="footerM-link">
                  Términos de Uso
                </a>
              </li>
              <li>
                <a className="footerM-link">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footerM-bottom">
          <p className="copyrightM">© 2025 TecnoLink. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
