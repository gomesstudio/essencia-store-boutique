import React, { useState } from 'react';
import { Eye, Smartphone, Check, Sparkles, TrendingUp, X } from 'lucide-react';
import { getWhatsAppUrl } from '../data/catalog';

export const StoreDemoBar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [showExplanationModal, setShowExplanationModal] = useState(false);

  if (collapsed) {
    return (
      <div id="store-demo-pitch-bar-trigger" className="fixed bottom-4 left-4 sm:bottom-6 sm:left-6 z-40">
        <button
          type="button"
          id="btn-open-store-demo"
          onClick={() => setCollapsed(false)}
          className="flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#1C1C1A]/90 hover:bg-[#1C1C1A] backdrop-blur-md text-white border border-[#383733] shadow-xl hover:scale-110 active:scale-95 transition-all cursor-pointer group"
          title="Abrir demonstração comercial"
          aria-label="Abrir demonstração da loja"
        >
          <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-amber-300 group-hover:rotate-12 transition-transform shrink-0" />
        </button>
      </div>
    );
  }

  return (
    <>
      <aside
        id="store-demo-pitch-bar"
        aria-label="Demonstração comercial para lojistas"
        className="fixed bottom-4 left-4 right-4 sm:right-auto sm:left-6 z-40 max-w-md bg-[#1C1B18]/95 backdrop-blur-md border border-[#383733] rounded-2xl p-4 sm:p-5 shadow-2xl text-white animate-in fade-in slide-in-from-bottom-3 duration-300"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-emerald-400">
              Modelo Comercial de Alto Padrão
            </span>
          </div>
          <button
            type="button"
            onClick={() => setCollapsed(true)}
            className="text-[#9E9A91] hover:text-white transition-colors p-1 -mr-1 -mt-1 cursor-pointer flex items-center gap-1 hover:bg-white/10 rounded-lg px-2 py-1"
            aria-label="Fechar caixa de demonstração"
            title="Fechar demonstração"
          >
            <span className="text-[10px] uppercase font-semibold text-[#9E9A91]">Fechar</span>
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="text-xs font-medium text-[#EAE7DF] mt-1.5 leading-snug">
          Gostaria de um site com essa presença visual e conversão direta no WhatsApp para a sua loja?
        </p>

        <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-[#2B2A27] text-[11px] text-[#C8C5BD]">
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Zero carrinho abandonado</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Catálogo rápido sem travar</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>WhatsApp com mensagem pronta</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
            <span>Showroom & agendamento VIP</span>
          </div>
        </div>

        <div className="mt-3.5 flex items-center gap-2">
          <button
            type="button"
            onClick={() => setShowExplanationModal(true)}
            className="flex-1 py-2.5 px-3 bg-white hover:bg-[#EAE7DF] text-[#121210] rounded-xl text-[11px] font-bold uppercase tracking-wider transition-all text-center cursor-pointer shadow-sm active:scale-95"
          >
            Entenda Este Modelo
          </button>
          <a
            href="https://gomes-studio-briefing.ai.studio/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 bg-[#2B2A27] hover:bg-[#383733] text-white border border-[#484640] rounded-xl text-[11px] font-semibold uppercase tracking-wider transition-all text-center flex items-center justify-center gap-1.5"
          >
            <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
            <span>Quero pra Minha Loja</span>
          </a>
        </div>
      </aside>

      {/* Explanation Modal */}
      {showExplanationModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto"
          onClick={() => setShowExplanationModal(false)}
        >
          <div
            className="relative bg-[#FBF9F5] text-[#1C1C1A] w-full max-w-xl rounded-2xl overflow-hidden shadow-2xl border border-[#EAE7DF] p-6 sm:p-8 space-y-5"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowExplanationModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#F3EFEA] hover:bg-[#EAE7DF] text-[#1C1C1A] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-[#6E6D68]">
                Arquitetura de Vendas
              </span>
              <h3 className="font-display text-2xl font-bold text-[#1C1C1A] mt-1">
                Por Que Esse Modelo Vende Até 3x Mais
              </h3>
              <p className="text-xs sm:text-sm text-[#575651] mt-1 leading-relaxed">
                Em lojas de vestuário, calçados e produtos de alto valor, o cliente não quer preencher formulários com 15 campos e senha. Ele quer tirar dúvidas sobre caimento, medidas e fechar na hora.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-white border border-[#EAE7DF] space-y-1">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-700" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1C1A]">
                    1. Fim do Carrinho Abandonado
                  </h4>
                </div>
                <p className="text-xs text-[#575651] leading-relaxed">
                  Cada clique em &quot;Falar com Vendedor&quot; ou &quot;Falar com Atendente&quot; já envia para o WhatsApp da sua equipe a foto, nome, preço e tamanho desejado. O cliente vira lead direto na sua mão.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#EAE7DF] space-y-1">
                <div className="flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-emerald-700" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1C1A]">
                    2. Conversão Humana & Upsell
                  </h4>
                </div>
                <p className="text-xs text-[#575651] leading-relaxed">
                  No WhatsApp seu vendedor pode mandar um vídeo rápido mostrando a textura do tecido, sugerir um acessório complementar e gerar Pix na hora com desconto de pagamento à vista.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-white border border-[#EAE7DF] space-y-1">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-emerald-700" />
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1C1A]">
                    3. Imagem de Marca Imbatível
                  </h4>
                </div>
                <p className="text-xs text-[#575651] leading-relaxed">
                  Tipografia editorial europeia, carregamento instantâneo no celular e elegância que transmite confiança imediata para cobrar o preço justo sem dar desconto desnecessário.
                </p>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="https://gomes-studio-briefing.ai.studio/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:flex-1 py-3.5 bg-[#1C1C1A] text-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-[#2B2A27] transition-all text-center shadow-md active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Preencher Briefing do Projeto</span>
              </a>
              <button
                type="button"
                onClick={() => setShowExplanationModal(false)}
                className="w-full sm:w-auto px-6 py-3.5 border border-[#C8C5BD] text-[#1C1C1A] hover:bg-[#F3EFEA] rounded-full text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
              >
                Continuar Navegando
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
