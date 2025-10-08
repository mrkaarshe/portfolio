import React from 'react'
import portofolio from '../../assets/portfolio-png-img.png'
import hero from '../../assets/y.png'
import profile from '../../assets/kaarshe.png'
import bgImage from '../../assets/hero.jpeg'


import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
export default function Header() {
  
  useEffect(()=>{
    aos.init({duration:1000},{once:true})
  })
  return (
    <>
    
  <header id='home' className=' px-2  relative  max-w-7xl mx-auto  rounded-b-4xl pb-1   ' >

    <section className="w-full  text-white flex flex-col lg:flex-row  pt-40 pb-20 mt-10 items-center">
      <div data-aos="fade-right" className=" w-1/1 lg:w-1/2 p-5   flex flex-col justify-center  items-start  md:items-start">
      <div className="flex gap-2 justify-center items-center">
        <div >
          <img
            src={profile}
            className="w-20 h-20 border-4 border-cyan-700 rounded-full p- 1"
          />
        </div>
        <div className="text-gray-400 text-sm md:text-md">
          <p>kaarshe</p>
          <p>Full-stack web developer</p>
        </div>
      </div>

      <div className="text-start space-y-3">
        <h1 className="text-4xl md:text-7xl font-bold text-gray-300">
          Hi, I'm <span className="text-cyan-500 font-Goldman">Kaarshe</span>
        </h1>

        <p className='text-gray-300'>Frontend / Full-stack web developer</p>

        <p className="text-gray-400 text-sm md:text-md">
          I'm a passionate web developer specializing in building modern,
          responsive websites with Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Alias, laboriosam laborum modi dolor rerum tempore
          vel nobis itaque optio blanditiis amet minima delectus odit quidem esse
          neque nostrum possimus eveniet vitae eum. Doloremque molestias, cum
          adipisci quam blanditiis temporibus maiores?
          <span className="text-cyan-600 font-bold">React</span> &{" "}
          <span className="text-cyan-600 font-bold">TailwindCSS</span>.
        </p>

        <div className="flex justify-start gap-4">
          <button className="px-10 text-sm md:text-lg py-5 font-bold border border-cyan-400  text-white rounded-xl hover:-translate-y-3 duration-300 transition">
            View Portfolio
          </button>
          <button className="px-8 py-5 text-sm md:text-lg border rounded-lg border-cyan-400 font-medium hover:-translate-y-3 duration-300 hover:text-white transition">
            Contact Me
          </button>
        </div>

        <div className="flex gap-6 w-full justify-start">
          <p className="h-20 w-20 rounded-full flex justify-center items-center text-white border-2 border-cyan-400 hover:border-white">
            <i className="fa-solid fa-envelope text-2xl px-1"></i>
          </p>
          <p className="h-20 w-20 rounded-full flex justify-center items-center text-white border-2 border-cyan-400 hover:border-green-500">
            <i className="fa-brands fa-whatsapp text-2xl text-green-500 px-1"></i>
          </p>
          <p className="h-20 w-20 rounded-full flex justify-center items-center text-white border-2 border-cyan-400 hover:border-red-400">
            <i className="fa-brands fa-instagram text-2xl text-red-400"></i>
          </p>
        </div>
      </div>

      </div>
        <div  data-aos="fade-left"  className="w-1/1 relative sm:mx-5 lg:mx-0 lg:w-1/2 z-10  flex justify-center md:justify-end">
          <img
          src={hero}
            className="w-1/1 h-100 sm:h-120 rounded-2xl  bg-center bg-cover object-cover"
          />
          <div className='absolute bg-gradient-to-r from-slate-900/4  to-[#24012b]/4 z-100 rounded-4xl w-full h-full'></div>
        </div>

    </section>
   </header>
   
   </>
  )
}
