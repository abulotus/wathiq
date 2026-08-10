/**
 * Shared phone bezel used by every mobile-app mockup on the site, so they
 * all read as the same device/app instead of each screen inventing its own
 * frame style.
 */
export default function PhoneFrame({
  children,
  size = 'md',
}: {
  children: React.ReactNode;
  size?: 'sm' | 'md';
}) {
  const width = size === 'sm' ? 'w-[220px] sm:w-[240px]' : 'w-[260px] sm:w-[290px]';
  const radius = size === 'sm' ? 'rounded-[2.25rem]' : 'rounded-[2.75rem]';
  const pad = size === 'sm' ? 'p-2.5' : 'p-3';
  const notchTop = size === 'sm' ? 'top-2.5' : 'top-3';
  const notchSize = size === 'sm' ? 'h-5 w-20' : 'h-6 w-24';
  const screenRadius = size === 'sm' ? 'rounded-[1.7rem]' : 'rounded-[2rem]';

  return (
    <div className={`relative flex-shrink-0 ${width}`}>
      <div className={`relative ${radius} bg-navy-950 ${pad} shadow-[0_24px_60px_-16px_rgba(4,9,28,0.55)] ring-1 ring-white/10`}>
        <div className={`absolute left-1/2 z-20 -translate-x-1/2 rounded-full bg-navy-950 ${notchTop} ${notchSize}`} />
        <div className={`relative aspect-[9/19.5] w-full overflow-hidden ${screenRadius} bg-[#0B0F1A]`}>
          {children}
        </div>
      </div>
    </div>
  );
}
