"use client";
import { motion } from "framer-motion";
export default function FinalCTA() {
  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.06), rgba(124,58,237,0.08), rgba(0,212,255,0.04))" }} />
      <div className="absolute top-0 left-0 right-0 h-px pointer-events-none" style={{ background: "linear-gradient(to right, transparent, rgba(0,212,255,0.4), rgba(124,58,237,0.4), transparent)" }} />
      <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: "#00D4FF" }} />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full opacity-10 blur-[100px] pointer-events-none" style={{ background: "#7C3AED" }} />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium mb-8 border" style={{ borderColor: "rgba(0,212,255,0.3)", color: "#00D4FF", background: "rgba(0,212,255,0.08)" }}>
            <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#00D4FF" }} /><span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#00D4FF" }} /></span>
            Diagnósticos disponíveis esta semana
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6">
            Pronto para Parar de{" "}
            <br className="hidden md:block" />
            <span className="gradient-text-cyan">Fazer Tudo Manualmente?</span>
          </h2>
          <p className="text-xl text-white/55 mb-10 max-w-2xl mx-auto leading-relaxed">
            Agenda uma chamada de diagnóstico gratuita. Em 60 minutos identificamos as 3 maiores oportunidades de automação no teu negócio — sem compromisso.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <motion.a href="mailto:hello@cmtecnologia.pt" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }} className="inline-flex items-center gap-3 rounded-full px-10 py-5 text-lg font-semibold text-[#0A0E1A]" style={{ background: "#00D4FF", boxShadow: "0 0 40px rgba(0,212,255,0.5)" }}>
              Agendar Diagnóstico Gratuito
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M4 10h12M12 6l4 4-4 4" stroke="#0A0E1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </motion.a>
          </div>
          <p className="text-sm text-white/30">É grátis. Sem compromisso. Resposta em menos de 24h.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-6 mt-16">
          {["✓ Sem contratos longos", "✓ Entrega em 48-72h", "✓ Suporte incluído", "✓ 127+ empresas confiaram em nós"].map((item) => (<span key={item} className="text-sm text-white/40">{item}</span>))}
        </motion.div>
      </div>
    </section>
  );
}