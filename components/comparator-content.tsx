"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Cpu, HardDrive, Zap, Battery, DollarSign } from "lucide-react"

const categories = [
  { id: "todos", label: "Todos", active: true },
  { id: "laptops", label: "Laptops", active: false },
  { id: "pcs", label: "PCs", active: false },
]

const allProducts = [
  {
    id: 1,
    name: "Laptop Pro X1",
    price: 1299,
    category: "Laptop",
    type: "laptop",
    description: "Ideal para: Diseño Gráfico, Programación, Ofimática",
    processor: "Intel Core i7 11700H",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "NVIDIA RTX 3050",
    battery: "8 horas",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    name: "WorkStation Z3",
    price: 1899,
    category: "PC",
    type: "pc",
    description: "Ideal para: Modelado 3D, Renderizado, Simulaciones",
    processor: "AMD Ryzen 9 5900X",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 4070",
    battery: "N/A",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    name: "Creator Book Pro",
    price: 1599,
    category: "Laptop",
    type: "laptop",
    description: "Ideal para: Edición de Video, Diseño, Gaming",
    processor: "Intel Core i9 12900H",
    ram: "32GB",
    storage: "1TB SSD",
    gpu: "NVIDIA RTX 3060",
    battery: "6 horas",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 4,
    name: "Gaming Beast",
    price: 2299,
    category: "PC",
    type: "pc",
    description: "Ideal para: Gaming Extremo, Streaming, VR",
    processor: "Intel Core i9 13900K",
    ram: "32GB",
    storage: "2TB SSD",
    gpu: "NVIDIA RTX 4080",
    battery: "N/A",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 5,
    name: "Budget Laptop",
    price: 799,
    category: "Laptop",
    type: "laptop",
    description: "Ideal para: Estudiantes, Oficina, Navegación",
    processor: "Intel Core i5 11400H",
    ram: "8GB",
    storage: "256GB SSD",
    gpu: "Intel Iris Xe",
    battery: "10 horas",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 6,
    name: "Office PC",
    price: 699,
    category: "PC",
    type: "pc",
    description: "Ideal para: Oficina, Tareas Básicas, Navegación",
    processor: "AMD Ryzen 5 5600G",
    ram: "16GB",
    storage: "512GB SSD",
    gpu: "AMD Radeon Graphics",
    battery: "N/A",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function ComparatorContent() {
  const [budgetRange, setBudgetRange] = useState([500, 2327])
  const [activeCategory, setActiveCategory] = useState("todos")
  const [selectedProducts, setSelectedProducts] = useState<number[]>([])
  const [showEquipment, setShowEquipment] = useState(false)

  // Filtrar productos según presupuesto y categoría
  const getFilteredProducts = () => {
    return allProducts.filter((product) => {
      const withinBudget = product.price >= budgetRange[0] && product.price <= budgetRange[1]
      const matchesCategory = activeCategory === "todos" || product.type === activeCategory.slice(0, -1)
      return withinBudget && matchesCategory
    })
  }

  const filteredProducts = getFilteredProducts()

  const handleBudgetConfirm = () => {
    setShowEquipment(true)
    setSelectedProducts([]) // Reset selected products when budget changes
  }

  const handleProductSelection = (productId: number) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId))
    } else if (selectedProducts.length < 2) {
      setSelectedProducts([...selectedProducts, productId])
    }
  }

  const handleBudgetReset = () => {
    setShowEquipment(false)
    setSelectedProducts([])
    setBudgetRange([500, 2327])
    setActiveCategory("todos")
  }

  const selectedProductsData = allProducts.filter((product) => selectedProducts.includes(product.id))

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
            Comparador Visual y Simulador de Presupuesto
          </h1>
          <p className="text-xl text-[#F1F5F9]/90 max-w-4xl mx-auto leading-relaxed">
            Compara laptops y PCs lado a lado según tu presupuesto y visualiza sus características principales.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {/* Budget Simulator */}
        <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Simulador de Presupuesto</h2>
            <p className="text-gray-600 mb-6">
              El presupuesto máximo para tu PC. Ajusta el slider para ver equipos que se adapten a tus posibilidades.
            </p>

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <span className="text-lg font-semibold text-gray-900">${budgetRange[0]}</span>
                <span className="text-lg font-semibold text-gray-900">${budgetRange[1]}</span>
              </div>

              <Slider
                value={budgetRange}
                onValueChange={setBudgetRange}
                max={3000}
                min={500}
                step={100}
                className="w-full"
                disabled={showEquipment}
              />

              <div className="text-center space-y-4">
                <p className="text-gray-600">
                  <span className="font-semibold text-[#712581]">{filteredProducts.length}</span> equipos disponibles
                  dentro de tu presupuesto
                </p>

                {!showEquipment ? (
                  <Button
                    onClick={handleBudgetConfirm}
                    disabled={filteredProducts.length === 0}
                    className="bg-[#712581] hover:bg-[#712581]/90 text-white px-8 py-3 rounded-xl font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Ver Equipos Disponibles
                  </Button>
                ) : (
                  <Button
                    onClick={handleBudgetReset}
                    variant="outline"
                    className="border-2 border-[#712581] text-[#712581] hover:bg-[#712581] hover:text-white px-8 py-3 rounded-xl font-semibold"
                  >
                    Cambiar Presupuesto
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Available Equipment - Only show after budget confirmation */}
        {showEquipment && (
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Equipos disponibles</h2>
              <p className="text-gray-600 mb-6">
                Selecciona hasta 2 equipos para comparar sus características lado a lado.
              </p>

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
              </div>

              {/* Selection Status */}
              {selectedProducts.length > 0 && (
                <div className="mb-6 p-4 bg-[#712581]/10 rounded-xl border border-[#712581]/20">
                  <p className="text-[#712581] font-semibold">
                    {selectedProducts.length}/2 equipos seleccionados para comparar
                  </p>
                  {selectedProducts.length === 2 && (
                    <p className="text-sm text-gray-600 mt-1">
                      ¡Perfecto! Ahora puedes ver la comparación detallada abajo.
                    </p>
                  )}
                </div>
              )}

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {filteredProducts.map((product) => {
                    const isSelected = selectedProducts.includes(product.id)
                    return (
                      <Card
                        key={product.id}
                        className={`border-2 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden ${
                          isSelected ? "border-[#712581] bg-[#712581]/5" : "border-gray-200"
                        }`}
                      >
                        <CardContent className="p-0">
                          {/* Product Image */}
                          <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                            <div className="text-6xl">💻</div>
                            {isSelected && (
                              <div className="absolute top-3 right-3 w-8 h-8 bg-[#712581] rounded-full flex items-center justify-center">
                                <span className="text-white font-bold text-sm">✓</span>
                              </div>
                            )}
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

                            <p className="text-sm text-gray-600 mb-4">{product.description}</p>

                            {/* Specifications */}
                            <div className="space-y-3 mb-6">
                              <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                  <Cpu className="h-4 w-4 text-gray-500" />
                                  <span className="text-gray-600">Procesador</span>
                                </div>
                                <span className="font-semibold text-gray-900">{product.processor}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">RAM</span>
                                <span className="font-semibold text-gray-900">{product.ram}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <div className="flex items-center gap-2">
                                  <HardDrive className="h-4 w-4 text-gray-500" />
                                  <span className="text-gray-600">Almacenamiento</span>
                                </div>
                                <span className="font-semibold text-gray-900">{product.storage}</span>
                              </div>
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-gray-600">GPU</span>
                                <span className="font-semibold text-gray-900">{product.gpu}</span>
                              </div>
                              {product.battery !== "N/A" && (
                                <div className="flex items-center justify-between text-sm">
                                  <div className="flex items-center gap-2">
                                    <Battery className="h-4 w-4 text-gray-500" />
                                    <span className="text-gray-600">Batería</span>
                                  </div>
                                  <span className="font-semibold text-gray-900">{product.battery}</span>
                                </div>
                              )}
                            </div>

                            {/* Price and Button */}
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                              <Button
                                onClick={() => handleProductSelection(product.id)}
                                disabled={selectedProducts.length >= 2 && !isSelected}
                                className={`px-6 py-2 rounded-xl font-semibold transition-all ${
                                  isSelected
                                    ? "bg-red-500 hover:bg-red-600 text-white"
                                    : "bg-[#712581] hover:bg-[#712581]/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                }`}
                              >
                                {isSelected ? "Deseleccionar" : "Seleccionar"}
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4">😔</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">No hay equipos disponibles</h3>
                  <p className="text-gray-600">
                    No encontramos equipos en tu rango de presupuesto. Intenta ajustar el rango.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Equipment Comparison - Only show when 2 products are selected */}
        {selectedProducts.length === 2 && (
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Comparación de equipos</h2>

              {/* Product Images */}
              <div className="grid grid-cols-2 gap-8 mb-8">
                {selectedProductsData.map((product) => (
                  <div key={product.id} className="text-center">
                    <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center rounded-2xl mb-4">
                      <div className="text-6xl">💻</div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                    <Badge
                      className={`${
                        product.category === "PC" ? "bg-[#248a98]" : "bg-[#712581]"
                      } text-white border-0 px-3 py-1 rounded-full font-semibold`}
                    >
                      {product.category}
                    </Badge>
                  </div>
                ))}
              </div>

              {/* Comparison Table */}
              <div className="space-y-4">
                {[
                  { key: "processor", label: "Procesador", icon: Cpu },
                  { key: "ram", label: "RAM", icon: null },
                  { key: "storage", label: "Almacenamiento", icon: HardDrive },
                  { key: "gpu", label: "GPU", icon: Zap },
                  { key: "battery", label: "Batería", icon: Battery },
                  { key: "price", label: "Precio", icon: DollarSign },
                ].map((spec) => (
                  <div key={spec.key} className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100">
                    <div className="flex items-center gap-2 text-gray-600 font-medium">
                      {spec.icon && <spec.icon className="h-4 w-4" />}
                      {spec.label}
                    </div>
                    {selectedProductsData.map((product) => (
                      <div key={product.id} className="text-gray-900 font-semibold">
                        {spec.key === "price"
                          ? `$${product[spec.key as keyof typeof product]}`
                          : (product[spec.key as keyof typeof product] as string)}
                      </div>
                    ))}
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {selectedProductsData.map((product) => (
                  <Button
                    key={product.id}
                    className="bg-[#712581] hover:bg-[#712581]/90 text-white py-3 rounded-xl font-semibold"
                  >
                    Ver detalles
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
