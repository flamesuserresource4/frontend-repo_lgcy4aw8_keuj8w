import { BookOpen, FileText, Brain, BellRing, BarChart3, MessageSquare } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Materi & Tugas Interaktif",
    desc: "Upload PDF, video, link, dan file interaktif dengan tampilan kartu yang rapi.",
  },
  {
    icon: Brain,
    title: "AI Assistant",
    desc: "Buat soal, rangkum materi, dan saran belajar personal langsung di platform.",
  },
  { icon: FileText, title: "Penilaian Otomatis", desc: "AI Grader untuk soal objektif cepat dan akurat." },
  {
    icon: BellRing,
    title: "Notifikasi Real-time",
    desc: "Pantau tugas dan nilai terbaru secara instan di semua perangkat.",
  },
  {
    icon: BarChart3,
    title: "Nilai & Progress",
    desc: "Grafik progres dan laporan aktivitas visual untuk sekolah.",
  },
  {
    icon: MessageSquare,
    title: "Chat Belajar",
    desc: "Ruang chat modern seperti ChatGPT untuk diskusi guru-siswa.",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-900">Fitur Utama</h2>
          <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
            Dirancang untuk guru, siswa, dan sekolah dengan UI elegan dan performa tinggi.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-white/60 bg-white/70 backdrop-blur-xl p-5 shadow-xl shadow-slate-200/40 hover:shadow-slate-200/60 transition"
            >
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-br from-[#9B6BFF] to-[#4A90E2] text-white shadow-md shadow-indigo-500/30">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{f.title}</h3>
              <p className="mt-1 text-sm text-slate-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
