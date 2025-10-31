import React from 'react'
import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import porjectImage from '../assets/l.jpeg'
import fastBite from '../assets/FastBiteRes.png'
import dashboard from '../assets/FastBiteDashboard.png'
import realzy from '../assets/realzyMovieTrailer.png'
const Projects = () => {
      useEffect(()=>{
        aos.init({duration:1000},{once:true})
      })
  return (
        <div id='projects' data-aos="fade-up" className=' p-5 max-w-7xl mx-auto min-h-100 mb-10 relative   '>
            <h1 className='text-4xl max-w-sm mx-auto text-cyan-500 text-center my-5 py-5 border-b-1 font-Goldman font-bold border-gray-300'>Projects</h1>

{/* 1 */}
            <div className=' border-b-1 border-cyan-500 rounded-3xl px-3 flex sm:w-full gap-3  lg:gap-6 mx-auto flex-col my-3 py-4 md:flex-row justify-between'>
            <div   className='flex flex-col lg:flex-row justify-center items-center gap-2 sm:w-1/1  sm:gap-2 md:w-1/2 '>
                    <h1 className=' text-cyan-500 w-1/1 text-[10rem] md:text-[10rem] font-Goldman' >01</h1>
                <div>
                    <h2 className='text-gray-400 text-sm'>FastBiteRes is a modern restaurant website built with React.js, featuring a full ordering system, interactive carts, and a fully responsive design.</h2>
                </div>
            </div>
            
                <div className=' border-l-3 border-cyan-500'></div>
<div 
  className="relative sm:w-full md:w-1/2 h-50 sm:h-60 md:h-60 lg:h-80 overflow-hidden rounded-lg group transition-all duration-500"
  data-aos="fade-left"
>
  {/* Image */}
  <img
    src={fastBite}
    alt="fastbite.img"
    className="w-full h-full group-hover:blur-xs  object-coverrounded-lg transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
  />

  {/* Overlay */}
  <div
    className="absolute bottom-0 bg-slate-800/20 h-1/3 rounded-t-4xl w-1/1  opacity-0 group-hover:opacity-100 
               flex  items-center justify-center  gap-5 pb-4 transition-opacity duration-500"
  >
    <a
      href="https://fast-biet-res.vercel.app/"
      target="_blank"
      className="px-5 py-3  border-cyan-400 text-sm border text-white text-center font-semibold rounded-lg 
                 hover:bg-cyan-600 transition-all duration-300 shadow-md 
                 transform translate-y-1 group-hover:translate-y-0"
    >
      Live Demo
    </a>
    <a
      href="https://github.com/mrkaarshe/FastBietRes.git"
      target="_blank"
      className="px-5 py-3 border border-cyan-400 text-white text-center font-semibold rounded-lg 
                 hover:bg-cyan-400 transition-all duration-300 shadow-md 
                 transform translate-y-1 group-hover:translate-y-0"
    >
      Code
    </a>
  </div>
</div>

        </div>

{/* 2 */}
            <div className='border-b-1 border-cyan-500 rounded-3xl px-3 flex sm:w-full gap-3  lg:gap-6 mx-auto flex-col my-3 py-4 md:flex-row justify-between'>
                <div 
                className="relative sm:w-full md:w-1/2 h-50 sm:h-60 md:h-60 lg:h-80 overflow-hidden rounded-lg group transition-all duration-500"
                data-aos="fade-right"
                >
                {/* Image */}
                <img
                    src={realzy}
                    alt="Reelzy.img"
                    className="w-full h-full group-hover:blur-xs   object-coverrounded-lg transform group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />

                {/* Overlay */}
                <div
                    className="absolute bottom-0 w-1/1 bg-slate-800/20 h-1/3 rounded-t-4xl opacity-0 group-hover:opacity-100 
                            flex  items-center justify-center  gap-5 pb-4 transition-opacity duration-500"
                >
                    <a
                    href="https://es-7-movie-trailer.vercel.app/"
                    target="_blank"
                    className="px-5 py-3  border-cyan-400 text-sm border text-white text-center font-semibold rounded-lg 
                                hover:bg-cyan-600 transition-all duration-300 shadow-md 
                                transform translate-y-1 group-hover:translate-y-0"
                    >
                    Live Demo
                    </a>
                    <a
                    href="https://github.com/mrkaarshe/ES7MovieTrailer.git"
                    target="_blank"
                    className="px-5 py-3 border border-cyan-400 text-white text-center font-semibold rounded-lg 
                                hover:bg-cyan-400 transition-all duration-300 shadow-md 
                                transform translate-y-1 group-hover:translate-y-0"
                    >
                    Code
                    </a>
                </div>
                </div>
                <div className=' border-l-3 border-cyan-500'></div>

             <div className='flex flex-col lg:flex-row justify-center items-center gap-2 sm:w-1/1  sm:gap-2 md:w-1/2 '>
            <div>
               <h2 className='text-gray-400 text-sm'>Reelzy is a modern movie trailer platform built with React.js. You can log in, add your favorite movies, and enjoy a fully responsive design with a smooth and stylish interface.</h2>
             </div>
             <h1 className=' text-cyan-500 w-1/1 text-[10rem] md:text-[10rem] font-Goldman'>02</h1>

            </div>
        </div>



{/* 3 */}
                <div className=' rounded-3xl px-3 flex sm:w-full gap-3  lg:gap-6 mx-auto flex-col my-3 py-4 md:flex-row justify-between'>
            <div className='flex flex-col lg:flex-row justify-center items-center gap-2 sm:w-1/1  sm:gap-2 md:w-1/2 '>
                    <h1 className=' text-cyan-500 w-1/1 text-[10rem] md:text-[10rem] font-Goldman'>03</h1>
                <div>
                    <h2 className='text-gray-400 text-sm '>The project includes an Admin Dashboard built with React.js, featuring a fully responsive design and a smooth, stylish interface.
Only admins can log in, view live orders, manage order details, and update order statuses in real time. </h2>
                </div>
            </div>
            
                <div className=' border-l-3 border-cyan-500'></div>
          <div 
                className="relative sm:w-full md:w-1/2 h-50 sm:h-60 md:h-60 lg:h-80 overflow-hidden rounded-lg group transition-all duration-500"
                data-aos="fade-left"
                >
                {/* Image */}
                <img
                    src={dashboard}
                    alt="dashboard.img"
                    className="w-full h-full group-hover:blur-xs  object-coverrounded-lg transform group-hover:scale-110  transition-transform duration-500 ease-in-out"
                />

                {/* Overlay */}
                <div
                    className="absolute bottom-0 w-1/1 bg-slate-800/20 h-1/3 rounded-t-4xl opacity-0 group-hover:opacity-100 
                            flex  items-center justify-center  gap-5 pb-4 transition-opacity duration-500"
                >
                    <a
                    href="https://fast-biet-res-admin-dahshboard.vercel.app/dashboard"
                    target="_blank"
                    className="px-5 py-3  border-cyan-400 text-sm border text-white text-center font-semibold rounded-lg 
                                hover:bg-cyan-600 transition-all duration-300 shadow-md 
                                transform translate-y-1 group-hover:translate-y-0"
                    >
                    Live Demo
                    </a>
                    <a
                    href="https://github.com/mrkaarshe/FastBietResAdminDahshboard.git"
                    target="_blank"
                    className="px-5 py-3 border border-cyan-400 text-white text-center font-semibold rounded-lg 
                                hover:bg-cyan-400 transition-all duration-300 shadow-md 
                                transform translate-y-1 group-hover:translate-y-0"
                    >
                    Code
                    </a>
                </div>
                </div>
        </div>
      
        
    </div>
  )
}

export default Projects