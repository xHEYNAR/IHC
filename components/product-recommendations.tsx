"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"

const products = [
  {
    id: 1,
    name: "XPS 15",
    price: "$1,299.00",
    badge: "Promoción estudiante",
    badgeColor: "bg-gradient-to-r from-[#248a98] to-[#2DD4BF]",
    features: ["AutoCAD", "Adobe Suite"],
    financing: "Cuotas sin interés disponibles",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    gradient: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    name: "MacBook Pro M2",
    price: "$1,599.00",
    features: ["Final Cut Pro", "Adobe Suite"],
    financing: "Cuotas sin interés disponibles",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    gradient: "from-purple-400 to-purple-600",
  },
  {
    id: 3,
    name: "HP Pavilion Gaming",
    price: "$899.00",
    badge: "Oferta especial",
    badgeColor: "bg-gradient-to-r from-[#712581] to-[#8B2F9B]",
    features: ["Unreal Engine", "Unity"],
    financing: "Cuotas sin interés disponibles",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.7,
    gradient: "from-green-400 to-green-600",
  },
  {
    id: 4,
    name: "MacBook Air M1",
    price: "$1,199.00",
    features: ["Microsoft Office", "Adobe Creative"],
    financing: "Cuotas sin interés disponibles",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.8,
    gradient: "from-pink-400 to-pink-600",
  },
  {
    id: 5,
    name: "Dell Inspiron 15",
    price: "$799.00",
    badge: "Mejor precio",
    badgeColor: "bg-gradient-to-r from-orange-400 to-orange-600",
    features: ["Office 365", "Zoom"],
    financing: "Cuotas sin interés disponibles",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    gradient: "from-orange-400 to-orange-600",
  },
  {
    id: 6,
    name: "ASUS ROG Strix",
    price: "$1,899.00",
    features: ["Gaming", "Streaming"],
    financing: "Cuotas sin interés disponibles",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.9,
    gradient: "from-red-400 to-red-600",
  },
]

export default function ProductRecommendations() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -320, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 320, behavior: "smooth" })
    }
  }

  return (
    <section className="py-20 bg-gradient-to-b from-[#f2f2f2] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Laptops y PCs recomendadas para ti</h2>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={scrollLeft}
              className="rounded-full w-10 h-10 p-0 border-2 border-gray-300 hover:border-[#712581] hover:text-[#712581]"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={scrollRight}
              className="rounded-full w-10 h-10 p-0 border-2 border-gray-300 hover:border-[#712581] hover:text-[#712581]"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 rounded-3xl overflow-hidden flex-shrink-0 w-80"
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <div
                      className={`h-48 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-black/10"></div>
                      <div className="relative z-10 text-white text-6xl">💻</div>
                      {product.badge && (
                        <Badge
                          className={`absolute top-4 left-4 ${product.badgeColor} text-white border-0 px-3 py-1 rounded-full font-semibold`}
                        >
                          {product.badge}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-xl text-gray-900">{product.name}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600">{product.rating}</span>
                      </div>
                    </div>

                    <p className="text-3xl font-bold text-[#712581] mb-4">{product.price}</p>

                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm text-gray-600">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                            <Check className="h-3 w-3 text-green-600" />
                          </div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    <p className="text-sm text-gray-500 mb-6 bg-gray-50 p-3 rounded-xl">{product.financing}</p>

                    <div className="space-y-3">
                      <Button className="w-full bg-[#712581] hover:bg-[#712581]/90 text-white py-3 rounded-xl font-semibold">
                        Ver más
                      </Button>
                      <Button
                        variant="outline"
                        className="w-full border-2 border-[#248a98] text-[#248a98] hover:bg-[#248a98] hover:text-white py-3 rounded-xl font-semibold"
                      >
                        Comparar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="flex justify-center mt-4">
            <div className="flex space-x-2">
              {Array.from({ length: Math.ceil(products.length / 3) }).map((_, index) => (
                <div key={index} className={`w-2 h-2 rounded-full ${index === 0 ? "bg-[#712581]" : "bg-gray-300"}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
