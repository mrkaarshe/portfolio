import React from 'react'

function Card() {
  return (

    <div className="card bg-white shadow-md rounded-2xl max-w-2xl mx-auto flex flex-col  pb-10 ">
    <h1 className='text-4xl text-center py-5 mb-5 border-b-1 border-gray-300 font-bold text-gray-500 bg-black '>CONTACT ME</h1>
    <div className=" flex flex-col justify-between items-center sm:flex-row md:flex-row  px-5">
      <div className="connect hover:translate-y-[-5px] hover:duration-300 duration-300 flex flex-col  gap-5 shadow-md p-5  rounded-xl w-[200px]:">
      <i class="fa-solid fa-envelope ml-7 rounded-md border-1 border-gray-400 text-center pt-2.5 w-[4rem] h-10"></i>
      <p className='text-xs text-gray-400 '>odaykaarshe@gmail.com</p>
    </div>
     <div className="connect hover:translate-y-[-5px] hover:duration-300 duration-300 flex flex-col  gap-5 shadow-md p-5 rounded-xl w-[200px]">
      <i class="fa-brands fa-whatsapp ml-7 text-green-500 rounded-md  border-1 border-gray-400 text-center pt-2.5 w-[4rem] h-10"></i>
      <p className='text-xs text-gray-400 '>+252611011973</p>
    </div>
     <div className="connect hover:translate-y-[-5px] hover:duration-300 duration-300 flex flex-col  gap-5 shadow-md p-5 rounded-xl w-[200px]">
      <i class="fa-brands fa-instagram ml-7 text-red-400 rounded-md  border-1 border-gray-400 text-center pt-2.5 w-[4rem] h-10"></i>
      <p className='text-xs text-gray-400 '>@ALVARO</p>
    </div>
    </div>
    
   </div>
  )
}

export default Card