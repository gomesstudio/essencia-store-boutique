import React from 'react';
import { motion } from 'motion/react';
import { PRINCIPLES } from '../data/catalog';

const headerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04
    }
  }
};

const headerItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

const principlesContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15
    }
  }
};

const principleCardVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export const Principles: React.FC = () => {
  return (
    <section id="principios" className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 bg-[#FBF9F5] overflow-hidden scroll-mt-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={headerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="max-w-xl mb-12 sm:mb-16"
        >
          <motion.span
            variants={headerItemVariants}
            className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6E6D68] block"
          >
            Princípios
          </motion.span>
          <motion.h2
            variants={headerItemVariants}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1C1C1A] mt-1.5"
          >
            A experiência Essência Store
          </motion.h2>
          <motion.p
            variants={headerItemVariants}
            className="text-[#575651] text-sm mt-2 leading-relaxed"
          >
            Unimos o conforto da compra online à elegância das boutiques: tecidos de alta alfaiataria, personal stylist dedicado e ajustes no ateliê.
          </motion.p>
        </motion.div>

        <motion.div
          variants={principlesContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
        >
          {PRINCIPLES.map((pillar) => (
            <motion.div
              id={`principle-card-${pillar.id}`}
              key={pillar.id}
              variants={principleCardVariants}
              className="border-t-2 border-[#1C1C1A] pt-6 pb-5 px-3 sm:px-4 rounded-b-xl group hover:bg-[#F3EFEA]/60 transition-colors flex flex-col"
            >
              <span className="text-xs font-mono font-bold text-[#6E6D68] group-hover:text-[#1C1C1A] mb-2.5 block tracking-widest">
                {pillar.id}
              </span>
              <h3 className="font-display font-semibold text-base text-[#1C1C1A] mb-2 tracking-tight leading-snug">
                {pillar.title}
              </h3>
              <p className="text-xs text-[#575651] leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
