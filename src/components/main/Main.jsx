import React, { useEffect } from 'react';
import { FaCode, FaPaintBrush, FaMobileAlt, FaDatabase, FaSearch, FaServer } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    icon: <FaCode size={40} className="text-cyan-500" />,
    title: "Web Development",
    desc: "Building modern, responsive, and high-performance websites using HTML, CSS, JavaScript, React, and Node.js.",
    aos: "fade-right",
  },
  {
    icon: <FaPaintBrush size={40} className="text-cyan-500" />,
    title: "UI / UX Design",
    desc: "Creating beautiful and intuitive interfaces with a strong focus on user experience and brand identity.",
    aos: "fade-up",
  },
  {
    icon: <FaMobileAlt size={40} className="text-cyan-500" />,
    title: "Responsive Design",
    desc: "Making sure your website looks perfect on all devices — from large screens to mobile phones.",
    aos: "fade-left",
  },
  {
    icon: <FaDatabase size={40} className="text-cyan-500" />,
    title: "Database Management",
    desc: "Designing and managing efficient databases using MongoDB, MySQL, and other modern systems.",
    aos: "fade-right",
  },
  {
    icon: <FaSearch size={40} className="text-cyan-500" />,
    title: "SEO Optimization",
    desc: "Improving website visibility on search engines through SEO-friendly structure and best practices.",
    aos: "fade-up",
  },
  {
    icon: <FaServer size={40} className="text-cyan-500" />,
    title: "Backend Development",
    desc: "Building scalable and secure backends using Node.js, Express, and RESTful APIs.",
    aos: "fade-left",
  },
];

const Main = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation speed
      once: false,    // animation dib ayuu u celinayaa marka la scroll gareeyo
    });
  }, []);

  return (
    <section id="services" className="text-gray-300 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-cyan-400 mb-4 font-Goldman" data-aos="fade-down">
          My Services
        </h2>
        <p className="text-gray-400 mb-12" data-aos="fade-up">
          I offer a wide range of professional services to help you build, design, and grow your online presence.
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos={service.aos}
              className="bg-slate-900/70 border border-cyan-800/30 rounded-2xl p-8 
                         shadow-lg backdrop-blur-lg hover:border-cyan-500 
                         transform hover:-translate-y-2 hover:shadow-cyan-500/20 
                         transition-all duration-500 ease-in-out group"
            >
              <div className="flex justify-center mb-5 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;
