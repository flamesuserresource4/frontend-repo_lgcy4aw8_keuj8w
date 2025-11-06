import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-slate-900 antialiased">
      <Navbar />
      <Hero />
      <Features />

      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-10 shadow-2xl shadow-slate-200/40">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold">Tentang SmartSchool+</h3>
                <p className="mt-3 text-slate-600">
                  Platform sekolah modern yang menyatukan pembelajaran digital, komunikasi,
                  dan manajemen akademik dalam satu tempat. Dibangun dengan pendekatan
                  minimalis elegan, efek glassmorphism, dan bantuan AI yang kontekstual.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-[#9B6BFF]/20 to-[#4A90E2]/20 text-[#4A90E2] border border-[#4A90E2]/30">AI Assistant</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-white/60">Dashboard Guru & Siswa</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-white/60">Notifikasi Real-time</span>
                </div>
              </div>
              <div className="rounded-2xl h-56 sm:h-64 md:h-72 bg-gradient-to-br from-[#9B6BFF]/15 via-[#4A90E2]/15 to-[#FF7A59]/15 border border-white/60" />
            </div>
          </div>
        </div>
      </section>

      <section id="news" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between">
            <h3 className="text-xl font-semibold">Berita & Pengumuman</h3>
            <a href="#" className="text-sm text-[#4A90E2] hover:underline">Lihat semua</a>
          </div>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1,2,3].map((i) => (
              <article key={i} className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl p-5 shadow-xl shadow-slate-200/40">
                <div className="h-28 rounded-xl bg-gradient-to-br from-[#9B6BFF]/20 via-[#4A90E2]/15 to-[#FF7A59]/20" />
                <h4 className="mt-4 font-semibold">Update #{i}: Kegiatan & Event</h4>
                <p className="mt-1 text-sm text-slate-600">Ringkasan singkat informasi terbaru sekolah minggu ini.</p>
                <a href="#" className="mt-3 inline-block text-sm text-[#4A90E2] hover:underline">Baca selengkapnya</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
