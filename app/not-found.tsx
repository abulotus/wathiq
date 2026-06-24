import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute -top-20 -start-20 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.16) 0%, transparent 65%)' }} />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="text-electric-500 font-black text-9xl mb-6 animate-bounce">404</div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Page Not Found</h1>
        <p className="text-slate-300 text-lg mb-10 max-w-sm mx-auto leading-relaxed">
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/" className="btn-primary px-8 py-3 justify-center">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-outline-white px-8 py-3 justify-center">
            Contact Support
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mt-16 pt-12 border-t border-white/10">
          <a href="/" className="group">
            <div className="text-slate-400 group-hover:text-electric-400 transition-colors mb-2">Solutions</div>
            <div className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors">/solutions</div>
          </a>
          <a href="/contact" className="group">
            <div className="text-slate-400 group-hover:text-electric-400 transition-colors mb-2">Contact</div>
            <div className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors">/contact</div>
          </a>
          <a href="/security" className="group">
            <div className="text-slate-400 group-hover:text-electric-400 transition-colors mb-2">Security</div>
            <div className="text-slate-500 text-sm group-hover:text-slate-300 transition-colors">/security</div>
          </a>
        </div>
      </div>
    </div>
  );
}
