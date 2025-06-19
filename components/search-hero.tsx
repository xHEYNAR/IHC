"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Search, SlidersHorizontal } from "lucide-react"

export default function SearchHero() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showMobileFilters, setShowMobileFilters] = useState(false)

  return (
    <section className="bg-gradient-to-br from-[#712581] via-[#712581] to-[#8B2F9B] py-16 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-[#248a98] rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-4 leading-tight">
            Encuentra tu equipo ideal
          </h1>
          <p className="text-xl text-[#F1F5F9]/90 max-w-2xl mx-auto">
            Explora nuestra amplia selección de laptops y PCs perfectos para tu carrera y necesidades
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
            <div className="bg-white rounded-2xl p-4 shadow-2xl">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar laptops, PCs, marcas..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#712581] bg-gray-50"
                  />
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="lg"
                    className="md:hidden border-2 border-[#712581] text-[#712581] hover:bg-[#712581] hover:text-white px-6 py-4 rounded-xl"
                    onClick={() => setShowMobileFilters(!showMobileFilters)}
                  >
                    <SlidersHorizontal className="h-5 w-5 mr-2" />
                    Filtros
                  </Button>
                  <Button
                    size="lg"
                    className="bg-[#712581] hover:bg-[#712581]/90 text-white px-8 py-4 rounded-xl font-semibold"
                  >
                    <Search className="h-5 w-5 mr-2" />
                    Buscar
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Filters */}
        <div className="max-w-4xl mx-auto mt-6">
          <div className="flex flex-wrap justify-center gap-3">
            {["Gaming", "Estudiantes", "Diseño", "Programación", "Oficina", "Arquitectura"].map((filter) => (
              <Button
                key={filter}
                variant="outline"
                className="border-2 border-white/30 text-[#F1F5F9] hover:bg-white hover:text-[#712581] px-6 py-2 rounded-full backdrop-blur-sm"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
