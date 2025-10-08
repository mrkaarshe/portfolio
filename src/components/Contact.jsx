import React from 'react'
import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const Contact = () => {
        useEffect(()=>{
          aos.init({duration:1000},{once:true})
        })
  return (
    <>
        <p data-aos="fade-up" className='text-center max-w-sm mx-auto font-Goldman text-cyan-400 text-4xl border-b-1 border-gray-300 mt-30 py-5'>Get In Toch</p>
        <div id='contact' className='flex   max-w-7xl mx-auto px-3 py-5 gap-10'>

    <div  data-aos="fade-up" className='w-full flex flex-col lg:flex-row gap-10 justify-between items-center'>
    <div  data-aos="fade-right" className='flex flex-col gap-5 w-full sm:w-1/1 md:w-1/1 lg:w-1/2'>
                <h2 className='text-cyan-400 my-3'>CONTACT-INFO</h2>
            <div className='flex gap-3'>
                <div className=' border-1 border-cyan-400 rounded-lg hover:border-white hover:duration-300 w-20 h-20 flex justify-center items-center text-gray-300'>
                <i className='fa-solid fa-envelope px-1'></i>
            </div>
            <div className='h-5'>
                    <p className='text-cyan-400'>Mail Me</p>
                <p className='text-gray-400'>odaykaarshe@gmail.com</p>
                <p className='text-gray-400'>thomasyuri900@gmail.com</p>
                
            </div>
            
            </div>

            <div className='flex gap-3'>
                <div className=' border-1 border-cyan-400 rounded-lg hover:border-green-500 hover:duration-300 w-20 h-20 flex justify-center items-center text-gray-300'>
                 <i className='fa-brands text-2xl fa-whatsapp  text-green-500 px-1'></i>
            </div>
            <div className='h-5'>
                    <p className='text-cyan-400'>Text Me</p>
                <p className='text-gray-400'>+252611011973</p>
                <p className='text-gray-400'>+25268932725</p>
                
            </div>
            
            </div>

         

            <div className='flex gap-3'>
                <div className=' border-1 border-cyan-400 rounded-lg hover:border-red-400 hover:duration-300 w-20 h-20 flex justify-center items-center text-gray-400'>
                 <i className='fa-brands text-2xl fa-instagram  text-red-400'></i>
            </div>
            <div className='h-5'>
                    <p className='text-cyan-400'>Follow Me</p>
                <p className='text-gray-400'>@odaykaarshe1</p>
                <p className='text-gray-400'>@ALVAARO</p>
                
            </div>
            
            </div>

            <div className='flex gap-3'>
                    <p className='h-20 rounded-full flex justify-center items-center w-20 text-white border-1 border-cyan-400 hover:border-white'> <i className='fa-solid fa-envelope px-1'></i></p>
                    <p className='h-20 rounded-full flex justify-center items-center w-20 text-white border-1 border-cyan-400 hover:border-green-500'> <i className='fa-brands text-2xl fa-whatsapp  text-green-500 px-1'></i></p>
                    <p className='h-20 rounded-full flex justify-center items-center w-20 text-white border-1 border-cyan-400 hover:border-red-400'><i className='fa-brands text-2xl fa-instagram  text-red-400'></i> </p>
            </div>

        </div>

        <div className=' w-full rounded-2xl bg-slate-800/50 p-5 flex flex-col gap-5'>
                <h2 className='text-white text-2xl'>Lets Work <span className='text-cyan-400'>To Gether</span></h2>
            <form  className='flex flex-col gap-5'>
                    <input type="text" className=' h-10 px-3 w-1/1  bg-slate-900 rounded-lg text-white border-2 border-slate-700  focus:border-cyan-400 outline-0   placeholder-[#14ca8d ' required placeholder='Your Name' />
                    <input type="email" className=' h-10 px-3 w-1/1  bg-slate-900 rounded-lg text-white border-2 border-slate-700 focus:border-cyan-400 outline-0  placeholder-[#14ca8d ' required placeholder='Your Email' />
                    <input type="text" className=' h-10 px-3 w-1/1  bg-slate-900 rounded-lg text-white border-2 border-slate-700 focus:border-cyan-400 outline-0  placeholder-[#14ca8d ' required placeholder='Your Subject' />
                    <textarea name="" className=' min-h-40 min-w-full text-white bg-slate-900 max-h-40 border-2 border-slate-700 focus:border-cyan-400 outline-0  rounded-lg placeholder-[#14ca8d p-5' placeholder='type---' id=""></textarea>
                    <button  className='w-full border-2 border-cyan-400 text-white rounded-lg py-4 hover:bg-cyan-400 transform-colors duration-300'>Send</button>
            </form>
        </div>

    </div>

    </div>
     </>
  )
  
}

export default Contact