"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion} from "framer-motion"
import { Search, ChevronDown, Star, SlidersHorizontal, CheckCircle } from "lucide-react";
import "../styles/SearchPageContent.css";

const categories = [
  { id: "todos", label: "Todos" },
  { id: "laptops", label: "Laptops" },
  { id: "pcs", label: "PCs" },
  { id: "estudiante", label: "Estudiante" },
  { id: "profesional", label: "Profesional" },
  { id: "gaming", label: "Gaming" },
];
// components/SearchPageContent.tsx (extract)
// …
const allProducts = [
  {
    id: 1,
    name: "Dell XPS 15 9520",
    category: "PC Laptop",
    rating: 4,
    reviews: 210,
    processor: "Intel Core i7-12700H",
    ram: "16 GB DDR5",
    storage: "512 GB NVMe SSD",
    gpu: "NVIDIA RTX 3050 Ti",
    price: 1899,
    originalPrice: 2099,
    badge: "Promoción estudiante",
    categoryType: "laptops",
    targetAudience: "estudiante",
    image: "/image/Dell.jpeg",
  },
  {
    id: 2,
    name: "MacBook Pro 14” M2 Pro",
    category: "PC Laptop",
    rating: 5,
    reviews: 340,
    processor: "Apple M2 Pro",
    ram: "16 GB Unified",
    storage: "512 GB SSD",
    gpu: "10-core GPU integrada",
    price: 2499,
    categoryType: "laptops",
    targetAudience: "profesional",
    image: "/image/macc.jpg",
  },
  {
    id: 3,
    name: "HP Pavilion Gaming 16",
    category: "PC Gaming",
    rating: 4,
    reviews: 122,
    processor: "AMD Ryzen 7 6800H",
    ram: "16 GB DDR5",
    storage: "512 GB NVMe SSD",
    gpu: "AMD Radeon RX 6600M",
    price: 1199,
    originalPrice: 1299,
    badge: "Oferta especial",
    categoryType: "laptops",
    targetAudience: "gaming",
    image: "/image/fee_786_587_png.webp",
  },
  {
    id: 4,
    name: "iMac 24” M1",
    category: "PC Desktop",
    rating: 5,
    reviews: 180,
    processor: "Apple M1",
    ram: "16 GB Unified",
    storage: "512 GB SSD",
    gpu: "GPU 8-core integrada",
    price: 1699,
    categoryType: "pcs",
    targetAudience: "profesional",
    image: "/image/macDesktop.jpg",
  },
  
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.1, duration: 0.6 },
  }),
};


export default function SearchPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCareer, setSelectedCareer] = useState("Todas las carreras");
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [suggestions, setSuggestions] = useState([]);
  const [clickedSuggestions, setClickedSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);

  const handleSearch = () => {
    filterProducts(selectedCategory, selectedCareer, searchQuery);
    document.getElementById("searchResults")?.scrollIntoView({ behavior: "smooth" });
  };

  const filterProducts = (category, career, query) => {
    let filtered = allProducts;
    if (category !== "todos") {
      filtered = filtered.filter(
        p => p.categoryType === category || p.targetAudience === category
      );
    }
    const careerMap = {
      Arquitectura: "profesional",
      "Diseño Gráfico": "profesional",
      Ingeniería: "profesional",
      Programación: "profesional",
      Gaming: "gaming",
      Oficina: "estudiante",
    };
    if (career !== "Todas las carreras") {
      const target = careerMap[career];
      if (target) filtered = filtered.filter(p => p.targetAudience === target);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        p =>
          p.name.toLowerCase().includes(q) ||
          p.processor.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q)
      );
    }
    setFilteredProducts(filtered);
  };

  const handleCategoryChange = cat => {
    setSelectedCategory(cat);
    filterProducts(cat, selectedCareer, searchQuery);
  };

  const handleCareerChange = career => {
    setSelectedCareer(career);
    filterProducts(selectedCategory, career, searchQuery);
  };

  const handleSearchChange = query => {
    setSearchQuery(query);
    if (query.trim()) {
      const matches = Array.from(new Set(
        allProducts.map(p => p.name).filter(name =>
          name.toLowerCase().includes(query.toLowerCase())
        )
      ));
      setSuggestions(matches.slice(0, 10));
    } else setSuggestions([]);
  };

  const displayedProducts = showAll ? filteredProducts : filteredProducts.slice(0, 9);

  return (
    <motion.div className="search-containerBus"
      initial="hidden"
      animate="show"
      variants={{ show: { transition: { staggerChildren: 0.07 } } }}
    >
      <motion.section variants={fadeUp} custom={0} className="hero-sectionBus">
        <div className="overlay">
          <div className="dot pulse" style={{ top: '2.5rem', left: '2.5rem', width: '5rem', height: '5rem' }}></div>
          <div className="dot bounce" style={{ top: '8rem', right: '5rem', width: '4rem', height: '4rem', backgroundColor: '#248a98' }}></div>
          <div className="dot pulse" style={{ bottom: '5rem', left: '25%', width: '3rem', height: '3rem' }}></div>
          <div className="dot pulse" style={{ bottom: '8rem', right: '2.5rem', width: '6rem', height: '6rem', backgroundColor: '#248a98' }}></div>
        </div>
        <motion.div variants={fadeUp} custom={1} className="hero-contentBus">
          <h1 className="hero-titleBus">Busca tu equipo ideal</h1>
          <p className="hero-subtitleBus">
            Selecciona tus preferencias de los equipo ideal que utilizarás en tus estudios y te recomendaremos los equipos más adecuados
          </p>
        </motion.div>

        <motion.div variants={fadeUp} custom={2} className="search-panel">
          <motion.div variants={fadeUp} custom={3} className="search-boxBus">
            <motion.div variants={fadeUp} custom={4} className="controls">
              <motion.div variants={fadeUp} custom={5} className="search-input-wrapper">
                <Search className="icon" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => handleSearchChange(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  onKeyDown={e => {
                    if (e.key === 'ArrowDown') {
                      setHighlightedIndex(i => Math.min(i + 1, suggestions.length - 1));
                    } else if (e.key === 'ArrowUp') {
                      setHighlightedIndex(i => Math.max(i - 1, 0));
                    } else if (e.key === 'Enter') {
                      e.preventDefault();
                      if (highlightedIndex >= 0) {
                        const s = suggestions[highlightedIndex];
                        setSearchQuery(s);
                        setSuggestions([]);
                        if (!clickedSuggestions.includes(s)) setClickedSuggestions(prev => [...prev, s]);
                        filterProducts(selectedCategory, selectedCareer, s);
                      } else handleSearch();
                      setHighlightedIndex(-1);
                      setIsFocused(false);
                    }
                  }}
                />
                <Button onClick={handleSearch}>Buscar</Button>
                {isFocused && (
                  <ul className="suggestions">
                    {suggestions.map((s, i) => (
                      <li
                        key={i}
                        className={`${i === highlightedIndex ? 'highlighted' : ''} ${clickedSuggestions.includes(s) ? 'clicked' : ''}`}
                        onMouseDown={() => {
                          setSearchQuery(s);
                          setSuggestions([]);
                          if (!clickedSuggestions.includes(s)) setClickedSuggestions(prev => [...prev, s]);
                          filterProducts(selectedCategory, selectedCareer, s);
                          setIsFocused(false);
                        }}
                      >{s}</li>
                    ))}
                  </ul>
                )}
              </motion.div>

              <div className="career-select">
                <select value={selectedCareer} onChange={e => handleCareerChange(e.target.value)}>
                  <option>Todas las carreras</option>
                  <option>Arquitectura</option>
                  <option>Diseño Gráfico</option>
                  <option>Ingeniería</option>
                  <option>Programación</option>
                  <option>Gaming</option>
                  <option>Oficina</option>
                </select>
                <ChevronDown className="chevron" />
              </div>

              <Button className="btn-filtersBus" onClick={() => setShowFilters(f => !f)}>
                <SlidersHorizontal className="mr-2" /> Más filtros
              </Button>
            </motion.div>

            <motion.div variants={fadeUp} custom={6} className="category-tabsBus">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  variants={fadeUp}
                  custom={7 + i}
                  className={`tab ${selectedCategory === cat.id ? "active" : ""}`}
                  onClick={() => handleCategoryChange(cat.id)}
                >
                  {cat.label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.section>

      <section id="searchResults" className="results-section">
        <div className="results-box">
          <div className="results-header">
            <div className="icon-circle">
              <CheckCircle size={24} color="white" />
            </div>
            <div>
              <h2>Resultados de la búsqueda</h2>
              <p>Hemos encontrado <span className="font-semibold text-[#712581]">{filteredProducts.length}</span> equipos según tu selección.</p>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="products-gridBus">
              {displayedProducts.map(product => (
                <Card key={product.id} className="product-cardBus">
                  <CardContent>
                    <div className="image-wrapper">
                      <Image src={product.image} alt={product.name} fill />
                      {product.badge && <div className="badgeBus">{product.badge}</div>}
                    </div>
                    <div className="product-infoBus">
                      <div className="headerBus">
                        <h3>{product.name}</h3>
                        <div className="category-badge">{product.category}</div>
                      </div>
                      <div className="rating">
                        {[...Array(5)].map((_, i) => <Star key={i} className="star" color={i < product.rating ? '#FBBF24' : '#D1D5DB'} />)}
                        <span className="reviews">({product.reviews} reseñas)</span>
                      </div>
                      <div className="specs-grid">
                        <div className="spec-box"><span>Procesador</span><p>{product.processor}</p></div>
                        <div className="spec-box"><span>RAM</span><p>{product.ram}</p></div>
                        <div className="spec-box"><span>Almacenamiento</span><p>{product.storage}</p></div>
                        <div className="spec-box"><span>GPU</span><p>{product.gpu}</p></div>
                      </div>
                      <div className="price-rowBus">
                        <div>
                          <p className="priceBus">${product.price}</p>
                          {product.originalPrice && <p className="original">${product.originalPrice}</p>}
                        </div>
                        <Button className="add-btnBus">Agregar</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <div className="text-6xl mb-4">🔍</div>
              <h3>No se encontraron productos</h3>
              <p>Intenta ajustar tus filtros o términos de búsqueda</p>
              <Button onClick={() => {
                setSelectedCategory("todos");
                setSelectedCareer("Todas las carreras");
                setSearchQuery("");
                setFilteredProducts(allProducts);
              }}>Limpiar filtros</Button>
            </div>
          )}

          {(filteredProducts.length > 9) && (
            <div className="show-more">
              {showAll ? (
                <Button className="btn" onClick={() => setShowAll(false)}>Mostrar menos…</Button>
              ) : (
                <Button className="btn" onClick={() => setShowAll(true)}>Ver todos los productos…</Button>
              )}
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
