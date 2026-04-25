import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Layers, Code2, Sparkle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../lib/utils';

const Skills = () => {
  const { t } = useLanguage();
  
  const skills = [
    { name: 'React / Next.js', icon: <Layers size={20} />, level: '95%', color: 'from-cyan-400 to-blue-500' },
    { name: 'Tailwind CSS', icon: <Code2 size={20} />, level: '90%', color: 'from-blue-400 to-indigo-500' },
    { name: 'JavaScript / TS', icon: <Cpu size={20} />, level: '85%', color: 'from-yellow-400 to-orange-500' },
    { name: 'Framer Motion', icon: <Sparkle size={20} />, level: '80%', color: 'from-purple-400 to-pink-500' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="skills" className="py-32 bg-white dark:bg-[#050505] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <h2 className="text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-500 font-bold mb-4">{t.skills.subtitle}</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white tracking-tighter">
              {t.skills.title}
            </h3>
          </div>
          <div className="text-gray-500 text-sm font-light max-w-xs">
            {t.skills.desc}
          </div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
              className="p-8 border border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-white/[0.02] rounded-[2.5rem] hover:bg-white dark:hover:bg-white/[0.05] transition-all duration-300 shadow-sm hover:shadow-xl dark:shadow-none group relative overflow-hidden"
            >
              {/* Animated Background Pulse */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-transparent group-hover:from-cyan-500/[0.03] transition-all duration-500" />
              
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 shadow-sm dark:shadow-none flex items-center justify-center text-cyan-600 dark:text-cyan-400 mb-8 group-hover:rotate-6 transition-transform relative z-10">
                {skill.icon}
              </div>
              
              <h4 className="text-gray-900 dark:text-white font-bold text-lg mb-4 relative z-10">{skill.name}</h4>
              
              <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-gray-400 dark:text-gray-500 font-bold mb-4 relative z-10">
                <span>{t.skills.proficiency}</span>
                <span className="text-cyan-600 dark:text-cyan-400">{skill.level}</span>
              </div>
              
              <div className="h-1.5 w-full bg-gray-200 dark:bg-white/5 rounded-full overflow-hidden relative z-10">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: skill.level }}
                  transition={{ duration: 1.5, delay: 0.5, ease: "circOut" }}
                  className={cn("h-full bg-gradient-to-r", skill.color)}
                />
              </div>

              {/* Decoration */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Sparkle size={12} className="text-cyan-400" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
