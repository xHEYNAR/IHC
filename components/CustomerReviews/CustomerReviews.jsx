import "./CustomerReviews.css"

const reviews = [
  {
    id: 1,
    name: "Carlos Méndez",
    profession: "Arquitectura",
    review:
      "Excelente laptop para trabajar con AutoCAD y Revit. La batería dura lo suficiente para todo el día y el rendimiento es muy bueno.",
    likes: 24,
    comments: 5,
    avatar: "👨‍💼",
    bgColor: "bg-blue",
  },
  {
    id: 2,
    name: "Ana García",
    profession: "Diseño Gráfico",
    review:
      "Perfect para mis proyectos creativos. Adobe Creative Suite funciona sin problemas y la pantalla tiene colores increíbles.",
    likes: 18,
    comments: 3,
    avatar: "👩‍🎨",
    bgColor: "bg-pink",
  },
  {
    id: 3,
    name: "Miguel Torres",
    profession: "Ingeniería",
    review:
      "Ideal para programación y desarrollo. Compila rápido y puedo trabajar con múltiples IDEs sin problemas de rendimiento.",
    likes: 31,
    comments: 8,
    avatar: "👨‍💻",
    bgColor: "bg-green",
  },
]

export default function CustomerReviews() {
  return (
    <section className="reviews-section">
      <div className="reviews-decorations">
        <div className="decoration decoration-1"></div>
        <div className="decoration decoration-2"></div>
      </div>

      <div className="reviews-container">
        <div className="reviews-header">
          <h2 className="reviews-title">Reseñas de Compradores</h2>
          <p className="reviews-subtitle">Descubre lo que dicen nuestros usuarios sobre sus equipos</p>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className={`review-header ${review.bgColor}`}>
                <div className="review-avatar">
                  <span className="avatar-emoji">{review.avatar}</span>
                </div>
                <svg className="quote-icon" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              <div className="review-content">
                <div className="review-user">
                  <h4 className="user-name">{review.name}</h4>
                  <span className="user-profession">{review.profession}</span>
                </div>

                <p className="review-text">{review.review}</p>

                <div className="review-actions">
                  <div className="review-stats">
                    <div className="stat-item stat-likes">
                      <svg className="stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                        />
                      </svg>
                      <span className="stat-number">{review.likes}</span>
                    </div>
                    <div className="stat-item">
                      <svg className="stat-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                      <span className="stat-number">{review.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="reviews-cta">
          <button className="reviews-btn">Ver todas las reseñas</button>
        </div>
      </div>
    </section>
  )
}
