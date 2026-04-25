import React from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-32 bg-white dark:bg-[#050505] transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-[4rem] overflow-hidden bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/5 p-12 md:p-24 shadow-sm">
          <div className="absolute -bottom-1/2 -right-1/4 w-[600px] h-[600px] bg-cyan-500/5 dark:bg-cyan-500/10 rounded-full blur-[120px]" />
          
          <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
            <div>
              <h2 className="text-sm uppercase tracking-[0.3em] text-cyan-600 dark:text-cyan-500 font-bold mb-6">{t.contact.subtitle}</h2>
              <h3 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white tracking-tighter mb-8 leading-tight">
                {t.contact.title1} <br />
                <span className="text-gray-400 dark:text-gray-500 italic font-light">{t.contact.title2}</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 font-light max-w-md">
                {t.contact.desc}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all border border-gray-100 dark:border-transparent shadow-sm dark:shadow-none">
                    <Mail size={20} />
                  </div>
                  <span className="text-sm font-medium tracking-wide">hello@adrian.dev</span>
                </div>
                <div className="flex items-center gap-4 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-all border border-gray-100 dark:border-transparent shadow-sm dark:shadow-none">
                    <MapPin size={20} />
                  </div>
                  <span className="text-sm font-medium tracking-wide">{t.contact.location}</span>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-black/40 backdrop-blur-xl border border-gray-100 dark:border-white/5 rounded-[3rem] p-8 md:p-12 shadow-2xl dark:shadow-none">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 ml-1">{t.contact.form.name}</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 ml-1">{t.contact.form.email}</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-gray-400 dark:text-gray-500 ml-1">{t.contact.form.message}</label>
                  <textarea 
                    rows={4}
                    placeholder="..."
                    className="w-full px-6 py-4 bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-2xl text-gray-900 dark:text-white placeholder:text-gray-300 dark:placeholder:text-gray-600 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                  />
                </div>
                <button className="w-full py-5 bg-gray-900 dark:bg-white text-white dark:text-black font-bold rounded-2xl hover:bg-cyan-500 dark:hover:bg-cyan-400 transition-all duration-300 flex items-center justify-center gap-3 group">
                  {t.contact.form.send} <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
