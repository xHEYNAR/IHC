"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, ContrastIcon as Compare, ShoppingCart, Grid3X3, List, ChevronDown } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Dell XPS 15",
    price: 1299,
    originalPrice: 1499,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=200&width=300",
    badge: "Promoción estudiante",
    badgeColor: "bg-[#248a98]",
    features: ["Intel Core i7", "16GB RAM", "512GB SSD", "RTX 3050"],
    category: "Arquitectura",
    brand: "Dell",
    financing: "12 cuotas sin interés",
    inStock: true,
    isNew: false,
    isFavorite: false,
  },
  {
    id: 2,
    name: "MacBook Pro M2",
    price: 1599,
    rating: 4.9,
    reviews: 89,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Apple M2", "16GB RAM", "512GB SSD", "Retina Display"],
    category: "Diseño Gráfico",
    brand: "Apple",
    financing: "18 cuotas sin interés",
    inStock: true,
    isNew: true,
    isFavorite: true,
  },
  {
    id: 3,
    name: "HP Pavilion Gaming",
    price: 899,
    originalPrice: 1099,
    rating: 4.7,
    reviews: 156,
    image: "/placeholder.svg?height=200&width=300",
    badge: "Oferta especial",
    badgeColor: "bg-red-500",
    features: ["AMD Ryzen 7", "16GB RAM", "1TB SSD", "RTX 3060"],
    category: "Gaming",
    brand: "HP",
    financing: "24 cuotas sin interés",
    inStock: true,
    isNew: false,
    isFavorite: false,
  },
  {
    id: 4,
    name: "Lenovo ThinkPad X1",
    price: 1199,
    rating: 4.6,
    reviews: 78,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Intel Core i5", "16GB RAM", "512GB SSD", "14' Display"],
    category: "Oficina",
    brand: "Lenovo",
    financing: "12 cuotas sin interés",
    inStock: false,
    isNew: false,
    isFavorite: false,
  },
  {
    id: 5,
    name: "ASUS ROG Strix",
    price: 1899,
    rating: 4.9,
    reviews: 203,
    image: "/placeholder.svg?height=200&width=300",
    features: ["Intel Core i9", "32GB RAM", "1TB SSD", "RTX 4070"],
    category: "Gaming",
    brand: "ASUS",
    financing: "36 cuotas sin interés",
    inStock: true,
    isNew: true,
    isFavorite: false,
  },
  {
    id: 6,
    name: "MacBook Air M1",
    price: 999,
    originalPrice: 1199,
    rating: 4.8,
    reviews: 167,
    image: "/placeholder.svg?height=200&width=300",
    badge: "Mejor precio",
    badgeColor: "bg-green-500",
    features: ["Apple M1", "8GB RAM", "256GB SSD", "13' Display"],
    category: "Estudiantes",
    brand: "Apple",
    financing: "12 cuotas sin interés",
    inStock: true,
    isNew: false,
    isFavorite: true,
  },
]

const sortOptions = [
  { value: "relevance", label: "Más relevantes" },
  { value: "price-low", label: "Precio: menor a mayor" },
  { value: "price-high", label: "Precio: mayor a menor" },
  { value: "rating", label: "Mejor calificados" },
  { value: "newest", label: "Más recientes" },
]

export default function SearchResults() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [sortBy, setSortBy] = useState("relevance")
  const [favorites, setFavorites] = useState<number[]>([2, 6])
  const [compareList, setCompareList] = useState<number[]>([])

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  const toggleCompare = (productId: number) => {
    setCompareList((prev) =>
      prev.includes(productId) ? prev.filter((id) => id !== productId) : prev.length < 3 ? [...prev, productId] : prev,
    )
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Resultados de búsqueda</h2>
          <p className="text-gray-600">Mostrando {products.length} productos</p>
        </div>

        <div className="flex items-center gap-4">
          {/* View Mode Toggle */}
          <div className="flex items-center bg-white rounded-lg border border-gray-200 p-1">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("grid")}
              className={`px-3 py-2 ${viewMode === "grid" ? "bg-[#712581] text-white" : "text-gray-600"}`}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="sm"
              onClick={() => setViewMode("list")}
              className={`px-3 py-2 ${viewMode === "list" ? "bg-[#712581] text-white" : "text-gray-600"}`}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-[#712581] focus:border-transparent"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Compare Bar */}
      {compareList.length > 0 && (
        <Card className="border-0 shadow-lg rounded-2xl bg-gradient-to-r from-[#712581] to-[#8B2F9B]">
          <CardContent className="p-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-2">
                <Compare className="h-5 w-5" />
                <span className="font-semibold">{compareList.length} productos seleccionados para comparar</span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-white text-white hover:bg-white hover:text-[#712581]"
                >
                  Comparar ahora
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCompareList([])}
                  className="text-white hover:bg-white/20"
                >
                  Limpiar
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Products Grid/List */}
      <div className={viewMode === "grid" ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6" : "space-y-4"}>
        {products.map((product) => (
          <Card
            key={product.id}
            className={`border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl overflow-hidden ${
              viewMode === "list" ? "flex flex-row" : ""
            }`}
          >
            <CardContent className={`p-0 ${viewMode === "list" ? "flex w-full" : ""}`}>
              {/* Product Image */}
              <div
                className={`relative ${
                  viewMode === "list" ? "w-48 flex-shrink-0" : "h-48"
                } bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center overflow-hidden`}
              >
                <div className="text-6xl">💻</div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.badge && (
                    <Badge className={`${product.badgeColor} text-white border-0 px-2 py-1 text-xs font-semibold`}>
                      {product.badge}
                    </Badge>
                  )}
                  {product.isNew && (
                    <Badge className="bg-blue-500 text-white border-0 px-2 py-1 text-xs font-semibold">Nuevo</Badge>
                  )}
                  {!product.inStock && (
                    <Badge className="bg-gray-500 text-white border-0 px-2 py-1 text-xs font-semibold">Agotado</Badge>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="absolute top-3 right-3 flex flex-col gap-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-8 h-8 p-0 rounded-full bg-white/80 hover:bg-white ${
                      favorites.includes(product.id) ? "text-red-500" : "text-gray-600"
                    }`}
                    onClick={() => toggleFavorite(product.id)}
                  >
                    <Heart className={`h-4 w-4 ${favorites.includes(product.id) ? "fill-current" : ""}`} />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className={`w-8 h-8 p-0 rounded-full bg-white/80 hover:bg-white ${
                      compareList.includes(product.id) ? "text-[#712581]" : "text-gray-600"
                    }`}
                    onClick={() => toggleCompare(product.id)}
                    disabled={!compareList.includes(product.id) && compareList.length >= 3}
                  >
                    <Compare className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className={`p-6 ${viewMode === "list" ? "flex-1 flex flex-col justify-between" : ""}`}>
                <div>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-lg text-gray-900 line-clamp-2">{product.name}</h3>
                    <Badge variant="outline" className="ml-2 text-xs text-[#712581] border-[#712581]">
                      {product.category}
                    </Badge>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                    </div>
                    <span className="text-sm text-gray-500">({product.reviews} reseñas)</span>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl font-bold text-[#712581]">${product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>

                  <div className="space-y-2 mb-4">
                    {product.features.slice(0, viewMode === "list" ? 4 : 3).map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-[#248a98] rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <p className="text-sm text-gray-500 mb-4 bg-gray-50 p-2 rounded-lg">{product.financing}</p>
                </div>

                <div className="space-y-2">
                  <Button
                    className="w-full bg-[#712581] hover:bg-[#712581]/90 text-white py-2 rounded-xl font-semibold"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {product.inStock ? "Agregar al carrito" : "No disponible"}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-2 border-[#248a98] text-[#248a98] hover:bg-[#248a98] hover:text-white py-2 rounded-xl font-semibold"
                  >
                    Ver detalles
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 pt-8">
        <Button variant="outline" disabled className="px-4 py-2 rounded-lg">
          Anterior
        </Button>
        {[1, 2, 3, 4, 5].map((page) => (
          <Button
            key={page}
            variant={page === 1 ? "default" : "outline"}
            className={`px-4 py-2 rounded-lg ${page === 1 ? "bg-[#712581] text-white" : "text-gray-600"}`}
          >
            {page}
          </Button>
        ))}
        <Button variant="outline" className="px-4 py-2 rounded-lg text-gray-600">
          Siguiente
        </Button>
      </div>
    </div>
  )
}
