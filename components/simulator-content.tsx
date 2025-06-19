"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, CheckCircle, ChevronRight } from "lucide-react"

const categories = [
  { id: "diseno", label: "Diseño", active: true },
  { id: "ingenieria", label: "Ingeniería", active: false },
  { id: "ciencia-datos", label: "Ciencia de Datos", active: false },
  { id: "multimedia", label: "Multimedia", active: false },
]

const softwareByCategory = {
  diseno: [
    { id: "autocad", name: "AutoCAD", checked: false },
    { id: "photoshop", name: "Adobe Photoshop", checked: false },
    { id: "illustrator", name: "Adobe Illustrator", checked: false },
    { id: "indesign", name: "Adobe InDesign", checked: false },
  ],
  ingenieria: [
    { id: "sketchup", name: "SketchUp", checked: false },
    { id: "solidworks", name: "SolidWorks", checked: false },
    { id: "matlab", name: "MATLAB", checked: false },
    { id: "autocad-eng", name: "AutoCAD", checked: false },
  ],
  "ciencia-datos": [
    { id: "python", name: "Python", checked: false },
    { id: "r-studio", name: "R Studio", checked: false },
    { id: "tableau", name: "Tableau", checked: false },
    { id: "jupyter", name: "Jupyter Notebook", checked: false },
  ],
  multimedia: [
    { id: "premiere", name: "Adobe Premiere Pro", checked: false },
    { id: "after-effects", name: "After Effects", checked: false },
    { id: "davinci", name: "DaVinci Resolve", checked: false },
    { id: "blender", name: "Blender", checked: false },
  ],
}

const compatibleProducts = [
  {
    id: 1,
    name: "Laptop Pro X1",
    compatibility: 85,
    price: 1299,
    category: "Laptop",
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "NVIDIA RTX 3050",
    recommendations: [
      "Ideal para la mayoría del software seleccionado.",
      "Considera ampliar la RAM para mejor rendimiento con 3ds Max.",
    ],
  },
  {
    id: 2,
    name: "WorkStation Z3",
    compatibility: 100,
    price: 1899,
    category: "PC",
    processor: "AMD Ryzen 9",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 4070",
    recommendations: [
      "Compatibilidad total con todo el software seleccionado.",
      "Rendimiento óptimo para proyectos complejos.",
    ],
  },
  {
    id: 3,
    name: "Creator Book Pro",
    compatibility: 98,
    price: 1599,
    category: "Laptop",
    processor: "Intel Core i9",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3060",
    recommendations: [
      "Excelente rendimiento para software de diseño y multimedia.",
      "Refrigeración mejorada para sesiones largas de trabajo.",
    ],
  },
]

export default function SimulatorContent() {
  const [activeCategory, setActiveCategory] = useState("diseno")
  const [selectedSoftware, setSelectedSoftware] = useState<Record<string, boolean>>({
    autocad: true,
    photoshop: true,
    sketchup: true,
  })
  const [showResults, setShowResults] = useState(false)

  const handleSoftwareToggle = (softwareId: string) => {
    setSelectedSoftware((prev) => ({
      ...prev,
      [softwareId]: !prev[softwareId],
    }))
  }

  const getSelectedSoftwareNames = () => {
    const allSoftware = Object.values(softwareByCategory).flat()
    return Object.keys(selectedSoftware)
      .filter((key) => selectedSoftware[key])
      .map((key) => allSoftware.find((sw) => sw.id === key)?.name)
      .filter(Boolean)
  }

  const evaluateCompatibility = () => {
    setShowResults(true)
  }

  const resetSelection = () => {
    setShowResults(false)
    setSelectedSoftware({})
  }

  return (
    <div className="bg-[#f2f2f2]">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#712581] via-[#712581] to-[#8B2F9B] py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#248a98] rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 bg-[#248a98] rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-6 leading-tight">
            Simulador de Compatibilidad
          </h1>
          <p className="text-xl text-[#F1F5F9]/90 max-w-4xl mx-auto leading-relaxed">
            Selecciona el software que utilizarás en tus estudios y te recomendaremos los equipos más adecuados.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden mb-8">
          <CardContent className="p-8">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all ${
                    activeCategory === category.id
                      ? "bg-[#712581] text-white hover:bg-[#712581]/90"
                      : "border-2 border-gray-200 text-gray-700 hover:border-[#712581] hover:text-[#712581] bg-white"
                  }`}
                >
                  {category.label}
                </Button>
              ))}
              <Button
                variant="outline"
                className="w-12 h-12 p-0 rounded-full border-2 border-gray-200 text-gray-400 hover:border-[#712581] hover:text-[#712581]"
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>

            {/* Software Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Current Category Software */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">{activeCategory}</h3>
                <div className="space-y-4">
                  {softwareByCategory[activeCategory as keyof typeof softwareByCategory]?.map((software) => (
                    <div key={software.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={software.id}
                        checked={selectedSoftware[software.id] || false}
                        onCheckedChange={() => handleSoftwareToggle(software.id)}
                        className="border-2 border-gray-300 data-[state=checked]:bg-[#712581] data-[state=checked]:border-[#712581]"
                      />
                      <label htmlFor={software.id} className="text-gray-700 font-medium cursor-pointer flex-1">
                        {software.name}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Other Categories Software */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Otros</h3>
                <div className="space-y-4">
                  {Object.entries(softwareByCategory)
                    .filter(([key]) => key !== activeCategory)
                    .slice(0, 1)
                    .map(([categoryKey, softwares]) =>
                      softwares.slice(0, 2).map((software) => (
                        <div key={software.id} className="flex items-center space-x-3">
                          <Checkbox
                            id={software.id}
                            checked={selectedSoftware[software.id] || false}
                            onCheckedChange={() => handleSoftwareToggle(software.id)}
                            className="border-2 border-gray-300 data-[state=checked]:bg-[#712581] data-[state=checked]:border-[#712581]"
                          />
                          <label htmlFor={software.id} className="text-gray-700 font-medium cursor-pointer flex-1">
                            {software.name}
                          </label>
                        </div>
                      )),
                    )}
                </div>
              </div>
            </div>

            {/* Selected Software Display */}
            {getSelectedSoftwareNames().length > 0 && (
              <div className="mb-8">
                <h4 className="text-sm text-gray-600 mb-3">Software seleccionado:</h4>
                <div className="flex flex-wrap gap-2">
                  {getSelectedSoftwareNames().map((name, index) => (
                    <Badge
                      key={index}
                      className="bg-[#712581]/10 text-[#712581] hover:bg-[#712581]/20 px-3 py-1 rounded-full"
                    >
                      {name}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Evaluate Button */}
            <Button
              onClick={evaluateCompatibility}
              disabled={getSelectedSoftwareNames().length === 0}
              className="w-full bg-[#712581] hover:bg-[#712581]/90 text-white py-4 rounded-xl text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Evaluar Compatibilidad
            </Button>
          </CardContent>
        </Card>

        {/* Results Section */}
        {showResults && (
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              {/* Results Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-[#248a98] to-[#2DD4BF] rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Resultados de compatibilidad</h2>
                  <p className="text-lg text-gray-600">
                    Basado en los{" "}
                    <span className="font-semibold text-[#712581]">{getSelectedSoftwareNames().length}</span> programas
                    seleccionados, hemos encontrado{" "}
                    <span className="font-semibold text-[#712581]">{compatibleProducts.length}</span> equipos
                    compatibles.
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                {compatibleProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden"
                  >
                    <CardContent className="p-0">
                      {/* Product Image */}
                      <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                        <div className="text-4xl">💻</div>
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                          <Badge
                            className={`${
                              product.category === "PC" ? "bg-[#248a98]" : "bg-[#712581]"
                            } text-white border-0 px-3 py-1 rounded-full font-semibold`}
                          >
                            {product.category}
                          </Badge>
                        </div>

                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-600">Compatibilidad:</span>
                            <span className="text-2xl font-bold text-[#712581]">{product.compatibility}%</span>
                          </div>
                        </div>

                        {/* Specifications */}
                        <div className="grid grid-cols-2 gap-3 text-sm mb-4">
                          <div>
                            <span className="text-gray-500 text-xs">Procesador</span>
                            <p className="font-semibold text-gray-900">{product.processor}</p>
                          </div>
                          <div>
                            <span className="text-gray-500 text-xs">RAM</span>
                            <p className="font-semibold text-gray-900">{product.ram}</p>
                          </div>
                          <div>
                            <span className="text-gray-500 text-xs">Almacenamiento</span>
                            <p className="font-semibold text-gray-900">{product.storage}</p>
                          </div>
                          <div>
                            <span className="text-gray-500 text-xs">GPU</span>
                            <p className="font-semibold text-gray-900">{product.gpu}</p>
                          </div>
                        </div>

                        {/* Recommendations */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-900 mb-2">Recomendaciones:</h4>
                          <ul className="space-y-1">
                            {product.recommendations.map((rec, index) => (
                              <li key={index} className="text-xs text-gray-600 leading-relaxed">
                                • {rec}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Price and Action */}
                        <div className="flex items-center justify-between">
                          <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                          <Button
                            variant="ghost"
                            className="text-[#712581] hover:text-[#712581]/80 p-0 h-auto font-semibold"
                          >
                            Ver detalles
                            <ChevronRight className="h-4 w-4 ml-1" />
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Reset Button */}
              <div className="text-center">
                <Button
                  onClick={resetSelection}
                  variant="ghost"
                  className="text-[#712581] hover:text-[#712581]/80 font-semibold"
                >
                  Volver a seleccionar software
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
