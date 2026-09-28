import React from 'react';
import { motion } from 'motion/react';
import { HERO_IMAGE, getWhatsAppUrl } from '../data/catalog';

interface HeroProps {
  onExploreClick: () => void;
}

const heroContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const heroItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section
      id="destaques"
      className="relative pt-6 sm:pt-14 lg:pt-20 pb-12 sm:pb-24 lg:pb-32 px-4 sm:px-6 lg:px-12 overflow-hidden border-b border-[#EAE7DF]"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* Text Column (7 cols) */}
        <motion.div
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 space-y-5 sm:space-y-8"
        >
          <motion.div variants={heroItemVariants} className="inline-flex items-center gap-2">
            <span className="w-2 h-0.5 bg-[#1C1C1A]"></span>
            <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-[0.24em] sm:tracking-[0.28em] text-[#6E6D68]">
              BOUTIQUE AUTORAL · JARDINS, SÃO PAULO
            </span>
          </motion.div>

          <motion.h1 variants={heroItemVariants} className="font-display text-3xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#1C1C1A] leading-[1.12]">
            <span className="block">Seu estilo.</span>
            <span className="block font-light italic text-[#575651]">Sua essência.</span>
          </motion.h1>

          <motion.p variants={heroItemVariants} className="text-[#575651] text-sm sm:text-lg max-w-xl font-normal leading-relaxed">
            Moda, acessórios e perfumaria selecionados para criar uma experiência única em cada escolha.
          </motion.p>

          <motion.div variants={heroItemVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <a
              id="hero-primary-cta"
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1C1C1A] text-white rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-[#2B2A27] active:scale-95 transition-all text-center shadow-sm flex items-center justify-center gap-2.5 group cursor-pointer"
              href={getWhatsAppUrl('Olá! Gostaria de falar com uma consultora da Essência Store.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>FALAR COM CONSULTORA →</span>
            </a>

            <button
              id="hero-secondary-cta"
              type="button"
              onClick={onExploreClick}
              className="px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-[#C8C5BD] text-[#1C1C1A] rounded-full font-medium text-xs uppercase tracking-widest hover:border-[#1C1C1A] hover:bg-[#F3EFEA] active:scale-95 transition-all text-center cursor-pointer"
            >
              EXPLORAR COLEÇÃO
            </button>
          </motion.div>

          {/* Trust Guarantees */}
          <motion.div variants={heroItemVariants} className="pt-5 sm:pt-8 border-t border-[#EAE7DF] flex flex-wrap items-center gap-x-2.5 sm:gap-x-4 gap-y-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider text-[#6E6D68] font-medium leading-relaxed">
            <span>CURADORIA EXCLUSIVA</span>
            <span className="text-[#A8A49A]">·</span>
            <span>ATENDIMENTO PERSONALIZADO</span>
            <span className="text-[#A8A49A]">·</span>
            <span>ENVIO NACIONAL 24H</span>
            <span className="text-[#A8A49A]">·</span>
            <span>EXPERIÊNCIA BOUTIQUE</span>
          </motion.div>
        </motion.div>

        {/* Visual Showcase (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <div className="relative group max-w-md mx-auto lg:max-w-none">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-[#EAE7DF] shadow-md border border-[#EAE7DF]">
              <img
                src={HERO_IMAGE}
                alt="Boutique Essência Store Showcase Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Floating Glassmorphic Label */}
            <div className="absolute -bottom-3 sm:-bottom-5 left-2 sm:-left-5 right-2 sm:right-auto bg-[#FBF9F5]/95 backdrop-blur-md p-3.5 sm:p-5 rounded-xl border border-[#D8D4C8] shadow-md max-w-xs transition-transform group-hover:-translate-y-1">
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#6E6D68] font-semibold mb-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-stone-900 inline-block"></span>
                Edição Limitada
              </p>
              <p className="text-sm font-display font-semibold text-[#1C1C1A]">
                Coleção Essencial 2026
              </p>
              <p className="text-xs text-[#575651] mt-1 leading-relaxed">
                Consulte disponibilidade com fotos e medidas reais no WhatsApp.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
