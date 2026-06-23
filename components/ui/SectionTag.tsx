'use client';

interface SectionTagProps {
  label: string;
  variant?: 'blue' | 'teal' | 'white';
}

export default function SectionTag({ label, variant = 'blue' }: SectionTagProps) {
  const styles = {
    blue: 'text-electric-500 bg-electric-50 border border-electric-100',
    teal: 'text-teal-600 bg-teal-50 border border-teal-100',
    white: 'text-white/90 bg-white/10 border border-white/20 backdrop-blur-sm',
  };

  return (
    <span
      className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${styles[variant]}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${variant === 'white' ? 'bg-teal-400' : variant === 'teal' ? 'bg-teal-500' : 'bg-electric-500'} animate-pulse`} />
      {label}
    </span>
  );
}
