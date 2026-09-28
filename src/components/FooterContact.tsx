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
      staggerChildren: 0.09,
      delayChildren: 0.05
    }
  }
};

const fadeUpItemVariants = {
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

export const FooterContact: React.FC = () => {
  return (
    <footer id="contato" className="bg-[#1C1B18] text-[#EAE7DF] border-t border-[#2B2A27] overflow-hidden">
      {/* Contact & Boutique Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Brand & Direct Consultation (6 cols) */}
          <motion.div
            variants={columnStaggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-6 space-y-6"
          >
            <motion.div variants={fadeUpItemVariants} className="flex items-baseline gap-2.5">
              <span className="font-display font-bold text-3xl tracking-tight text-white">ESSÊNCIA STORE</span>
              <span className="text-xs font-semibold tracking-[0.3em] uppercase text-[#9E9A91]">BOUTIQUE</span>
            </motion.div>

            <motion.h3 variants={fadeUpItemVariants} className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-snug">
              Atendimento personalizado & consultoria de estilo
            </motion.h3>

            <motion.p variants={fadeUpItemVariants} className="text-[#C8C5BD] text-sm sm:text-base leading-relaxed max-w-xl text-justify sm:text-left">
              Converse diretamente com nossa consultoria para atendimento privativo, orientações personalizadas sobre medidas, caimento de tecidos ou solicitação de peças exclusivas sob encomenda.
            </motion.p>

            <motion.div variants={fadeUpItemVariants} className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                id="footer-direct-whatsapp-btn"
                href={getWhatsAppUrl('Olá! Gostaria de falar com uma consultora da Essência Store.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs uppercase tracking-widest font-semibold transition-all shadow-md active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Falar com Consultora no WhatsApp</span>
              </a>

              <a
                href="#showroom"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#2B2A27]/70 hover:bg-[#383733] border border-[#383733] text-[#EAE7DF] hover:text-white rounded-xl text-xs uppercase tracking-wider font-medium transition-all"
              >
                <MapPin className="w-3.5 h-3.5 text-[#C8C5BD]" />
                <span>Ver Showroom Jardins</span>
              </a>
            </motion.div>

            <motion.div variants={fadeUpItemVariants} className="p-4 rounded-xl bg-[#2B2A27]/60 border border-[#2B2A27] flex items-center gap-3 text-xs text-[#C8C5BD] max-w-xl">
              <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-justify sm:text-left">Atendimento ágil com consultora dedicada de segunda a sábado, das 10h às 19h.</span>
            </motion.div>
          </motion.div>

          {/* Direct Channels & Boutique Details (6 cols) */}
          <motion.div
            variants={columnStaggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            className="lg:col-span-6 space-y-4"
          >
            {/* Channel Card 1: WhatsApp */}
            <motion.a
              variants={fadeUpItemVariants}
              href={getWhatsAppUrl('Olá! Gostaria de atendimento para a coleção da Essência Store.')}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-2xl bg-[#23221E] hover:bg-[#282723] border border-[#2B2A27] hover:border-[#3E3C36] flex items-center justify-between gap-4 transition-all group block"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
                <span className="p-3 rounded-xl bg-[#2B2A27] group-hover:bg-emerald-950/60 text-white group-hover:text-emerald-400 border border-transparent group-hover:border-emerald-800/50 transition-colors shrink-0">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[#9E9A91] text-[10px] uppercase tracking-wider font-semibold text-justify sm:text-left">WhatsApp Vendas & Consultoria</p>
                  <p className="text-white font-medium text-sm sm:text-base tracking-wide mt-0.5 break-words text-justify sm:text-left">+55 (11) 99876-1480</p>
                  <p className="text-[#A3A097] text-xs mt-0.5 text-justify sm:text-left">Atendimento rápido e envio para todo o Brasil</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#6E6D68] group-hover:text-white transition-colors shrink-0" />
            </motion.a>

            {/* Channel Card 2: Email */}
            <motion.a
              variants={fadeUpItemVariants}
              href="mailto:atendimento@essenciastore.com.br"
              className="p-5 rounded-2xl bg-[#23221E] hover:bg-[#282723] border border-[#2B2A27] hover:border-[#3E3C36] flex items-center justify-between gap-4 transition-all group block"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
                <span className="p-3 rounded-xl bg-[#2B2A27] group-hover:bg-[#383733] text-white border border-transparent transition-colors shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[#9E9A91] text-[10px] uppercase tracking-wider font-semibold text-justify sm:text-left">Atendimento por E-mail</p>
                  <p className="text-white font-medium text-xs sm:text-base tracking-tight sm:tracking-wide mt-0.5 break-all sm:break-normal text-justify sm:text-left">atendimento@essenciastore.com.br</p>
                  <p className="text-[#A3A097] text-xs mt-0.5 text-justify sm:text-left">Consultoria institucional e encomendas</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-[#6E6D68] group-hover:text-white transition-colors shrink-0" />
            </motion.a>

            {/* Channel Card 3: Showroom */}
            <motion.div
              variants={fadeUpItemVariants}
              className="p-5 rounded-2xl bg-[#23221E] border border-[#2B2A27] flex items-center justify-between gap-4"
            >
              <div className="flex items-center gap-3.5 sm:gap-4 min-w-0 flex-1">
                <span className="p-3 rounded-xl bg-[#2B2A27] text-white border border-transparent shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[#9E9A91] text-[10px] uppercase tracking-wider font-semibold text-justify sm:text-left">Boutique & Showroom Físico</p>
                  <p className="text-white font-medium text-xs sm:text-sm tracking-wide mt-0.5 text-justify sm:text-left">Alameda Lorena, 1480 — Jardins, São Paulo</p>
                  <p className="text-[#A3A097] text-xs mt-0.5 text-justify sm:text-left">Segunda a Sábado, 10h às 19h • Valet cortesia</p>
                </div>
              </div>
            </motion.div>

            {/* Social Media Links - Boutique Minimalist */}
            <motion.div
              variants={fadeUpItemVariants}
              className="p-5 rounded-2xl bg-[#23221E] border border-[#2B2A27] flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div>
                <p className="text-[#9E9A91] text-[10px] uppercase tracking-[0.25em] font-semibold text-justify sm:text-left">
                  Redes Sociais da Boutique
                </p>
                <p className="text-white text-xs mt-0.5 text-justify sm:text-left">Acompanhe nossos lançamentos e editoriais</p>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  id="footer-social-instagram"
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#2B2A27]/70 hover:bg-[#383733] border border-[#383733] text-[#C8C5BD] hover:text-white transition-all text-xs font-medium group"
                  aria-label="Siga a Essência Store no Instagram"
                >
                  <Instagram className="w-3.5 h-3.5 text-[#C8C5BD] group-hover:text-white transition-colors" />
                  <span className="text-[11px] tracking-wide">Instagram</span>
                </a>

                <a
                  id="footer-social-pinterest"
                  href="https://pinterest.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#2B2A27]/70 hover:bg-[#383733] border border-[#383733] text-[#C8C5BD] hover:text-white transition-all text-xs font-medium group"
                  aria-label="Inspire-se no Pinterest da Essência Store"
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
        className="border-t border-[#2B2A27] bg-[#141412] text-[#9E9A91] text-xs py-8 px-4 sm:px-6 lg:px-12"
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-wrap items-baseline gap-2 text-center sm:text-left">
            <span className="font-display font-bold text-sm text-white tracking-tight">ESSÊNCIA STORE</span>
            <span className="text-[11px] text-[#73716B]">© 2026 Essência Store Boutique Ltda. • CNPJ 42.189.304/0001-82 • Alameda Lorena, 1480, Jardins, SP</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-6 text-[11px] tracking-wider uppercase font-medium">
            <a className="hover:text-white transition-colors" href="#destaques">Início</a>
            <a className="hover:text-white transition-colors" href="#principios">Princípios</a>
            <a className="hover:text-white transition-colors" href="#categorias">Categorias</a>
            <a className="hover:text-white transition-colors" href="#produtos">Catálogo</a>
            <a className="hover:text-white transition-colors" href="#showroom">Loja</a>
            <a
              className="hover:text-white transition-colors text-emerald-400 font-semibold"
              href={getWhatsAppUrl('Olá! Gostaria de falar com o atendimento da Essência Store.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              Falar com Atendente
            </a>

            {/* Subbar Minimalist Socials */}
            <div className="flex items-center gap-2 pl-2 sm:border-l sm:border-[#2B2A27]">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full text-[#9E9A91] hover:text-white hover:bg-[#23221E] transition-all"
                title="Instagram da Boutique"
                aria-label="Instagram da Boutique"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-full text-[#9E9A91] hover:text-white hover:bg-[#23221E] transition-all"
                title="Pinterest da Boutique"
                aria-label="Pinterest da Boutique"
              >
                <PinterestIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

