import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS, getWhatsAppUrl } from '../data/catalog';
import { Product } from '../types';
import {
  Eye,
  MessageCircle,
  Sparkles,
  Heart,
  Search,
  SlidersHorizontal,
  X,
  ChevronLeft,
  ChevronRight,
  Columns,
  LayoutGrid,
  MoveRight
} from 'lucide-react';

interface FeaturedProductsProps {
  selectedCategory: string;
  onSelectCategory: (cat: string) => void;
  onProductClick: (product: Product) => void;
  wishlist: string[];
  onToggleWishlist: (productId: string) => void;
}

const normalizeText = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');

const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.08
    }
  }
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      delay: Math.min(i * 0.06, 0.36),
      ease: [0.22, 1, 0.36, 1] as const
    }
  })
};

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
  selectedCategory,
  onSelectCategory,
  onProductClick,
  wishlist,
  onToggleWishlist
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc'>('featured');
  const [onlyWishlist, setOnlyWishlist] = useState(false);
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');

  // Carousel interactive state
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasUserScrolled, setHasUserScrolled] = useState(false);

  // Mouse drag-to-scroll state for desktop
  const isDragging = useRef(false);
  const startX = useRef(0);
  const startScrollLeft = useRef(0);

  const normalizedQuery = normalizeText(searchQuery.trim());

  // Filter pipeline - matches by product name, description or category with accent tolerance
  let filtered = PRODUCTS.filter((p) => {
    const matchesCategory =
      selectedCategory === 'Todos' || p.category === selectedCategory;
    const matchesSearch =
      !normalizedQuery ||
      normalizeText(p.name).includes(normalizedQuery) ||
      normalizeText(p.description).includes(normalizedQuery) ||
      normalizeText(p.category).includes(normalizedQuery);
    const matchesWishlist = !onlyWishlist || wishlist.includes(p.id);

    return matchesCategory && matchesSearch && matchesWishlist;
  });

  // Sort pipeline
  if (sortBy === 'price-asc') {
    filtered = [...filtered].sort((a, b) => a.priceNumeric - b.priceNumeric);
  } else if (sortBy === 'price-desc') {
    filtered = [...filtered].sort((a, b) => b.priceNumeric - a.priceNumeric);
  }

  const updateScrollState = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);

    setCanScrollLeft(scrollLeft > 15);
    setCanScrollRight(scrollLeft < maxScroll - 15);

    const progress = maxScroll > 0 ? (scrollLeft / maxScroll) * 100 : 0;
    setScrollProgress(progress);

    // Calculate approximate active card index
    const firstChild = trackRef.current.firstElementChild as HTMLElement | null;
    if (firstChild && firstChild.offsetWidth > 0) {
      const cardWidth = firstChild.offsetWidth + 16;
      const index = Math.round(scrollLeft / cardWidth);
      setCurrentIndex(Math.min(Math.max(0, index), Math.max(0, filtered.length - 1)));
    }
  }, [filtered.length]);

  // Handle scroll events
  const handleScroll = () => {
    updateScrollState();
    if (!hasUserScrolled) {
      setHasUserScrolled(true);
    }
  };

  // Reset carousel position on category or search filter change
  useEffect(() => {
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: 'smooth' });
    }
    updateScrollState();
  }, [selectedCategory, searchQuery, onlyWishlist, sortBy, updateScrollState]);

  // Listen to window resize for scroll buttons state
  useEffect(() => {
    window.addEventListener('resize', updateScrollState);
    return () => window.removeEventListener('resize', updateScrollState);
  }, [updateScrollState]);

  // Programmatic scroll step
  const scroll = (direction: 'left' | 'right') => {
    if (!trackRef.current) return;
    setHasUserScrolled(true);
    const container = trackRef.current;
    const firstChild = container.firstElementChild as HTMLElement | null;
    const cardStep = firstChild ? firstChild.offsetWidth + 20 : 310;
    const delta = direction === 'left' ? -cardStep : cardStep;
    container.scrollBy({ left: delta, behavior: 'smooth' });
  };

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;
    setHasUserScrolled(true);
    const container = trackRef.current;
    const firstChild = container.firstElementChild as HTMLElement | null;
    const cardStep = firstChild ? firstChild.offsetWidth + 16 : 300;
    container.scrollTo({ left: index * cardStep, behavior: 'smooth' });
  };

  // Mouse Drag Handlers for Desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!trackRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - trackRef.current.offsetLeft;
    startScrollLeft.current = trackRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    trackRef.current.scrollLeft = startScrollLeft.current - walk;
    setHasUserScrolled(true);
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      scroll('left');
    } else if (e.key === 'ArrowRight') {
      scroll('right');
    }
  };

  const categoriesList = ['Todos', 'Vestuário', 'Calçados', 'Acessórios', 'Perfumaria', 'Design & Casa'];

  return (
    <section id="produtos" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 bg-[#F3EFEA]/40 border-t border-[#EAE7DF] overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-8 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#6E6D68]">
                Catálogo Dinâmico & Pronta Entrega
              </span>
              <span className="px-2 py-0.5 rounded-full text-[10px] bg-[#EAE7DF] text-[#1C1C1A] font-semibold uppercase">
                Coleção 2026
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#1C1C1A] tracking-tight">
              Peças em Destaque
            </h2>
            <p className="text-[#575651] text-xs sm:text-sm mt-1 max-w-lg leading-relaxed">
              Deslize para conhecer cada detalhe do catálogo. Atendimento privativo e envio para todo o Brasil.
            </p>
          </div>

          {/* Quick Filters / Search Bar Controls & View Mode Toggle */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Real Search Input by Product Name */}
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#6E6D68] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                id="search-product-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por nome..."
                aria-label="Buscar produto por nome"
                className="pl-9 pr-9 py-2 bg-[#FBF9F5] border border-[#EAE7DF] rounded-full text-xs text-[#1C1C1A] placeholder-[#8E8B83] focus:outline-none focus:border-[#1C1C1A] focus:bg-white w-full sm:w-56 transition-all shadow-2xs"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  title="Limpar busca"
                  aria-label="Limpar busca"
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-[#6E6D68] hover:text-[#1C1C1A] rounded-full hover:bg-[#EAE7DF]/60 transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-[#FBF9F5] border border-[#EAE7DF] rounded-full px-3 py-1.5 shadow-2xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#6E6D68]" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-xs text-[#1C1C1A] font-medium focus:outline-none cursor-pointer"
              >
                <option value="featured">Curadoria</option>
                <option value="price-asc">Menor Preço</option>
                <option value="price-desc">Maior Preço</option>
              </select>
            </div>

            {/* Wishlist Filter Toggle */}
            <button
              type="button"
              onClick={() => setOnlyWishlist(!onlyWishlist)}
              className={`flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                onlyWishlist
                  ? 'bg-rose-600 text-white shadow-xs'
                  : 'bg-[#FBF9F5] border border-[#EAE7DF] text-[#6E6D68] hover:text-[#1C1C1A]'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${onlyWishlist ? 'fill-white' : ''}`} />
              <span>Favoritos ({wishlist.length})</span>
            </button>

            {/* View Mode Toggle (Carousel vs Grid) */}
            <div className="hidden sm:inline-flex items-center bg-[#EAE7DF]/70 p-1 rounded-full border border-[#DCD8CF]">
              <button
                type="button"
                onClick={() => setViewMode('carousel')}
                title="Modo Carrossel Deslizante"
                aria-label="Modo Carrossel Deslizante"
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  viewMode === 'carousel'
                    ? 'bg-white text-[#1C1C1A] shadow-2xs font-semibold'
                    : 'text-[#6E6D68] hover:text-[#1C1C1A]'
                }`}
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Carrossel</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                title="Modo Grade Completa"
                aria-label="Modo Grade Completa"
                className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-[#1C1C1A] shadow-2xs font-semibold'
                    : 'text-[#6E6D68] hover:text-[#1C1C1A]'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Grade</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Active Search Feedback Pill */}
        {searchQuery.trim() && (
          <div className="mb-5 flex items-center justify-between bg-[#FBF9F5] border border-[#EAE7DF] rounded-xl px-4 py-2.5 shadow-2xs">
            <div className="flex items-center gap-2 text-xs text-[#1C1C1A]">
              <Search className="w-3.5 h-3.5 text-[#6E6D68]" />
              <span>
                Resultados para <strong className="font-semibold text-[#1C1C1A]">"{searchQuery}"</strong>:{' '}
                <span className="text-[#6E6D68]">
                  {filtered.length} {filtered.length === 1 ? 'item encontrado' : 'itens encontrados'}
                </span>
              </span>
            </div>
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="text-xs text-[#6E6D68] hover:text-[#1C1C1A] font-medium underline cursor-pointer"
            >
              Limpar busca
            </button>
          </div>
        )}

        {/* Category Filter Pills & Carousel Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5 sm:mb-6"
        >
          {/* Category Filter Pills */}
          <div className="flex flex-nowrap sm:flex-wrap items-center gap-2 text-xs uppercase tracking-wider font-medium overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-visible no-scrollbar">
            {categoriesList.map((cat) => {
              const count = cat === 'Todos' ? PRODUCTS.length : PRODUCTS.filter((p) => p.category === cat).length;
              if (count === 0 && cat !== 'Todos') return null;
              const isActive = selectedCategory === cat && !onlyWishlist;

              return (
                <button
                  id={`filter-pill-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  key={cat}
                  type="button"
                  onClick={() => {
                    setOnlyWishlist(false);
                    onSelectCategory(cat);
                  }}
                  className={`px-3 py-1.5 rounded-full transition-all text-xs cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-[#1C1C1A] text-white font-semibold shadow-xs'
                      : 'bg-[#FBF9F5] border border-[#EAE7DF] text-[#6E6D68] hover:text-[#1C1C1A] hover:border-[#C8C5BD]'
                  }`}
                >
                  {cat} {cat === 'Todos' ? `(${count})` : ''}
                </button>
              );
            })}
          </div>

          {/* Carousel Action & Progress Header (only active in carousel mode) */}
          {viewMode === 'carousel' && filtered.length > 0 && (
            <div className="flex items-center justify-between sm:justify-end gap-4 shrink-0 pt-1 sm:pt-0">
              {/* Item progress indicator */}
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#6E6D68] tabular-nums">
                  Item <strong className="text-[#1C1C1A] font-semibold">{String(currentIndex + 1).padStart(2, '0')}</strong> / {String(filtered.length).padStart(2, '0')}
                </span>

                {/* Progress bar track */}
                <div className="w-16 sm:w-28 h-1 bg-[#EAE7DF] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#1C1C1A] transition-all duration-200 rounded-full"
                    style={{
                      width: `${Math.max(12, Math.min(100, ((currentIndex + 1) / filtered.length) * 100))}%`
                    }}
                  />
                </div>
              </div>

              {/* Prev / Next Circular Navigation Buttons */}
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => scroll('left')}
                  disabled={!canScrollLeft}
                  title="Item anterior"
                  aria-label="Item anterior"
                  className={`w-8 h-8 rounded-full border border-[#EAE7DF] bg-[#FBF9F5] flex items-center justify-center transition-all ${
                    canScrollLeft
                      ? 'text-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white hover:border-[#1C1C1A] cursor-pointer shadow-2xs active:scale-95'
                      : 'text-[#C8C5BD] opacity-40 cursor-not-allowed'
                  }`}
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => scroll('right')}
                  disabled={!canScrollRight}
                  title="Próximo item"
                  aria-label="Próximo item"
                  className={`w-8 h-8 rounded-full border border-[#EAE7DF] bg-[#FBF9F5] flex items-center justify-center transition-all ${
                    canScrollRight
                      ? 'text-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white hover:border-[#1C1C1A] cursor-pointer shadow-2xs active:scale-95'
                      : 'text-[#C8C5BD] opacity-40 cursor-not-allowed'
                  }`}
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Mobile Interactive Swipe Hint (auto-fades when user scrolls) */}
        {viewMode === 'carousel' && !hasUserScrolled && filtered.length > 1 && (
          <div className="sm:hidden flex items-center justify-between pb-2 text-[11px] text-[#6E6D68]">
            <span className="flex items-center gap-1.5 font-medium">
              <span>Deslize para o lado</span>
              <MoveRight className="w-3.5 h-3.5 animate-pulse text-[#1C1C1A]" />
            </span>
            <span className="text-[10px] text-[#8E8B83]">Toque para ver detalhes</span>
          </div>
        )}

        {/* Product Carousel / Grid or Empty State */}
        {filtered.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-16 bg-[#FBF9F5] rounded-2xl border border-[#EAE7DF] p-8"
          >
            <p className="text-base font-display font-semibold text-[#1C1C1A]">
              {searchQuery.trim()
                ? `Nenhum produto encontrado para "${searchQuery}".`
                : 'Nenhum item encontrado para sua busca.'}
            </p>
            <p className="text-xs text-[#6E6D68] mt-1 max-w-sm mx-auto">
              {searchQuery.trim()
                ? 'Verifique a digitação ou tente buscar por outro nome ou categoria.'
                : 'Nossa equipe pode encomendar ou pesquisar peças no acervo para você diretamente.'}
            </p>
            <div className="mt-4 flex items-center justify-center gap-3">
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setOnlyWishlist(false);
                  onSelectCategory('Todos');
                }}
                className="px-4 py-2 bg-[#1C1C1A] text-white rounded-full text-xs font-semibold cursor-pointer hover:bg-[#2B2A27] transition-colors"
              >
                Limpar Busca
              </button>
              <a
                href={getWhatsAppUrl(`Olá! Busco o produto "${searchQuery}" que não encontrei no catálogo da loja.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 border border-[#1C1C1A] text-[#1C1C1A] rounded-full text-xs font-semibold hover:bg-[#F3EFEA] transition-colors"
              >
                Falar com Vendedor
              </a>
            </div>
          </motion.div>
        ) : viewMode === 'carousel' ? (
          /* INNOVATIVE CAROUSEL TRACK */
          <div className="relative">
            <div
              ref={trackRef}
              onScroll={handleScroll}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseLeave}
              tabIndex={0}
              onKeyDown={handleKeyDown}
              role="region"
              aria-label="Carrossel de Produtos em Destaque"
              className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar py-2 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-12 lg:px-12 cursor-grab active:cursor-grabbing select-none"
              style={{
                WebkitOverflowScrolling: 'touch',
                scrollSnapType: 'x mandatory'
              }}
            >
              {filtered.map((product, idx) => {
                const isFav = wishlist.includes(product.id);
                const isActive = idx === currentIndex;

                return (
                  <motion.div
                    id={`product-card-${product.id}`}
                    key={product.id}
                    variants={cardItemVariants}
                    custom={idx}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-20px' }}
                    className={`w-[82vw] sm:w-[320px] lg:w-[290px] xl:w-[305px] shrink-0 snap-start bg-[#FBF9F5] rounded-2xl border p-4 flex flex-col justify-between group transition-all duration-300 relative ${
                      isActive
                        ? 'border-[#1C1C1A]/60 shadow-md sm:shadow-xs'
                        : 'border-[#EAE7DF] hover:border-[#1C1C1A] hover:shadow-md'
                    }`}
                  >
                    <div>
                      {/* Image Container with Badges, Quick View & Wishlist */}
                      <div
                        className="aspect-[3/4] rounded-xl overflow-hidden bg-[#F3EFEA] mb-3.5 relative cursor-pointer group/img"
                        onClick={() => onProductClick(product)}
                      >
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover/img:scale-106 transition-transform duration-500 ease-out"
                          loading="lazy"
                          decoding="async"
                          referrerPolicy="no-referrer"
                        />

                        {/* Top Badges */}
                        <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                          {product.badge && (
                            <span className="bg-[#1C1C1A]/90 text-white text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-sm backdrop-blur-xs flex items-center gap-1 shadow-xs">
                              <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                              {product.badge}
                            </span>
                          )}
                        </div>

                        {/* Wishlist Button on card */}
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleWishlist(product.id);
                          }}
                          className={`absolute top-2.5 right-2.5 p-1.5 rounded-full transition-transform active:scale-90 cursor-pointer shadow-sm z-10 ${
                            isFav
                              ? 'bg-rose-500 text-white'
                              : 'bg-white/85 hover:bg-white text-[#1C1C1A]'
                          }`}
                          title="Favoritar"
                          aria-label={`Favoritar ${product.name}`}
                        >
                          <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-white' : ''}`} />
                        </button>

                        {/* Quick View Hover / Tap Overlay */}
                        <div className="absolute inset-0 bg-[#1C1C1A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                          <span className="bg-[#FBF9F5] text-[#1C1C1A] text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                            <Eye className="w-3.5 h-3.5" />
                            Ver Detalhes
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mb-1">
                        <p className="text-[10px] uppercase tracking-widest text-[#6E6D68] font-medium">
                          {product.category}
                        </p>
                        <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                          Em estoque
                        </span>
                      </div>

                      <h3
                        onClick={() => onProductClick(product)}
                        className="font-display font-semibold text-base text-[#1C1C1A] mb-1 cursor-pointer hover:text-[#575651] transition-colors line-clamp-1"
                      >
                        {product.name}
                      </h3>
                      <p className="text-xs text-[#6E6D68] mb-3 line-clamp-2 leading-relaxed">
                        {product.description}
                      </p>

                      {/* Sizes chips preview */}
                      {product.sizes && (
                        <div className="flex items-center gap-1 mb-3 text-[10px] text-[#6E6D68]">
                          <span className="font-semibold text-[#1C1C1A]">Tamanhos:</span>
                          <div className="flex items-center gap-1 overflow-hidden">
                            {product.sizes.slice(0, 3).map((s) => (
                              <span key={s} className="px-1.5 py-0.5 rounded bg-[#EAE7DF]/70 text-[#1C1C1A] font-mono">
                                {s}
                              </span>
                            ))}
                            {product.sizes.length > 3 && (
                              <span className="text-[#8E8B83]">+{product.sizes.length - 3}</span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Price & Direct Action */}
                    <div className="pt-3 border-t border-[#EAE7DF] flex flex-row items-center justify-between gap-2">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-[#6E6D68] block">Valor</span>
                        <span className="font-display font-bold text-base text-[#1C1C1A]">
                          {product.price}
                        </span>
                      </div>

                      <a
                        id={`whatsapp-consult-btn-${product.id}`}
                        href={getWhatsAppUrl(`Olá! Gostaria de consultar a peça "${product.name}" (${product.price}) na Essência Store.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-[#1C1C1A] bg-white hover:bg-[#1C1C1A] hover:text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-[#1C1C1A]/20 transition-all cursor-pointer shadow-2xs active:scale-95 whitespace-nowrap"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>Falar com Vendedor</span>
                      </a>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Mobile Dots Pagination */}
            {filtered.length > 1 && (
              <div className="flex sm:hidden items-center justify-center gap-1.5 mt-5">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToIndex(i)}
                    className={`transition-all duration-300 rounded-full cursor-pointer ${
                      i === currentIndex
                        ? 'w-6 h-1.5 bg-[#1C1C1A]'
                        : 'w-1.5 h-1.5 bg-[#D4CFBE] hover:bg-[#8E8B83]'
                    }`}
                    aria-label={`Ir para o produto ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* EXPANDED GRID VIEW */
          <motion.div
            key={`${selectedCategory}-${sortBy}-${onlyWishlist}-${searchQuery}`}
            variants={gridContainerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7"
          >
            {filtered.map((product, idx) => {
              const isFav = wishlist.includes(product.id);

              return (
                <motion.div
                  id={`product-card-${product.id}`}
                  key={product.id}
                  variants={cardItemVariants}
                  custom={idx}
                  className="bg-[#FBF9F5] rounded-2xl border border-[#EAE7DF] p-4 flex flex-col justify-between group hover:border-[#1C1C1A] hover:shadow-md transition-all duration-300 relative"
                >
                  <div>
                    {/* Image Container with Badges, Quick View & Wishlist */}
                    <div
                      className="aspect-[3/4] rounded-xl overflow-hidden bg-[#F3EFEA] mb-3.5 relative cursor-pointer"
                      onClick={() => onProductClick(product)}
                    >
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-500 ease-out"
                        loading="lazy"
                        decoding="async"
                        referrerPolicy="no-referrer"
                      />

                      {/* Top Badges */}
                      <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 z-10">
                        {product.badge && (
                          <span className="bg-[#1C1C1A]/90 text-white text-[9px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded-sm backdrop-blur-xs flex items-center gap-1 shadow-xs">
                            <Sparkles className="w-2.5 h-2.5 text-amber-300" />
                            {product.badge}
                          </span>
                        )}
                      </div>

                      {/* Wishlist Button on card */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleWishlist(product.id);
                        }}
                        className={`absolute top-2.5 right-2.5 p-1.5 rounded-full transition-transform active:scale-90 cursor-pointer shadow-sm z-10 ${
                          isFav
                            ? 'bg-rose-500 text-white'
                            : 'bg-white/80 hover:bg-white text-[#1C1C1A]'
                        }`}
                        title="Favoritar"
                        aria-label={`Favoritar ${product.name}`}
                      >
                        <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-white' : ''}`} />
                      </button>

                      {/* Quick View Hover Overlay */}
                      <div className="absolute inset-0 bg-[#1C1C1A]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="bg-[#FBF9F5] text-[#1C1C1A] text-[11px] font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <Eye className="w-3.5 h-3.5" />
                          Ver Detalhes
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[10px] uppercase tracking-widest text-[#6E6D68] font-medium">
                        {product.category}
                      </p>
                      <span className="text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        Em estoque
                      </span>
                    </div>

                    <h3
                      onClick={() => onProductClick(product)}
                      className="font-display font-semibold text-base text-[#1C1C1A] mb-1 cursor-pointer hover:text-[#575651] transition-colors line-clamp-1"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-[#6E6D68] mb-3 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    {/* Sizes chips preview */}
                    {product.sizes && (
                      <div className="flex items-center gap-1 mb-3 text-[10px] text-[#6E6D68]">
                        <span className="font-semibold text-[#1C1C1A]">Tamanhos:</span>
                        <div className="flex items-center gap-1 overflow-hidden">
                          {product.sizes.slice(0, 3).map((s) => (
                            <span key={s} className="px-1.5 py-0.5 rounded bg-[#EAE7DF]/70 text-[#1C1C1A] font-mono">
                              {s}
                            </span>
                          ))}
                          {product.sizes.length > 3 && (
                            <span className="text-[#8E8B83]">+{product.sizes.length - 3}</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Price & Direct Action */}
                  <div className="pt-3 border-t border-[#EAE7DF] flex flex-row items-center justify-between gap-2">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#6E6D68] block">Valor</span>
                      <span className="font-display font-bold text-base text-[#1C1C1A]">
                        {product.price}
                      </span>
                    </div>

                    <a
                      id={`whatsapp-consult-btn-${product.id}`}
                      href={getWhatsAppUrl(`Olá! Gostaria de consultar a peça "${product.name}" (${product.price}) na Essência Store.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] uppercase tracking-wider font-bold text-[#1C1C1A] bg-white hover:bg-[#1C1C1A] hover:text-white px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-full border border-[#1C1C1A]/20 transition-all cursor-pointer shadow-2xs active:scale-95 whitespace-nowrap"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>Falar com Vendedor</span>
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* Bespoke Inscription Banner with smooth fade in */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 sm:mt-16 p-5 sm:p-8 rounded-2xl bg-[#FBF9F5] border border-[#EAE7DF] flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 shadow-xs"
        >
          <div className="max-w-xl text-center sm:text-left">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#6E6D68]">
              Curadoria & Atendimento Sob Demanda
            </span>
            <h3 className="font-display text-lg sm:text-2xl font-bold text-[#1C1C1A] mt-1">
              Busca uma peça exclusiva ou medida sob medida?
            </h3>
            <p className="text-xs sm:text-sm text-[#575651] mt-1.5 leading-relaxed">
              Nossa equipe consulta acervos parceiros e atende solicitações personalizadas com fotos e vídeos reais antes de qualquer compromisso.
            </p>
          </div>
          <a
            id="bespoke-curation-cta"
            className="w-full sm:w-auto text-center px-6 py-3.5 bg-[#1C1C1A] text-white rounded-full font-semibold text-xs uppercase tracking-wider hover:bg-[#2B2A27] transition-all whitespace-nowrap active:scale-95 shadow-xs"
            href={getWhatsAppUrl('Olá! Busco um item específico ou encomenda sob medida com a curadoria da Essência Store.')}
            target="_blank"
            rel="noopener noreferrer"
          >
            Falar com Atendente
          </a>
        </motion.div>
      </div>
    </section>
  );
};
