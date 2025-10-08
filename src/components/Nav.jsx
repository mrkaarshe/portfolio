import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="relative overflow-x-hidden">
      <nav className="fixed top-1 left-1/2 -translate-x-1/2 z-50 
                    bg-slate-900/60 backdrop-blur-xl rounded-2xl 
                     px-6 py-4 w-[95%] max-w-7xl 
                     flex justify-between items-center 
                     text-white shadow-lg">
        {/* Logo */}
        <div className="logo">
          <h1 className="text-2xl text-cyan-400 font-Goldman tracking-wide">
            KAARSHE
          </h1>
        </div>

        {/* Desktop Links */}
        <div className='hidden lg:block'>
          <ul className="flex  gap-4 text-center text-gray-300 font-Goldman">
          {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative inline-block text-lg transition-colors duration-300 hover:text-cyan-400
                        after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
                        after:w-full after:bg-cyan-400 after:scale-x-0 after:origin-left
                        after:transition-transform after:duration-500 hover:after:scale-x-100"
            >
              {item}
            </a>
          ))}
        </ul>
        </div>
        


        {/* Mobile Menu Button */}
        <button
          onClick={() => setToggle(!toggle)}
          className="block lg:hidden rounded-lg px-3 py-1 text-cyan-400 font-extralight  duration-300"
        >
          {toggle ? (
            <i className="fa-solid fa-xmark text-2xl"></i>
          ) : (
            <i className="fa-solid fa-bars text-2xl"></i>
          )}
        </button>

        {/* Mobile Menu */}
          <div
            className={`absolute right-1 left-0 top-19 bg-slate-900/90 backdrop-blur-xl rounded-xl p-5 w-full  shadow-lg transform transition-all duration-500 ease-in-out border border-cyan-800/40
              ${toggle ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95 pointer-events-none'}
            `}
          >
          <ul className="flex flex-col gap-4 text-center max-w-xs mx-auto text-gray-300 font-Goldman">
            {["Home", "About", "Services", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative inline-block text-lg transition-colors duration-300 hover:text-cyan-400
                          after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px]
                          after:w-full after:bg--400 after:scale-x-0 after:origin-left
                          after:transition-transform after:duration-500 hover:after:scale-x-100"
              >
                {item}
              </a>
            ))}
          </ul>


          </div>

      </nav>
    </div>
  );
};

export default Nav;
