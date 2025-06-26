"use client";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Plus, CheckCircle} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "../styles/SimulatorContent.css"; 

// --- Datos estáticos -------------------------------------------------------
const categories = [
  { id: "diseno", label: "Diseño", active: true },
  { id: "ingenieria", label: "Ingeniería", active: false },
  { id: "ciencia-datos", label: "Ciencia de Datos", active: false },
  { id: "multimedia", label: "Multimedia", active: false },
];

const softwareByCategory = {
  diseno: [
    { id: "autocad", name: "AutoCAD" },
    { id: "photoshop", name: "Adobe Photoshop" },
    { id: "illustrator", name: "Adobe Illustrator" },
    { id: "indesign", name: "Adobe InDesign" },
  ],
  ingenieria: [
    { id: "sketchup", name: "SketchUp" },
    { id: "solidworks", name: "SolidWorks" },
    { id: "matlab", name: "MATLAB" },
    { id: "autocad-eng", name: "AutoCAD" },
  ],
  "ciencia-datos": [
    { id: "python", name: "Python" },
    { id: "r-studio", name: "R Studio" },
    { id: "tableau", name: "Tableau" },
    { id: "jupyter", name: "Jupyter Notebook" },
  ],
  multimedia: [
    { id: "premiere", name: "Adobe Premiere Pro" },
    { id: "after-effects", name: "After Effects" },
    { id: "davinci", name: "DaVinci Resolve" },
    { id: "blender", name: "Blender" },
  ],
};

const compatibleProducts = [
  {
    id: 1,
    name: "Laptop Pro X1",
    compatibility: 85,
    price: 1299,
    category: "Laptop",
    processor: "Intel Core i7",
    ram: "16 GB",
    storage: "512 GB SSD",
    gpu: "NVIDIA RTX 3050",
    image: "/image/1024.png",
    recommendations: [
      "Ideal para la mayoría del software seleccionado.",
      "Considera ampliar la RAM para mejor rendimiento con 3ds Max.",
    ],
  },
  {
    id: 2,
    name: "WorkStation Z3",
    compatibility: 100,
    price: 1899,
    category: "PC",
    processor: "AMD Ryzen 9",
    ram: "32 GB",
    storage: "1 TB SSD",
    gpu: "NVIDIA RTX 4070",
    image: "/image/HPPP.avif",
    recommendations: [
      "Compatibilidad total con todo el software seleccionado.",
      "Rendimiento óptimo para proyectos complejos.",
    ],
  },
  {
    id: 3,
    name: "Creator Book Pro",
    compatibility: 98,
    price: 1599,
    category: "Laptop",
    processor: "Intel Core i9",
    ram: "32 GB",
    storage: "1 TB SSD",
    gpu: "NVIDIA RTX 3060",
    image: "/image/creator.png",
    recommendations: [
      "Excelente rendimiento para software de diseño y multimedia.",
      "Refrigeración mejorada para sesiones largas de trabajo.",
    ],
  },
  {
    id: 4,
    name: "StudioMaster 500",
    compatibility: 92,
    price: 1499,
    category: "PC",
    processor: "Intel Core i7-12700",
    ram: "16 GB",
    storage: "1 TB NVMe SSD",
    gpu: "NVIDIA RTX 3070",
    image:
      "/image/Revox-Audiosysteme-Studiomaster-M500-Verstaerker-schwarz-angle-small_800x800.jpg",
    recommendations: [
      "Muy buena opción para edición de vídeo en Premiere.",
      "Considera agregar un disco duro secundario para almacenamiento extra.",
    ],
  },
  {
    id: 5,
    name: "Gaming Beast G5",
    compatibility: 88,
    price: 1399,
    category: "PC",
    processor: "AMD Ryzen 7 5800X",
    ram: "16 GB",
    storage: "512 GB SSD + 1 TB HDD",
    gpu: "NVIDIA RTX 3060 Ti",
    image: "/image/Beast-Y70-Touch.avif",
    recommendations: [
      "Perfecto para gaming y modelado en Blender.",
      "Podrías mejorar la refrigeración para overclocking.",
    ],
  },
];


/* ------------------------------------------------------------------ */
/* Componente principal                                               */
/* ------------------------------------------------------------------ */
export default function SimulatorContent() {
  const [activeCategory, setActiveCategory] = useState("diseno");
  const [selectedSoftware, setSelectedSoftware] = useState({
    autocad: true,
    photoshop: true,
    sketchup: true,
  });
  const [showResults, setShowResults] = useState(false);

  const handleSoftwareToggle = (softwareId) => {
    setSelectedSoftware((prev) => ({ ...prev, [softwareId]: !prev[softwareId] }));
  };

  const getSelectedSoftwareNames = () => {
    const all = Object.values(softwareByCategory).flat();
    return Object.keys(selectedSoftware)
      .filter((id) => selectedSoftware[id])
      .map((id) => all.find((sw) => sw.id === id)?.name)
      .filter(Boolean);
  };

  return (
    <div className="simulator">
      {/* -------------------- Hero -------------------- */}
      <motion.section className="heroSM" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <div className="hero__decor">
          <span className="bubble bubble--1" />
          <span className="bubble bubble--2" />
          <span className="bubble bubble--3" />
          <span className="bubble bubble--4" />
        </div>

        <motion.div className="hero__inner" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
          <motion.h1 className="hero__title" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            Simulador de Compatibilidad</motion.h1>
          <motion.p className="hero__subtitle" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}>
            Selecciona el software que utilizarás en tus estudios y te
            recomendaremos los equipos más adecuados.
          </motion.p>
        </motion.div>
      </motion.section>

      {/* -------------------- Main -------------------- */}
      <div className="main">
        {/* Selección de software */}
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
        <Card className="card">
          <CardContent className="card__content">
            {/* Tabs */}
            <motion.div className="tabs" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
              {categories.map((cat) => (
                <Button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`tab ${activeCategory === cat.id ? "is-active" : ""}`}
                  variant="outline"
                >
                  {cat.label}
                </Button>
              ))}

              {/* Placeholder “+” */}
              <Button variant="outline" className="tab tab--add">
                <Plus size={20} />
              </Button>
            </motion.div>

            {/* Listas de software */}
            <div className="software-panels">
              {/* Activa */}
              <div className="software-panel">
                <h3 className="software-panel__title">{activeCategory}</h3>
                {softwareByCategory[activeCategory].map((sw) => (
                  <label key={sw.id} className="software-item">
                    <Checkbox
                      id={sw.id}
                      checked={selectedSoftware[sw.id] || false}
                      onCheckedChange={() => handleSoftwareToggle(sw.id)}
                    />
                    <span>{sw.name}</span>
                  </label>
                ))}
              </div>

              {/* Otras */}
              <div className="software-panel">
                <h3 className="software-panel__title">Otros</h3>
                {Object.entries(softwareByCategory)
                  .filter(([key]) => key !== activeCategory)
                  .slice(0, 1)
                  .flatMap(([, list]) => list.slice(0, 2))
                  .map((sw) => (
                    <label key={sw.id} className="software-item">
                      <Checkbox className="clickes2"
                        id={sw.id}
                        checked={selectedSoftware[sw.id] || false}
                        onCheckedChange={() => handleSoftwareToggle(sw.id)}
                      />
                      <span>{sw.name}</span>
                    </label>
                  ))}
              </div>
            </div>

            {/* Etiquetas del software elegido */}
            {getSelectedSoftwareNames().length > 0 && (
              <div className="chips">
                <h4>Software seleccionado:</h4>
                {getSelectedSoftwareNames().map((name) => (
                  <Badge key={name} className="chip">
                    {name}
                  </Badge>
                ))}
              </div>
            )}

            {/* Botón evaluar */}
            <Button
              onClick={() => setShowResults(true)}
              disabled={getSelectedSoftwareNames().length === 0}
              className="btn-evaluate"
            >
              Evaluar Compatibilidad
            </Button>
          </CardContent>
        </Card>
        </motion.div>

        {/* -------------------- Resultados -------------------- */}
        {showResults && (
          <Card className="card">
            <CardContent className="card__content">
              <header className="results-header">
                <span className="results-header__icon">
                  <CheckCircle size={24} />
                </span>
                <div>
                  <h2>Resultados de compatibilidad</h2>
                  <p>
                    Basado en{" "}
                    <strong>{getSelectedSoftwareNames().length}</strong> programas seleccionados,
                    hemos encontrado <strong>{compatibleProducts.length}</strong> equipos compatibles.
                  </p>
                </div>
              </header>

              {/* Productos */}
              <div className="products">
                {compatibleProducts.map((p) => (
                  <Card key={p.id} className="product">
                    <CardContent className="product__content">
                      <div className="product__image">
                        <Image src={p.image} alt={p.name} fill className="img" />
                      </div>

                      <div className="product__info">
                        <div className="product__title">
                          <h3>{p.name}</h3>
                          <Badge className={`tagSM tag--${p.category.toLowerCase()}`}>
                            {p.category}
                          </Badge>
                        </div>

                       <div className="product__compat">
                          <span>Compatibilidad:</span>
                          <span className="product__percent">{p.compatibility}%</span>
                        </div>


                        <dl className="specs">
                          <div><dt>CPU</dt><dd>{p.processor}</dd></div>
                          <div><dt>RAM</dt><dd>{p.ram}</dd></div>
                          <div><dt>Disco</dt><dd>{p.storage}</dd></div>
                          <div><dt>GPU</dt><dd>{p.gpu}</dd></div>
                        </dl>

                        <ul className="recs">
                          {p.recommendations.map((rec) => (
                            <li key={rec}>• {rec}</li>
                          ))}
                        </ul>

                        <footer className="product__footer">
                          <span className="price">${p.price}</span>
                          <a href="/vistaComprar">
                            <button className="linkBN">Ver detalles</button>
                          </a>
                        </footer>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="center">
                <Button onClick={() => { setShowResults(false); setSelectedSoftware({}); }}
                        variant="ghost" className="btn-reset">
                  Volver a seleccionar software
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}