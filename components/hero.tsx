import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-[#712581] via-[#712581] to-[#8B2F9B] py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-4 leading-tight">Conecta con el futuro,</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-[#F1F5F9] mb-6 leading-tight">
              Encuentra tu equipo ideal
            </h2>
            <p className="text-xl text-[#F1F5F9]/90 mb-8 leading-relaxed">
              Encuentra las mejores computadoras y laptops para tus necesidades personales, académicas y profesionales.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#248a98] hover:bg-[#248a98]/90 text-white px-8 py-4 text-lg font-semibold rounded-full"
              >
                Explorar productos
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white text-[#F1F5F9] hover:bg-white hover:text-[#712581] px-8 py-4 text-lg font-semibold rounded-full"
              >
                Usar asistente virtual
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-500">TecnoLink</span>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  <div className="h-20 bg-gradient-to-r from-[#712581] to-[#248a98] rounded-lg flex items-center justify-center">
                    <span className="text-white font-semibold">¡Tu equipo perfecto!</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#248a98] rounded-full flex items-center justify-center text-white font-bold text-xl animate-bounce">
              💻
            </div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#712581] font-bold animate-pulse">
              ⚡
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
