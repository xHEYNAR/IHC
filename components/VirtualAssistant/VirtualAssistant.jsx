import Link from "next/link";

import "./VirtualAssistant.css";

export default function VirtualAssistant() {
  return (
    <section className="ia-section">
      <div className="assistant-section">
        <div className="assistant-decorations">
          <div className="floating-decoration floating-1"></div>
          <div className="floating-decoration floating-2"></div>
          <div className="floating-decoration floating-3"></div>
          <div className="floating-decoration floating-4"></div>
        </div>

        <div className="assistant-container">
          <div className="assistant-content">
            <div className="assistant-text">
              <h2 className="assistant-title">¿No sabes por dónde empezar?</h2>
              <p className="assistant-description">
                Nuestro asistente virtual te guiará paso a paso para encontrar el
                equipo perfecto según tu carrera y necesidades.
              </p>
              <div className="assistant-buttons">
                <Link href="/asistente">
                  <button className="btn-primary">Hablar con el asistente</button>
                </Link>
                <Link href="/buscar">
                  <button className="btn-secondary">Buscar productos</button>
                </Link>
              </div>
            </div>

            <div className="assistant-visual">
              <div className="chat-container">
                <div className="chat-window">
                  <div className="chat-header">
                    <div className="chat-user">
                      <div className="user-avatar">🤖</div>
                      <div className="user-info">
                        <h4 className="user-name">Asistente TecnoLink</h4>
                        <p className="user-status">
                          <span className="status-indicator"></span>
                          En línea
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="chat-messages">
                    <div className="message message-bot">
                      <p className="message-text">
                        ¡Hola! ¿Qué carrera estudias?
                      </p>
                    </div>
                    <div className="message message-user">
                      <p className="message-text">Arquitectura</p>
                    </div>
                    <div className="message message-bot">
                      <p className="message-text">
                        Perfecto! Te recomiendo equipos con...
                      </p>
                    </div>
                  </div>

                  <div className="chat-input">
                    <div className="input-field">
                      <span className="input-placeholder">
                        Escribe tu mensaje...
                      </span>
                    </div>
                    <div className="send-button">
                      <span>→</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-element floating-element-1">💬</div>
              <div className="floating-element floating-element-2">✨</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
