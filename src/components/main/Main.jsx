import React from 'react'

function Main() {
  return (
    <main className='bg-[#f0f8ff] py-5 px-3 shadow-md hover:shadow-sm  rounded-4xl mb-1'>
    <div className="main-header  font-sans font-extrabold text-gray-500 text-center mt-3 text-xs">
    <h1 className=''>I collaborate with brands and agencies </h1>
    <p>to bring bold ideas to life — creating designs and digital experiences</p>
    <p> that leave a lasting impression.</p>
    </div>
    <div className="border-b-1 border-gray-400 max-w-5xl mx-auto my-10"></div>
    <div className="main-content max-w-5xl mx-auto flex flex-col justify-between items-center gap-4 sm:flex-row py-10">
   {/* UX & UI Design */}
<div className="card shadow-sm rounded-xl py-5 duration-300 flex flex-col gap-3 w-[350px] hover:-translate-y-2 hover:duration-300 hover:border-b-3 hover:border-b-blue-700 px-2">
  <i className="fa-solid fa-laptop text-2xl text-blue-600"></i>
  <p className="font-semibold">UX & UI Design</p>
  <p className="text-sm text-gray-600">
    I design clean and user-friendly interfaces that provide smooth experiences across all devices.
  </p>
</div>

{/* Web Development */}
<div className="card shadow-sm rounded-xl py-5 duration-300 flex flex-col gap-3 w-[350px] hover:-translate-y-2 hover:duration-300 hover:border-b-3 hover:border-b-green-600 px-2">
  <i className="fa-solid fa-code text-2xl text-green-600"></i>
  <p className="font-semibold">Web Development</p>
  <p className="text-sm text-gray-600">
    I build fast, responsive, and dynamic websites using modern technologies and best practices.
  </p>
</div>

{/* Creative Design */}
<div className="card shadow-sm rounded-xl py-5 duration-300 flex flex-col gap-3 w-[350px] hover:-translate-y-2 hover:duration-300 hover:border-b-3 hover:border-b-pink-600 px-2">
  <i className="fa-regular fa-object-group text-2xl text-pink-600"></i>
  <p className="font-semibold">Creative Design</p>
  <p className="text-sm text-gray-600">
    I craft visually engaging designs that help brands stand out and make an impact.
  </p>
</div>

{/* App development */}
<div className="card shadow-sm rounded-xl py-5 duration-300 flex flex-col gap-3 w-[350px] hover:-translate-y-2 hover:duration-300 hover:border-b-3 hover:border-b-purple-600 px-2">
  <i className="fa-solid fa-mobile text-2xl text-purple-600"></i>
  <p className="font-semibold">App Development</p>
  <p className="text-sm text-gray-600">
    I create modern, user-friendly mobile applications for all platforms.
  </p>
</div>



    </div>
   </main>
  )
}

export default Main