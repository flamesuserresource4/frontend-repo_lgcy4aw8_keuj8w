import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[80vh] grid place-items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/50 to-white/90" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/60 px-3 py-1 text-xs text-slate-600 shadow-sm">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-[#9B6BFF] to-[#4A90E2]" />
          AI Assistant internal siap membantu
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#9B6BFF] via-[#4A90E2] to-[#FF7A59]">
          Belajar Cerdas. Bersama SmartSchool+
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
          Platform terpadu untuk guru, siswa, dan sekolah dengan tampilan elegan, modern, dan bertenaga AI.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#login"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#9B6BFF] to-[#4A90E2] px-5 py-3 text-white font-medium shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition"
          >
            Mulai Sekarang
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#about"
            className="rounded-xl px-5 py-3 font-medium text-slate-700 bg-white/70 border border-white/50 hover:bg-white transition"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </div>
    </section>
  );
}
