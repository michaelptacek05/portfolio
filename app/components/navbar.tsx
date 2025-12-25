export default function Navbar() {
  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="flex items-center gap-6 bg-white/10 backdrop-blur-lg border border-white/10 px-8 py-3 rounded-full shadow-2xl">
        <a href="#" className="text-sm font-medium hover:text-gray-400 transition">Home</a>
        <a href="#" className="text-sm font-medium hover:text-gray-400 transition">About me</a>
        <a href="#" className="text-sm font-medium hover:text-gray-400 transition">Services</a>
        <a href="#" className="text-sm font-medium hover:text-gray-400 transition">My work</a>
        <a href="#" className="text-sm font-medium hover:text-gray-400 transition">Testimonials</a>
      </div>
      
      {/* Pravá část s tlačítkem (mimo plovoucí menu pro čistší vzhled na desktopu) */}
      <div className="absolute right-10 top-2 hidden md:block">
        <button className="flex items-center gap-2 border border-white/20 px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition duration-300">
          Connect <span className="text-xs">↗</span>
        </button>
      </div>
    </nav>
  );
}