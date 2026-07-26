'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import { motion, useMotionValue, useTransform, animate, MotionValue } from 'framer-motion';

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

const RADIUS = 190;
const FLAG_W = 64;
const FLAG_H = 48;
const ORBIT_DURATION = 60;
const BOX = 520;

function OrbitingFlag({
  flag,
  baseAngle,
  phase,
  delay,
}: {
  flag: { code: string; name: string };
  baseAngle: number;
  phase: MotionValue<number>;
  delay: number;
}) {
  // Position only — rotate is never touched, so the flag can never tilt.
  const x = useTransform(phase, (p) => {
    const rad = ((p + baseAngle) * Math.PI) / 180;
    return Math.sin(rad) * RADIUS - FLAG_W / 2;
  });
  const y = useTransform(phase, (p) => {
    const rad = ((p + baseAngle) * Math.PI) / 180;
    return -Math.cos(rad) * RADIUS - FLAG_H / 2;
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      style={{ position: 'absolute', left: '50%', top: '50%', x, y }}
    >
      <div
        className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-125 hover:shadow-xl"
        style={{ width: FLAG_W, height: FLAG_H }}
      >
        <Image
          src={`https://flagcdn.com/w320/${flag.code}.png`}
          alt={flag.name}
          fill
          className="object-cover"
          priority={false}
        />
      </div>
    </motion.div>
  );
}

export default function CountriesRotator() {
  const angleSlice = 360 / allFlags.length;
  const phase = useMotionValue(0);

  useEffect(() => {
    const controls = animate(phase, 360, {
      duration: ORBIT_DURATION,
      repeat: Infinity,
      ease: 'linear',
    });
    return () => controls.stop();
  }, [phase]);

  return (
    <div className="flex w-full flex-col items-center gap-10">
      <motion.h3
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-2xl font-black leading-tight text-white sm:text-3xl"
        style={{ marginTop: 30 }}
      >
        Impact in 25+ Countries!
      </motion.h3>

      <div
        className="relative mx-auto flex items-center justify-center"
        style={{ width: BOX, height: BOX }}
      >
        {allFlags.map((flag, idx) => (
          <OrbitingFlag
            key={flag.code}
            flag={flag}
            baseAngle={angleSlice * idx}
            phase={phase}
            delay={idx * 0.03}
          />
        ))}

        {/* Center content - fixed, static */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="absolute z-10 flex flex-col items-center justify-center"
        >
          <div className="text-center text-2xl font-black leading-tight sm:text-3xl">
            <p className="text-white">Always</p>
            <p>
              <span className="text-accent">100%</span>{' '}
              <span className="text-white">Free</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
