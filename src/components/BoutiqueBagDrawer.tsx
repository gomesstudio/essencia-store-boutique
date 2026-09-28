import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product } from '../types';
import { getWhatsAppUrl, STORE_NAME, STORE_LOCATION } from '../data/catalog';
import { X, ShoppingBag, Trash2, ArrowRight, Sparkles, Gift, ShieldCheck, MapPin } from 'lucide-react';

export interface BagItem {
  product: Product;
  size: string;
  quantity: number;
}

interface BoutiqueBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: BagItem[];
  onUpdateQuantity: (productId: string, size: string, delta: number) => void;
  onRemoveItem: (productId: string, size: string) => void;
  onClearBag: () => void;
  onOpenShowroomModal: () => void;
}

export const BoutiqueBagDrawer: React.FC<BoutiqueBagDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearBag,
  onOpenShowroomModal
}) => {
  const [includeGiftPackaging, setIncludeGiftPackaging] = useState(true);

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.priceNumeric * item.quantity,
    0
  );

  const pixDiscount = subtotal * 0.05;
  const totalPix = subtotal - pixDiscount;
  const freeShippingThreshold = 500;
  const qualifiesForFreeShipping = subtotal >= freeShippingThreshold;

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    let itemsListText = items
      .map(
        (it, i) =>
          `${i + 1}. ${it.product.name} (Tam: ${it.size || 'Único'}) - ${it.quantity}x ${it.product.price}`
      )
      .join('\n');

    const message = `Olá! Gostaria de finalizar o pedido da minha sacola na ${STORE_NAME}:\n\n${itemsListText}\n\nSubtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\nValor com 5% OFF Pix: R$ ${totalPix.toFixed(2).replace('.', ',')}\nEmbalagem para presente: ${includeGiftPackaging ? 'Sim (Cortesia)' : 'Não necessária'}\n\nPoderiam verificar o cálculo de envio e a chave Pix?`;

    window.open(getWhatsAppUrl(message), '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-xs"
            onClick={onClose}
          />

          {/* Slide-over panel */}
          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="w-screen max-w-md bg-[#FBF9F5] shadow-2xl flex flex-col border-l border-[#EAE7DF] text-[#1C1C1A]"
            >
              {/* Header */}
              <div className="px-6 py-5 border-b border-[#EAE7DF] flex items-center justify-between bg-white">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-full bg-[#1C1C1A] text-white">
                    <ShoppingBag className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#1C1C1A]">
                      Sacola da Boutique
                    </h3>
                    <p className="text-[11px] text-[#6E6D68] uppercase tracking-wider">
                      {items.length} {items.length === 1 ? 'peça selecionada' : 'peças selecionadas'}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-[#F3EFEA] text-[#1C1C1A] transition-colors cursor-pointer"
                  aria-label="Fechar sacola"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Free shipping progress notice */}
              <div className="px-6 py-3 bg-[#F3EFEA] border-b border-[#EAE7DF] text-xs">
                {qualifiesForFreeShipping ? (
                  <p className="text-emerald-800 font-medium flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    Parabéns! Sua compra tem <strong>Frete Cortesia Nacional</strong>.
                  </p>
                ) : (
                  <p className="text-[#575651]">
                    Faltam apenas{' '}
                    <strong className="text-[#1C1C1A]">
                      R$ {(freeShippingThreshold - subtotal).toFixed(2).replace('.', ',')}
                    </strong>{' '}
                    para garantir Frete Cortesia.
                  </p>
                )}
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4 divide-y divide-[#EAE7DF]">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#F3EFEA] flex items-center justify-center text-[#9E9A91]">
                      <ShoppingBag className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="font-display font-semibold text-base text-[#1C1C1A]">
                        Sua sacola está vazia
                      </p>
                      <p className="text-xs text-[#6E6D68] mt-1 max-w-xs leading-relaxed">
                        Explore nossa curadoria de peças nobres e adicione seus itens favoritos.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-2.5 rounded-full bg-[#1C1C1A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-[#2B2A27] transition-all cursor-pointer"
                    >
                      Ver Catálogo
                    </button>
                  </div>
                ) : (
                  items.map((item) => (
                    <div
                      key={`${item.product.id}-${item.size}`}
                      className="pt-4 first:pt-0 flex gap-4 items-start"
                    >
                      <div className="w-20 h-24 rounded-lg bg-[#EAE7DF] overflow-hidden shrink-0 border border-[#EAE7DF]">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <h4 className="font-display font-semibold text-sm text-[#1C1C1A] truncate">
                            {item.product.name}
                          </h4>
                          <button
                            type="button"
                            onClick={() => onRemoveItem(item.product.id, item.size)}
                            className="text-[#9E9A91] hover:text-rose-600 transition-colors p-1"
                            title="Remover peça"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <p className="text-[11px] text-[#6E6D68] mt-0.5">
                          Tamanho: <span className="font-semibold text-[#1C1C1A]">{item.size || 'Único'}</span>
                        </p>

                        <div className="flex items-center justify-between mt-3">
                          <div className="flex items-center border border-[#D8D4C8] rounded-md bg-white">
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.product.id, item.size, -1)}
                              className="px-2.5 py-0.5 text-xs text-[#1C1C1A] hover:bg-[#F3EFEA]"
                            >
                              -
                            </button>
                            <span className="px-2 text-xs font-semibold tabular-nums">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQuantity(item.product.id, item.size, 1)}
                              className="px-2.5 py-0.5 text-xs text-[#1C1C1A] hover:bg-[#F3EFEA]"
                            >
                              +
                            </button>
                          </div>

                          <span className="font-display font-bold text-sm text-[#1C1C1A]">
                            R$ {(item.product.priceNumeric * item.quantity).toFixed(2).replace('.', ',')}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>

              {/* Footer Checkout Actions */}
              {items.length > 0 && (
                <div className="p-6 border-t border-[#EAE7DF] bg-white space-y-4">
                  {/* Gift Packaging Toggle */}
                  <label className="flex items-center justify-between p-3 rounded-xl bg-[#FBF9F5] border border-[#EAE7DF] text-xs cursor-pointer hover:bg-[#F3EFEA] transition-colors">
                    <div className="flex items-center gap-2">
                      <Gift className="w-4 h-4 text-emerald-700" />
                      <span className="text-[#1C1C1A] font-medium">
                        Embalagem de Presente Essência Store (Cortesia)
                      </span>
                    </div>
                    <input
                      type="checkbox"
                      checked={includeGiftPackaging}
                      onChange={(e) => setIncludeGiftPackaging(e.target.checked)}
                      className="rounded text-[#1C1C1A] focus:ring-0 w-4 h-4 cursor-pointer"
                    />
                  </label>

                  {/* Pricing Breakdown */}
                  <div className="space-y-1.5 text-xs text-[#575651] pt-1">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span className="font-semibold text-[#1C1C1A] tabular-nums">
                        R$ {subtotal.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <div className="flex justify-between text-emerald-700">
                      <span>À vista no Pix (5% OFF):</span>
                      <span className="font-semibold tabular-nums">
                        R$ {totalPix.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                    <div className="flex justify-between text-[11px] text-[#73716B]">
                      <span>Cartão de Crédito:</span>
                      <span>Até 6x sem juros</span>
                    </div>
                  </div>

                  {/* Primary WhatsApp Checkout Button */}
                  <div className="space-y-2 pt-2">
                    <button
                      type="button"
                      onClick={handleCheckoutWhatsApp}
                      className="w-full py-4 rounded-full bg-[#1C1C1A] text-white hover:bg-[#2B2A27] font-bold text-xs uppercase tracking-widest shadow-md transition-all active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Finalizar Pedido com Vendedor</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        onClose();
                        onOpenShowroomModal();
                      }}
                      className="w-full py-2.5 text-center text-xs text-[#6E6D68] hover:text-[#1C1C1A] font-medium underline transition-colors cursor-pointer"
                    >
                      Ou agendar prova destas peças na loja física dos Jardins
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};
