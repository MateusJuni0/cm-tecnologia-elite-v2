"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
const faqs = [
  { question: "Em quanto tempo consigo ver resultados?", answer: "A maioria dos nossos clientes começa a ver resultados nas primeiras 48-72 horas após o go-live. Em casos de geração de leads, é comum ver os primeiros contactos qualificados no próprio dia de entrega." },
  { question: "Precisam de acesso ao meu sistema?", answer: "Sim, para integrações com ferramentas existentes precisamos de acesso via API. Nunca pedimos acesso de administrador. Todo o acesso é documentado e pode ser revogado a qualquer momento." },
  { question: "O que acontece se a automação falhar?", answer: "Todos os workflows têm sistemas de alerta automático. Em caso de falha, a nossa equipa é notificada e atuamos em menos de 2 horas. Cada automação tem logs completos para diagnóstico." },
  { question: "Trabalham com que tipos de empresa?", answer: "Trabalhamos com PMEs e scale-ups de qualquer setor: e-commerce, saúde, imobiliário, agências de marketing, clínicas, consultoras, e mais." },
  { question: "Posso cancelar a qualquer momento?", answer: "Sim. Todos os planos são mensais sem fidelização. Se cancelares, a automação continua a funcionar (é tua) e entregamos toda a documentação técnica. Pedimos apenas 30 dias de aviso prévio." },
];
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#00D4FF" }}>FAQ</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Perguntas <span className="gradient-text-cyan">Frequentes</span></h2>
          <p className="text-lg text-white/50">Respostas diretas às dúvidas mais comuns.</p>
        </motion.div>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div key={faq.question} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}>
              <button className="w-full text-left glass rounded-xl px-6 py-5 flex items-start justify-between gap-4" style={{ borderColor: openIndex === i ? "rgba(0,212,255,0.3)" : undefined }} onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                <span className="font-semibold text-white text-base leading-relaxed">{faq.question}</span>
                <span className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ background: openIndex === i ? "rgba(0,212,255,0.2)" : "rgba(255,255,255,0.05)", color: openIndex === i ? "#00D4FF" : "rgba(255,255,255,0.4)" }}>{openIndex === i ? <Minus size={14} /> : <Plus size={14} />}</span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="px-6 py-4 text-sm text-white/60 leading-relaxed" style={{ background: "rgba(0,212,255,0.03)", border: "1px solid rgba(0,212,255,0.1)", borderTop: "none", marginTop: "-4px", borderRadius: "0 0 12px 12px" }}>{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}