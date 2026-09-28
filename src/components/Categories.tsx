import React from 'react';
import { motion } from 'motion/react';
import { CATEGORIES } from '../data/catalog';
import { ArrowUpRight } from 'lucide-react';

interface CategoriesProps {
  onSelectCategory: (category: string) => void;
}

const headerVariants = {
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

const catContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  }
};

const catItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export const Categories: React.FC<CategoriesProps> = ({ onSelectCategory }) => {
  return (
    <section id="categorias" className="py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-12 bg-[#FBF9F5] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="flex flex-col sm:flex-row items-baseline justify-between mb-10 sm:mb-12 pb-4 border-b border-[#EAE7DF]"
        >
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#6E6D68]">
              Departamentos
            </span>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1C1A] mt-1">
              Curadoria por Categoria
            </h2>
          </div>
          <button
            id="view-all-categories-btn"
            type="button"
            onClick={() => onSelectCategory('Todos')}
            className="text-xs uppercase tracking-wider text-[#6E6D68] hover:text-[#1C1C1A] transition-colors font-medium mt-3 sm:mt-0 flex items-center gap-1 cursor-pointer group"
          >
            <span>Ver todas as seleções</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </motion.div>

        {/* 6 Category Items Grid */}
        <motion.div
          variants={catContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
        >
          {CATEGORIES.map((cat) => (
            <motion.div
              key={cat.id}
              variants={catItemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.28, ease: [0.25, 1, 0.5, 1] }}
            >
              <button
                id={`cat-card-${cat.id}`}
                type="button"
                onClick={() => onSelectCategory(cat.filterValue)}
                className="group text-left block w-full p-2.5 -m-2.5 rounded-2xl focus:outline-none transition-all duration-300 ease-out hover:bg-white/80 hover:shadow-[0_12px_24px_-8px_rgba(28,28,26,0.08)] active:scale-[0.98] cursor-pointer"
              >
                <div className="aspect-[4/5] rounded-xl overflow-hidden bg-[#F3EFEA] mb-3 border border-[#EAE7DF] group-hover:border-[#1C1C1A]/20 transition-all duration-300 relative shadow-2xs group-hover:shadow-md">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:scale-110"
                    loading="lazy"
                    decoding="async"
                    referrerPolicy="no-referrer"
                  />
                  {/* Subtle Elegant Gradient & Floating Pill Icon on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none flex items-end justify-between p-3">
                    <span className="text-[10px] uppercase tracking-widest text-white/90 font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      Explorar
                    </span>
                    <span className="bg-white/95 backdrop-blur-md p-1.5 rounded-full text-[#1C1C1A] shadow-md translate-y-2 group-hover:translate-y-0 transition-transform duration-300 flex items-center justify-center">
                      <ArrowUpRight className="w-3.5 h-3.5 group-hover:rotate-45 transition-transform duration-300" />
                    </span>
                  </div>
                </div>

                <div className="px-0.5">
                  <h3 className="font-display text-sm font-semibold tracking-wide text-[#1C1C1A] group-hover:text-black transition-colors duration-300 leading-snug">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-[#6E6D68] group-hover:text-[#383733] mt-0.5 leading-tight transition-colors duration-300">
                    {cat.subtitle}
                  </p>
                </div>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
