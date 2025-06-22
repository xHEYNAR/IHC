"use client";
import Image from "next/image";
import { useRef } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Cpu, HardDrive, Zap, Battery, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "todos", label: "Todos", active: true },
  { id: "laptops", label: "Laptops", active: false },
  { id: "pcs", label: "PCs", active: false },
];

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
    image: "/image/asus_rogstrix_g614jv.png",
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
    image: "/image/A0ZC5EA-ABU_1750x1285.avif",
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
    image: "/image/macbook.png",
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
    image: "/image/656157382_image-2021x2400.jpg",
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
    image: "/image/aeroo.webp",
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
    image: "/image/1709584922741-768x768.webp",
  },
];

export default function ComparatorContent() {
  const [budgetRange, setBudgetRange] = useState([500, 2327]);
  const [activeCategory, setActiveCategory] = useState("todos");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const comparisonRef = useRef<HTMLDivElement>(null);

  // Filtrar productos según presupuesto y categoría
  const getFilteredProducts = () => {
    return allProducts.filter((product) => {
      const withinBudget =
        product.price >= budgetRange[0] && product.price <= budgetRange[1];
      const matchesCategory =
        activeCategory === "todos" ||
        product.type === activeCategory.slice(0, -1);
      return withinBudget && matchesCategory;
    });
  };

  const filteredProducts = getFilteredProducts();

  const handleProductSelection = (productId: number) => {
    let newSelected: number[];

    if (selectedProducts.includes(productId)) {
      newSelected = selectedProducts.filter((id) => id !== productId);
      setSelectedProducts(newSelected);
    } else if (selectedProducts.length < 2) {
      newSelected = [...selectedProducts, productId];
      setSelectedProducts(newSelected);

      // si acabamos de llegar a 2, hacemos scroll
      if (newSelected.length === 2) {
        // damos un pequeño timeout para esperar a que el DOM renderice la sección
        setTimeout(() => {
          comparisonRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    }
  };

  const handleBudgetReset = () => {
    setSelectedProducts([]);
    setBudgetRange([500, 2327]);
    setActiveCategory("todos");
  };

  const selectedProductsData = allProducts.filter((product) =>
    selectedProducts.includes(product.id)
  );

  return (
    <div className="bg-[#f2f2f2]">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-br from-[#712581] via-[#712581] to-[#8B2F9B] py-20 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full"
          ></motion.div>
          <motion.div
            animate={{
              y: [0, -20, 0],
              x: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute top-32 right-20 w-16 h-16 bg-[#248a98] rounded-full"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full"
          ></motion.div>
          <motion.div
            animate={{
              rotate: [0, -180, -360],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-32 right-10 w-24 h-24 bg-[#248a98] rounded-full"
          ></motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-6 leading-tight"
          >
            Comparador Visual y Simulador de Presupuesto
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl text-[#F1F5F9]/90 max-w-4xl mx-auto leading-relaxed"
          >
            Compara laptops y PCs lado a lado según tu presupuesto y visualiza
            sus características principales.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        {/* Budget Simulator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-8">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                Simulador de Presupuesto
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-gray-600 mb-6"
              >
                El presupuesto máximo para tu PC. Ajusta el slider para ver
                equipos que se adapten a tus posibilidades.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <motion.span
                    key={budgetRange[0]}
                    initial={{ scale: 1.2, color: "#712581" }}
                    animate={{ scale: 1, color: "#111827" }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-semibold text-gray-900"
                  >
                    ${budgetRange[0]}
                  </motion.span>
                  <motion.span
                    key={budgetRange[1]}
                    initial={{ scale: 1.2, color: "#712581" }}
                    animate={{ scale: 1, color: "#111827" }}
                    transition={{ duration: 0.3 }}
                    className="text-lg font-semibold text-gray-900"
                  >
                    ${budgetRange[1]}
                  </motion.span>
                </div>

                <Slider
                  value={budgetRange}
                  onValueChange={setBudgetRange}
                  max={3000}
                  min={500}
                  step={100}
                  className="w-full"
                />

                <div className="text-center space-y-4">
                  <motion.p
                    key={filteredProducts.length}
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.4 }}
                    className="text-gray-600"
                  >
                    <span className="font-semibold text-[#712581]">
                      {filteredProducts.length}
                    </span>{" "}
                    equipos disponibles dentro de tu presupuesto
                  </motion.p>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      onClick={handleBudgetReset}
                      variant="outline"
                      className="border-2 border-[#712581] text-[#712581] hover:bg-[#712581] hover:text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      Reiniciar Búsqueda
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Available Equipment */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500">
            <CardContent className="p-8">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                Equipos disponibles
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-gray-600 mb-6"
              >
                Selecciona hasta 2 equipos para comparar sus características
                lado a lado.
              </motion.p>

              {/* Category Tabs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-2 mb-8"
              >
                {categories.map((category, index) => (
                  <motion.div
                    key={category.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant={
                        activeCategory === category.id ? "default" : "outline"
                      }
                      onClick={() => setActiveCategory(category.id)}
                      className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        activeCategory === category.id
                          ? "bg-[#712581] text-white hover:bg-[#712581]/90"
                          : "border-2 border-gray-200 text-gray-700 hover:border-[#712581] hover:text-[#712581] bg-white"
                      }`}
                    >
                      {category.label}
                    </Button>
                  </motion.div>
                ))}
              </motion.div>

              {/* Selection Status */}
              <AnimatePresence>
                {selectedProducts.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="mb-6 p-4 bg-[#712581]/10 rounded-xl border border-[#712581]/20"
                  >
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-[#712581] font-semibold"
                    >
                      {selectedProducts.length}/2 equipos seleccionados para
                      comparar
                    </motion.p>
                    {selectedProducts.length === 2 && (
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="text-sm text-gray-600 mt-1"
                      >
                        ¡Perfecto! Ahora puedes ver la comparación detallada
                        abajo.
                      </motion.p>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Products Grid */}
              <AnimatePresence mode="wait">
                {filteredProducts.length > 0 ? (
                  <motion.div
                    key="products-grid"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                  >
                    {filteredProducts.map((product, index) => {
                      const isSelected = selectedProducts.includes(product.id);
                      return (
                        <motion.div
                          key={product.id}
                          initial={{ opacity: 0, y: 50, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.1,
                            type: "spring",
                            stiffness: 100,
                          }}
                          whileHover={{
                            y: -10,
                            transition: { duration: 0.2 },
                          }}
                        >
                          <Card
                            className={`border-2 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-2xl overflow-hidden ${
                              isSelected
                                ? "border-[#712581] bg-[#712581]/5"
                                : "border-gray-200"
                            }`}
                          >
                            <CardContent className="p-0">
                              {/* Product Image */}
                              <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                                <motion.div
                                  whileHover={{ scale: 1.1, rotate: 5 }}
                                  transition={{ duration: 0.3 }}
                                  className="relative w-full h-48 bg-white overflow-hidden"
                                >
                                  <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-contain"
                                  />
                                </motion.div>
                                <AnimatePresence>
                                  {isSelected && (
                                    <motion.div
                                      initial={{ scale: 0, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      exit={{ scale: 0, opacity: 0 }}
                                      transition={{
                                        duration: 0.3,
                                        type: "spring",
                                      }}
                                      className="absolute top-3 right-3 w-8 h-8 bg-[#712581] rounded-full flex items-center justify-center"
                                    >
                                      <span className="text-white font-bold text-sm">
                                        ✓
                                      </span>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>

                              {/* Product Info */}
                              <div className="p-6">
                                <div className="flex items-center justify-between mb-3">
                                  <motion.h3
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + index * 0.1 }}
                                    className="text-xl font-bold text-gray-900"
                                  >
                                    {product.name}
                                  </motion.h3>
                                  <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                      delay: 0.3 + index * 0.1,
                                      type: "spring",
                                    }}
                                  >
                                    <Badge
                                      className={`${
                                        product.category === "PC"
                                          ? "bg-[#248a98]"
                                          : "bg-[#712581]"
                                      } text-white border-0 px-3 py-1 rounded-full font-semibold`}
                                    >
                                      {product.category}
                                    </Badge>
                                  </motion.div>
                                </div>

                                <motion.p
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 0.4 + index * 0.1 }}
                                  className="text-sm text-gray-600 mb-4"
                                >
                                  {product.description}
                                </motion.p>

                                {/* Specifications */}
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.5 + index * 0.1 }}
                                  className="space-y-3 mb-6"
                                >
                                  <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                      <Cpu className="h-4 w-4 text-gray-500" />
                                      <span className="text-gray-600">
                                        Procesador
                                      </span>
                                    </div>
                                    <span className="font-semibold text-gray-900">
                                      {product.processor}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">RAM</span>
                                    <span className="font-semibold text-gray-900">
                                      {product.ram}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between text-sm">
                                    <div className="flex items-center gap-2">
                                      <HardDrive className="h-4 w-4 text-gray-500" />
                                      <span className="text-gray-600">
                                        Almacenamiento
                                      </span>
                                    </div>
                                    <span className="font-semibold text-gray-900">
                                      {product.storage}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between text-sm">
                                    <span className="text-gray-600">GPU</span>
                                    <span className="font-semibold text-gray-900">
                                      {product.gpu}
                                    </span>
                                  </div>
                                  {product.battery !== "N/A" && (
                                    <div className="flex items-center justify-between text-sm">
                                      <div className="flex items-center gap-2">
                                        <Battery className="h-4 w-4 text-gray-500" />
                                        <span className="text-gray-600">
                                          Batería
                                        </span>
                                      </div>
                                      <span className="font-semibold text-gray-900">
                                        {product.battery}
                                      </span>
                                    </div>
                                  )}
                                </motion.div>

                                {/* Price and Button */}
                                <motion.div
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: 0.6 + index * 0.1 }}
                                  className="flex items-center justify-between"
                                >
                                  <motion.span
                                    whileHover={{ scale: 1.05 }}
                                    className="text-2xl font-bold text-gray-900"
                                  >
                                    ${product.price}
                                  </motion.span>
                                  <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                  >
                                    <Button
                                      onClick={() =>
                                        handleProductSelection(product.id)
                                      }
                                      disabled={
                                        selectedProducts.length >= 2 &&
                                        !isSelected
                                      }
                                      className={`px-6 py-2 rounded-xl font-semibold transition-all duration-300 ${
                                        isSelected
                                          ? "bg-red-500 hover:bg-red-600 text-white"
                                          : "bg-[#712581] hover:bg-[#712581]/90 text-white disabled:opacity-50 disabled:cursor-not-allowed"
                                      }`}
                                    >
                                      {isSelected
                                        ? "Deseleccionar"
                                        : "Seleccionar"}
                                    </Button>
                                  </motion.div>
                                </motion.div>
                              </div>
                            </CardContent>
                          </Card>
                        </motion.div>
                      );
                    })}
                  </motion.div>
                ) : (
                  <motion.div
                    key="no-products"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                    className="text-center py-12"
                  >
                    <motion.div
                      animate={{
                        rotate: [0, -10, 10, -10, 0],
                        scale: [1, 1.1, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatDelay: 3,
                      }}
                      className="text-6xl mb-4"
                    >
                      😔
                    </motion.div>
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="text-xl font-bold text-gray-900 mb-2"
                    >
                      No hay equipos disponibles
                    </motion.h3>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600"
                    >
                      No encontramos equipos en tu rango de presupuesto. Intenta
                      ajustar el rango.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        {/* Equipment Comparison */}
        <AnimatePresence>
          {selectedProducts.length === 2 && (
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 100, scale: 0.8 }}
              transition={{
                duration: 0.6,
                type: "spring",
                stiffness: 100,
              }}
              ref={comparisonRef}
            >
              <Card className="border-0 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500">
                <CardContent className="p-8">
                  <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-2xl font-bold text-gray-900 mb-8"
                  >
                    Comparación de equipos
                  </motion.h2>

                  {/* Product Images */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="grid grid-cols-2 gap-8 mb-8"
                  >
                    {selectedProductsData.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                        className="text-center"
                      >
                        <motion.div
                          whileHover={{ scale: 1.05, rotateY: 10 }}
                          transition={{ duration: 0.3 }}
                          className="relative h-48 w-full bg-white rounded-2xl mb-4 overflow-hidden"
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-contain"
                          />
                        </motion.div>
                        <motion.h3
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          className="text-xl font-bold text-gray-900 mb-2"
                        >
                          {product.name}
                        </motion.h3>
                        <motion.div
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 0.7 + index * 0.1,
                            type: "spring",
                          }}
                        >
                          <Badge
                            className={`${
                              product.category === "PC"
                                ? "bg-[#248a98]"
                                : "bg-[#712581]"
                            } text-white border-0 px-3 py-1 rounded-full font-semibold`}
                          >
                            {product.category}
                          </Badge>
                        </motion.div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Comparison Table */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="space-y-4"
                  >
                    {[
                      { key: "processor", label: "Procesador", icon: Cpu },
                      { key: "ram", label: "RAM", icon: null },
                      {
                        key: "storage",
                        label: "Almacenamiento",
                        icon: HardDrive,
                      },
                      { key: "gpu", label: "GPU", icon: Zap },
                      { key: "battery", label: "Batería", icon: Battery },
                      { key: "price", label: "Precio", icon: DollarSign },
                    ].map((spec, index) => (
                      <motion.div
                        key={spec.key}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        whileHover={{ backgroundColor: "#f8f9fa", scale: 1.02 }}
                        className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100 rounded-lg px-2 transition-all duration-200"
                      >
                        <div className="flex items-center gap-2 text-gray-600 font-medium">
                          {spec.icon && <spec.icon className="h-4 w-4" />}
                          {spec.label}
                        </div>
                        {selectedProductsData.map((product, productIndex) => (
                          <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                              delay: 0.7 + index * 0.1 + productIndex * 0.05,
                            }}
                            className="text-gray-900 font-semibold"
                          >
                            {spec.key === "price"
                              ? `$${product[spec.key as keyof typeof product]}`
                              : (product[
                                  spec.key as keyof typeof product
                                ] as string)}
                          </motion.div>
                        ))}
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Action Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className="grid grid-cols-2 gap-4 mt-8"
                  >
                    {selectedProductsData.map((product, index) => (
                      <motion.div
                        key={product.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: 0.9 + index * 0.1,
                          type: "spring",
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <a
                          href="/vistaComprar"
                          className="block w-full bg-[#712581] hover:bg-[#712581]/90 text-white py-3 rounded-xl font-semibold transition-all duration-300 text-center"
                        >
                          Ver detalles
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
