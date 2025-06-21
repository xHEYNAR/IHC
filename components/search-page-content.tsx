"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ChevronDown, Star, SlidersHorizontal } from "lucide-react";

const categories = [
  { id: "todos", label: "Todos", active: true },
  { id: "laptops", label: "Laptops", active: false },
  { id: "pcs", label: "PCs", active: false },
  { id: "estudiante", label: "Estudiante", active: false },
  { id: "profesional", label: "Profesional", active: false },
  { id: "gaming", label: "Gaming", active: false },
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
  {
    id: 5,
    name: "ASUS ROG Strix G35CG",
    category: "PC Gaming",
    rating: 5,
    reviews: 95,
    processor: "Intel Core i9-12900KF",
    ram: "32 GB DDR5",
    storage: "1 TB NVMe SSD",
    gpu: "NVIDIA RTX 3080",
    price: 2799,
    categoryType: "pcs",
    targetAudience: "gaming",
    image: "/image/FD587941-A2E8-4CB0-86BA-63F078491C26.png",
  },
  {
    id: 6,
    name: "Lenovo ThinkPad X1 Carbon Gen 10",
    category: "PC Laptop",
    rating: 4,
    reviews: 150,
    processor: "Intel Core i7-1260P",
    ram: "16 GB LPDDR5",
    storage: "1 TB NVMe SSD",
    gpu: "Intel Iris Xe integrada",
    price: 2199,
    categoryType: "laptops",
    targetAudience: "profesional",
    image: "/image/webe6fef9xe9exspc83uedrm5z7ud6086798.avif",
  },
  {
    id: 7,
    name: "Acer Swift 3 SF314",
    category: "PC Laptop",
    rating: 4,
    reviews: 88,
    processor: "AMD Ryzen 7 5700U",
    ram: "8 GB DDR4",
    storage: "512 GB NVMe SSD",
    gpu: "Radeon integrada",
    price: 799,
    categoryType: "laptops",
    targetAudience: "estudiante",
    image: "/image/acer.webp",
  },
  {
    id: 8,
    name: "HP EliteDesk 800 G9",
    category: "PC Desktop",
    rating: 4,
    reviews: 45,
    processor: "Intel Core i5-13600",
    ram: "16 GB DDR4",
    storage: "512 GB NVMe SSD",
    gpu: "Intel UHD integrada",
    price: 999,
    categoryType: "pcs",
    targetAudience: "profesional",
    image: "/image/A0ZC5EA-ABU_1750x1285.avif",
  },
  {
    id: 9,
    name: "MSI GF63 Thin",
    category: "PC Laptop",
    rating: 4,
    reviews: 76,
    processor: "Intel Core i5-11400H",
    ram: "8 GB DDR4",
    storage: "512 GB NVMe SSD",
    gpu: "NVIDIA GTX 1650",
    price: 849,
    originalPrice: 949,
    badge: "Oferta limitada",
    categoryType: "laptops",
    targetAudience: "gaming",
    image: "/image/1024.png",
  },
  {
    id: 10,
    name: "Dell Inspiron 3880",
    category: "PC Desktop",
    rating: 3,
    reviews: 32,
    processor: "Intel Core i3-12100",
    ram: "8 GB DDR4",
    storage: "1 TB HDD",
    gpu: "Intel UHD integrada",
    price: 549,
    categoryType: "pcs",
    targetAudience: "oficina",
    image: "/image/Dell cajom.png",
  },
  {
    id: 11,
    name: "ASUS ZenBook 14 UX425",
    category: "PC Laptop",
    rating: 5,
    reviews: 140,
    processor: "Intel Core i7-1165G7",
    ram: "16 GB LPDDR4X",
    storage: "512 GB NVMe SSD",
    gpu: "Intel Iris Xe integrada",
    price: 1299,
    categoryType: "laptops",
    targetAudience: "profesional",
    image: "/image/zenvook.png",
  },
  {
    id: 12,
    name: "Lenovo IdeaCentre 3 AMD",
    category: "PC Desktop",
    rating: 4,
    reviews: 28,
    processor: "AMD Ryzen 5 5500U",
    ram: "8 GB DDR4",
    storage: "512 GB NVMe SSD",
    gpu: "Radeon integrada",
    price: 699,
    categoryType: "pcs",
    targetAudience: "estudiante",
    image: "/image/lenovoo.jpg",
  },
  {
    id: 13,
    name: "Razer Blade 15 Advanced",
    category: "PC Gaming",
    rating: 5,
    reviews: 110,
    processor: "Intel Core i7-12800H",
    ram: "16 GB DDR5",
    storage: "1 TB NVMe SSD",
    gpu: "NVIDIA RTX 3070 Ti",
    price: 2699,
    badge: "Oferta limitada",
    categoryType: "laptops",
    targetAudience: "gaming",
    image: "/image/blade.webp",
  },
  {
    id: 14,
    name: "Apple Mac Mini M2",
    category: "PC Desktop",
    rating: 5,
    reviews: 200,
    processor: "Apple M2",
    ram: "16 GB Unified",
    storage: "512 GB SSD",
    gpu: "10-core GPU integrada",
    price: 799,
    categoryType: "pcs",
    targetAudience: "profesional",
    image: "/image/macmini.webp",
  },
  {
    id: 15,
    name: "Microsoft Surface Laptop 5",
    category: "PC Laptop",
    rating: 4,
    reviews: 90,
    processor: "Intel Core i5-1235U",
    ram: "8 GB LPDDR4X",
    storage: "256 GB SSD",
    gpu: "Intel Iris Xe integrada",
    price: 999,
    categoryType: "laptops",
    targetAudience: "profesional",
    image: "/image/surface.webp",
  },
  {
    id: 16,
    name: "HP Omen 25L",
    category: "PC Gaming",
    rating: 4,
    reviews: 58,
    processor: "Intel Core i7-12700F",
    ram: "16 GB DDR4",
    storage: "1 TB NVMe SSD",
    gpu: "NVIDIA RTX 3060",
    price: 1499,
    originalPrice: 1599,
    categoryType: "pcs",
    targetAudience: "gaming",
    image: "/image/hphero.avif",
  },
  {
    id: 17,
    name: "Lenovo Legion 5 15ARH7",
    category: "PC Laptop",
    rating: 5,
    reviews: 120,
    processor: "AMD Ryzen 7 6800H",
    ram: "16 GB DDR5",
    storage: "1 TB NVMe SSD",
    gpu: "AMD Radeon RX 6700M",
    price: 1399,
    badge: "Oferta limitada",
    categoryType: "laptops",
    targetAudience: "gaming",
    image: "/image/lenovoLegion.jpg",
  },
  {
    id: 18,
    name: "Acer Aspire TC 885",
    category: "PC Desktop",
    rating: 4,
    reviews: 35,
    processor: "Intel Core i5-10400",
    ram: "12 GB DDR4",
    storage: "512 GB NVMe SSD",
    gpu: "Intel UHD integrada",
    price: 629,
    categoryType: "pcs",
    targetAudience: "estudiante",
    image: "/image/acerAspire.jpg",
  },
  {
    id: 19,
    name: "Gigabyte AERO 15 OLED",
    category: "PC Laptop",
    rating: 5,
    reviews: 85,
    processor: "Intel Core i7-11800H",
    ram: "32 GB DDR4",
    storage: "1 TB NVMe SSD",
    gpu: "NVIDIA RTX 3060",
    price: 2299,
    categoryType: "laptops",
    targetAudience: "profesional",
    image: "/image/aeroo.webp",
  },
  {
    id: 20,
    name: "Dell Precision 3650",
    category: "PC Desktop",
    rating: 4,
    reviews: 22,
    processor: "Intel Xeon W-1290P",
    ram: "32 GB DDR4 ECC",
    storage: "512 GB NVMe SSD",
    gpu: "NVIDIA Quadro P2200",
    price: 2999,
    originalPrice: 3199,
    categoryType: "pcs",
    targetAudience: "profesional",
    image: "/image/precision.jpg",
  },
  {
    id: 21,
    name: "HP Spectre x360 14",
    category: "PC Laptop",
    rating: 5,
    reviews: 102,
    processor: "Intel Core i7-1260P",
    ram: "16 GB LPDDR5",
    storage: "512 GB NVMe SSD",
    gpu: "Intel Iris Xe integrada",
    price: 1699,
    categoryType: "laptops",
    targetAudience: "profesional",
    image: "/image/spectre.jpg",
  },
  {
    id: 22,
    name: "MSI Trident X",
    category: "PC Gaming",
    rating: 5,
    reviews: 47,
    processor: "Intel Core i7-12700KF",
    ram: "16 GB DDR5",
    storage: "1 TB NVMe SSD",
    gpu: "NVIDIA RTX 3080 Ti",
    price: 2999,
    categoryType: "pcs",
    targetAudience: "gaming",
    image: "/image/1024 (1).png",
  },
  {
    id: 23,
    name: "Dell Latitude 7430",
    category: "PC Laptop",
    rating: 4,
    reviews: 66,
    processor: "Intel Core i5-1235U",
    ram: "16 GB LPDDR5",
    storage: "512 GB NVMe SSD",
    gpu: "Intel Iris Xe integrada",
    price: 1599,
    badge: "Oferta limitada",
    categoryType: "laptops",
    targetAudience: "profesional",
    image: "/image/latitude.webp",
  },
  {
    id: 24,
    name: "CyberPowerPC Gamer Xtreme",
    category: "PC Gaming",
    rating: 4,
    reviews: 55,
    processor: "Intel Core i5-12600KF",
    ram: "16 GB DDR4",
    storage: "1 TB SSD",
    gpu: "NVIDIA RTX 3060",
    price: 1299,
    categoryType: "pcs",
    targetAudience: "gaming",
    image: "/image/powerPC.jpg",
  },
  {
    id: 25,
    name: "ASUS VivoBook S15",
    category: "PC Laptop",
    rating: 4,
    reviews: 48,
    processor: "Intel Core i5-1135G7",
    ram: "8 GB DDR4",
    storage: "256 GB NVMe SSD",
    gpu: "Intel Iris Xe integrada",
    price: 749,
    originalPrice: 849,
    categoryType: "laptops",
    targetAudience: "estudiante",
    image: "/image/vivo.png",
  },
  {
    id: 26,
    name: "Apple iMac Pro",
    category: "PC Desktop",
    rating: 5,
    reviews: 70,
    processor: "Intel Xeon W-2140B",
    ram: "32 GB DDR4 ECC",
    storage: "1 TB SSD",
    gpu: "Radeon Pro Vega 56",
    price: 4999,
    categoryType: "pcs",
    targetAudience: "profesional",
    image: "/image/s-l1200.jpg",
  },
  {
    id: 27,
    name: "Razer Blade Stealth 13",
    category: "PC Laptop",
    rating: 4,
    reviews: 38,
    processor: "Intel Core i7-1165G7",
    ram: "16 GB LPDDR4X",
    storage: "256 GB NVMe SSD",
    gpu: "NVIDIA GTX 1650 Ti Max-Q",
    price: 1799,
    categoryType: "laptops",
    targetAudience: "gaming",
    image: "/image/steald.jpg",
  },
  {
    id: 28,
    name: "Lenovo Legion Tower 5",
    category: "PC Gaming",
    rating: 4,
    reviews: 49,
    processor: "AMD Ryzen 5 5600G",
    ram: "16 GB DDR4",
    storage: "512 GB NVMe SSD",
    gpu: "NVIDIA GTX 1660 Super",
    price: 1099,
    categoryType: "pcs",
    targetAudience: "gaming",
    image: "/image/tower.webp",
  },
];

export default function SearchPageContent() {
  const [selectedCategory, setSelectedCategory] = useState("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCareer, setSelectedCareer] = useState("Todas las carreras");
  const [showResults, setShowResults] = useState(true); // siempre mostramos la sección de productos
  const [showFilters, setShowFilters] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState(allProducts);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [clickedSuggestions, setClickedSuggestions] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);

  // función que dispara el filtrado
  const handleSearch = () => {
    filterProducts(selectedCategory, selectedCareer, searchQuery);
    // opcional: hacer scroll suave a los resultados
    document
      .getElementById("searchResults")
      ?.scrollIntoView({ behavior: "smooth" });
  };
  // Filter products based on selected category
  const filterProducts = (category: string, career: string, query: string) => {
    let filtered = allProducts;

    // Filter by category
    if (category !== "todos") {
      filtered = filtered.filter(
        (product) =>
          product.categoryType === category ||
          product.targetAudience === category
      );
    }

    // Filter by career
    if (career !== "Todas las carreras") {
      const careerMap: Record<string, string> = {
        Arquitectura: "profesional",
        "Diseño Gráfico": "profesional",
        Ingeniería: "profesional",
        Programación: "profesional",
        Gaming: "gaming",
        Oficina: "estudiante",
      };
      const targetAudience = careerMap[career];
      if (targetAudience) {
        filtered = filtered.filter(
          (product) => product.targetAudience === targetAudience
        );
      }
    }

    // Filter by search query
    if (query.trim()) {
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.processor.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    filterProducts(category, selectedCareer, searchQuery);
  };

  const handleCareerChange = (career: string) => {
    setSelectedCareer(career);
    filterProducts(selectedCategory, career, searchQuery);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);

    // Generar sugerencias: nombres de producto que incluyan lo tecleado
    if (query.trim()) {
      const matches = allProducts
        .map((p) => p.name)
        .filter((name) => name.toLowerCase().includes(query.toLowerCase()));
      setSuggestions([...new Set(matches)].slice(0, 10));
    } else {
      setSuggestions([]);
    }
  };

  const displayedProducts = showAll
    ? filteredProducts
    : filteredProducts.slice(0, 9);

  return (
    <div className="bg-[#f2f2f2]">
      {/* Hero Section with Purple Background */}
      <section className="bg-gradient-to-br from-[#712581] via-[#712581] to-[#8B2F9B] py-20 relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#248a98] rounded-full animate-bounce"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full animate-pulse"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 bg-[#248a98] rounded-full animate-pulse"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          {/* Header Text */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#F1F5F9] mb-6 leading-tight">
              Busca tu equipo ideal
            </h1>
            <p className="text-xl text-[#F1F5F9]/90 max-w-4xl mx-auto leading-relaxed">
              Selecciona tus preferencias de los equipo ideal que utilizarás en
              tus estudios y te recomendaremos los equipos más adecuados
            </p>
          </div>

          {/* Search Bar and Filters */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <div className="bg-white rounded-2xl p-6 shadow-2xl">
              <div className="flex flex-col lg:flex-row gap-4 mb-6">
                {/* Search Input */}
                <div className="flex-1 relative flex items-center gap-2">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Buscar productos..."
                    value={searchQuery}
                    onChange={(e) => handleSearchChange(e.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyDown={(e) => {
                      switch (e.key) {
                        case "ArrowDown":
                          e.preventDefault();
                          setHighlightedIndex((idx) =>
                            Math.min(idx + 1, suggestions.length - 1)
                          );
                          break;
                        case "ArrowUp":
                          e.preventDefault();
                          setHighlightedIndex((idx) => Math.max(idx - 1, 0));
                          break;
                        case "Enter":
                          e.preventDefault();
                          if (highlightedIndex >= 0) {
                            // si hay una sugerencia seleccionada, la "clickeamos"
                            const choice = suggestions[highlightedIndex];
                            setSearchQuery(choice);
                            setSuggestions([]);
                            if (!clickedSuggestions.includes(choice)) {
                              setClickedSuggestions((prev) => [
                                ...prev,
                                choice,
                              ]);
                            }
                            filterProducts(
                              selectedCategory,
                              selectedCareer,
                              choice
                            );
                            document
                              .getElementById("searchResults")
                              ?.scrollIntoView({ behavior: "smooth" });
                          } else {
                            // si no, buscamos con lo que hay en el input
                            handleSearch();
                          }
                          setHighlightedIndex(-1);
                          (e.target as HTMLInputElement).blur();
                          setIsFocused(false);
                          break;
                        default:
                          return;
                      }
                    }}
                    className="flex-1 pl-12 pr-4 py-4 text-lg rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-[#712581] bg-gray-50"
                  />
                  <Button
                    onClick={handleSearch}
                    className="px-6 py-3 bg-[#712581] hover:bg-[#712581]/90 text-white rounded-xl font-semibold"
                  >
                    Buscar
                  </Button>

                  {isFocused && (
                    <ul className="absolute z-10 top-full left-0 w-full bg-white border border-gray-200 rounded-xl mt-1 shadow-lg">
                      {suggestions.map((s, i) => (
                        <li
                          key={i}
                          onMouseDown={() => {
                            setSearchQuery(s);
                            setSuggestions([]);
                            if (!clickedSuggestions.includes(s)) {
                              setClickedSuggestions([...clickedSuggestions, s]);
                            }
                            filterProducts(selectedCategory, selectedCareer, s);
                            document
                              .getElementById("searchResults")
                              ?.scrollIntoView({ behavior: "smooth" });
                            setIsFocused(false);
                          }}
                          className={`
                            px-4 py-2 cursor-pointer 
                            ${i === highlightedIndex ? "bg-gray-100" : ""} 
                            ${
                              clickedSuggestions.includes(s)
                                ? "text-[#712581]"
                                : ""
                            }
                          `}
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Career Dropdown */}
                <div className="relative">
                  <select
                    value={selectedCareer}
                    onChange={(e) => handleCareerChange(e.target.value)}
                    className="appearance-none bg-gray-50 border-0 rounded-xl px-6 py-4 pr-12 text-lg focus:outline-none focus:ring-2 focus:ring-[#712581] min-w-[200px]"
                  >
                    <option>Todas las carreras</option>
                    <option>Arquitectura</option>
                    <option>Diseño Gráfico</option>
                    <option>Ingeniería</option>
                    <option>Programación</option>
                    <option>Gaming</option>
                    <option>Oficina</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                </div>

                {/* More Filters Button */}
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="border-2 border-gray-200 text-gray-700 hover:border-[#712581] hover:text-[#712581] hover:bg-[#712581]/5 px-8 py-4 rounded-xl font-semibold"
                >
                  <SlidersHorizontal className="h-5 w-5 mr-2" />
                  Más filtros
                </Button>
              </div>

              {/* Category Tabs */}
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={
                      selectedCategory === category.id ? "default" : "outline"
                    }
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all ${
                      selectedCategory === category.id
                        ? "bg-[#712581] text-white hover:bg-[#712581]/90 shadow-lg"
                        : "border-2 border-gray-200 text-gray-700 hover:border-[#712581] hover:text-[#712581] hover:bg-[#712581]/5 bg-white"
                    }`}
                  >
                    {category.label}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section
        id="searchResults"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
            {/* Results Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-gradient-to-r from-[#248a98] to-[#2DD4BF] rounded-full flex items-center justify-center shadow-lg">
                <svg
                  className="w-6 h-6 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Resultados de la búsqueda
                </h2>
                <p className="text-lg text-gray-600">
                  Hemos encontrado{" "}
                  <span className="font-semibold text-[#712581]">
                    {filteredProducts.length}
                  </span>{" "}
                  equipos según tu selección.
                </p>
              </div>
            </div>
            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl overflow-hidden"
                  >
                    <CardContent className="p-0">
                      {/* Product Image */}
                      <div className="h-48 relative overflow-hidden rounded-t-2xl">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          className="object-cover"
                        />
                        {product.badge && (
                          <Badge className="absolute top-3 left-3 bg-[#248a98] text-white border-0 px-3 py-1 rounded-full font-semibold">
                            {product.badge}
                          </Badge>
                        )}
                      </div>

                      {/* Product Info */}
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-gray-900">
                            {product.name}
                          </h3>
                          <Badge className="bg-[#712581]/10 text-[#712581] hover:bg-[#712581]/20 border-0 px-3 py-1 rounded-full font-semibold">
                            {product.category}
                          </Badge>
                        </div>

                        {/* Rating */}
                        <div className="flex items-center gap-2 mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  i < product.rating
                                    ? "text-yellow-400 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600 font-medium">
                            ({product.reviews} reseñas)
                          </span>
                        </div>

                        {/* Specifications */}
                        <div className="space-y-3 mb-6">
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <span className="text-gray-500 text-xs">
                                Procesador
                              </span>
                              <p className="font-semibold text-gray-900">
                                {product.processor}
                              </p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <span className="text-gray-500 text-xs">RAM</span>
                              <p className="font-semibold text-gray-900">
                                {product.ram}
                              </p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <span className="text-gray-500 text-xs">
                                Almacenamiento
                              </span>
                              <p className="font-semibold text-gray-900">
                                {product.storage}
                              </p>
                            </div>
                            <div className="bg-gray-50 p-3 rounded-lg">
                              <span className="text-gray-500 text-xs">GPU</span>
                              <p className="font-semibold text-gray-900">
                                {product.gpu}
                              </p>
                            </div>
                          </div>
                        </div>

                        {/* Price and Button */}
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col">
                            <span className="text-3xl font-bold text-[#712581]">
                              ${product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-sm text-gray-500 line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                          <Button className="bg-[#712581] hover:bg-[#712581]/90 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all">
                            Agregar
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  No se encontraron productos
                </h3>
                <p className="text-gray-600 mb-6">
                  Intenta ajustar tus filtros o términos de búsqueda
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategory("todos");
                    setSelectedCareer("Todas las carreras");
                    setSearchQuery("");
                    setFilteredProducts(allProducts);
                  }}
                  className="bg-[#712581] hover:bg-[#712581]/90 text-white px-8 py-3 rounded-xl font-semibold"
                >
                  Limpiar filtros
                </Button>
              </div>
            )}
            {!showAll && filteredProducts.length > 9 && (
              <div className="text-center mt-8">
                <Button
                  variant="outline"
                  onClick={() => setShowAll(true)}
                  className="px-6 py-3"
                >
                  Ver todos los productos…
                </Button>
              </div>
            )}

            {showAll && filteredProducts.length > 9 && (
              <div className="text-center mt-4">
                <Button
                  variant="outline"
                  onClick={() => setShowAll(false)}
                  className="px-6 py-3"
                >
                  Mostrar menos…
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
