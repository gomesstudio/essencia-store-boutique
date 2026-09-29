import React from 'react';
import { motion } from 'motion/react';
import { SHOWROOM_IMAGE } from '../data/catalog';
import { MapPin, Clock, Calendar, Navigation } from 'lucide-react';

interface ShowroomProps {
  onScheduleVisit: () => void;
}

const showroomContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.05
    }
  }
};

const showroomItemVariants = {
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

export const Showroom: React.FC<ShowroomProps> = ({ onScheduleVisit }) => {
  return (
    <motion.section
      id="showroom"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px', amount: 0.12 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      className="py-20 lg:py-28 px-4 sm:px-6 lg:px-12 bg-[#121210] text-[#EAE7DF] overflow-hidden scroll-mt-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Info Column */}
        <motion.div
          variants={showroomContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="lg:col-span-6 space-y-6"
        >
          <motion.div variants={showroomItemVariants} className="inline-flex items-center gap-2">
            <span className="w-2 h-0.5 bg-[#9E9A91]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9E9A91]">
              Espaço Presencial
            </span>
          </motion.div>

          <motion.h2
            variants={showroomItemVariants}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight"
          >
            Visite nossa loja física
          </motion.h2>

          <motion.p
            variants={showroomItemVariants}
            className="text-[#C8C5BD] text-sm sm:text-base leading-relaxed max-w-lg"
          >
            Para quem valoriza o toque de tecidos nobres, caimento sob medida e a atmosfera de um ateliê boutique. Desfrute de atendimento com hora marcada, consultoria de imagem individualizada, lounge com café e retirada expressa.
          </motion.p>

          <motion.div
            variants={showroomItemVariants}
            className="pt-2 space-y-3.5 text-xs sm:text-sm text-[#C8C5BD] border-y border-[#2B2A27] py-5"
          >
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <p>
                <strong className="text-white font-medium">Endereço: </strong>
                Alameda Lorena, 1480 — Jardins, São Paulo / SP (Valet cortesia)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-white shrink-0 mt-0.5" />
              <p>
                <strong className="text-white font-medium">Horário: </strong>
                Segunda a Sexta: 10h às 19h | Sábados: 10h às 18h
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={showroomItemVariants}
            className="pt-3 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6"
          >
            <a
              id="google-maps-btn"
              className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs uppercase tracking-wider font-semibold text-white underline underline-offset-4 hover:text-[#C8C5BD] transition-colors py-1.5"
              href="https://maps.google.com/?q=Alameda+Lorena+1480+Jardins+Sao+Paulo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Ver no Google Maps</span>
            </a>

            <span className="text-[#6E6D68] hidden sm:inline">•</span>

            <button
              id="schedule-showroom-btn"
              type="button"
              onClick={onScheduleVisit}
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-white text-[#121210] text-xs uppercase tracking-widest font-semibold hover:bg-[#EAE7DF] transition-all cursor-pointer shadow-sm active:scale-95 w-full sm:w-auto"
            >
              <Calendar className="w-3.5 h-3.5 text-[#121210]" />
              <span>Agendar Visita na Loja</span>
            </button>
          </motion.div>
        </motion.div>

        {/* Visual Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 22 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.75, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6"
        >
          <div className="relative group">
            <div className="aspect-[16/11] rounded-2xl overflow-hidden bg-[#2B2A27] border border-[#2B2A27] shadow-xl">
              <img
                src={SHOWROOM_IMAGE}
                alt="Loja Física Essência Store em São Paulo"
                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-103 transition-all duration-700"
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute bottom-2.5 right-2.5 sm:-bottom-4 sm:-right-4 bg-[#1C1B18]/95 backdrop-blur-xs border border-[#2B2A27] px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-lg text-[10px] sm:text-[11px] text-[#C8C5BD] shadow-lg max-w-[92%]">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block mr-2 animate-pulse"></span>
              Atendimento com hora marcada ou visita espontânea
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};
