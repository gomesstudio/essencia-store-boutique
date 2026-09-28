import React from 'react';
import { getWhatsAppUrl } from '../data/catalog';
import { MessageSquare } from 'lucide-react';

export const FloatingConcierge: React.FC = () => {
  return (
    <div id="floating-atendimento-container" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <a
        id="floating-atendimento-pill"
        aria-label="Falar com Atendente via WhatsApp"
        title="Falar com Atendente via WhatsApp"
        className="relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#1C1C1A]/95 backdrop-blur-xs text-white rounded-full shadow-2xl hover:bg-[#2B2A27] transition-all border border-[#383733] hover:scale-110 active:scale-95 group cursor-pointer"
        href={getWhatsAppUrl('Olá! Gostaria de falar com um atendente da Essência Store.')}
        target="_blank"
        rel="noopener noreferrer"
      >
        {/* Active Online Indicator Dot */}
        <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
        </span>
        <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 group-hover:scale-110 transition-transform shrink-0" />
      </a>
    </div>
  );
};
