"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, ThumbsUp, MessageCircle, Star, Laptop } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import "../styles/reviewsContent.css"

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

    if (activeFilter !== "todas") {
      filtered = filtered.filter((review) => review.category === activeFilter.slice(0, -1))
    }

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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star key={index} className={`h-4 w-4 ${index < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`} />
    ))
  }

  /* ───────── Variants reutilizables ───────── */
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.2 + i * 0.1, duration: 0.6 },
    }),
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.07,
        type: "spring",
        stiffness: 120,
      },
    }),
    hover: { y: -6, scale: 1.02, boxShadow: "0 10px 25px rgba(0,0,0,0.12)" },
  }

  
  return (
    <motion.div 
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.07 } } }}
      className="reviewsR-container"
    >
      {/* ───── Hero con fondo animado ───── */}
      <motion.section variants={fadeUp} className="heroR-section">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="heroR-background-decorations"
        >
          <div className="circle1"></div>
          <div className="circle2"></div>
          <div className="circle3"></div>
          <div className="circle4"></div>
        </motion.div>

        <motion.div className="heroR-content">
          <motion.h1 variants={fadeUp} className="heroR-title">
            Reseñas de Estudiantes
          </motion.h1>
          <motion.p variants={fadeUp} className="heroR-description">
            Lee opiniones y consejos de estudiantes que ya utilizan estos
            equipos en sus carreras.
          </motion.p>

          {/* Barra de búsqueda */}
          <motion.div variants={fadeUp} className="search-wrapper">
            <div className="search-container">
              <div className="search-box relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Busca por carrera, equipo o palabra clave..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <div className="reviews-wrapper">
        {/* ───── Filtros ───── */}
        <motion.div variants={fadeUp} className="filter-buttons">
          {filterTabs.map((tab) => (
            <motion.div key={tab.id} whileHover={{ scale: 1.04 }}>
              <Button
                variant="ghost"
                onClick={() => setActiveFilter(tab.id)}
                className={`filter-btn ${
                  activeFilter === tab.id ? "active" : ""
                }`}
              >
                {tab.label}
              </Button>
            </motion.div>
          ))}
        </motion.div>
        <div className="space-y-6 mb-16">
          {filteredReviews.length > 0 ? (
            filteredReviews.map((review) => (
              <Card key={review.id} className="review-card">
                <CardContent className="review-card-content">
                  <div className="flex items-start gap-4">
                    <div className="review-avatarRV">{review.avatar}</div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div className="review-header">
                          <h3>{review.name}</h3>
                          <p>{review.career}</p>
                          <p>• {review.date}</p>
                        </div>
                        <div className="review-rating">
                          <div className="flex items-center">{renderStars(review.rating)}</div>
                          <span>{review.rating}</span>
                        </div>
                      </div>

                      <div className="review-product">
                        <Laptop className="h-4 w-4 text-gray-500" />
                        <Badge className="badge">{review.product}</Badge>
                      </div>

                      <p className="review-text">{review.review}</p>

                      <div className="review-footer">
                        <div className="review-actions">
                          <div className="icon-group">
                            <ThumbsUp className="h-4 w-4" />
                            <span>{review.likes}</span>
                          </div>
                          <div className="icon-group">
                            <MessageCircle className="h-4 w-4" />
                            <span>{review.comments}</span>
                          </div>
                        </div>
                        <Button variant="ghost" className="review-button">
                          Ver completa
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="reviews-empty">
              <div className="icon">🔍</div>
              <h3>No se encontraron reseñas</h3>
              <p>Intenta ajustar tus filtros o términos de búsqueda</p>
              <Button
                onClick={() => {
                  setActiveFilter("todas")
                  setSearchQuery("")
                }}
                className="btn-clear"
              >
                Limpiar filtros
              </Button>
            </div>
          )}
        </div>

        <Card className="cta-card">
          <CardContent className="cta-content">
            <h2>¿Ya tienes un equipo?</h2>
            <p>
              Comparte tu experiencia y ayuda a otros estudiantes a tomar la mejor decisión.
            </p>
            <Button size="lg" className="cta-btn">
              Escribir una reseña
            </Button>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
