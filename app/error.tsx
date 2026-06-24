'use client';

import Link from 'next/link';
import { useEffect } from 'react';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 hero-pattern" />
      <div className="absolute -top-20 -start-20 w-[420px] h-[420px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(220,38,38,0.16) 0%, transparent 65%)' }} />

      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="text-red-500 font-black text-9xl mb-6">500</div>
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Something Went Wrong</h1>
        <p className="text-slate-300 text-lg mb-6 max-w-sm mx-auto leading-relaxed">
          We encountered an unexpected error. Our team has been notified and is working to fix it.
        </p>

        {process.env.NODE_ENV === 'development' && error.message && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-8 text-left">
            <p className="text-red-400 text-sm font-mono break-words">
              {error.message}
            </p>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="btn-primary px-8 py-3 justify-center"
          >
            Try Again
          </button>
          <Link href="/" className="btn-outline-white px-8 py-3 justify-center">
            Back to Home
          </Link>
        </div>

        <div className="mt-12 pt-12 border-t border-white/10">
          <p className="text-slate-400 text-sm mb-4">Need help?</p>
          <Link href="/contact" className="text-electric-400 hover:text-electric-300 transition-colors">
            Contact our support team →
          </Link>
        </div>
      </div>
    </div>
  );
}
