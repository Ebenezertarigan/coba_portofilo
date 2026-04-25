import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 transition-colors duration-500 bg-white dark:bg-[#050505]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px]" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 text-[10px] uppercase tracking-[0.3em] font-bold mb-6 bg-cyan-500/5"
          >
            {t.hero.greeting}
          </motion.span>
          <h1 className="text-6xl md:text-8xl font-bold text-gray-900 dark:text-white mb-8 leading-[0.9] tracking-tighter">
            {t.hero.title1} <br />
            <span className="text-gray-400 dark:text-gray-500 italic font-light">{t.hero.title2}</span> <br />
            {t.hero.title3}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-10 max-w-md leading-relaxed font-light">
            {t.hero.desc}
          </p>
          <div className="flex items-center gap-8">
            <button className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-full overflow-hidden transition-all duration-300 hover:pr-12">
              <span className="relative z-10">{t.hero.cta}</span>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
                →
              </div>
            </button>
            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Github size={22} strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <Linkedin size={22} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative lg:h-[600px] flex items-center justify-center"
        >
          <div className="relative w-full max-w-[450px] aspect-[4/5] rounded-[2.5rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 group border border-gray-100 dark:border-white/5">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800" 
              alt="Profile" 
              className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-40" />
          </div>
          <div className="absolute -z-10 w-full h-full border border-gray-200 dark:border-white/5 rounded-[3rem] translate-x-8 translate-y-8" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
