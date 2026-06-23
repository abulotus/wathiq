import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-electric-500 font-black text-8xl mb-4">404</div>
        <h1 className="text-white text-3xl font-bold mb-4">Page Not Found</h1>
        <p className="text-slate-400 mb-8 max-w-sm mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/" className="btn-primary px-8 py-3">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
