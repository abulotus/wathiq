'use client';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function WathiqLogo({ variant = 'dark', size = 'md', showText = true }: LogoProps) {
  const sizes = { sm: 28, md: 36, lg: 48 };
  const iconSize = sizes[size];
  const textColor = variant === 'light' ? '#FFFFFF' : '#071130';

  return (
    <div className="flex items-center gap-3">
      {/* Icon Mark */}
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M24 2L44 13.5V34.5L24 46L4 34.5V13.5L24 2Z"
          fill="url(#logoGradient)"
        />
        <path
          d="M24 10L36 16V27C36 33 30 38 24 40C18 38 12 33 12 27V16L24 10Z"
          fill="rgba(255,255,255,0.15)"
        />
        <path
          d="M17 20L20 30L24 23L28 30L31 20"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="33" r="2" fill="url(#tealGradient)" />
        <defs>
          <linearGradient id="logoGradient" x1="4" y1="2" x2="44" y2="46" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="50%" stopColor="#2563EB" />
            <stop offset="100%" stopColor="#0891B2" />
          </linearGradient>
          <linearGradient id="tealGradient" x1="0" y1="0" x2="1" y2="1" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor="#2DD4BF" />
            <stop offset="100%" stopColor="#14B8A6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wordmark */}
      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className="font-bold tracking-tight"
            style={{
              color: textColor,
              fontSize: size === 'sm' ? '16px' : size === 'md' ? '20px' : '26px',
              fontFamily: "'Inter', sans-serif",
              letterSpacing: '-0.02em',
            }}
          >
            WATHIQ
          </span>
        </div>
      )}
    </div>
  );
}
