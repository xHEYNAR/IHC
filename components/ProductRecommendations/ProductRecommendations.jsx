"use client";

import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import "./ProductRecommendations.css";

const products = [
  {
    id: 1,
    name: "XPS 15",
    price: "$1,299.00",
    badge: "Promoción estudiante",
    badgeColor: "badge-blue",
    features: ["AutoCAD", "Adobe Suite"],
    financing: "Cuotas sin interés disponibles",
    image: "/image/notebook-xps-15-9530-t-black-gallery-1 (1).avif",
  },
  {
    id: 2,
    name: "MacBook Pro M2",
    price: "$1,599.00",
    features: ["Final Cut Pro", "Adobe Suite"],
    financing: "Cuotas sin interés disponibles",
    image: "/image/macbook.png",
  },
  {
    id: 3,
    name: "HP Pavilion Gaming",
    price: "$899.00",
    badge: "Oferta especial",
    badgeColor: "badge-blue",
    features: ["Unreal Engine", "Unity"],
    financing: "Cuotas sin interés disponibles",
    image: "/image/HP.png",
  },
  {
    id: 4,
    name: "MacBook Air M1",
    price: "$1,199.00",
    features: ["Microsoft Office", "Adobe Creative"],
    financing: "Cuotas sin interés disponibles",
    image: "/image/MacBook11.jpeg",
  },
  {
    id: 5,
    name: "Dell Inspiron 15",
    price: "$799.00",
    badge: "Mejor precio",
    badgeColor: "badge-blue",
    features: ["Office 365", "Zoom"],
    financing: "Cuotas sin interés disponibles",
    image: "/image/Dell.png",
  },
  {
    id: 6,
    name: "ASUS ROG Strix",
    price: "$1,899.00",
    features: ["Gaming", "Streaming"],
    financing: "Cuotas sin interés disponibles",
    image: "/image/AZUZ_2022.png",
  },
  {
    id: 7,
    name: "Lenovo ThinkPad",
    price: "$1,099.00",
    features: ["Business", "Security"],
    financing: "Cuotas sin interés disponibles",
    image: "/image/lenovo-laptop-thinkpad-l15-intel-hero.avif",
  },
  {
    id: 8,
    name: "Surface Laptop",
    price: "$1,399.00",
    badge: "Nuevo",
    badgeColor: "badge-blue",
    features: ["Windows 11", "Touch Screen"],
    financing: "Cuotas sin interés disponibles",
    image: "/image/Surface.avif",
  },
];

export default function ProductRecommendations() {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      const updateScrollInfo = () => {
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth;
        const clientWidth = container.clientWidth;
        const maxScrollLeft = scrollWidth - clientWidth;

        setScrollPosition(scrollLeft);
        setMaxScroll(maxScrollLeft);
      };

      updateScrollInfo();
      container.addEventListener("scroll", updateScrollInfo);
      window.addEventListener("resize", updateScrollInfo);

      return () => {
        container.removeEventListener("scroll", updateScrollInfo);
        window.removeEventListener("resize", updateScrollInfo);
      };
    }
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleIndicatorClick = (e) => {
    const container = scrollContainerRef.current;
    if (container) {
      const rect = e.currentTarget.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const percentage = clickX / rect.width;
      const targetScroll = percentage * maxScroll;
      container.scrollTo({ left: targetScroll, behavior: "smooth" });
    }
  };

  const scrollPercentage =
    maxScroll > 0 ? (scrollPosition / maxScroll) * 100 : 0;

  return (
    <section className="products-section">
      <div className="products-container">
        <h2 className="products-title">Laptops y PCs recomendadas para ti</h2>

        <div className="products-wrapper">
          <button
            className="nav-arrow nav-arrow-left"
            onClick={scrollLeft}
            disabled={scrollPosition <= 0}
          >
            <svg
              className="arrow-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="products-scroll-container">
            <div ref={scrollContainerRef} className="products-scroll">
              {products.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-image-container">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="product-image"
                    />
                    {product.badge && (
                      <div className={`product-badge ${product.badgeColor}`}>
                        {product.badge}
                      </div>
                    )}
                  </div>

                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">{product.price}</p>

                    <div className="product-features">
                      {product.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <svg
                            className="check-icon"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          <span className="feature-text">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <p className="product-financing">{product.financing}</p>

                    <div className="product-buttons">
                      <Link href="/vistaComprar">
                        <button className="btn-primary">Ver detalle</button>
                      </Link>

                      <Link href="/vistaPagar">
                        <button className="btn-secondary">Comprar</button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="nav-arrow nav-arrow-right"
            onClick={scrollRight}
            disabled={scrollPosition >= maxScroll}
          >
            <svg
              className="arrow-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>

        <div className="scroll-indicator-wrapper">
          <button
            className="scroll-nav-btn scroll-nav-left"
            onClick={scrollLeft}
            disabled={scrollPosition <= 0}
          >
            <svg
              className="scroll-nav-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <div className="scroll-indicator" onClick={handleIndicatorClick}>
            <div className="scroll-track">
              <div
                className="scroll-thumb"
                style={{ left: `${scrollPercentage}%` }}
              ></div>
            </div>
          </div>

          <button
            className="scroll-nav-btn scroll-nav-right"
            onClick={scrollRight}
            disabled={scrollPosition >= maxScroll}
          >
            <svg
              className="scroll-nav-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
