"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ChevronDown, Star, SlidersHorizontal } from "lucide-react"

const categories = [
  { id: "todos", label: "Todos", active: true },
  { id: "laptops", label: "Laptops", active: false },
  { id: "pcs", label: "PCs", active: false },
  { id: "estudiante", label: "Estudiante", active: false },
  { id: "profesional", label: "Profesional", active: false },
  { id: "gaming", label: "Gaming", active: false },
]

const allProducts = [
  {
    id: 1,
    name: "Dell XPS 15",
    category: "PC Laptop",
    rating: 4,
    reviews: 78,
    processor: "Intel Core i7",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "RTX 3050",
    price: 1299,
    originalPrice: 1499,
    badge: "Promoción estudiante",
    categoryType: "laptops",
    targetAudience: "estudiante",
  },
  {
    id: 2,
    name: "MacBook Pro M2",
    category: "PC Laptop",
    rating: 5,
    reviews: 124,
    processor: "Apple M2",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Integrada",
    price: 1599,
    categoryType: "laptops",
    targetAudience: "profesional",
  },
  {
    id: 3,
    name: "HP Pavilion Gaming",
    category: "PC Gaming",
    rating: 4,
    reviews: 156,
    processor: "AMD Ryzen 7",
    ram: "16GB",
    storage: "1TB SSD",
    gpu: "RTX 3060",
    price: 899,
    originalPrice: 1099,
    badge: "Oferta especial",
    categoryType: "laptops",
    targetAudience: "gaming",
  },
  {
    id: 4,
    name: "iMac 24 M1",
    category: "PC Desktop",
    rating: 5,
    reviews: 89,
    processor: "Apple M1",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "Integrada",
    price: 1399,
    categoryType: "pcs",
    targetAudience: "profesional",
  },
  {
    id: 5,
    name: "ASUS ROG Desktop",
    category: "PC Gaming",
    rating: 5,
    reviews: 203,
    processor: "Intel Core i9",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "RTX 4070",
    price: 1899,
    categoryType: "pcs",
    targetAudience: "gaming",
  },
  {
    id: 6,
    name: "Lenovo ThinkPad",
    category: "PC Laptop",
    rating: 4,
    reviews: 67,
    processor: "Intel Core i5",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Integrada",
    price: 799,
    categoryType: "laptops",
    targetAudience: "estudiante",
  },
]

export default function SearchPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCareer, setSelectedCareer] = useState("Todas las carreras")
  const [showFilters, setShowFilters] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState(allProducts)

  // Filter products based on selected category
  const filterProducts = (category: string, career: string, query: string) => {
    let filtered = allProducts

    // Filter by category
    if (category !== "todos") {
      filtered = filtered.filter((product) => product.categoryType === category || product.targetAudience === category)
    }

    // Filter by career
    if (career !== "Todas las carreras") {
      const careerMap: Record<string, string> = {
        Arquitectura: "profesional",
        "Diseño Gráfico": "profesional",
        Ingeniería: "profesional",
        Programación: "profesional",
        Gaming: "gaming",
        Oficina: "estudiante",
      }
      const targetAudience = careerMap[career]
      if (targetAudience) {
        filtered = filtered.filter((product) => product.targetAudience === targetAudience)
      }
    }

    // Filter by search query
    if (query.trim()) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.processor.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase()),
      )
    }

    setFilteredProducts(filtered)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category)
    filterProducts(category, selectedCareer, searchQuery)
  }

  const handleCareerChange = (career: string) => {
    setSelectedCareer(career)
    filterProducts(selectedCategory, career, searchQuery)
  }

  const handleSearchChange = (query: string) => {
    setSearchQuery(query)
    filterProducts(selectedCategory, selectedCareer, query)
  }

  return (
    <div className="bg-[#f2f2f2]">
      {/* Hero Section with Purple Background */}
      <section className="bg-gradient-to-br from-[#712581] via-[#712581] to-[#8B2F9B] py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#248a98] rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 bg-[#248a98] rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Text */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-6 leading-tight">Busca tu equipo ideal</h1>
            <p className="text-xl text-[#F1F5F9]/90 max-w-4xl mx-auto leading-relaxed">
              Selecciona tus preferencias de los equipo ideal que utilizarás en tus estudios y te recomendaremos los
              equipos más adecuados
            </p>
          </div>

          {/* Search Bar and Filters */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                {/* Search Input */}
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#712581] bg-gray-50"
                  />
                </div>

                {/* Career Dropdown */}
                <div className="relative">
                  <select
                    value={selectedCareer}
                    onChange={(e) => handleCareerChange(e.target.value)}
                    className="appearance-none bg-gray-50 border-0 rounded-xl px-6 py-4 pr-12 text-lg focus:outline-none focus:ring-2 focus:ring-[#712581] min-w-[200px]"
                  >
                    <option>Todas las carreras</option>
                    <option>Arquitectura</option>
                    <option>Diseño Gráfico</option>
                    <option>Ingeniería</option>
                    <option>Programación</option>
                    <option>Gaming</option>
                    <option>Oficina</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>

                {/* More Filters Button */}
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-2 border-gray-200 text-gray-700 hover:border-[#712581] hover:text-[#712581] hover:bg-[#712581]/5 px-8 py-4 rounded-xl font-semibold"
                >
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Más filtros
                </Button>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      selectedCategory === category.id
                        ? "bg-[#712581] text-white hover:bg-[#712581]/90 shadow-lg"
                        : "border-2 border-gray-200 text-gray-700 hover:border-[#712581] hover:text-[#712581] hover:bg-[#712581]/5 bg-white"
                    }`}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
          {/* Results Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-[#248a98] to-[#2DD4BF] rounded-full flex items-center justify-center shadow-lg">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Resultados de la búsqueda</h2>
              <p className="text-lg text-gray-600">
                Hemos encontrado <span className="font-semibold text-[#712581]">{filteredProducts.length}</span> equipos
                según tu selección.
              </p>
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden"
                >
                  <CardContent className="p-0">
                    {/* Product Image */}
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                      <div className="text-6xl">💻</div>
                      {product.badge && (
                        <Badge className="absolute top-3 left-3 bg-[#248a98] text-white border-0 px-3 py-1 rounded-full font-semibold">
                          {product.badge}
                        </Badge>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                        <Badge className="bg-[#712581]/10 text-[#712581] hover:bg-[#712581]/20 border-0 px-3 py-1 rounded-full font-semibold">
                          {product.category}
                        </Badge>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center gap-2 mb-4">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < product.rating ? "text-yellow-400 fill-current" : "text-gray-300"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600 font-medium">({product.reviews} reseñas)</span>
                      </div>

                      {/* Specifications */}
                      <div className="space-y-3 mb-6">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <span className="text-gray-500 text-xs">Procesador</span>
                            <p className="font-semibold text-gray-900">{product.processor}</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <span className="text-gray-500 text-xs">RAM</span>
                            <p className="font-semibold text-gray-900">{product.ram}</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <span className="text-gray-500 text-xs">Almacenamiento</span>
                            <p className="font-semibold text-gray-900">{product.storage}</p>
                          </div>
                          <div className="bg-gray-50 p-3 rounded-lg">
                            <span className="text-gray-500 text-xs">GPU</span>
                            <p className="font-semibold text-gray-900">{product.gpu}</p>
                          </div>
                        </div>
                      </div>

                      {/* Price and Button */}
                      <div className="flex items-center justify-between">
                        <div className="flex flex-col">
                          <span className="text-3xl font-bold text-[#712581]">${product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                          )}
                        </div>
                        <Button className="bg-[#712581] hover:bg-[#712581]/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                          Agregar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No se encontraron productos</h3>
              <p className="text-gray-600 mb-6">Intenta ajustar tus filtros o términos de búsqueda</p>
              <Button
                onClick={() => {
                  setSelectedCategory("todos")
                  setSelectedCareer("Todas las carreras")
                  setSearchQuery("")
                  setFilteredProducts(allProducts)
                }}
                className="bg-[#712581] hover:bg-[#712581]/90 text-white px-8 py-3 rounded-xl font-semibold"
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
