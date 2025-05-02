import React from 'react';

const AboutImage = () => {
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

            {/* Tarjeta flotante tipo badge */}
            <div className="floating-card absolute bottom-8 right-0 w-[80%] h-[60px] bg-white shadow-md text-black px-4 flex items-center rounded-2xl">
                <p className="text-sm font-medium z-10">Floating Info</p>
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