import React, { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
      hire: 'Hire Me'
    },
    hero: {
      greeting: 'Hello, I am',
      title1: 'Digital',
      title2: 'Experience',
      title3: 'Designer',
      desc: 'I build high-end digital solutions with a focus on minimalist design and flawless user interactions.',
      cta: 'Explore Work'
    },
    about: {
      subtitle: 'About Me',
      title: 'Passionate about creating clean, functional code.',
      p1: "I'm a Frontend Developer based in Bali, dedicated to building high-quality web applications. I bridge the gap between design and technology, ensuring every pixel serves a purpose.",
      p2: "My approach is rooted in minimalism and performance. I believe that great design is invisible—it just works, effortlessly guiding the user through a digital journey.",
      exp: 'Years of Experience',
      projects: 'Projects Completed',
      place : 'Medan, North Sumatra, Indonesia',
      clients: 'Happy Clients'
    },
    skills: {
      subtitle: 'Capabilities',
      title: 'Technical tools I use to bring ideas to life.',
      desc: 'Focused on building performant, scalable, and visually stunning web applications.',
      proficiency: 'Proficiency'
    },
    projects: {
      subtitle: 'Selected Work',
      title: 'Featured Projects.',
      viewAll: 'View All Projects'
    },
    contact: {
      subtitle: 'Connect',
      title1: "Let's make something",
      title2: "unforgettable.",
      desc: "I'm always open to new opportunities and creative collaborations. Drop me a line and let's talk.",
      location: 'Based in Bali, Indonesia',
      form: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message'
      }
    },
    footer: {
      desc: 'Designing and developing world-class digital products from Bali to the world.',
      rights: 'All rights reserved.'
    }
  },
  id: {
    nav: {
      home: 'Beranda',
      about: 'Tentang',
      skills: 'Keahlian',
      projects: 'Proyek',
      contact: 'Kontak',
      hire: 'Hubungi Saya'
    },
    hero: {
      greeting: 'Halo, saya',
      title1: 'Desainer',
      title2: 'Pengalaman',
      title3: 'Digital',
      desc: 'Saya membangun solusi digital kelas atas dengan fokus pada desain minimalis dan interaksi pengguna yang sempurna.',
      cta: 'Lihat Karya'
    },
    about: {
      subtitle: 'Tentang Saya',
      title: 'Semangat dalam menciptakan kode yang bersih dan fungsional.',
      p1: "Saya adalah Pengembang Frontend yang berbasis di Bali, berdedikasi untuk membangun aplikasi web berkualitas tinggi. Saya menjembatani kesenjangan antara desain dan teknologi.",
      p2: "Pendekatan saya berakar pada minimalisme dan performa. Saya percaya bahwa desain yang hebat itu tidak terlihat—ia hanya bekerja, membimbing pengguna melalui perjalanan digital tanpa hambatan.",
      exp: 'Tahun Pengalaman',
      projects: 'Proyek Selesai',
      clients: 'Klien Puas'
    },
    skills: {
      subtitle: 'Kemampuan',
      title: 'Alat teknis yang saya gunakan untuk mewujudkan ide.',
      desc: 'Fokus pada membangun aplikasi web yang performan, skalabel, dan menakjubkan secara visual.',
      proficiency: 'Kemahiran'
    },
    projects: {
      subtitle: 'Karya Terpilih',
      title: 'Proyek Unggulan.',
      viewAll: 'Lihat Semua Proyek'
    },
    contact: {
      subtitle: 'Hubungkan',
      title1: "Mari buat sesuatu yang",
      title2: "tak terlupakan.",
      desc: "Saya selalu terbuka untuk peluang baru dan kolaborasi kreatif. Hubungi saya dan mari bicara.",
      location: 'Berbasis di Bali, Indonesia',
      form: {
        name: 'Nama',
        email: 'Email',
        message: 'Pesan',
        send: 'Kirim Pesan'
      }
    },
    footer: {
      desc: 'Merancang dan mengembangkan produk digital kelas dunia dari Bali untuk dunia.',
      rights: 'Hak cipta dilindungi.'
    }
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  const t = translations[lang];

  const toggleLang = () => setLang(lang === 'en' ? 'id' : 'en');

  return (
    <LanguageContext.Provider value={{ lang, t, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
