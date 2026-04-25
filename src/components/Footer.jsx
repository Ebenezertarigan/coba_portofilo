import React from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-20 border-t border-gray-100 dark:border-white/5 bg-white dark:bg-black transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold tracking-tighter text-gray-900 dark:text-white mb-4">
              ADRIAN<span className="text-cyan-500">.</span>
            </div>
            <p className="text-gray-500 text-sm font-light max-w-xs leading-relaxed">
              {t.footer.desc}
            </p>
          </div>

          <div className="flex gap-8">
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="#" className="text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Twitter size={20} strokeWidth={1.5} />
            </a>
          </div>

          <div className="text-gray-400 dark:text-gray-500 text-[10px] uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} ADRIAN. {t.footer.rights}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
