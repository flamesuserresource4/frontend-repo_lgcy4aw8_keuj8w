export default function Footer() {
  return (
    <footer className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">
            © {new Date().getFullYear()} SmartSchool+. Semua hak cipta dilindungi.
          </p>
          <p className="text-sm text-slate-500">
            “SmartSchool+ bukan sekadar sistem belajar online — ini ruang tumbuh cerdas, tempat teknologi dan pendidikan bertemu dalam harmoni.”
          </p>
        </div>
      </div>
    </footer>
  );
}
