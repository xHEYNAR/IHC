import { Button } from "@/components/ui/button"

export default function VirtualAssistant() {
  return (
    <section className="bg-gradient-to-br from-[#712581] via-[#712581] to-[#8B2F9B] py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-[#248a98] rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-10 w-24 h-24 bg-[#248a98] rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-6 leading-tight">
              ¿No sabes por dónde empezar?
            </h2>
            <p className="text-xl text-[#F1F5F9]/90 mb-8 leading-relaxed">
              Nuestro asistente virtual te guiará paso a paso para encontrar el equipo perfecto según tu carrera y
              necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#248a98] hover:bg-[#248a98]/90 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl"
              >
                Hablar con el asistente
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-[#F1F5F9] hover:bg-white hover:text-[#712581] px-8 py-4 text-lg font-semibold rounded-full"
              >
                Ver demo
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#712581] to-[#8B2F9B] rounded-full flex items-center justify-center text-white font-bold">
                    🤖
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Asistente TecnoLink</h4>
                    <p className="text-sm text-green-500 flex items-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                      En línea
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-gray-100 rounded-2xl p-3 max-w-xs">
                    <p className="text-sm text-gray-700">¡Hola! ¿Qué carrera estudias?</p>
                  </div>
                  <div className="bg-[#712581] rounded-2xl p-3 max-w-xs ml-auto text-right">
                    <p className="text-sm text-white">Arquitectura</p>
                  </div>
                  <div className="bg-gray-100 rounded-2xl p-3 max-w-xs">
                    <p className="text-sm text-gray-700">Perfecto! Te recomiendo equipos con...</p>
                  </div>
                </div>

                <div className="mt-4 flex space-x-2">
                  <div className="flex-1 h-10 bg-gray-100 rounded-full flex items-center px-4">
                    <span className="text-sm text-gray-500">Escribe tu mensaje...</span>
                  </div>
                  <div className="w-10 h-10 bg-[#248a98] rounded-full flex items-center justify-center">
                    <span className="text-white">→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#248a98] rounded-full flex items-center justify-center text-white font-bold text-xl animate-bounce">
              💬
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#712581] font-bold animate-pulse">
              ✨
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
