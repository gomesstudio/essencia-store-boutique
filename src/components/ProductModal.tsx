import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Product } from '../types';
import { getWhatsAppUrl } from '../data/catalog';
import { X, MessageCircle, ShieldCheck, Truck, Sparkles, Check, Heart, Share2, Ruler, ShoppingBag } from 'lucide-react';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  isWishlisted?: boolean;
  onToggleWishlist?: (productId: string) => void;
  onAddToBag?: (product: Product, size: string) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  isWishlisted = false,
  onToggleWishlist,
  onAddToBag
}) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [copiedLink, setCopiedLink] = useState(false);
  const [addedToBagToast, setAddedToBagToast] = useState(false);

  // Initialize or reset selected size when product changes
  React.useEffect(() => {
    if (product && product.sizes && product.sizes.length > 0) {
      setSelectedSize(product.sizes[0]);
    } else {
      setSelectedSize('');
    }
    setCopiedLink(false);
  }, [product]);

  if (!product) return null;

  const sizeNote = selectedSize ? ` no tamanho ${selectedSize}` : '';
  const whatsappMessage = `Olá! Gostaria de consultar a peça "${product.name}" (${product.price})${sizeNote} na Essência Store. Poderiam me confirmar a disponibilidade e formas de pagamento com desconto à vista?`;

  const handleCopyShare = () => {
    navigator.clipboard?.writeText?.(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <motion.div
      id="product-detail-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-[#FBF9F5] w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl border border-[#EAE7DF] my-auto max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Actions: Close & Wishlist & Share */}
        <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 z-10 flex items-center gap-1.5 sm:gap-2">
          {onToggleWishlist && (
            <button
              type="button"
              onClick={() => onToggleWishlist(product.id)}
              className={`p-2 sm:p-2.5 rounded-full backdrop-blur-xs transition-colors cursor-pointer shadow-md ${
                isWishlisted
                  ? 'bg-rose-500 text-white'
                  : 'bg-white/90 text-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white'
              }`}
              title="Salvar nos favoritos"
              aria-label="Salvar nos favoritos"
            >
              <Heart className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${isWishlisted ? 'fill-white' : ''}`} />
            </button>
          )}

          <button
            type="button"
            onClick={handleCopyShare}
            className="p-2 sm:p-2.5 rounded-full bg-white/90 text-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white transition-colors cursor-pointer shadow-md"
            title="Compartilhar link"
            aria-label="Compartilhar link"
          >
            <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>

          <button
            id="close-product-modal-btn"
            type="button"
            onClick={onClose}
            className="p-2 sm:p-2.5 rounded-full bg-white/90 text-[#1C1C1A] hover:bg-[#1C1C1A] hover:text-white transition-colors cursor-pointer shadow-md"
            aria-label="Fechar modal"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>

        {copiedLink && (
          <div className="absolute top-4 left-4 z-10 bg-[#1C1C1A] text-white text-[11px] font-semibold px-3 py-1.5 rounded-full shadow-lg">
            Link copiado com sucesso!
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Product Image */}
          <div className="relative bg-[#F3EFEA] aspect-[4/3] sm:aspect-[3/4] md:aspect-auto max-h-[280px] sm:max-h-none">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            {product.badge && (
              <span className="absolute top-3.5 left-3.5 sm:top-4 sm:left-4 bg-[#1C1C1A] text-white text-[9px] sm:text-[10px] uppercase tracking-widest font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-sm shadow-md flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-amber-300" />
                {product.badge}
              </span>
            )}
            <div className="absolute bottom-3 left-3 bg-[#1C1C1A]/80 backdrop-blur-xs text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-md">
              Fotos Reais de Acervo
            </div>
          </div>

          {/* Product Info & Action */}
          <div className="p-5 sm:p-8 flex flex-col justify-between space-y-5 sm:space-y-6">
            <div className="space-y-4">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#6E6D68] font-semibold block mb-1">
                  {product.category} • Ref #{product.id.replace('prod-', '00')}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-[#1C1C1A] leading-tight">
                  {product.name}
                </h3>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="font-display text-2xl sm:text-3xl font-bold text-[#1C1C1A]">
                  {product.price}
                </span>
                <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full font-semibold">
                  5% OFF via Pix
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#575651] leading-relaxed">
                {product.description}
              </p>

              {/* Sizes / Options selector */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="pt-2 border-t border-[#EAE7DF] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold uppercase tracking-wider text-[#1C1C1A] flex items-center gap-1.5">
                      <Ruler className="w-3.5 h-3.5 text-[#6E6D68]" />
                      Escolha o Tamanho / Versão
                    </span>
                    <span className="text-[11px] text-[#6E6D68]">Tabela Brasileira</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((sz) => {
                      const isSelected = selectedSize === sz;
                      return (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setSelectedSize(sz)}
                          className={`px-3.5 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#1C1C1A] text-white shadow-xs'
                              : 'bg-white border border-[#D8D4C8] text-[#1C1C1A] hover:border-[#1C1C1A]'
                          }`}
                        >
                          {sz}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Product Specifications */}
              <div className="space-y-2 pt-2 border-t border-[#EAE7DF]">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#1C1C1A]">
                  Acabamento & Diferenciais
                </p>
                <ul className="space-y-1.5 text-xs text-[#575651]">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#EAE7DF] text-[11px] text-[#6E6D68]">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#1C1C1A] shrink-0" />
                  <span>Envio 24h com Seguro Total</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#1C1C1A] shrink-0" />
                  <span>Ajustes no Ateliê Jardins</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Call to Action & Bag */}
            <div className="space-y-2.5 pt-2">
              <div className="flex flex-col sm:flex-row gap-2.5">
                {onAddToBag && (
                  <button
                    type="button"
                    onClick={() => {
                      onAddToBag(product, selectedSize || (product.sizes?.[0] || 'Único'));
                      setAddedToBagToast(true);
                      setTimeout(() => setAddedToBagToast(false), 2200);
                    }}
                    className="flex-1 py-3.5 px-4 bg-white border border-[#1C1C1A] text-[#1C1C1A] hover:bg-[#F3EFEA] rounded-full text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs active:scale-[0.98]"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#1C1C1A]" />
                    <span>{addedToBagToast ? 'Adicionado à Sacola!' : 'Colocar na Sacola'}</span>
                  </button>
                )}

                <a
                  id="modal-whatsapp-cta"
                  href={getWhatsAppUrl(whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3.5 px-4 bg-[#1C1C1A] hover:bg-[#2B2A27] text-white rounded-full text-xs uppercase tracking-widest font-bold flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98]"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Falar com Vendedor</span>
                </a>
              </div>

              <p className="text-[10px] text-center text-[#6E6D68]">
                Nosso vendedor responde em minutos com foto e vídeo real do item no seu tamanho.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
