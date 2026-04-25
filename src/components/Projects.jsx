import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Projects = () => {
  const { t } = useLanguage();
  
  const projects = [
    {
      title: "Neon Finance Dashboard",
      desc: "A futuristic financial tracking system with real-time analytics and dark-themed UI.",
      image: "/images/project_1_preview_1777075826168.png",
      tags: ["React", "D3.js", "Tailwind"],
      link: "#"
    },
    {
      title: "Eco-Connect Platform",
      desc: "Sustainability focused mobile landing page with smooth scroll animations and 3D assets.",
      image: "/images/project_2_preview_1777075844315.png",
      tags: ["Next.js", "Three.js", "GSAP"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-32 bg-white dark:bg-[#050505] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-500 font-bold mb-4">{t.projects.subtitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tighter">
              {t.projects.title.split('Projects')[0]} <span className="text-gray-400 dark:text-gray-500 italic font-light">Projects.</span>
            </h3>
          </div>
          <button className="group flex items-center gap-3 text-xs uppercase tracking-widest font-bold text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
            {t.projects.viewAll} <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden mb-8 border border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-zinc-900 shadow-sm group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors duration-500" />
                
                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-1.5 bg-white/80 dark:bg-black/60 backdrop-blur-md rounded-full text-[10px] uppercase tracking-widest text-gray-900 dark:text-white font-bold border border-gray-200 dark:border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="p-5 bg-gray-900 dark:bg-white text-white dark:text-black rounded-2xl hover:bg-cyan-500 dark:hover:bg-cyan-400 transition-colors shadow-2xl"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light text-lg">
                {project.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
