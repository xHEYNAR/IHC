"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ThumbsUp, MessageCircle, Star, Laptop } from "lucide-react"

const filterTabs = [
  { id: "todas", label: "Todas las reseñas", active: true },
  { id: "laptops", label: "Laptops", active: false },
  { id: "pcs", label: "PCs", active: false },
]

const allReviews = [
  {
    id: 1,
    name: "Carlos Méndez",
    career: "Estudiante de Arquitectura",
    date: "15/05/2025",
    product: "Pro X1",
    rating: 4,
    review:
      "Excelente laptop para trabajar con AutoCAD y Revit. La batería dura lo suficiente para mis clases y el rendimiento es muy bueno. El único inconveniente es que se calienta un poco durante sesiones largas de renderizado, pero nada grave.",
    likes: 24,
    comments: 5,
    avatar: "C",
    category: "laptop",
  },
  {
    id: 2,
    name: "Ana Gómez",
    career: "Estudiante de Diseño Gráfico",
    date: "02/05/2025",
    product: "Creator Book Pro",
    rating: 5,
    review:
      "La pantalla OLED es increíble para trabajar con Adobe Photoshop e Illustrator. Los colores son precisos y el rendimiento es excelente. Puedo trabajar con archivos pesados sin problemas. Totalmente recomendada para estudiantes de diseño.",
    likes: 36,
    comments: 8,
    avatar: "A",
    category: "laptop",
  },
  {
    id: 3,
    name: "Roberto Sánchez",
    career: "Estudiante de Ingeniería Civil",
    date: "28/04/2025",
    product: "WorkStation Z3",
    rating: 4,
    review:
      "Esta PC es una bestia para modelado estructural y simulaciones. Puedo ejecutar ETABS y SAP2000 simultáneamente sin problemas. El único inconveniente es que no es portátil, pero el rendimiento compensa totalmente.",
    likes: 19,
    comments: 3,
    avatar: "R",
    category: "pc",
  },
  {
    id: 4,
    name: "María González",
    career: "Estudiante de Programación",
    date: "20/04/2025",
    product: "Developer Pro",
    rating: 5,
    review:
      "Perfecta para desarrollo de software. Puedo correr múltiples IDEs, contenedores Docker y bases de datos sin problemas. La velocidad de compilación es impresionante y la pantalla es cómoda para largas sesiones de código.",
    likes: 42,
    comments: 12,
    avatar: "M",
    category: "laptop",
  },
  {
    id: 5,
    name: "Diego Herrera",
    career: "Estudiante de Gaming",
    date: "15/04/2025",
    product: "Gaming Beast",
    rating: 5,
    review:
      "Increíble para gaming y streaming. Puedo jugar en ultra settings y hacer stream simultáneamente. La refrigeración es excelente y nunca he tenido problemas de temperatura. Vale cada peso invertido.",
    likes: 67,
    comments: 15,
    avatar: "D",
    category: "pc",
  },
  {
    id: 6,
    name: "Sofía Ramírez",
    career: "Estudiante de Multimedia",
    date: "10/04/2025",
    product: "Media Creator",
    rating: 4,
    review:
      "Excelente para edición de video con Premiere Pro y After Effects. Renderiza rápido y maneja proyectos 4K sin problemas. La única queja es que la batería podría durar más, pero para el rendimiento que ofrece está bien.",
    likes: 28,
    comments: 6,
    avatar: "S",
    category: "laptop",
  },
]

export default function ReviewsContent() {
  const [activeFilter, setActiveFilter] = useState("todas")
  const [searchQuery, setSearchQuery] = useState("")

  const getFilteredReviews = () => {
    let filtered = allReviews

    // Filter by category
    if (activeFilter !== "todas") {
      filtered = filtered.filter((review) => review.category === activeFilter.slice(0, -1))
    }

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        (review) =>
          review.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          review.career.toLowerCase().includes(searchQuery.toLowerCase()) ||
          review.product.toLowerCase().includes(searchQuery.toLowerCase()) ||
          review.review.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    return filtered
  }

  const filteredReviews = getFilteredReviews()

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  return (
    <div className="bg-[#f2f2f2] min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#712581] via-[#712581] to-[#8B2F9B] py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#248a98] rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 bg-[#248a98] rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-6">Reseñas de Estudiantes</h1>
          <p className="text-xl text-[#F1F5F9]/90 mb-8 max-w-3xl mx-auto">
            Lee opiniones y consejos de estudiantes que ya utilizan estos equipos en sus carreras.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6 border border-white/20">
              <div className="bg-white rounded-2xl p-4 shadow-2xl">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Busca por carrera, equipo o palabra clave..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 text-lg border-0 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#712581] bg-gray-50"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {filterTabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeFilter === tab.id ? "default" : "outline"}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeFilter === tab.id
                  ? "bg-[#4285f4] text-white hover:bg-[#4285f4]/90"
                  : "border-2 border-gray-200 text-gray-700 hover:border-[#4285f4] hover:text-[#4285f4] bg-white"
              }`}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Reviews List */}
        <div className="space-y-6 mb-16">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <Card key={review.id} className="border-0 shadow-sm hover:shadow-md transition-shadow rounded-2xl">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-gray-600 font-semibold text-lg">{review.avatar}</span>
                    </div>

                    {/* Review Content */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="font-semibold text-gray-900">{review.name}</h3>
                          <p className="text-sm text-gray-600">{review.career}</p>
                          <p className="text-sm text-gray-500">• {review.date}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="flex items-center">{renderStars(review.rating)}</div>
                          <span className="text-sm font-semibold text-gray-700">{review.rating}</span>
                        </div>
                      </div>

                      {/* Product Badge */}
                      <div className="flex items-center gap-2 mb-4">
                        <Laptop className="h-4 w-4 text-gray-500" />
                        <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-200 border-0 px-3 py-1 rounded-lg font-medium">
                          {review.product}
                        </Badge>
                      </div>

                      {/* Review Text */}
                      <p className="text-gray-700 leading-relaxed mb-4">{review.review}</p>

                      {/* Actions */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                          <div className="flex items-center gap-1 text-gray-500">
                            <ThumbsUp className="h-4 w-4" />
                            <span className="text-sm font-medium">{review.likes}</span>
                          </div>
                          <div className="flex items-center gap-1 text-gray-500">
                            <MessageCircle className="h-4 w-4" />
                            <span className="text-sm font-medium">{review.comments}</span>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          className="text-[#4285f4] hover:text-[#4285f4]/80 p-0 h-auto font-medium"
                        >
                          Ver completa
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No se encontraron reseñas</h3>
              <p className="text-gray-600 mb-6">Intenta ajustar tus filtros o términos de búsqueda</p>
              <Button
                onClick={() => {
                  setActiveFilter("todas")
                  setSearchQuery("")
                }}
                className="bg-[#712581] hover:bg-[#712581]/90 text-white px-8 py-3 rounded-xl font-semibold"
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>

        {/* Call to Action */}
        <Card className="border-0 shadow-lg rounded-3xl overflow-hidden bg-gradient-to-r from-[#4285f4] to-[#6fa8f5]">
          <CardContent className="p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">¿Ya tienes un equipo?</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Comparte tu experiencia y ayuda a otros estudiantes a tomar la mejor decisión.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#4285f4] hover:bg-gray-100 px-8 py-4 rounded-xl text-lg font-semibold shadow-lg"
            >
              Escribir una reseña
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
