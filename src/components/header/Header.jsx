import React from 'react'
import portofolio from '../../assets/portofolio.png'
export default function Header() {
  return (
    <>
    
    <header className='bg-[#f0f8ff] px-2 rounded-b-4xl pb-5  shadow-md hover:shadow-sm mb-1'>
    <nav className=' text-gray-700  shadow-MD px-4 py-5 flex justify-between items-center'>
    <div className="logo ">
        <h1 className='font-bold text-xs '>MR <span className='text-gray-600'>KAARSHE</span></h1>
    </div>
    <div className="navigation">
          <ul className='flex gap-3 font-bold text-xs text-gray-600'>   
        <a className='hover:border-b-2 font-bold hover:duration-500' href="#">Email</a>
        <span>/</span>
        <a className='hover:border-b-2 font-bold hover:duration-500' href="#">WhatsApp</a>
        <span>/</span>
       <a className='hover:border-b-2 font-bold hover:duration-500' href="#">Instagram</a>
        </ul>
    </div>
   </nav>
   <div className="Hero-section flex flex-col justify-center items-center py-5  ">
    <div className="content w-[300px] ">
    <img className='w-[100px] h-[100px]  rounded-full flex justify-center items-center ml-[6rem] mb-3'  src={portofolio} alt="portofolio.png" />
    <p className='text-gray-500 text-sm font-sans font-extrabold text-center'>I design and build digital products, brands,and experiences that make a difference.</p>
    <button className='bg-black duration-300 text-white px-10 py-2 hover:bg-white hover:text-black hover:border-1 hover:duration-300  text-sm rounded-lg ml-20'>Sea More</button>
    </div>
   </div>
   </header>
   
   </>
  )
}
