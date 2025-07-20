import React from 'react'
import handshake from '../../assets/handshake.png'
function Footer() {
  return (
    
   <footer className='bg-[#fff] rounded-4xl shadow-xl hover:shadow-sm py-10'>
    <div className="footer-hero text-center pt-5 text-4xl mb-10 flex flex-col justify-center items-center">
     <img className='w-[70px] rounded-full bg-gray-100' src={handshake} alt='handhshake.png' />
    <h1 className='text-gray-600 text-[1.5rem] font-bold font-mono'>Tell Me About Youre Next</h1>
    <p className='text-gray-600 text-[1.5rem] font-bold font-mono'>project</p>
    </div>
    <div className="contact flex justify-center items-center gap-5 mb-10">

    <a className='bg-black text-white text-sm rounded-xl font-bold px-4 py-2  hover:translate-y-[-5px] duration-300 hover:duration-300  hover:border-b-2 hover:border-b-pink-600' href="https://mail.google.com/mail/?view=cm&fs=1&to=odaykaarshe@gmail.com"target="_blank" rel="noopener noreferrer">Email Me</a>
    <p className='font-bold text-gray-400 font-serif'>OR</p>
    <a className='bg-white shadow-sm text-black text-sm rounded-xl font-bold px-4 py-2  hover:translate-y-[-5px] duration-300 hover:duration-300 hover:border-b-2 hover:border-b-black' href="https:wa.me/0611011973">WhatsApp</a>
    </div>
    <div className='border-b-1 mb-5 border-gray-300 mt-10'></div>
    <div className=' px-4 flex flex-col sm:flex-row md:flex-row  justify-between items-center'>
    <h1 className='text-xs text-gray-600 '>&copy;2025 All rights reserved.</h1>
    <ul className='flex gap-0.5 font-bold text-xs text-gray-600 mt-0 sm:mt-2'>  
        <i className='fa-solid fa-envelope px-1'></i>
        <a className='hover:border-b-2 font-bold hover:duration-500 'href="https://mail.google.com/mail/?view=cm&fs=1&to=odaykaarshe@gmail.com"target="_blank"rel="noopener noreferrer">odaykaarshe@gmail.com</a>
        <span>/</span>
        <i className='fa-brands fa-whatsapp  text-green-500 px-1'></i>
        <a className='hover:border-b-2 font-bold hover:duration-500' arget='_blank' href="https:wa.me/0611011973">+252611011973</a>
        <span>/</span>
        <i className='fa-brands fa-instagram  text-red-400'></i>
       <a className='hover:border-b-2 font-bold hover:duration-500' target='_blank' href="https://www.instagram.com/odaykaarshe1">@ALVARO</a>
        </ul>
    </div>

   </footer>
  )
}

export default Footer