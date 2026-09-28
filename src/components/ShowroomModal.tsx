import React, { useState } from 'react';
import { motion } from 'motion/react';
import { getWhatsAppUrl } from '../data/catalog';
import { X, Calendar, Clock, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';

interface ShowroomModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShowroomModal: React.FC<ShowroomModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [date, setDate] = useState('');
  const [period, setPeriod] = useState('Manhã (09h às 12h)');
  const [notes, setNotes] = useState('');
  const [scheduled, setScheduled] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !whatsapp.trim() || !date) return;
    setScheduled(true);
  };

  const handleConfirmWhatsApp = () => {
    const text = `Olá! Gostaria de agendar uma visita à loja física da Essência Store (Alameda Lorena, 1480 - Jardins, SP).\nNome: ${name}\nData: ${date}\nPeríodo: ${period}\n${notes ? `Preferências: ${notes}` : ''}`;
    window.open(getWhatsAppUrl(text), '_blank');
    onClose();
  };

  return (
    <motion.div
      id="showroom-schedule-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="relative bg-[#1C1B18] text-[#EAE7DF] w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl border border-[#2B2A27] p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#2B2A27] text-white hover:bg-[#383733] transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="w-4 h-4" />
        </button>

        {scheduled ? (
          <div className="py-6 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h3 className="font-display text-2xl font-bold text-white">Solicitação de Visita Enviada</h3>
            <p className="text-sm text-[#C8C5BD] leading-relaxed">
              Recebemos sua solicitação para <strong className="text-white">{date}</strong> ({period}). Para garantir sua reserva imediata em nossa agenda privativa, confirme via WhatsApp com nosso atendente.
            </p>
            <div className="pt-3 flex flex-col gap-2.5">
              <button
                type="button"
                onClick={handleConfirmWhatsApp}
                className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirmar com Atendente no WhatsApp</span>
              </button>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 bg-[#2B2A27] text-[#C8C5BD] hover:text-white rounded-full text-xs uppercase tracking-widest cursor-pointer"
              >
                Fechar
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E9A91] font-semibold">
                Espaço Presencial
              </span>
              <h3 className="font-display text-2xl font-bold text-white">
                Agendar Visita ao Showroom
              </h3>
              <p className="text-xs text-[#C8C5BD] flex items-center gap-1.5 pt-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                <span>Alameda Lorena, 1480 — Jardins, São Paulo / SP (Valet cortesia)</span>
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#C8C5BD] block mb-1">
                  Seu Nome Completo *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: Gabriela Duarte"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#141412] border border-[#2B2A27] rounded-xl text-sm text-white placeholder-[#6E6D68] focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#C8C5BD] block mb-1">
                  WhatsApp para Confirmação *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#141412] border border-[#2B2A27] rounded-xl text-sm text-white placeholder-[#6E6D68] focus:outline-none focus:border-white transition-colors"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#C8C5BD] block mb-1">
                    Data Pretendida *
                  </label>
                  <input
                    type="date"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#141412] border border-[#2B2A27] rounded-xl text-sm text-white focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-[#C8C5BD] block mb-1">
                    Período
                  </label>
                  <select
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    className="w-full px-4 py-2.5 bg-[#141412] border border-[#2B2A27] rounded-xl text-sm text-white focus:outline-none focus:border-white transition-colors"
                  >
                    <option value="Manhã (09h às 12h)">Manhã (09h às 12h)</option>
                    <option value="Tarde (13h às 16h)">Tarde (13h às 16h)</option>
                    <option value="Final de Tarde (16h às 19h)">Final de Tarde (16h às 19h)</option>
                    <option value="Sábado (09h às 15h)">Sábado (09h às 15h)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold uppercase tracking-wider text-[#C8C5BD] block mb-1">
                  Interesses Especiais / Peças para Provar
                </label>
                <input
                  type="text"
                  placeholder="Ex: Alfaiataria tamanho M, tênis 41..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 bg-[#141412] border border-[#2B2A27] rounded-xl text-sm text-white placeholder-[#6E6D68] focus:outline-none focus:border-white transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-white text-[#121210] hover:bg-[#EAE7DF] rounded-xl text-xs uppercase tracking-widest font-bold transition-all shadow-md mt-4 cursor-pointer"
            >
              Solicitar Horário
            </button>
          </form>
        )}
      </motion.div>
    </motion.div>
  );
};
