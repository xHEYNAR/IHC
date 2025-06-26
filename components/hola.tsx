"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Send, MessageCircle, Laptop, Monitor, Sparkles, Zap } from "lucide-react"

const frequentQuestions = [
  {
    id: 1,
    question: "¿Qué laptop me conviene si estudio arquitectura?",
    category: "Arquitectura",
    icon: "🏗️",
  },
  {
    id: 2,
    question: "¿Necesito una PC o una laptop para ingeniería?",
    category: "Ingeniería",
    icon: "⚙️",
  },
  {
    id: 3,
    question: "¿Qué equipo es mejor para diseño gráfico?",
    category: "Diseño",
    icon: "🎨",
  },
]

const sampleRecommendations = [
  {
    id: 1,
    name: "Dell XPS 15",
    price: "$1,299",
    category: "Laptop",
    description: "Ideal para AutoCAD y software de arquitectura",
    specs: ["Intel Core i7", "16GB RAM", "RTX 3050"],
    compatibility: 95,
  },
  {
    id: 2,
    name: "MacBook Pro M2",
    price: "$1,599",
    category: "Laptop",
    description: "Perfecto para diseño gráfico y creatividad",
    specs: ["Apple M2", "16GB RAM", "512GB SSD"],
    compatibility: 98,
  },
  {
    id: 3,
    name: "ASUS ROG Strix",
    price: "$1,899",
    category: "Laptop",
    description: "Potencia extrema para gaming y desarrollo",
    specs: ["Intel Core i9", "32GB RAM", "RTX 4070"],
    compatibility: 100,
  },
  {
    id: 4,
    name: "HP Pavilion",
    price: "$899",
    category: "Laptop",
    description: "Equilibrio perfecto para estudiantes",
    specs: ["AMD Ryzen 7", "16GB RAM", "GTX 1650"],
    compatibility: 88,
  },
]

export default function VirtualAssistantPageContent() {
  const [message, setMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: "assistant",
      content:
        "¡Hola! Soy tu asistente virtual para ayudarte a elegir el equipo perfecto para tus estudios. ¿Qué carrera estudias o qué tipo de software necesitas usar?",
      timestamp: "06:46 p. m.",
    },
  ])
  const [showRecommendations, setShowRecommendations] = useState(false)
  const [animateRecommendations, setAnimateRecommendations] = useState(false)

  const handleSendMessage = () => {
    if (message.trim()) {
      // Add user message
      const userMessage = {
        id: chatMessages.length + 1,
        type: "user",
        content: message,
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }

      setChatMessages((prev) => [...prev, userMessage])
      setIsTyping(true)

      // Simulate assistant response
      setTimeout(() => {
        const assistantResponse = {
          id: chatMessages.length + 2,
          type: "assistant",
          content:
            "Perfecto! Basándome en tu información, he encontrado algunos equipos que podrían ser ideales para ti. Revisa las recomendaciones en el panel derecho.",
          timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
        }
        setChatMessages((prev) => [...prev, assistantResponse])
        setIsTyping(false)
        setShowRecommendations(true)

        // Animate recommendations after a short delay
        setTimeout(() => {
          setAnimateRecommendations(true)
        }, 500)
      }, 2000)

      setMessage("")
    }
  }

  const handleQuestionClick = (question: string) => {
    setMessage(question)
  }

  return (
    <div className="bg-[#f2f2f2] pt-16">
      {" "}
      {/* Added pt-16 for fixed header */}
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#712581] via-[#712581] to-[#8B2F9B] py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#248a98] rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 bg-[#248a98] rounded-full animate-pulse"></div>

          {/* Floating Sparkles */}
          <div className="absolute top-1/4 left-1/3 animate-float">
            <Sparkles className="h-6 w-6 text-white opacity-20" />
          </div>
          <div className="absolute top-3/4 right-1/3 animate-float-delayed">
            <Zap className="h-8 w-8 text-[#248a98] opacity-30" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-6 animate-gradient-text">
              Asistente Virtual
            </h1>
            <p className="text-xl text-[#F1F5F9]/90 max-w-4xl mx-auto leading-relaxed animate-fade-in-up-delayed">
              Obtén recomendaciones personalizadas para elegir el equipo ideal según tu carrera y necesidades.
            </p>
          </div>
        </div>
      </section>
      {/* Chat Interface */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Chat Section */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden h-[600px] flex flex-col hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
              <CardContent className="p-0 flex flex-col h-full">
                {/* Chat Header */}
                <div className="bg-gradient-to-r from-[#712581] to-[#8B2F9B] p-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#712581] via-[#8B2F9B] to-[#712581] animate-gradient-x"></div>
                  <div className="flex items-center gap-4 relative z-10">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center animate-pulse-soft">
                      <span className="text-[#712581] text-xl font-bold">A</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Asistente TecnoLink</h3>
                      <p className="text-white/80 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                        Tu guía para encontrar el equipo perfecto
                      </p>
                    </div>
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 p-6 overflow-y-auto space-y-4">
                  {chatMessages.map((msg, index) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"} animate-message-appear`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-start gap-3 max-w-[80%]">
                        {msg.type === "assistant" && (
                          <div className="w-8 h-8 bg-[#712581] rounded-full flex items-center justify-center flex-shrink-0 animate-bounce-soft">
                            <span className="text-white text-sm font-bold">A</span>
                          </div>
                        )}
                        <div>
                          <div
                            className={`p-4 rounded-2xl transition-all duration-300 hover:scale-105 ${
                              msg.type === "user"
                                ? "bg-gradient-to-r from-[#712581] to-[#8B2F9B] text-white shadow-lg"
                                : "bg-white text-gray-900 shadow-md border border-gray-100"
                            }`}
                          >
                            <p className="text-sm leading-relaxed">{msg.content}</p>
                          </div>
                          <p className="text-xs text-gray-500 mt-1 px-2">{msg.timestamp}</p>
                        </div>
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start animate-fade-in">
                      <div className="flex items-start gap-3 max-w-[80%]">
                        <div className="w-8 h-8 bg-[#712581] rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm font-bold">A</span>
                        </div>
                        <div className="bg-white p-4 rounded-2xl shadow-md border border-gray-100">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-[#712581] rounded-full animate-bounce"></div>
                            <div
                              className="w-2 h-2 bg-[#712581] rounded-full animate-bounce"
                              style={{ animationDelay: "0.1s" }}
                            ></div>
                            <div
                              className="w-2 h-2 bg-[#712581] rounded-full animate-bounce"
                              style={{ animationDelay: "0.2s" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Chat Input */}
                <div className="p-6 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-white">
                  <div className="flex gap-3">
                    <input
                      type="text"
                      placeholder="Escribe tu pregunta aquí..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                      className="flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#712581] focus:border-transparent transition-all duration-300 hover:shadow-md"
                    />
                    <Button
                      onClick={handleSendMessage}
                      disabled={!message.trim() || isTyping}
                      className="bg-gradient-to-r from-[#712581] to-[#8B2F9B] hover:from-[#8B2F9B] hover:to-[#712581] text-white px-6 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recommendations Section */}
          <div className="lg:col-span-1 animate-slide-in-right">
            <Card className="border-0 shadow-xl rounded-3xl overflow-hidden h-[600px] hover:shadow-2xl transition-all duration-500">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#248a98] to-[#2DD4BF] rounded-full flex items-center justify-center animate-pulse-soft">
                    <MessageCircle className="h-4 w-4 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Recomendaciones</h3>
                </div>

                {showRecommendations ? (
                  <div className="space-y-4 flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-[#712581] scrollbar-track-gray-100">
                    <p className="text-sm text-gray-600 mb-4">Equipos sugeridos basados en tu conversación</p>
                    {sampleRecommendations.map((product, index) => (
                      <Card
                        key={product.id}
                        className={`border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-500 hover:scale-105 hover:border-[#712581] ${
                          animateRecommendations ? "animate-slide-up" : "opacity-0"
                        }`}
                        style={{ animationDelay: `${index * 0.2}s` }}
                      >
                        <CardContent className="p-4 relative overflow-hidden">
                          {/* Compatibility Badge */}
                          <div className="absolute top-2 right-2">
                            <div
                              className={`px-2 py-1 rounded-full text-xs font-bold ${
                                product.compatibility >= 95
                                  ? "bg-green-100 text-green-800"
                                  : product.compatibility >= 90
                                    ? "bg-yellow-100 text-yellow-800"
                                    : "bg-gray-100 text-gray-800"
                              }`}
                            >
                              {product.compatibility}%
                            </div>
                          </div>

                          <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#712581] to-[#8B2F9B] rounded-lg flex items-center justify-center">
                              {product.category === "Laptop" ? (
                                <Laptop className="h-5 w-5 text-white" />
                              ) : (
                                <Monitor className="h-5 w-5 text-white" />
                              )}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-900 text-sm">{product.name}</h4>
                              <p className="text-[#712581] font-bold text-lg">{product.price}</p>
                            </div>
                          </div>
                          <p className="text-xs text-gray-600 mb-3">{product.description}</p>
                          <div className="space-y-1">
                            {product.specs.map((spec, specIndex) => (
                              <div key={specIndex} className="flex items-center text-xs text-gray-500">
                                <div className="w-1.5 h-1.5 bg-[#248a98] rounded-full mr-2"></div>
                                {spec}
                              </div>
                            ))}
                          </div>
                          <Button
                            size="sm"
                            className="w-full mt-3 bg-gradient-to-r from-[#712581] to-[#8B2F9B] hover:from-[#8B2F9B] hover:to-[#712581] text-white text-xs py-2 rounded-lg transition-all duration-300 hover:scale-105"
                          >
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
                      Las recomendaciones aparecerán aquí cuando me cuentes más sobre tus necesidades académicas.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      {/* Frequent Questions */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Preguntas frecuentes</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {frequentQuestions.map((faq, index) => (
            <Card
              key={faq.id}
              className="border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden group hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 relative overflow-hidden">
                {/* Background Gradient Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#712581]/5 to-[#248a98]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="text-4xl mb-4 animate-bounce-soft">{faq.icon}</div>
                  <h3 className="font-semibold text-gray-900 mb-4 leading-relaxed group-hover:text-[#712581] transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <Button
                    onClick={() => handleQuestionClick(faq.question)}
                    variant="outline"
                    className="w-full border-2 border-[#712581] text-[#712581] hover:bg-[#712581] hover:text-white rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Preguntar al asistente
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      {/* Custom Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes message-appear {
          from {
            opacity: 0;
            transform: translateY(10px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes pulse-soft {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes bounce-soft {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 3s ease-in-out infinite 1s; }
        .animate-gradient-x { animation: gradient-x 3s ease infinite; background-size: 200% 200%; }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease-out; }
        .animate-fade-in-up-delayed { animation: fade-in-up 0.8s ease-out 0.3s both; }
        .animate-slide-in-left { animation: slide-in-left 0.8s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.8s ease-out; }
        .animate-slide-up { animation: slide-up 0.6s ease-out both; }
        .animate-message-appear { animation: message-appear 0.5s ease-out both; }
        .animate-pulse-soft { animation: pulse-soft 2s ease-in-out infinite; }
        .animate-bounce-soft { animation: bounce-soft 2s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in-up 0.3s ease-out; }
        .animate-gradient-text { 
          background: linear-gradient(-45deg, #F1F5F9, #248a98, #F1F5F9, #2DD4BF);
          background-size: 400% 400%;
          animation: gradient-x 3s ease infinite;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </div>
  )
}
