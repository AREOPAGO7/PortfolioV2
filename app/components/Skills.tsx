'use client'
import Image from 'next/image';
import React from 'react';
import SnakeGame from './SnakeGame';
import { Tooltip } from './Tooltip';

// interface Skill {
//     name: string;
//     description?: string;
//     category: 'frontend' | 'backend' | 'tools' | 'database';
// }


const Skills = () => {
    return (
        <section className="h-fit bg-[#111111] text-white pt-40 pb-18">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="mb-20">
                    <div className="flex justify-between items-start gap-16">
                        <div className="flex flex-col items-start">
                            <span className="text-blue-400 text-xl font-semibold mb- relative left-96 ">magic</span>
                            <h1 className="text-[30px] font-bold mb-2 text-white/80">
                                Pixels, code, and pure <span className="text-white/80 relative">
                                    <span className="relative">Chaos</span>
                                    <svg className="absolute left-0 top-1/2 w-full h-4 text-blue-500 -translate-y-1/2 z-20" viewBox="0 0 100 10" preserveAspectRatio="none">
                                        <path d="M0,5 L10,2 L20,8 L30,2 L40,8 L50,2 L60,8 L70,2 L80,8 L90,2 L100,8" stroke="currentColor" strokeWidth="3" fill="none" />
                                    </svg>
                                </span>.
                            </h1>
                            <Tooltip
                                direction="bottom"
                                content={
                                    <div>
                                        <p>Full Stack Developer specializing in creating engaging user experiences with a strong attention to detail.</p>
                                        <p>Passionate about building scalable, high-performance applications, I have expertise in React.js, Tailwind CSS, </p>
                                        <p>and the MERN stack for frontend and backend development.</p>
                                    </div>
                                }>
                                <p className="mb-2 font-poppins font-semibold text-white/80">Hi, I am Anass Kalkhi,</p>
                            </Tooltip>

                            <p className='text-[12px]  font-poppins font-semibold text-white/60'>Full Stack Developer specializing in creating engaging user </p>
                            <p className='text-[12px] mb-2 font-poppins font-semibold text-white/60'>experiences with a strong attention to detail.</p>
                            <p className='text-[14px] mb-2 font-poppins font-semibold text-white/80'>Safi, Morocco</p>
                            <p className='text-white/70 mb-3 font-semibold'>Tech Stack</p>
                            <style jsx>{`
                                @keyframes slideUp {
                                    0% {
                                        transform: translateY(100%);
                                        opacity: 0;
                                    }
                                    100% {
                                        transform: translateY(0);
                                        opacity: 1;
                                    }
                                }
                                @keyframes portalExpand {
                                    0% {
                                        transform: scale(0);
                                        opacity: 0;
                                    }
                                    100% {
                                        transform: scale(1);
                                        opacity: 0.6;
                                    }
                                }
                                @keyframes portalPulse {
                                    0% {
                                        filter: brightness(1) drop-shadow(0 0 5px #4CAF50);
                                    }
                                    50% {
                                        filter: brightness(1.2) drop-shadow(0 0 15px #4CAF50);
                                    }
                                    100% {
                                        filter: brightness(1) drop-shadow(0 0 5px #4CAF50);
                                    }
                                }
                                button {
                                    opacity: 0;
                                    animation: slideUp 0.5s ease-out forwards;
                                }
                            `}</style>
                            <div className="flex flex-wrap gap-4">
                                <Tooltip content="JavaScript" direction="bottom">
                                    <button style={{ animationDelay: '0s' }} className="px-6 py-2.5 bg-[#1A1A1A] rounded-md border border-white/10 hover:bg-[#252525] transition-colors flex items-center gap-2 group">
                                        <span className="text-yellow-400 text-xl group-hover:text-yellow-500">
                                            <i className="fa-brands fa-square-js w-5 h-6"></i>
                                        </span>
                                    </button>
                                </Tooltip>
                                <Tooltip content="TypeScript" direction="bottom">
                                    <button style={{ animationDelay: '0.1s' }} className="px-6 py-2.5 bg-[#1A1A1A] rounded-md border  border-white/10 hover:bg-[#252525] transition-colors flex items-center gap-2 group">
                                        <span className="text-blue-400 text-xl group-hover:text-blue-500">
                                            <i className='bx bxl-typescript w-5 h-6'></i>
                                        </span>
                                    </button>
                                </Tooltip>
                                <Tooltip content="React.js" direction="bottom">
                                    <button style={{ animationDelay: '0.2s' }} className="px-6 py-2.5 bg-[#1A1A1A] rounded-md border  border-white/10 hover:bg-[#252525] transition-colors flex items-center gap-2 group">
                                        <span className="text-blue-300 text-xl group-hover:text-blue-500">
                                            <i className='bx bxl-react' ></i>
                                        </span>
                                    </button>
                                </Tooltip>
                                <Tooltip content="Next.js" direction="bottom">
                                    <button style={{ animationDelay: '0.3s' }} className="px-6 py-2.5 bg-[#1A1A1A] rounded-md border border-white/10 hover:bg-[#252525] transition-colors flex items-center gap-2 group">
                                        <span className="text-blue-400 text-xl group-hover:text-blue-500">
                                            <Image src="/nextjs.svg" alt="Next.js" className="w-6 h-6 fill-white filter invert-[100%] brightness-[1000%]" width={100} height={100} />
                                        </span>
                                    </button>
                                </Tooltip>
                                <Tooltip content="Tailwind" direction="bottom">
                                <button style={{ animationDelay: '0.7s' }} className="px-6 py-2 bg-[#1A1A1A] rounded-md border border-white/10 hover:bg-[#252525] transition-colors flex items-center gap-2 group">
                                        <span className="text-blue-400 text-xl group-hover:text-blue-500">
                                        <i className='bx bxl-tailwind-css w-6 h-5'></i>                                        </span>
                                    </button>
                                </Tooltip>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-3">
                                <Tooltip content="postgresql" direction="bottom">
                                    <button style={{ animationDelay: '0.5s' }} className="px-6 py-2.5 bg-[#1A1A1A] rounded-md border border-white/10 hover:bg-[#252525] transition-colors flex items-center gap-2 group">
                                        <span className="text-blue-400 text-xl group-hover:text-blue-500">
                                            <Image src="/postgresql.svg" alt="Next.js" className="w-[1.2rem] h-6 " width={100} height={100} />
                                        </span>
                                    </button>
                                </Tooltip>
                                <Tooltip content="MongoDB" direction="bottom">
                                    <button style={{ animationDelay: '0.6s' }} className="px-6 py-2.5 bg-[#1A1A1A] rounded-md border border-white/10 hover:bg-[#252525] transition-colors flex items-center gap-2 group">
                                        <span className="text-blue-300 text-xl group-hover:text-blue-500">
                                            <Image src="/mongodb.svg" alt="Next.js" className="w-[1.3rem] h-6 " width={100} height={100} />
                                        </span>
                                    </button>
                                </Tooltip>
                                <Tooltip content="Python" direction="bottom">
                                   
                                    <button style={{ animationDelay: '0.4s' }} className="px-6 py-2.5 bg-[#1A1A1A] rounded-md border border-white/10 hover:bg-[#252525] transition-colors flex items-center gap-2 group">
                                        <span className="text-blue-400 text-xl group-hover:text-blue-500">
                                            <Image src="/python.svg" alt="Next.js" className="w-5 h-6 " width={100} height={100} />
                                        </span>
                                    </button>
                                </Tooltip>
                                <Tooltip content="Node.js" direction="bottom">
                                    <button style={{ animationDelay: '0.8s' }} className="px-6 py-2.5 bg-[#1A1A1A] rounded-md border border-white/10 hover:bg-[#252525] transition-colors flex items-center gap-2 group">
                                        <span className="text-yellow-400 text-xl group-hover:text-yellow-500">
                                            <Image src="/nodejs.svg" alt="Next.js" className="w-[1.5rem] h-6 " width={100} height={100} />
                                        </span>
                                    </button>
                                </Tooltip>
                                <Tooltip content="Laravel" direction="bottom">
                                    <button style={{ animationDelay: '0.9s' }} className="px-6 py-2.5 bg-[#1A1A1A] rounded-md border border-white/10 hover:bg-[#252525] transition-colors flex items-center gap-2 group">
                                        <span className="text-blue-400 text-xl group-hover:text-blue-500">
                                            <Image src="/laravel.svg" alt="Next.js" className="w-6 h-6 " width={100} height={100} />
                                        </span>
                                    </button>
                                </Tooltip>
                            </div>

                            <div className='grid grid-cols-2 mt-6 justify-between items-center gap-2'>
                                <a href="mailto:anaskalkhi123@gmail.com" className='bg-[#1A1A1A] hover:bg-[#2d2d2d] cursor-pointer p-3 flex items-center gap-2 group'>
                                    <i className='bx bxs-chat text-white/40 mr-2  text-xl' ></i>
                                    <p className='text-white/80 font-semibold'>Contact me</p>
                                    <i className='bx bx-right-arrow-alt text-white/40 ml-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity'></i>
                                </a>
                                <div className='bg-[#1A1A1A] hover:bg-[#2d2d2d] cursor-pointer p-3 flex items-center gap-2 group'>
                                    <i className='bx bxs-file-export text-white/40 mr-2 text-xl'></i>
                                    <p className='text-white/80 font-semibold'>Resume</p>
                                    <i className='bx bx-right-arrow-alt text-white/40 ml-4 text-2xl opacity-0 group-hover:opacity-100 transition-opacity'></i>
                                </div>

                            </div>




                        </div>

                        <div className="flex-shrink-0 mt-8 relative">
                            <SnakeGame />
                            
                            <Image
                                src="/rick.png"
                                alt="Rick"
                                className="absolute top-40 bottom-0 right-0 w-30 h-auto z-10"
                                width={100}
                                height={100}
                            />
                            <Image
                                src="/morty.png"
                                alt="Rick"
                                className="absolute top-52 bottom-0 right-50 w-30 h-auto z-10"
                                width={100}
                                height={100}
                            />
                            <Image
                                src="/portal.png"
                                alt="Rick"
                                className="absolute top-50 bottom-0 right-90 w-10 h-30 z-10"
                                style={{
                                    animation: 'portalExpand 1s ease-out forwards, portalPulse 2s ease-in-out infinite',
                                }}
                                width={100}
                                height={100}
                            />



                        </div>



                    </div>



                </div>


            </div>
        </section>
    );
};

export default Skills;
