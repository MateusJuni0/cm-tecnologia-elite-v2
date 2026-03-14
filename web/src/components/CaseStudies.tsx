"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, ShoppingBag, Building2, Home } from "lucide-react";
const cases = [
  { icon: ShoppingBag, industry: "E-commerce", company: "E-commerce de Moda", headline: "340% mais leads em 60 dias", description: "Implementámos um sistema de geração de leads automático com scraping de potenciais compradores, outreach via email e WhatsApp. O cliente passou de 80 leads/mês para 352 leads/mês qualificados.", metrics: [{ label: "Leads antes", value: "80/mês" }, { label: "Leads depois", value: "352/mês" }, { label: "Implementação", value: "48h" }], color: "#00D4FF" },
  { icon: Building2, industry: "Saúde", company: "Clínica Médica", headline: "15h/semana automatizadas", description: "Automatizámos o agendamento de consultas, envio de lembretes, follow-ups pós-consulta e relatórios semanais. A equipa administrativa recuperou 15 horas por semana e os no-shows caíram 67%.", metrics: [{ label: "Horas recuperadas", value: "15h/sem" }, { label: "Redução no-shows", value: "67%" }, { label: "ROI 1º mês", value: "340%" }], color: "#7C3AED" },
  { icon: Home, industry: "Imobiliário", company: "Agência Imobiliária", headline: "200 leads/mês no piloto automático", description: "Criámos um pipeline de prospecção totalmente autónomo com identificação de compradores e vendedores, qualificação automática com IA, e distribuição para os agentes certos.", metrics: [{ label: "Leads/mês", value: "200+" }, { label: "Trabalho manual", value: "0h" }, { label: "Tempo resposta", value: "<5 min" }], color: "#00D4FF" },
];
export default function CaseStudies() {
  return (
    <section id="cases" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,255,0.1), transparent)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#00D4FF" }}>Resultados Reais</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">O que Conseguimos para <span className="gradient-text-cyan">os Nossos Clientes</span></h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">Não são promessas. São resultados documentados de empresas reais.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c, i) => {
            const Icon = c.icon;
            return (
              <motion.div key={c.company} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -6 }} className="glass rounded-2xl p-6 flex flex-col">
                <div className="flex items-center justify-between mb-5">
                  <div className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium" style={{ background: c.color + "15", color: c.color, border: "1px solid " + c.color + "25" }}><Icon size={12} />{c.industry}</div>
                  <ArrowUpRight size={16} className="text-white/20" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{c.company}</h3>
                <p className="text-2xl font-extrabold mb-4" style={{ color: c.color }}>{c.headline}</p>
                <p className="text-sm text-white/55 leading-relaxed mb-6 flex-1">{c.description}</p>
                <div className="grid grid-cols-3 gap-2 rounded-xl p-3" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}>
                  {c.metrics.map((m) => (<div key={m.label} className="text-center"><div className="text-sm font-bold text-white">{m.value}</div><div className="text-[10px] text-white/40 mt-0.5">{m.label}</div></div>))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}