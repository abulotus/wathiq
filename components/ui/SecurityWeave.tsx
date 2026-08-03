/**
 * Fine engraved-line texture referencing the guilloché patterns used on
 * passports and official documents — the header/footer's signature detail.
 * Purely decorative, kept at very low opacity so it reads as texture, not noise.
 */
export default function SecurityWeave({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        <pattern id="security-weave" width="88" height="44" patternUnits="userSpaceOnUse">
          <path
            d="M-4 22 C 8 4, 18 4, 26 22 S 44 40, 52 22 S 70 4, 78 22 S 92 40, 100 22"
            fill="none"
            stroke="url(#security-weave-stroke)"
            strokeWidth="0.6"
          />
          <path
            d="M-4 8 C 8 -10, 18 -10, 26 8 S 44 26, 52 8 S 70 -10, 78 8 S 92 26, 100 8"
            fill="none"
            stroke="url(#security-weave-stroke)"
            strokeWidth="0.6"
          />
          <path
            d="M-4 36 C 8 18, 18 18, 26 36 S 44 54, 52 36 S 70 18, 78 36 S 92 54, 100 36"
            fill="none"
            stroke="url(#security-weave-stroke)"
            strokeWidth="0.6"
          />
        </pattern>
        <linearGradient id="security-weave-stroke" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
          <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#security-weave)" />
    </svg>
  );
}
