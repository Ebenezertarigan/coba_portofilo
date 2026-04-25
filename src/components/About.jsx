import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 bg-gray-50 dark:bg-zinc-950/30 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden border border-gray-200 dark:border-white/5 bg-white dark:bg-white/5 p-4">
              <div className="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center">
                <span className="text-gray-400 dark:text-gray-500 text-sm italic font-light tracking-widest">Image Placeholder</span>
              </div>
            </div>
            <div className="absolute -bottom-10 -right-10 p-10 bg-white/80 dark:bg-white/5 backdrop-blur-2xl border border-gray-200 dark:border-white/10 rounded-[2.5rem] hidden md:block shadow-xl dark:shadow-none">
              <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">05+</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-bold leading-relaxed">{t.about.exp}</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-500 font-bold mb-6">{t.about.subtitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tighter mb-8 leading-tight">
              {t.about.title.split('clean, functional')[0]} <br />
              <span className="text-gray-400 dark:text-gray-500 italic font-light">clean, functional</span> {t.about.title.split('clean, functional')[1]}
            </h3>
            <div className="space-y-6 text-gray-600 dark:text-gray-400 font-light text-lg leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
            
            <div className="mt-12 flex gap-12">
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">20+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{t.about.projects}</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">15+</div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{t.about.clients}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
