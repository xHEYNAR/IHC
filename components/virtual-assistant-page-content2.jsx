"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send, MessageCircle, Laptop, Monitor, Sparkles, Zap } from "lucide-react"

import "../styles/VirtualAssistantPageContent.css"

const frequentQuestions = [
  { id: 1, question: "¿Qué laptop me conviene si estudio arquitectura?", category: "Arquitectura", icon: "🏗️" },
  { id: 2, question: "¿Necesito una PC o una laptop para ingeniería?", category: "Ingeniería", icon: "⚙️" },
  { id: 3, question: "¿Qué equipo es mejor para diseño gráfico?", category: "Diseño", icon: "🎨" },
]

const sampleRecommendations = [
  { id: 1, name: "Dell XPS 15", price: "$1,299", category: "Laptop", description: "Ideal para AutoCAD y software de arquitectura", specs: ["Intel Core i7", "16GB RAM", "RTX 3050"], compatibility: 95 },
  { id: 2, name: "MacBook Pro M2", price: "$1,599", category: "Laptop", description: "Perfecto para diseño gráfico y creatividad", specs: ["Apple M2", "16GB RAM", "512GB SSD"], compatibility: 98 },
  { id: 3, name: "ASUS ROG Strix", price: "$1,899", category: "Laptop", description: "Potencia extrema para gaming y desarrollo", specs: ["Intel Core i9", "32GB RAM", "RTX 4070"], compatibility: 100 },
  { id: 4, name: "HP Pavilion", price: "$899", category: "Laptop", description: "Equilibrio perfecto para estudiantes", specs: ["AMD Ryzen 7", "16GB RAM", "GTX 1650"], compatibility: 88 },
]

export default function VirtualAssistantPageContent() {
  const [message, setMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "assistant",
      content: "¡Hola! Soy tu asistente virtual para ayudarte a elegir el equipo perfecto para tus estudios. ¿Qué carrera estudias o qué tipo de software necesitas usar?",
      timestamp: "06:46 p. m.",
    },
  ])
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [animateRecommendations, setAnimateRecommendations] = useState(false)

  const handleSendMessage = () => {
    if (message.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        type: "user",
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setChatMessages((prev) => [...prev, userMessage])
      setIsTyping(true)
      setTimeout(() => {
        const assistantResponse = {
          id: chatMessages.length + 2,
          type: "assistant",
          content: "Perfecto! Basándome en tu información, he encontrado algunos equipos que podrían ser ideales para ti. Revisa las recomendaciones en el panel derecho.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setChatMessages((prev) => [...prev, assistantResponse])
        setIsTyping(false)
        setShowRecommendations(true)
        setTimeout(() => {
          setAnimateRecommendations(true)
        }, 500)
      }, 2000)
      setMessage("")
    }
  }

  const handleQuestionClick = (question) => {
    setMessage(question)
  }

  return (
    <div className="page-container">
      <section className="hero-section">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#248a98] rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 bg-[#248a98] rounded-full animate-pulse"></div>
          <div className="absolute top-1/4 left-1/3 animate-float"><Sparkles className="h-6 w-6 text-white opacity-20" /></div>
          <div className="absolute top-3/4 right-1/3 animate-float-delayed"><Zap className="h-8 w-8 text-[#248a98] opacity-30" /></div>
        </div>
        <div className="animate-fade-in-up">
          <h1 className="hero-title animate-gradient-text">Asistente Virtual</h1>
          <p className="hero-description animate-fade-in-up-delayed">
            Obtén recomendaciones personalizadas para elegir el equipo ideal según tu carrera y necesidades.
          </p>
        </div>
      </section>

      <div className="chat-container">
        <div className="chat-card-container animate-slide-in-left">
          {/* Aquí va tu Card del Chat con CardContent */}
          <Card className="chat-card">
            <CardContent className="chat-card-content">
              {/* Chat Header */}
              <div className="chat-header">
                <div className="chat-header-bg"></div>
                <div className="chat-header-inner">
                  <div className="chat-header-avatar">
                    <span>A</span>
                  </div>
                  <div>
                    <h3 className="chat-header-title">Asistente TecnoLink</h3>
                    <p className="chat-header-status">
                      <span className="chat-header-status-dot"></span>
                      Tu guía para encontrar el equipo perfecto
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="chat-messages">
                {chatMessages.map((msg, index) => (
                  <div
                    key={msg.id}
                    className={`chat-message ${msg.type}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="chat-message-wrapper">
                      {msg.type === "assistant" && (
                        <div className="chat-message-avatar">
                          <span>A</span>
                        </div>
                      )}
                      <div>
                        <div className={`chat-bubble ${msg.type}`}>{msg.content}</div>
                        <p className="chat-timestamp">{msg.timestamp}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Typing Indicator */}
                {isTyping && (
                  <div className="typing-indicator animate-fade-in">
                    <div className="chat-message-avatar">
                      <span>A</span>
                    </div>
                    <div className="chat-bubble assistant">
                      <div className="typing-dots">
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                        <div className="typing-dot"></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="chat-input-section">
                <div className="chat-input-container">
                  <input
                    className="chat-input"
                    type="text"
                    placeholder="Escribe tu pregunta aquí..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!message.trim() || isTyping}
                    className="send-button"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="recommend-card-container animate-slide-in-right">
          {/* Aquí va tu Card de recomendaciones con CardContent */}
          <Card className="recommend-card">
            <CardContent className="recommend-card-content">
              {/* Encabezado */}
              <div className="flex items-center gap-3 mb-6">
                <div className="recommend-icon-box animate-pulse-soft">
                  <MessageCircle className="h-4 w-4 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Recomendaciones</h3>
              </div>

              {showRecommendations ? (
                <div className="recommendation-scroll space-y-4 flex-1">
                  <p className="text-sm text-gray-600 mb-4">
                    Equipos sugeridos basados en tu conversación
                  </p>

                  {sampleRecommendations.map((product, index) => (
                    <Card
                      key={product.id}
                      className={`recommend-card ${
                        animateRecommendations ? "animate-slide-up" : "opacity-0"
                      }`}
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      <CardContent className="recommend-card-content">
                        {/* Compatibility Badge */}
                        <div
                          className={`recommend-badge ${
                            product.compatibility >= 95
                              ? "badge-green"
                              : product.compatibility >= 90
                              ? "badge-yellow"
                              : "badge-gray"
                          }`}
                        >
                          {product.compatibility}%
                        </div>

                        {/* Título + ícono */}
                        <div className="flex items-center gap-3 mb-3">
                          <div className="recommend-icon-box">
                            {product.category === "Laptop" ? (
                              <Laptop className="h-5 w-5 text-white" />
                            ) : (
                              <Monitor className="h-5 w-5 text-white" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h4 className="recommend-title">{product.name}</h4>
                            <p className="recommend-price">{product.price}</p>
                          </div>
                        </div>

                        {/* Descripción */}
                        <p className="recommend-description">{product.description}</p>

                        {/* Especificaciones */}
                        {product.specs.map((spec, specIndex) => (
                          <div key={specIndex} className="recommend-spec">
                            <span className="recommend-dot"></span>
                            {spec}
                          </div>
                        ))}

                        {/* Botón */}
                        <Button size="sm" className="detail-button">
                          Ver detalles
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mb-4 animate-pulse-soft">
                    <MessageCircle className="h-8 w-8 text-gray-400" />
                  </div>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Las recomendaciones aparecerán aquí cuando me cuentes más sobre tus
                    necesidades académicas.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="faq-container">
        <h2 className="faq-title">Preguntas frecuentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {frequentQuestions.map((faq, index) => (
            <Card key={faq.id} className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group hover:scale-105 animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#712581]/5 to-[#248a98]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="text-4xl mb-4 animate-bounce-soft">{faq.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-4 leading-relaxed group-hover:text-[#712581] transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <Button onClick={() => handleQuestionClick(faq.question)} variant="outline" className="w-full border-2 border-[#712581] text-[#712581] hover:bg-[#712581] hover:text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    Preguntar al asistente
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
