import React from 'react';
import { motion } from 'motion/react';
import { getWhatsAppUrl } from '../data/catalog';
import { MessageCircle } from 'lucide-react';

const bannerContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const bannerItemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export const ConciergeBanner: React.FC = () => {
  return (
    <section id="atendimento" className="py-14 sm:py-24 px-4 sm:px-6 lg:px-12 bg-[#FBF9F5] text-center border-t border-[#EAE7DF] overflow-hidden">
      <motion.div
        variants={bannerContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="max-w-2xl mx-auto space-y-5 sm:space-y-6"
      >
        <motion.span
          variants={bannerItemVariants}
          className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#6E6D68] inline-block"
        >
          Atendimento Personalizado
        </motion.span>
        <motion.h2
          variants={bannerItemVariants}
          className="font-display text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1C1A]"
        >
          Fale diretamente com nossa equipe de vendas
        </motion.h2>
        <motion.p
          variants={bannerItemVariants}
          className="text-[#575651] text-xs sm:text-base leading-relaxed"
        >
          Tire dúvidas sobre caimento, medidas e opções de frete rápido. Resposta imediata em horário comercial com fotos e vídeos reais das peças no seu tamanho.
        </motion.p>
        <motion.div variants={bannerItemVariants} className="pt-2">
          <a
            id="atendimento-banner-whatsapp-cta"
            className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 bg-[#1C1C1A] text-white rounded-full font-semibold text-xs uppercase tracking-widest hover:bg-[#2B2A27] transition-all shadow-md active:scale-95 group w-full sm:w-auto cursor-pointer"
            href={getWhatsAppUrl('Olá! Gostaria de falar com um vendedor da Essência Store.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>Falar com Vendedor no WhatsApp</span>
            <MessageCircle className="w-4 h-4 ml-1 text-emerald-400 group-hover:scale-110 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
