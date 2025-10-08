// import React from "react";
// import aos from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from 'react';
// import portofolio from '../../assets/portfolio-png-img.png'
// import profile from '../../assets/kaarshe.png'
// export default function AboutMe() {
//     useEffect(()=>{
//       aos.init({duration:2000},{once:true})
//     })


//   return (
//     <div id="about" data-aos="fade-up" className=" mb-1 mt-20 max-w-7xl mx-auto   rounded-4xl  p-5  ">
//       <h3 className="text-cyan-400 font-bold text-4xl max-w-sm mx-auto border-gray-100 text-center my-5 border-b-1 py-3 font-Goldman ">About Me</h3>
//       <div   className="grid grid-cols-1 gap-5  md:grid-cols-2 lg:grid-cols-3">
//           <div  data-aos="fade-right" className="mt-6 md:mt-0 flex flex-col  ">
//             <h1 className="mt-4 text-2xl font-bold text-cyan-400 ">Oday Kaarshe</h1>
//             <p className="mt-1 text-sm text-gray-300">Frontend / Full‑stack web developer</p>
//             <div>
//             <p className="text-sm text-gray-400  w-1/1
//             ">
//             I'm a passionate and dedicated web developer with a strong foundation in both frontend and backend technologies. With expertise in HTML, CSS, JavaScript, React, Node.js, and MySQL, I create dynamic and responsive web applications that deliver exceptional user experiences. I thrive on solving complex problems and continuously learning to stay at the forefront of the ever-evolving web development landscape. Let's build something amazing together!
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellat accusantium pariatur adipisci omnis maiores minima, quisquam in quam assumenda sapiente doloribus officia iste! Dolor, quia iste. Dolorum voluptas dolores omnis molestias molestiae a soluta, beatae, fuga laboriosam commodi repellat!
//             </p>
//           </div>
//            </div>



//           <div className="relative">
//             <img src={profile} className="w-100 h-100 rounded-2xl"  alt="potfolio-image" />
//             <div className="absolute top-0 bg-cyan-300/10 border border-cyan-400  hover:bg-cyan-300/5 rounded-2xl w-full h-1/1"></div>
//           </div>


//           <div  data-aos="fade-left"  className="mt-6 md:mt-0 ">
//             <h1 className="mt-4 text-2xl font-bold text-cyan-400">Personal Info</h1>
    
//             <p className="mt-1 text-sm text-gray-400 flex justify-between font-bold ">Full Name : <span className="text-gray-400"> Oday Kaarshe</span></p>
//             <p className="mt-1 text-sm text-gray-400 flex justify-between font-bold ">Age:<span className="text-gray-400"> 22 Years</span></p>
//             <p className="mt-1 text-sm text-gray-400 flex justify-between font-bold gap-5 ">Email  <span className="text-gray-400">odaykaarshe@gmail.com</span></p>
//             <p className="mt-1 text-sm text-gray-400 flex justify-between font-bold ">Phone : <span className="text-gray-400">+252611011973</span></p>
//             <p className="mt-1 text-sm text-gray-400 flex justify-between font-bold ">Languages : <span className="text-gray-400">English, Somali</span></p>
//             <p className="mt-1 text-sm text-gray-400 flex justify-between font-bold ">Freelance : <span className="text-gray-400">Available</span></p>
//             <p className="mt-1 text-sm text-gray-400 font-bold  flex justify-between ">Address : <span className="text-gray-400">madino</span></p>
//             <p className="mt-1 text-sm text-gray-400 flex justify-between font-bold">From: <span className="text-gray-400">Mogadishu, Somalia</span></p>
            
//           </div> 


          

//       </div>
//       <div data-aos="fade-up"  className="bg-slate-800/50 rounded-2xl my-10 ">
//         <h1 className="text-gray-400 text-center  text-2xl py-5">Client Satisfaction Metrics</h1>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
//           <div  className="text-center  rounded-lg p-3">
//             <h2 className="text-cyan-400 font-bold text-4xl">100%</h2>
//             <p className="text-gray-400">Client Satisfaction</p>
//           </div>
//           <div  className="text-center  rounded-lg p-3">
//             <h2 className="text-cyan-400 font-bold text-4xl">100%</h2>
//             <p className="text-gray-400">Project Delivered</p>
//           </div>
//           <div  className="text-center  rounded-lg p-3">
//             <h2 className="text-cyan-400 font-bold text-4xl">24/7</h2>
//             <p className="text-gray-400">Hours Support</p>
//           </div>
//           <div  className="text-center  rounded-lg p-3">
//             <h2 className="text-cyan-400 font-bold text-4xl">100%</h2>
//             <p className="text-gray-400">Client Retention</p>
//           </div>
//         </div>
//       </div>
       
// </div>
    
//   );
// }


import React from "react";
import aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import portofolio from '../../assets/portfolio-png-img.png'
import profile from '../../assets/kaarshe.png'
export default function AboutMe() {
    useEffect(()=>{
      aos.init({duration:2000})
    })


  return (
    <div id="about" data-aos="fade-up" className=" mb-1 mt-20 max-w-7xl mx-auto   rounded-4xl  p-5  ">
      <h3 className="text-cyan-400 font-bold text-4xl max-w-sm mx-auto border-gray-100 text-center my-5 border-b-1 py-3 font-Goldman ">About Me</h3>
      
      <div   className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3    ">
         <div data-aos="fade-right" className=" bg-slate-800/10 rounded-3xl">
           <img src={profile} className="w-100 h-100 sm:w-84 sm:h-70  object-center bg-cover bg-center "  alt="potfolio-image" />
          
         </div>
          <div  data-aos="fade-up" className="mt-6 md:mt-0 flex flex-col  w-1/1">
            <h1 className="mt-4 text-2xl font-bold text-cyan-400 ">Oday Kaarshe</h1>
            <p className="mt-1 text-sm text-gray-300">Frontend / Full‑stack web developer</p>
            <div>
            <p className="text-xs text-gray-400  w-1/1
            ">
            I'm a passionate and dedicated web developer with a strong foundation in both frontend and backend technologies. With expertise in HTML, CSS, JavaScript, React, Node.js, and MySQL, I create dynamic and responsive web applications that deliver exceptional user experiences. I thrive on solving complex problems and continuously learning to stay at the forefront of the ever-evolving web development landscape. Let's build something amazing together!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi repellat accusantium pariatur adipisci omnis maiores minima, quisquam in quam assumenda sapiente doloribus officia iste! Dolor, quia iste. Dolorum voluptas dolores omnis molestias molestiae a soluta, beatae, fuga laboriosam commodi repellat!
            </p>
          </div>

           </div>
           <div  data-aos="fade-left"  className="mt-3 md:mt-0 ">
            <h1 className="mt-4 text-2xl font-bold text-cyan-400">Personal Info</h1>
    
            <p className="mt-1 text-xs text-gray-400 flex justify-between font-bold ">Full Name : <span className="text-gray-400"> Oday Kaarshe</span></p>
            <p className="mt-1 text-xs text-gray-400 flex justify-between font-bold ">Age:<span className="text-gray-400"> 22 Years</span></p>
            <p className="mt-1 text-xs text-gray-400 flex justify-between font-bold gap-5 ">Email  <span className="text-gray-400">odaykaarshe@gmail.com</span></p>
            <p className="mt-1 text-xs text-gray-400 flex justify-between font-bold ">Phone : <span className="text-gray-400">+252611011973</span></p>
            <p className="mt-1 text-xs text-gray-400 flex justify-between font-bold ">Languages : <span className="text-gray-400">English, Somali</span></p>
            <p className="mt-1 text-xs text-gray-400 flex justify-between font-bold ">Freelance : <span className="text-gray-400">Available</span></p>
            <p className="mt-1 text-xs text-gray-400 font-bold  flex justify-between ">Address : <span className="text-gray-400">madino</span></p>
            <p className="mt-1 text-xs text-gray-400 flex justify-between font-bold">From: <span className="text-gray-400">Mogadishu, Somalia</span></p>
            
          </div> 
      </div>
      <div data-aos="fade-up"  className="bg-slate-800/50 rounded-2xl my-10 ">
        <h1 className="text-gray-400 text-center  text-2xl py-5">Client Satisfaction Metrics</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5">
          <div  className="text-center  rounded-lg p-3">
            <h2 className="text-cyan-400 font-bold text-4xl">100%</h2>
            <p className="text-gray-400">Client Satisfaction</p>
          </div>
          <div  className="text-center  rounded-lg p-3">
            <h2 className="text-cyan-400 font-bold text-4xl">100%</h2>
            <p className="text-gray-400">Project Delivered</p>
          </div>
          <div  className="text-center  rounded-lg p-3">
            <h2 className="text-cyan-400 font-bold text-4xl">24/7</h2>
            <p className="text-gray-400">Hours Support</p>
          </div>
          <div  className="text-center  rounded-lg p-3">
            <h2 className="text-cyan-400 font-bold text-4xl">100%</h2>
            <p className="text-gray-400">Client Retention</p>
          </div>
        </div>
      </div>
       
</div>
    
  );
}
