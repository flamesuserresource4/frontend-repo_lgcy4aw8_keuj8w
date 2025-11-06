import { User, GraduationCap } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60 bg-white/70 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-9 w-9 rounded-2xl bg-gradient-to-br from-[#9B6BFF] to-[#4A90E2] shadow-lg shadow-indigo-500/20" />
          <span className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#9B6BFF] via-[#4A90E2] to-[#FF7A59] group-hover:opacity-90">
            SmartSchool+
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700">
          <a href="#features" className="hover:text-slate-900 transition">Fitur</a>
          <a href="#about" className="hover:text-slate-900 transition">Tentang</a>
          <a href="#news" className="hover:text-slate-900 transition">Berita</a>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#login"
            className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 transition"
            aria-label="Login Siswa"
          >
            <User className="h-4 w-4 text-slate-500 group-hover:text-slate-700" />
            Siswa
          </a>
          <a
            href="#login"
            className="group inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#9B6BFF] to-[#4A90E2] shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 transition"
            aria-label="Login Guru"
          >
            <GraduationCap className="h-4 w-4 text-white" />
            Login Guru
          </a>
        </div>
      </div>
    </header>
  );
}
