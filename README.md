# Premium Modular Portfolio

Sebuah portofolio web modern, minimalis, dan elegan yang dibangun dengan **React**, **Vite**, dan **Tailwind CSS v4**. Proyek ini mendukung fitur **Dark/Light Mode** serta **Multi-Bahasa (English & Indonesia)**.

## 🚀 Persiapan Lokal

Untuk menjalankan proyek ini di komputer lokal Anda, pastikan Anda telah menginstal perangkat lunak berikut:

1.  **Node.js**: Versi **18.0.0** atau yang lebih baru. [Unduh di sini](https://nodejs.org/).
2.  **Git**: Untuk melakukan cloning repositori. [Unduh di sini](https://git-scm.com/).
3.  **Editor Kode**: Disarankan menggunakan **VS Code**.

## 🛠️ Langkah-langkah Instalasi

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek:

### 1. Clone Repositori
Buka terminal atau command prompt, lalu jalankan perintah:
```bash
git clone https://github.com/SyahwanNM/tmplte-portofolio.git
```

### 2. Masuk ke Direktori Proyek
```bash
cd tmplte-portofolio
```

### 3. Instal Dependensi
Gunakan npm untuk menginstal semua pustaka yang diperlukan (React, Framer Motion, Lucide React, dll):
```bash
npm install
```

### 4. Jalankan Server Pengembangan
Setelah instalasi selesai, jalankan perintah berikut untuk melihat hasilnya di browser:
```bash
npm run dev
```
Buka [http://localhost:5173](http://localhost:5173) (atau port yang tertera di terminal) untuk melihat aplikasi.

## 📦 Teknologi yang Digunakan

-   **Frontend Framework**: [React](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations**: [Framer Motion](https://www.framer.com/motion/)
-   **Icons**: [Lucide React](https://lucide.dev/)

## 📁 Struktur Folder Utama

-   `src/components/`: Berisi semua bagian halaman (Hero, About, Skills, dll).
-   `src/context/`: Logika untuk pengaturan Tema (Dark/Light) dan Bahasa (EN/ID).
-   `src/lib/`: Utilitas bantuan seperti fungsi `cn` (Tailwind Merge).
-   `public/images/`: Folder untuk aset gambar proyek.

## 📝 Catatan Penting
Jika Anda menemui error terkait ikon Lucide saat menjalankan di perangkat baru, pastikan versi `lucide-react` sesuai dengan yang ada di `package.json`. Gunakan `npm install lucide-react@0.460.0` jika diperlukan.

---
Dibuat dengan ❤️ untuk portofolio yang tak terlupakan.
