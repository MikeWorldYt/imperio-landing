import React, { useEffect, useState } from 'react';

const AboutImage = () => {
    const messages = [
        "I'm really happy with the result ✨",
        "They did a great job 💪🔥",
        "You guys are the best 🔥😄",
        "Honestly, amazing work 👏✨",
        "Super happy with the result 😍",
        "This is awesome 🔥🔥",
    ];

    const responses = [
        "Thanks so much! 😊",
        "Glad you liked it! 🙏",
        "Always here to help 💪",
        "That means a lot 😁",
    ];

    const [message, setMessage] = useState('');
    const [response, setResponse] = useState('');
    const [showFirst, setShowFirst] = useState(false);
    const [showSecond, setShowSecond] = useState(false);
    
    useEffect(() => {
        const t1 = setTimeout(() => {
          setMessage(messages[Math.floor(Math.random() * messages.length)]);
          setShowFirst(true);
        }, 3000);
      
        const t2 = setTimeout(() => {
          setResponse(responses[Math.floor(Math.random() * responses.length)]);
          setShowSecond(true);
        }, 6000);
      
        return () => {
          clearTimeout(t1);
          clearTimeout(t2);
        };
      }, []);

    return (
        <div className="relative w-[450px] h-[300px] m-0 p-0"> {/* border border-black Contenedor principal */}

            <div className="absolute top-0 bottom-0 right-6 left-0 z-0 py-2"> {/* bg-pink-600  Cont rojo */}
                {/* Imagen con hover effect - Contenedor verde lima */}
                <div className="relative z-10 w-full h-full bg-[#6d92fc] overflow-hidden rounded-md transform transition-transform duration-300 hover:scale-105 shadow-md">
                    <div // Imagen
                        className="w-full h-full bg-center pointer-events-none select-none"
                        style={{ backgroundImage: "url('/corporate memphis/worker_flat_vector_v2.svg')" }}
                    ></div>
                    {/*<img
                        src="/corporate memphis/worker_flat_vector_v2.svg"
                        alt="Sobre nosotros"
                        className="w-full h-full pointer-events-none select-none"
                        onContextMenu={(e) => e.preventDefault()}
                    /> */}
                </div>
            </div> {/* Contenedor rojo */}

            {/* Tarjeta flotante tipo mensaje - mensaje */}
            <div 
                className={`floating-card absolute right-0 max-w-[80%] min-h-[60px] px-4 bg-blue-600 text-white flex items-center rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl rounded-br-none shadow-md transition-all duration-700 ease-out
                ${showFirst ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                ${showSecond ? 'bottom-20' : 'bottom-0'}
                `}
            >
                <p className="text-sm font-medium z-10">{message}</p>
            </div>
            {/* Tarjeta flotante tipo mensaje - respuesta*/}
            <div
                className={`absolute bottom-0 left-0 w-[85%] flex items-end gap-2 transition-all duration-700 ease-out
                ${showSecond ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                `}
            >
                <img
                    src="/icons/pfp.svg"
                    alt="User profile"
                    className="w-8 h-8 rounded-full border-2 border-white shadow"
                />
                <div className="min-h-[60px] px-4 py-2 bg-gray-200 text-black flex items-center rounded-tl-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-none shadow-md text-sm font-medium">
                    {response}
                </div>
            </div>

            <style>{`
                .floating-card {
                    overflow: hidden;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.35);
                }

                .floating-card::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: -100%;
                    height: 100%;
                    width: 100%;
                    background: linear-gradient(
                        to right,
                        transparent 0%,
                        #cae3fe 40%,
                        transparent 80%
                    );
                    transform: skewX(-20deg);
                    opacity: 0.6;
                    transform: skewX(-20deg);
                    pointer-events: none;
                }

                .floating-card:hover::before {
                    animation: shine 0.6s ease-in-out;
                    opacity: 1.0;
                }

                @keyframes shine {
                    0% {
                        transform: translateX(-100%) skewX(-20deg);
                        opacity: 0;
                    }
                    20% {
                        opacity: 0.4;
                    }
                    50% {
                        opacity: 0.6;
                    }
                    100% {
                        transform: translateX(200%) skewX(-20deg);
                        opacity: 0;
                    }
                }
            `}</style>

        </div>
    );
};

export default AboutImage;