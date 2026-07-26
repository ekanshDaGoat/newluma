'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const allFlags = [
  { code: 'us', name: 'USA' },
  { code: 'ca', name: 'Canada' },
  { code: 'mx', name: 'Mexico' },
  { code: 'in', name: 'India' },
  { code: 'pk', name: 'Pakistan' },
  { code: 'gb', name: 'UK' },
  { code: 'ng', name: 'Nigeria' },
  { code: 'au', name: 'Australia' },
  { code: 'nz', name: 'New Zealand' },
  { code: 'kz', name: 'Kazakhstan' },
  { code: 'ru', name: 'Russia' },
  { code: 'br', name: 'Brazil' },
  { code: 'fr', name: 'France' },
  { code: 'es', name: 'Spain' },
  { code: 'id', name: 'Indonesia' },
  { code: 'vn', name: 'Vietnam' },
  { code: 'sg', name: 'Singapore' },
  { code: 'my', name: 'Malaysia' },
  { code: 'eg', name: 'Egypt' },
  { code: 'jp', name: 'Japan' },
  { code: 'ph', name: 'Philippines' },
  { code: 'lk', name: 'Sri Lanka' },
  { code: 'bd', name: 'Bangladesh' },
  { code: 'kr', name: 'South Korea' },
  { code: 'it', name: 'Italy' },
];

export default function MobileCountriesStripes() {
  const flagsPerStrip = 12;
  const strip1 = allFlags.slice(0, flagsPerStrip);
  const strip2 = allFlags.slice(flagsPerStrip);

  const FlagStrip = ({
    flags,
    reverse = false,
  }: {
    flags: typeof allFlags;
    reverse?: boolean;
  }) => (
    <motion.div
      className="flex gap-3 py-4"
      animate={{ x: reverse ? [0, -1000] : [-1000, 0] }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
    >
      {[...flags, ...flags].map((flag, idx) => (
        <div
          key={`${flag.code}-${idx}`}
          className="shrink-0 overflow-hidden rounded-lg"
          style={{ width: 48, height: 32 }}
        >
          <Image
            src={`https://flagcdn.com/w320/${flag.code}.png`}
            alt={flag.name}
            width={48}
            height={32}
            className="h-full w-full object-cover"
          />
        </div>
      ))}
    </motion.div>
  );

  return (
    <div className="w-full space-y-4 py-8">
      <h3 className="text-center text-2xl font-black text-white">
        Impacted 25+ Countries!
      </h3>

      <div className="space-y-2 overflow-hidden">
        <FlagStrip flags={strip1} reverse={false} />
        <FlagStrip flags={strip2} reverse={true} />
      </div>
    </div>
  );
}
