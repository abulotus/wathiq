'use client';

/* Pure CSS animations — no Framer Motion, runs on compositor thread */

const Fingerprint = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <path d="M32 6C17.6 6 6 17.6 6 32" />
    <path d="M32 6c14.4 0 26 11.6 26 26" />
    <path d="M12 44c0-11 9-20 20-20s20 9 20 20" />
    <path d="M18 32a14 14 0 0128 0c0 8-5 14-10 20" />
    <path d="M32 28v22" />
    <path d="M24 36c0-4.4 3.6-8 8-8" />
  </svg>
);

const Hexagon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M32 4L56 18V46L32 60L8 46V18L32 4Z" />
    <path d="M32 16L48 25V43L32 52L16 43V25L32 16Z" />
    <circle cx="32" cy="32" r="4" />
  </svg>
);

const NeuralNet = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3">
    <circle cx="8"  cy="16" r="4" /><circle cx="8"  cy="32" r="4" /><circle cx="8"  cy="48" r="4" />
    <circle cx="32" cy="8"  r="4" /><circle cx="32" cy="28" r="4" /><circle cx="32" cy="48" r="4" />
    <circle cx="56" cy="20" r="4" /><circle cx="56" cy="44" r="4" />
    <line x1="12" y1="16" x2="28" y2="8"  /><line x1="12" y1="16" x2="28" y2="28" />
    <line x1="12" y1="32" x2="28" y2="28" /><line x1="12" y1="32" x2="28" y2="48" />
    <line x1="12" y1="48" x2="28" y2="28" /><line x1="12" y1="48" x2="28" y2="48" />
    <line x1="36" y1="8"  x2="52" y2="20" /><line x1="36" y1="28" x2="52" y2="20" />
    <line x1="36" y1="28" x2="52" y2="44" /><line x1="36" y1="48" x2="52" y2="44" />
  </svg>
);

const ShieldCheck = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
    <path d="M32 4L8 14V32C8 45 18 56 32 60C46 56 56 45 56 32V14L32 4Z" />
    <path d="M20 32l9 9 15-15" />
  </svg>
);

const Lock = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
    <rect x="12" y="28" width="40" height="30" rx="5" />
    <path d="M20 28V22C20 14.3 25.4 8 32 8C38.6 8 44 14.3 44 22V28" />
    <circle cx="32" cy="42" r="4" />
    <line x1="32" y1="46" x2="32" y2="52" />
  </svg>
);

const Circuit = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
    <circle cx="10" cy="10" r="3.5" /><circle cx="54" cy="10" r="3.5" />
    <circle cx="10" cy="54" r="3.5" /><circle cx="54" cy="54" r="3.5" />
    <circle cx="32" cy="32" r="5"   />
    <circle cx="32" cy="10" r="2.5" /><circle cx="10" cy="32" r="2.5" />
    <circle cx="54" cy="32" r="2.5" /><circle cx="32" cy="54" r="2.5" />
    <line x1="13.5" y1="10"   x2="29.5" y2="10"   /><line x1="34.5" y1="10"   x2="50.5" y2="10"   />
    <line x1="10"   y1="13.5" x2="10"   y2="29.5"  /><line x1="10"   y1="34.5" x2="10"   y2="50.5"  />
    <line x1="54"   y1="13.5" x2="54"   y2="29.5"  /><line x1="54"   y1="34.5" x2="54"   y2="50.5"  />
    <line x1="13.5" y1="54"   x2="29.5" y2="54"   /><line x1="34.5" y1="54"   x2="50.5" y2="54"   />
    <line x1="32"   y1="14.5" x2="32"   y2="27"   /><line x1="32"   y1="37"   x2="32"   y2="51.5"  />
    <line x1="14.5" y1="32"   x2="27"   y2="32"   /><line x1="37"   y1="32"   x2="51.5" y2="32"   />
  </svg>
);

const ICON_MAP = {
  fingerprint: Fingerprint,
  hex:         Hexagon,
  neural:      NeuralNet,
  shield:      ShieldCheck,
  lock:        Lock,
  circuit:     Circuit,
} as const;
type IconKey = keyof typeof ICON_MAP;

interface IconSpec {
  icon: IconKey;
  top?: string; bottom?: string; left?: string; right?: string;
  size: number;
  opacity: number;
  delay: number;
  duration: number;
  rotate?: number;
  color?: string;
}

const DARK_PRESET: IconSpec[] = [
  { icon: 'fingerprint', top: '8%',   left: '3%',  size: 72, opacity: 0.055, delay: 0,   duration: 9  },
  { icon: 'hex',         top: '5%',   right: '6%', size: 56, opacity: 0.045, delay: 1.5, duration: 7,  rotate: 15 },
  { icon: 'neural',      top: '45%',  right: '2%', size: 64, opacity: 0.04,  delay: 0.8, duration: 11 },
  { icon: 'lock',        bottom: '8%',left: '5%',  size: 44, opacity: 0.05,  delay: 2,   duration: 8  },
  { icon: 'circuit',     bottom: '5%',right: '8%', size: 52, opacity: 0.04,  delay: 1,   duration: 10, rotate: -10 },
  { icon: 'shield',      top: '25%',  left: '1%',  size: 36, opacity: 0.04,  delay: 3,   duration: 8  },
];

/* Light preset — colored icons at higher opacity so they're actually visible on white */
const LIGHT_PRESET: IconSpec[] = [
  { icon: 'neural',      top: '5%',    left: '2%',   size: 80, opacity: 0.12, delay: 0,   duration: 10, color: '#2563EB' },
  { icon: 'fingerprint', top: '6%',    right: '3%',  size: 68, opacity: 0.10, delay: 1.2, duration: 8,  color: '#0D9488' },
  { icon: 'shield',      bottom: '5%', left: '3%',   size: 60, opacity: 0.10, delay: 0.6, duration: 9,  color: '#7C3AED' },
  { icon: 'hex',         bottom: '4%', right: '4%',  size: 64, opacity: 0.09, delay: 2,   duration: 11, rotate: 20, color: '#2563EB' },
  { icon: 'circuit',     top: '44%',   right: '1%',  size: 52, opacity: 0.09, delay: 1.8, duration: 8,  color: '#0D9488' },
  { icon: 'lock',        top: '38%',   left: '1%',   size: 44, opacity: 0.10, delay: 2.5, duration: 9,  color: '#7C3AED' },
];

export default function TechBackground({ variant = 'dark' }: { variant?: 'dark' | 'light' }) {
  const preset = variant === 'dark' ? DARK_PRESET : LIGHT_PRESET;
  const defaultColor = variant === 'dark' ? 'white' : '#071130';

  return (
    <div className="absolute inset-0 pointer-events-none select-none overflow-hidden" aria-hidden>

      {/* Light variant: soft color blobs in corners */}
      {variant === 'light' && (
        <>
          <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%)' }} />
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(13,148,136,0.06) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-20 -left-16 w-72 h-72 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(124,58,237,0.05) 0%, transparent 70%)' }} />
          <div className="absolute -bottom-16 -right-20 w-56 h-56 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)' }} />
        </>
      )}

      {preset.map((spec, i) => {
        const IconComponent = ICON_MAP[spec.icon];
        return (
          <div
            key={i}
            style={{
              position: 'absolute',
              top:    spec.top,
              bottom: spec.bottom,
              left:   spec.left,
              right:  spec.right,
              width:  spec.size,
              height: spec.size,
              color:  spec.color ?? defaultColor,
              opacity: spec.opacity,
              rotate: spec.rotate ? `${spec.rotate}deg` : undefined,
              animation: `tech-float ${spec.duration}s ease-in-out ${spec.delay}s infinite`,
              willChange: 'transform',
            }}
          >
            <IconComponent />
          </div>
        );
      })}
    </div>
  );
}
