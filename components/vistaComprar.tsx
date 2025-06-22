"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import "../styles/vistaComprar.css";
import { useState } from "react";

export default function VistaComprar() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isFading, setIsFading] = useState(false); // ← NUEVO

  // Mock product data (replace with props or fetch)
  const product = {
    title: "HP Victus Laptop de 15.6 pulgadas",
    highlight: [
      "Intel Core i5-12450H",
      "8 GB RAM",
      "512 GB SSD",
      "NVIDIA GeForce RTX 2050",
      "Windows 11 Home",
    ],
    price: 479.99,
    originalPrice: 1699.0,
    rating: 4.4,
    reviews: 122,
    images: [
      "/image/AZUZ_2022.png",
      "/image/asusus.png",
      "/image/asus atras.png",
      "/image/asus lateral.png",
      "/image/asus arriaba.png",
    ],
    details: {
      Marca: "HP",
      Modelo: "15-fa1029nr",
      "Tamaño de pantalla": "15.6 pulgadas FHD 144 Hz",
      Color: "Negro",
      "Tamaño de disco duro": "512 GB SSD",
      "Modelo de CPU": "Core i5",
      "Tamaño de la memoria": "8 GB",
    },
  };
  const handleThumbClick = (index: number) => {
    // iniciamos fade-out
    setIsFading(true);

    setTimeout(() => {
      setSelectedImage(index); // cambiamos la imagen
      setIsFading(false); // y volvemos a opacidad 1
    }, 300); // 300ms debe encajar con la duración del transition
  };

  return (
    <div className="vista-comprar">
      <div className="vc-container">
        <div className="vc-images">
          {/* imagen principal */}
          <div className={`vc-main-image ${isFading ? "fade-out" : ""}`}>
            <Image
              src={product.images[selectedImage]}
              alt={product.title}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* miniaturas */}
          <div className="vc-thumbnails">
            {product.images.map((src, i) => (
              <div
                key={i}
                className={`vc-thumb ${selectedImage === i ? "active" : ""}`}
                onClick={() => handleThumbClick(i)}
              >
                <Image
                  src={src}
                  alt={`${product.title} ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="vc-info">
          <h1 className="vc-title">{product.title}</h1>
          <div className="vc-badges">
            <Badge variant="default">{product.rating} ★</Badge>
            <span className="vc-reviews">{product.reviews} reseñas</span>
          </div>

          <div className="vc-pricing">
            <span className="vc-price">${product.price.toFixed(2)}</span>
            <span className="vc-original">
              ${product.originalPrice.toFixed(2)}
            </span>
          </div>

          <ul className="vc-highlights">
            {product.highlight.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>

          <div className="vc-buttons">
            <a
              href="/carrito"
              className="vc-btn inline-flex items-center justify-center"
            >
              <ShoppingCart className="inline-block mr-2 h-5 w-5" />
              Agregar al carrito
            </a>

            <a
              href="/vistaPagar"
              className="
                vc-btn-buy-now 
                inline-flex items-center justify-center
                bg-[#712581] hover:bg-[#712581]/90 
                text-white 
                py-3 rounded-xl 
                font-semibold 
                transition-all duration-300
              "
            >
              Comprar ahora
            </a>
          </div>

          <table className="vc-details">
            <tbody>
              {Object.entries(product.details).map(([key, val]) => (
                <tr key={key}>
                  <th>{key}</th>
                  <td>{val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
