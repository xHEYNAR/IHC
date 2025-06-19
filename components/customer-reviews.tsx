import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ThumbsUp, MessageCircle, Quote } from "lucide-react"

const reviews = [
  {
    id: 1,
    name: "Carlos Méndez",
    profession: "Arquitectura",
    review:
      "Excelente laptop para trabajar con AutoCAD y Revit. La batería dura lo suficiente para todo el día y el rendimiento es muy bueno.",
    likes: 24,
    comments: 5,
    initials: "CM",
    avatar: "👨‍💼",
    bgColor: "from-blue-400 to-blue-600",
  },
  {
    id: 2,
    name: "Ana García",
    profession: "Diseño Gráfico",
    review:
      "Perfect para mis proyectos creativos. Adobe Creative Suite funciona sin problemas y la pantalla tiene colores increíbles.",
    likes: 18,
    comments: 3,
    initials: "AG",
    avatar: "👩‍🎨",
    bgColor: "from-pink-400 to-pink-600",
  },
  {
    id: 3,
    name: "Miguel Torres",
    profession: "Ingeniería",
    review:
      "Ideal para programación y desarrollo. Compila rápido y puedo trabajar con múltiples IDEs sin problemas de rendimiento.",
    likes: 31,
    comments: 8,
    initials: "MT",
    avatar: "👨‍💻",
    bgColor: "from-green-400 to-green-600",
  },
]

export default function CustomerReviews() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#712581] rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-[#248a98] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Reseñas de Compradores</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubre lo que dicen nuestros usuarios sobre sus equipos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="bg-white shadow-xl border-0 rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <CardContent className="p-0">
                <div className={`h-24 bg-gradient-to-r ${review.bgColor} relative`}>
                  <div className="absolute -bottom-6 left-6">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-2xl shadow-lg">
                      {review.avatar}
                    </div>
                  </div>
                  <Quote className="absolute top-4 right-4 h-6 w-6 text-white/50" />
                </div>

                <div className="p-6 pt-8">
                  <div className="mb-4">
                    <h4 className="font-bold text-lg text-gray-900">{review.name}</h4>
                    <p className="text-sm text-[#712581] font-semibold bg-[#712581]/10 px-3 py-1 rounded-full inline-block">
                      {review.profession}
                    </p>
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">{review.review}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1 text-[#248a98]">
                        <ThumbsUp className="h-4 w-4" />
                        <span className="font-semibold">{review.likes}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-500">
                        <MessageCircle className="h-4 w-4" />
                        <span>{review.comments}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-to-r from-[#248a98] to-[#2DD4BF] hover:from-[#248a98]/90 hover:to-[#2DD4BF]/90 text-white px-12 py-4 rounded-full text-lg font-semibold shadow-lg">
            Ver todas las reseñas
          </Button>
        </div>
      </div>
    </section>
  )
}
