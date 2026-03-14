"use client";
import { motion } from "framer-motion";
import { Zap, TrendingUp, Users, Code2 } from "lucide-react";
const services = [
  { icon: Zap, title: "Automação de Processos", description: "Criamos workflows n8n personalizados que integram todas as tuas ferramentas. Elimina trabalho manual, reduz erros e liberta a tua equipa.", features: ["Workflows n8n","Integração de APIs","Triggers automáticos","Zero trabalho manual"], color: "#00D4FF" },
  { icon: TrendingUp, title: "Marketing Digital", description: "Automatizamos toda a tua presença digital — conteúdo, publicações, campanhas e relatórios. O teu marketing nunca para.", features: ["Social media automation","Criação de conteúdo com IA","Campanhas automáticas","Analytics em tempo real"], color: "#7C3AED" },
  { icon: Users, title: "Geração de Leads", description: "Sistema de prospecção autónomo com IA: identificamos, qualificamos e contactamos leads qualificados 24/7.", features: ["Scraping com IA","SDR automatizado","Qualificação automática","Outreach personalizado"], color: "#00D4FF" },
  { icon: Code2, title: "Desenvolvimento de Produtos", description: "Construímos SaaS, websites e apps mobile completamente customizados. Do design ao deployment.", features: ["SaaS completo","Websites de alta conversão","Apps mobile","Deployment e manutenção"], color: "#7C3AED" }
];
export default function Services() {
  return (
    <section id="services" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(124,58,237,0.15), transparent)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#00D4FF" }}>O Que Fazemos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Serviços que <span className="gradient-text-cyan">Transformam</span> Negócios</h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">Cada solução é construída à medida do teu negócio.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={service.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} whileHover={{ y: -4 }} className="glass rounded-2xl p-8 group cursor-pointer">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl mb-6 group-hover:scale-110 transition-transform" style={{ background: service.color + "15", border: "1px solid " + service.color + "30" }}>
                  <Icon size={24} style={{ color: service.color }} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-white/55 leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-2 mb-6">{service.features.map((ft) => (<li key={ft} className="flex items-center gap-2 text-sm text-white/60"><span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: service.color }} />{ft}</li>))}</ul>
                <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold" style={{ color: service.color }}>Saber Mais <svg width="14" height="14" fill="none" viewBox="0 0 14 14"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}