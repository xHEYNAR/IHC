export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#712581] via-[#712581] to-[#8B2F9B] relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 bg-[#248a98] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-2">
                <span className="text-[#712581] text-sm font-bold">T</span>
              </div>
              <span className="text-xl font-semibold text-[#F1F5F9]">TecnoLink</span>
            </div>
            <p className="text-[#F1F5F9]/80 text-sm leading-relaxed">
              Ayudamos a estudiantes a encontrar el equipo perfecto para sus estudios.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-[#F1F5F9] mb-4">Herramientas</h3>
            <ul className="space-y-2 text-sm text-[#F1F5F9]/80">
              <li>
                <a href="#" className="hover:text-[#248a98] transition-colors">
                  Filtro por Carrera
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#248a98] transition-colors">
                  Simulador de Compatibilidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#248a98] transition-colors">
                  Comparador Visual
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#F1F5F9] mb-4">Ayuda</h3>
            <ul className="space-y-2 text-sm text-[#F1F5F9]/80">
              <li>
                <a href="#" className="hover:text-[#248a98] transition-colors">
                  Asistente Virtual
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#248a98] transition-colors">
                  Reseñas de Estudiantes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#248a98] transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-[#F1F5F9] mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-[#F1F5F9]/80">
              <li>
                <a href="#" className="hover:text-[#248a98] transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#248a98] transition-colors">
                  Términos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#248a98] transition-colors">
                  Política de Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm text-[#F1F5F9]/60">
          © 2025 TecnoLink. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
