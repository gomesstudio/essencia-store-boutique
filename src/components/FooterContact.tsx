import React from 'react';
import { motion } from 'motion/react';
import { getWhatsAppUrl } from '../data/catalog';
import { MessageSquare, Phone, Mail, Sparkles, Instagram, MapPin, ArrowUpRight } from 'lucide-react';

const PinterestIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.171-2.911 1.023 0 1.516.769 1.516 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12.004-5.367 12.004-11.998C24.021 5.367 18.644 0 12.017 0z" />
  </svg>
);

const columnStaggerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04
    }
  }
};

const fadeUpItemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export const FooterContact: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#191815] text-[#EAE7DF] border-t border-[#2B2A27] overflow-hidden scroll-mt-12">
      {/* Contact & Boutique Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Brand Context & Value Proposition (5 cols) */}
          <motion.div
            variants={columnStaggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-5 space-y-5"
          >
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#9E9A91]">
                Atendimento Privativo
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-baseline gap-2.5">
                <span className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-white">ESSÊNCIA STORE</span>
                <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-[#9E9A91]">BOUTIQUE</span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
                Atendimento consultivo e personalizado
              </h3>
              <p className="text-[#B5B2AA] text-sm leading-relaxed">
                Nossa equipe de consultoria está à disposição para tirar dúvidas sobre caimento, medidas e envio para todo o Brasil com discrição e agilidade.
              </p>
            </div>

            <div className="pt-2">
              <a
                id="footer-direct-whatsapp-btn"
                href={getWhatsAppUrl('Olá! Gostaria de falar com uma consultora da Essência Store.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs uppercase tracking-widest font-semibold transition-all shadow-md active:scale-[0.99] w-full sm:w-auto"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Falar com Consultora no WhatsApp</span>
              </a>
            </div>

            <div className="p-3.5 rounded-xl bg-[#22211D]/80 border border-[#2B2A27] flex items-center gap-3 text-xs text-[#B5B2AA]">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Resposta ágil de segunda a sábado, das 10h às 19h.</span>
            </div>
          </motion.div>

          {/* Right Column: Direct Channels & Boutique Details (7 cols) */}
          <motion.div
            variants={columnStaggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-7 space-y-3.5"
          >
            {/* WhatsApp Direct Card */}
            <motion.a
              variants={fadeUpItemVariants}
              href={getWhatsAppUrl('Olá! Gostaria de atendimento para a coleção da Essência Store.')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 sm:p-5 rounded-xl bg-[#22211D] hover:bg-[#282723] border border-[#2E2D28] hover:border-[#3E3C36] flex items-center justify-between gap-4 transition-colors group block"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-lg bg-emerald-950/60 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-900/40">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[#9E9A91] text-[10px] uppercase tracking-wider font-semibold">WhatsApp Vendas & Consultoria</p>
                  <p className="text-white font-medium text-sm sm:text-base tracking-wide mt-0.5 truncate">+55 (11) 99876-1480</p>
                  <p className="text-[#A3A097] text-xs mt-0.5">Atendimento rápido com consultora e envio com seguro nacional</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#6E6D68] group-hover:text-white transition-colors shrink-0" />
            </motion.a>

            {/* Email Card */}
            <motion.a
              variants={fadeUpItemVariants}
              href="mailto:atendimento@essenciastore.com.br"
              className="p-4 sm:p-5 rounded-xl bg-[#22211D] hover:bg-[#282723] border border-[#2E2D28] hover:border-[#3E3C36] flex items-center justify-between gap-4 transition-colors group block"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#2B2A27] text-white flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[#9E9A91] text-[10px] uppercase tracking-wider font-semibold">Atendimento Institucional por E-mail</p>
                  <p className="text-white font-medium text-sm sm:text-base tracking-wide mt-0.5 truncate">atendimento@essenciastore.com.br</p>
                  <p className="text-[#A3A097] text-xs mt-0.5">Consultoria de encomendas e parcerias</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-[#6E6D68] group-hover:text-white transition-colors shrink-0" />
            </motion.a>

            {/* Showroom Jardins Address Card */}
            <motion.div
              variants={fadeUpItemVariants}
              className="p-4 sm:p-5 rounded-xl bg-[#22211D] border border-[#2E2D28] flex items-start justify-between gap-4"
            >
              <div className="flex items-start gap-3.5 sm:gap-4 min-w-0 flex-1">
                <div className="w-10 h-10 rounded-lg bg-[#2B2A27] text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[#9E9A91] text-[10px] uppercase tracking-wider font-semibold">Boutique & Showroom Presencial</p>
                  <p className="text-white font-medium text-sm sm:text-base tracking-wide mt-0.5">Alameda Lorena, 1480 — Jardins, São Paulo</p>
                  <p className="text-[#A3A097] text-xs mt-0.5">Segunda a Sábado, das 10h às 19h • Serviço de valet cortesia no local</p>
                </div>
              </div>
            </motion.div>

            {/* Social Channels Row */}
            <motion.div
              variants={fadeUpItemVariants}
              className="p-4 sm:p-5 rounded-xl bg-[#22211D] border border-[#2E2D28] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
            >
              <div>
                <p className="text-[#9E9A91] text-[10px] uppercase tracking-[0.24em] font-semibold">Redes Sociais</p>
                <p className="text-white text-xs mt-0.5">Editoriais, coleções e novidades exclusivas</p>
              </div>

              <div className="flex items-center gap-2">
                <a
                  id="footer-social-instagram"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#2B2A27]/70 hover:bg-[#383733] border border-[#383733] text-[#C8C5BD] hover:text-white transition-all text-xs font-medium group"
                  aria-label="Instagram da Boutique"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C8C5BD] group-hover:text-white transition-colors" />
                  <span className="text-[11px] tracking-wide">Instagram</span>
                </a>

                <a
                  id="footer-social-pinterest"
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#2B2A27]/70 hover:bg-[#383733] border border-[#383733] text-[#C8C5BD] hover:text-white transition-all text-xs font-medium group"
                  aria-label="Pinterest da Boutique"
                >
                  <PinterestIcon className="w-3.5 h-3.5 text-[#C8C5BD] group-hover:text-white transition-colors" />
                  <span className="text-[11px] tracking-wide">Pinterest</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Clean Editorial Footer Subbar */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="border-t border-[#2B2A27] bg-[#141412] text-[#9E9A91] text-xs py-6 px-4 sm:px-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-center text-center">
          <div className="flex flex-wrap items-baseline justify-center gap-2 text-center">
            <span className="font-display font-bold text-sm text-white tracking-tight">ESSÊNCIA STORE</span>
            <span className="text-[11px] text-[#73716B]">© 2026 Essência Store Boutique Ltda. • Alameda Lorena, 1480, Jardins, SP</span>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};



