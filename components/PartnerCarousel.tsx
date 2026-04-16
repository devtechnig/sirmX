'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const partners = [
  { name: 'CBN', logo: '/partners/CBN.png' },
  { name: 'EFCC', logo: '/partners/EFCC.png' },
  { name: 'FIRS', logo: '/partners/FIRS.png' },
  { name: 'NAFDAC', logo: '/partners/NAFDAC.png' },
  { name: 'NCC', logo: '/partners/NCC.png' },
  { name: 'NERC', logo: '/partners/NERC.png' },
  { name: 'NICN', logo: '/partners/NICN.png' },
  { name: 'NIMC', logo: '/partners/NIMC.png' },
  { name: 'NITDA', logo: '/partners/NITDA.png' },
];

/**
 * Double the list for seamless infinite loop
 */
const allPartners = [...partners, ...partners];

export default function PartnerCarousel() {
  const [isPaused, setIsPaused] = React.useState(false);

  // Double the partners for the first container, then repeat the whole block if needed.
  // Actually, standard way is: one div containing [...partners, ...partners], move by half.
  const displayPartners = [...partners, ...partners];

  return (
    <div className="w-full overflow-hidden py-12 bg-surface-container-low border-y border-outline-variant/5">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-outline">
          Empowering Nigerian Industry Leaders
        </p>
      </div>
      
      <div 
        className="relative flex overflow-hidden whitespace-nowrap"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          className="flex gap-12 md:gap-24 items-center pr-12 md:pr-24"
          initial={{ x: "0%" }}
          animate={{
            x: isPaused ? undefined : ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          style={{ width: "fit-content" }}
        >
          {displayPartners.map((partner, index) => (
            <div key={`${partner.name}-${index}`} className="flex-shrink-0">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={70}
                className="h-10 md:h-14 w-auto object-contain grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
