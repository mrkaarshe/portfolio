import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
  const [animate, setAnimate] = useState(false);

  const skills = [
    { name: "HTML", pct: 100 },
    { name: "CSS", pct: 97 },
    { name: "Tailwind CSS", pct: 99 },
    { name: "JavaScript", pct: 80 },
    { name: "React", pct: 95 },
    { name: "Node.js", pct: 90 },
    { name: "MySQL", pct: 85 },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000, once: false });

    const handleScroll = () => {
      const section = document.getElementById("skills-section");
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setAnimate(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="skills-section"
      data-aos="fade-up"
      className="max-w-7xl mx-auto px-6 py-16 text-gray-300"
    >
      <h2 className="font-semibold text-cyan-400 font-Goldman text-center text-4xl mb-2">
        My Skills
      </h2>
      <p className="text-gray-400 text-center mb-10">
        (Most skills show strong proficiency — bars fill up as you scroll)
      </p>

      <div className="grid md:grid-cols-2 gap-10">
        {skills.map((s, index) => (
          <div key={index}>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-gray-400">{s.name}</span>
              <span className="text-sm text-slate-400">{s.pct}%</span>
            </div>

            <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden border border-slate-700">
              <div
                className="h-full  bg-cyan-500  rounded-full shadow-cyan-400/30 shadow-lg transition-all duration-[1200ms] ease-out"
                style={{
                  width: animate ? `${s.pct}%` : "0%",
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
