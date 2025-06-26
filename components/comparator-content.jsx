"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Slider } from "@/components/ui/slider";
import { Cpu, HardDrive, Zap, Battery, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import "../styles/ComparatorContent.css";

const categories = [
  { id: "todos", label: "Todos" },
  { id: "laptops", label: "Laptops" },
  { id: "pcs", label: "PCs" },
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
  const [selectedProducts, setSelectedProducts] = useState([]);

  const filteredProducts = allProducts.filter((product) => {
    const withinBudget = product.price >= budgetRange[0] && product.price <= budgetRange[1];
    const matchesCategory = activeCategory === "todos" || product.type === activeCategory.slice(0, -1);
    return withinBudget && matchesCategory;
  });

  const handleProductSelection = (productId) => {
    if (selectedProducts.includes(productId)) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else if (selectedProducts.length < 2) {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const handleBudgetReset = () => {
    setSelectedProducts([]);
    setBudgetRange([500, 2327]);
    setActiveCategory("todos");
  };

  const selectedData = allProducts.filter((p) => selectedProducts.includes(p.id));

  return (
    <div className="comparator-container">
      <motion.section className="hero-sectionCOM" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="hero-overlay">
          <motion.div className="hero-overlay-dot-1" animate={{ scale: [1,1.2,1], rotate: [0,180,360] }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }} />
          <motion.div className="hero-overlay-dot-2" animate={{ y: [0,-20,0], x: [0,10,0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="hero-overlay-dot-3" animate={{ scale: [1,1.1,1], opacity: [0.5,1,0.5] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }} />
          <motion.div className="hero-overlay-dot-4" animate={{ rotate: [0,-180,-360], scale: [1,0.8,1] }} transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />
        </div>
        <motion.div className="hero-contentCOM" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <motion.h1 className="hero-titleCOM" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            Comparador Visual y Simulador de Presupuesto
          </motion.h1>
          <motion.p className="hero-subtitleCOM" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>
            Compara laptops y PCs lado a lado según tu presupuesto.
          </motion.p>
        </motion.div>
      </motion.section>

      <div className="main-wrapperCOM">
        <motion.div className="container-presupuesto" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <Card className="custom-cardCOM">
            <CardContent>
              <motion.h2 className="section-titleCOM" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
                Simulador de Presupuesto
              </motion.h2>
              <motion.p className="section-descCOM" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                Ajusta el slider para ver equipos disponibles.
              </motion.p>

              <div>
                <div className="flex items-center justify-between">
                  <span className="slider-label slider-label--highlight">${budgetRange[0]}</span>
                  <span className="slider-label slider-label--highlight">${budgetRange[1]}</span>
                </div>
                <Slider value={budgetRange} onValueChange={setBudgetRange} min={500} max={3000} step={100} className="w-full" />
                <div className="text-center space-y-4">
                  <p className="slider-cantidadCOM"><span className="slider-label slider-label--highlight">{filteredProducts.length}</span> equipos disponibles</p>
                  <Button onClick={handleBudgetReset} className="btn-resetCOM">Reiniciar Búsqueda</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div >

        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <Card className="custom-cardCOM">
            <CardContent>
              <motion.h2 className="section-titleCOM" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.5 }}>
                Equipos disponibles
              </motion.h2>
              <motion.p className="section-descCOM" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
                Selecciona hasta 2 para comparar.
              </motion.p>

              <div className="flex flex-wrap gap-2 mb-8">
                {categories.map((cat) => (
                  <Button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`category-tab ${activeCategory === cat.id ? 'category-tab--active' : ''}`} variant="outline">
                    {cat.label}
                  </Button>
                ))}
              </div>

              <AnimatePresence>
                {selectedProducts.length > 0 && (
                  <div className="selection-status">
                    <p className="selection-status-text">{selectedProducts.length}/2 seleccionados</p>
                    {selectedProducts.length === 2 && <p className="selection-status-subtext">¡Listo para comparar!</p>}
                  </div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="wait">
                {filteredProducts.length > 0 ? (
                  <div className="products-grid">
                    {filteredProducts.map((product) => {
                      const isSel = selectedProducts.includes(product.id);
                      return (
                        <Card key={product.id} className={`product-cardCOM ${isSel ? 'product-card--selected' : ''}`}>
                          <CardContent className="p-0COM">
                            <div className="product-image-wrapper">
                              <div className="product-image-inner">
                                <Image src={product.image} alt={product.name} fill className="object-contain" />
                              </div>
                              {isSel && <div className="selected-badge"><span className="selected-badge-text">✓</span></div>}
                            </div>
                            <div className="product-infoCOM">
                              <div className="flex items-center justify-between mb-3">
                                <h3 className="product-name">{product.name}</h3>
                                <Badge className={`product-category-badge ${product.category==='PC'?'badge-pc':'badge-llaptop'}`}>{product.category}</Badge>
                              </div>
                              <p className="product-desc">{product.description}</p>
                              <div className="product-specs">
                                <div className="product-spec"><Cpu className="product-spec-icon"/><span className="product-spec-label">Procesador</span><span className="product-spec-value">{product.processor}</span></div>
                                <div className="product-spec"><span className="product-spec-label">RAM</span><span className="product-spec-value">{product.ram}</span></div>
                                <div className="product-spec"><HardDrive className="product-spec-icon"/><span className="product-spec-label">Almacenamiento</span><span className="product-spec-value">{product.storage}</span></div>
                                <div className="product-spec"><Zap className="product-spec-icon"/><span className="product-spec-label">GPU</span><span className="product-spec-value">{product.gpu}</span></div>
                                {product.battery !== 'N/A' && <div className="product-spec"><Battery className="product-spec-icon"/><span className="product-spec-label">Batería</span><span className="product-spec-value">{product.battery}</span></div>}
                              </div>
                              <div className="flex items-center justify-between">
                                <span className="product-priceCOM">${product.price}</span>
                                <Button onClick={()=>handleProductSelection(product.id)} disabled={selectedProducts.length>=2&&!isSel} className={`${isSel?'product-btn--deselect':'product-btnCOM'}`}>{isSel?'Deseleccionar':'Seleccionar'}</Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                ) : (
                  <div className="no-products">
                    <div className="no-products-emoji">😔</div>
                    <h3 className="section-title">No hay equipos</h3>
                    <p className="section-desc">Ajusta el presupuesto.</p>
                  </div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </motion.div>

        <AnimatePresence>
          {selectedProducts.length === 2 && (
            <motion.div initial={{ opacity: 0, y: 100, scale: 0.8 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 100, scale: 0.8 }} transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}>
              <Card className="custom-card">
                <CardContent>
                  <h2 className="comparison-title">Comparación de equipos</h2>
                  <div className="comparison-images">
                    {selectedData.map((p) => (
                      <div key={p.id} className="comparison-image-wrapper">
                        <Image src={p.image} alt={p.name} fill className="object-contain" />
                        <h3 className="product-name mt-2 text-center">{p.name}</h3>
                      </div>
                    ))}
                  </div>
                  <div className="comparison-section">
                    {[
                      { key: 'processor', label: 'Procesador', icon: Cpu },
                      { key: 'ram', label: 'RAM', icon: null },
                      { key: 'storage', label: 'Almacenamiento', icon: HardDrive },
                      { key: 'gpu', label: 'GPU', icon: Zap },
                      { key: 'battery', label: 'Batería', icon: Battery },
                      { key: 'price', label: 'Precio', icon: DollarSign },
                    ].map((spec) => (
                      <div key={spec.key} className="comparison-spec-row">
                        <div className="comparison-spec-label">
                          {spec.icon && <spec.icon className="h-4 w-4" />} {spec.label}
                        </div>
                        {selectedData.map((p) => (
                          <div key={p.id} className="comparison-spec-value">
                            {spec.key === 'price' ? `$${p.price}` : p[spec.key]}
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-8">
                    {selectedData.map((p) => (
                      <a key={p.id} href="/vistaComprar" className="comparison-btn">
                        Ver detalles
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
