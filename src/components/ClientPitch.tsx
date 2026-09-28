import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/catalog';

interface ClientPitchProps {
  onScrollToProducts: () => void;
}

const pitchGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05
    }
  }
};

const pitchCardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export const ClientPitch: React.FC<ClientPitchProps> = ({ onScrollToProducts }) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-[#F3EFEA] border-y border-[#EAE7DF] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Banner Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 rounded-full bg-white border border-[#EAE7DF] shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#1C1C1A]">
              Vantagem Comercial para Lojas Físicas & Boutiques
            </span>
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1C1C1A] tracking-tight">
            Por Que Este Formato Vende Mais Que um E-commerce Comum
          </h2>
          <p className="text-[#575651] text-xs sm:text-sm mt-2 leading-relaxed">
            Eliminamos os 4 principais motivos de perda de venda no varejo de moda e produtos selecionados.
          </p>
        </motion.div>

        {/* 4 Pillars comparison with staggered fade-in */}
        <motion.div
          variants={pitchGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          <motion.div
            variants={pitchCardVariants}
            className="bg-[#FBF9F5] p-6 rounded-2xl border border-[#EAE7DF] shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="w-10 h-10 rounded-xl bg-[#1C1C1A] text-white flex items-center justify-center font-bold text-xs">
                01
              </span>
              <h3 className="font-display font-bold text-base text-[#1C1C1A]">
                Atendimento Imediato no WhatsApp
              </h3>
              <p className="text-xs text-[#575651] leading-relaxed">
                Em vez de obrigar o cliente a preencher formulário de checkout longo, ele clica e conversa com seu vendedor já com a foto, preço e tamanho do item.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EAE7DF] text-[11px] font-semibold text-emerald-800 flex items-center gap-1.5">
              <span>+68% de conversão de leads</span>
            </div>
          </motion.div>

          <motion.div
            variants={pitchCardVariants}
            className="bg-[#FBF9F5] p-6 rounded-2xl border border-[#EAE7DF] shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="w-10 h-10 rounded-xl bg-[#1C1C1A] text-white flex items-center justify-center font-bold text-xs">
                02
              </span>
              <h3 className="font-display font-bold text-base text-[#1C1C1A]">
                Tira-Dúvidas de Medidas & Caimento
              </h3>
              <p className="text-xs text-[#575651] leading-relaxed">
                A maior causa de desistência em roupas e sapatos é a dúvida de caimento. Aqui seu atendente envia vídeo ao vivo do produto e tabela de medidas na hora.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EAE7DF] text-[11px] font-semibold text-emerald-800 flex items-center gap-1.5">
              <span>Devoluções caem para quase zero</span>
            </div>
          </motion.div>

          <motion.div
            variants={pitchCardVariants}
            className="bg-[#FBF9F5] p-6 rounded-2xl border border-[#EAE7DF] shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="w-10 h-10 rounded-xl bg-[#1C1C1A] text-white flex items-center justify-center font-bold text-xs">
                03
              </span>
              <h3 className="font-display font-bold text-base text-[#1C1C1A]">
                Agendamento Presencial / Showroom
              </h3>
              <p className="text-xs text-[#575651] leading-relaxed">
                Integração perfeita entre o digital e sua loja física: clientes da sua cidade agendam provador reservado e retiram compras sem pagar frete.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EAE7DF] text-[11px] font-semibold text-emerald-800 flex items-center gap-1.5">
              <span>Aumento de fluxo na loja física</span>
            </div>
          </motion.div>

          <motion.div
            variants={pitchCardVariants}
            className="bg-[#FBF9F5] p-6 rounded-2xl border border-[#EAE7DF] shadow-xs flex flex-col justify-between"
          >
            <div className="space-y-3">
              <span className="w-10 h-10 rounded-xl bg-[#1C1C1A] text-white flex items-center justify-center font-bold text-xs">
                04
              </span>
              <h3 className="font-display font-bold text-base text-[#1C1C1A]">
                Percepção de Valor & Alto Ticket
              </h3>
              <p className="text-xs text-[#575651] leading-relaxed">
                Design editorial limpo, fotografia em destaque e velocidade em 0.5s geram credibilidade instantânea para cobrar preços premium com margem saudável.
              </p>
            </div>
            <div className="pt-4 mt-4 border-t border-[#EAE7DF] text-[11px] font-semibold text-emerald-800 flex items-center gap-1.5">
              <span>Ticket médio 2.4x superior</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Live CTA for prospective store owners */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#1C1B18] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl"
        >
          <div className="space-y-1.5 text-center sm:text-left">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-emerald-400">
              Personalizável Para Qualquer Nicho
            </p>
            <h3 className="font-display text-xl sm:text-2xl font-bold">
              Quer ver como ficaria com as peças, fotos e cores da sua marca?
            </h3>
            <p className="text-xs sm:text-sm text-[#C8C5BD] max-w-xl leading-relaxed">
              Adaptamos esse catálogo interativo com seu logotipo, produtos reais, cálculo de frete ou link direto com o WhatsApp da sua equipe comercial.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl('Olá! Gostaria de conversar sobre criar um site nesse modelo de alta conversão para a minha loja.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs font-bold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-2 shadow-md active:scale-95 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Solicitar Demonstração</span>
            </a>
            <button
              type="button"
              onClick={onScrollToProducts}
              className="w-full sm:w-auto px-6 py-3.5 bg-[#2B2A27] hover:bg-[#383733] text-[#EAE7DF] hover:text-white rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap"
            >
              Testar Catálogo
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
