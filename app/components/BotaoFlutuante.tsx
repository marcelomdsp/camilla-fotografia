'use client';
import React, { useState, useEffect } from 'react';


export const BotaoFlutuante = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const phoneNumber = "5521971639183";

  const messages = [
    "Olá! 👋 Me chame aqui e vamos conversar!",
    "Ficou com alguma dúvida? Estou online! 💬",
    "Vamos agendar seu ensaio? Clique aqui! 📸",
    "Tire suas dúvidas pelo WhatsApp! ✨",
    "Está precisando de um fotógrafo? Fale comigo! 🎯"
  ];

  useEffect(() => {
    // Primeira mensagem aparece após 3 segundos
    const initialTimer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(initialTimer);
  }, []);

  useEffect(() => {
    let hideTimer: NodeJS.Timeout, cycleTimer: NodeJS.Timeout;
    
    if (isVisible) {
      // Esconde após 10 segundos
      hideTimer = setTimeout(() => {
        setIsVisible(false);
      }, 10000);

      // Próximo ciclo em 15 segundos
      cycleTimer = setTimeout(() => {
        setMessageIndex((prev) => (prev + 1) % messages.length);
        setIsVisible(true);
      }, 15000);
    }

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(cycleTimer);
    };
  }, [isVisible, messageIndex, messages.length]);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Vim através do site e gostaria de saber mais sobre os ensaios fotográficos.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  const closeMessage = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIsVisible(false);
  };

  return (
    <>
      <style>{`
        @keyframes smoothFadeSlide {
          0% {
            opacity: 0;
            transform: translateY(15px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes smoothFadeOut {
          0% {
            opacity: 1;
            transform: translateY(0);
          }
          100% {
            opacity: 0;
            transform: translateY(10px);
          }
        }

        .message-enter {
          animation: smoothFadeSlide 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .message-exit {
          animation: smoothFadeOut 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        .pulse-ring {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Balão de Mensagem */}
        <div className={`${isVisible ? 'message-enter' : 'message-exit'} ${isVisible ? 'block' : 'hidden'}`}>
          <div className="bg-white text-zinc-900 rounded-2xl shadow-2xl w-50  mr-2 relative">
            <div className="p-4 pr-10">
              <p className="text-sm">
                {messages[messageIndex]}
              </p>
            </div>
            
            {/* Botão Fechar */}
            <button
              onClick={closeMessage}
              className="absolute top-2 right-2 p-1 rounded-full hover:bg-zinc-100 transition-colors duration-200"
              aria-label="Fechar mensagem"
            >
             X
            </button>

            {/* Triângulo apontando para o botão */}
            <div className="absolute bottom-0 right-8 transform translate-y-full">
              <div className="w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white"></div>
            </div>
          </div>
        </div>

        {/* Botão WhatsApp */}
        <div className="relative">
          <button
            onClick={handleWhatsAppClick}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="relative bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            aria-label="Abrir WhatsApp"
          >
            {/* Ícone WhatsApp */}
            <svg
              className="w-8 h-8 relative z-10"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>

            {/* Anel de pulso */}
            <span className="absolute inset-0 rounded-full bg-green-400 pulse-ring"></span>
          </button>

          {/* Tooltip no hover */}
          {isHovered && !isVisible && (
            <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap">
              <div className="bg-zinc-900 text-white px-3 py-2 rounded-lg text-sm shadow-xl">
                Fale conosco no WhatsApp
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};


