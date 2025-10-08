import React from 'react'
import handshake from '../../assets/handshake..png'
import { FaRegHandshake } from "react-icons/fa";
function Footer() {

  return (
    
   <footer className='  mt-5 max-w-7xl mx-auto py-5'>
    <div className=" text-center text-cyan-400  pt-5 text-8xl mb-10 flex flex-col gap-10 justify-center items-center">
    <FaRegHandshake/>
    <h1 className='text-gray-400 text-2xl '>Tell Me About Youre Next project ican Fix It</h1>
    </div>
    <div className="contact flex justify-center items-center gap-5 mb-10">

    <a className='border-2 border-cyan-400 text-white text-sm rounded-xl font-bold px-4 py-2  hover:translate-y-[-5px] duration-300 hover:duration-300 ' href="https://mail.google.com/mail/?view=cm&fs=1&to=odaykaarshe@gmail.com"target="_blank" rel="noopener noreferrer">Email Me</a>
    <p className='font-bold text-blue-400 font-serif'>OR</p>
    <a className='border-2 border-cyan-400 shadow-sm text-white text-sm rounded-xl font-bold px-4 py-2  hover:translate-y-[-5px] duration-300 hover:duration-300' href="https:wa.me/0611011973">WhatsApp</a>
    </div>
    <div className='border-b-1 mb-5 border-cyan-400 mt-10'></div>
    <div className=' px-4 flex flex-col sm:flex-row md:flex-row  justify-between items-center'>
    <h1 className='text-xs text-gray-100 '>&copy;2025 All rights reserved.</h1>
    <ul className='flex gap-3 font-bold text-xl  text-gray-300 mt-0 sm:mt-2'>  
        <i className='fa-solid fa-envelope  text-cyan-400 px-1'></i>
        <a className=' font-bold hover:duration-500 'href="https://mail.google.com/mail/?view=cm&fs=1&to=odaykaarshe@gmail.com"target="_blank"rel="noopener noreferrer"></a>
       
        <i className='fa-brands fa-whatsapp  text-cyan-400   px-1'></i>
        <a className=' font-bold hover:duration-500' arget='_blank' href="https:wa.me/0611011973"></a>
       
        <i className='fa-brands fa-instagram text-cyan-400   '></i>
       <a className=' font-bold hover:duration-500' target='_blank' href="https://www.instagram.com/odaykaarshe1"></a>
        </ul>
    </div>

   </footer>
  )
}

export default Footer