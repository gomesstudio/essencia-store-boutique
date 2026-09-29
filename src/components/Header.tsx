import React, { useState } from 'react';
import { getWhatsAppUrl } from '../data/catalog';
import { Menu, X, ArrowUpRight, Heart, ShoppingBag } from 'lucide-react';

interface HeaderProps {
  onOpenAtendimento?: (context?: string) => void;
  wishlistCount?: number;
  onOpenWishlist?: () => void;
  bagCount?: number;
  onOpenBag?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenAtendimento,
  wishlistCount = 0,
  onOpenWishlist,
  bagCount = 0,
  onOpenBag
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Minimal Sub-Navbar Banner */}
      <div id="top-announcement-bar" className="border-b border-[#EAE7DF] bg-[#FBF9F5] text-[#6E6D68] text-[10px] sm:text-[11px] uppercase tracking-[0.16em] sm:tracking-[0.22em] py-2 px-3 sm:px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <span className="font-medium tracking-[0.16em] sm:tracking-[0.25em] text-[9px] sm:text-[10px] flex items-center gap-1.5 sm:gap-2 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 inline-block animate-pulse shrink-0"></span>
            <span className="sm:hidden">Essência Store • Jardins, SP</span>
            <span className="hidden sm:inline">Essência Store • Alameda Lorena, 1480 (Jardins, SP) • Coleção 2026</span>
          </span>
          <div className="flex items-center gap-3 sm:gap-6 shrink-0">
            <span className="hidden sm:inline">Envio Nacional em 24h com Seguro</span>
            <a
              id="top-bar-whatsapp-link"
              className="hover:text-[#1C1C1A] transition-colors underline font-medium flex items-center gap-1 text-[9px] sm:text-[11px]"
              href={getWhatsAppUrl('Olá! Gostaria de falar com o atendimento da Essência Store.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Falar com Atendente</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Editorial Top Navigation */}
      <header id="main-header" className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#EAE7DF]">
        <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-12 py-3 sm:py-4 flex items-center justify-between gap-3 sm:gap-6 lg:gap-10">
          {/* Brand Minimal Logo */}
          <a id="brand-logo-link" className="flex items-baseline gap-2 sm:gap-3.5 tracking-wider group shrink-0" href="#">
            <span className="font-display font-bold text-xl sm:text-[26px] tracking-tight text-[#1C1C1A] group-hover:opacity-80 transition-opacity">
              ESSÊNCIA STORE
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.3em] uppercase text-[#73716B] hidden sm:inline-block mr-6 sm:mr-8 lg:mr-12">
              BOUTIQUE
            </span>
          </a>

          {/* Minimal Menu Links - Desktop */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-6 xl:gap-8 text-xs uppercase tracking-widest text-[#6E6D68] ml-2 lg:ml-6">
            <a className="hover:text-[#1C1C1A] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-px after:bg-[#1C1C1A] after:absolute after:bottom-0 after:left-0 after:transition-all ml-1 sm:ml-2" href="#principios">
              Princípios
            </a>
            <a className="hover:text-[#1C1C1A] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-px after:bg-[#1C1C1A] after:absolute after:bottom-0 after:left-0 after:transition-all" href="#categorias">
              Categorias
            </a>
            <a className="hover:text-[#1C1C1A] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-px after:bg-[#1C1C1A] after:absolute after:bottom-0 after:left-0 after:transition-all" href="#produtos">
              Coleção
            </a>
            <a className="hover:text-[#1C1C1A] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-px after:bg-[#1C1C1A] after:absolute after:bottom-0 after:left-0 after:transition-all" href="#showroom">
              Loja
            </a>
            <a className="hover:text-[#1C1C1A] transition-colors py-1 relative hover:after:w-full after:w-0 after:h-px after:bg-[#1C1C1A] after:absolute after:bottom-0 after:left-0 after:transition-all" href="#contato">
              Contato
            </a>
          </nav>

          {/* Right Header Actions: Wishlist + Atendimento Button */}
          <div className="flex items-center gap-2.5 sm:gap-3.5">
            {/* Wishlist Counter Button */}
            {onOpenWishlist && (
              <button
                type="button"
                onClick={onOpenWishlist}
                className="relative p-2.5 rounded-full hover:bg-[#F3EFEA] text-[#1C1C1A] transition-colors cursor-pointer"
                title="Ver peças salvas"
                aria-label="Ver peças salvas"
              >
                <Heart className={`w-4 h-4 ${wishlistCount > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
                {wishlistCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-rose-500 text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {wishlistCount}
                  </span>
                )}
              </button>
            )}

            {/* Boutique Shopping Bag Button */}
            {onOpenBag && (
              <button
                type="button"
                onClick={onOpenBag}
                className="relative p-2.5 rounded-full hover:bg-[#F3EFEA] text-[#1C1C1A] transition-colors cursor-pointer"
                title="Abrir sacola da boutique"
                aria-label="Abrir sacola da boutique"
              >
                <ShoppingBag className="w-4 h-4" />
                {bagCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#1C1C1A] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                    {bagCount}
                  </span>
                )}
              </button>
            )}

            <a
              id="header-cta-atendimento"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#1C1C1A] text-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white transition-all text-xs font-semibold tracking-wider uppercase shadow-xs active:scale-95"
              href={getWhatsAppUrl('Olá! Gostaria de falar com um vendedor da Essência Store.')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span className="whitespace-nowrap">Falar com Vendedor</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-toggle-btn"
              type="button"
              className="lg:hidden p-2 text-[#1C1C1A] hover:bg-[#F3EFEA] rounded-lg transition-colors cursor-pointer"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Abrir menu principal"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div id="mobile-nav-panel" className="lg:hidden border-t border-[#EAE7DF] bg-[#FBF9F5] px-6 py-6 space-y-4 shadow-lg">
            <div className="flex flex-col gap-3 text-xs uppercase tracking-widest text-[#6E6D68]">
              <a
                className="hover:text-[#1C1C1A] py-2 border-b border-[#EAE7DF]/50"
                href="#principios"
                onClick={() => setMobileMenuOpen(false)}
              >
                Princípios
              </a>
              <a
                className="hover:text-[#1C1C1A] py-2 border-b border-[#EAE7DF]/50"
                href="#categorias"
                onClick={() => setMobileMenuOpen(false)}
              >
                Categorias
              </a>
              <a
                className="hover:text-[#1C1C1A] py-2 border-b border-[#EAE7DF]/50"
                href="#produtos"
                onClick={() => setMobileMenuOpen(false)}
              >
                Coleção & Catálogo
              </a>
              <a
                className="hover:text-[#1C1C1A] py-2 border-b border-[#EAE7DF]/50"
                href="#showroom"
                onClick={() => setMobileMenuOpen(false)}
              >
                Loja Física
              </a>
              <a
                className="hover:text-[#1C1C1A] py-2"
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato & Atendimento
              </a>
            </div>

            <div className="pt-2">
              <a
                id="mobile-menu-whatsapp-cta"
                className="w-full text-center block px-6 py-3.5 bg-[#1C1C1A] text-white rounded-full text-xs font-semibold uppercase tracking-widest shadow-md hover:bg-[#2B2A27] transition-colors"
                href={getWhatsAppUrl('Olá! Gostaria de falar com um vendedor da Essência Store.')}
                target="_blank"
                rel="noopener noreferrer"
              >
                Falar com Vendedor no WhatsApp
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
