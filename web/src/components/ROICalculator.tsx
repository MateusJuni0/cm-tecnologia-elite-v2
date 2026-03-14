"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnimatedNumber({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) {
  return (
    <AnimatePresence mode="wait">
      <motion.span key={value} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.3 }} className="tabular-nums">
        {prefix}{value.toLocaleString("pt-PT")}{suffix}
      </motion.span>
    </AnimatePresence>
  );
}

function Slider({ label, value, min, max, step = 1, suffix = "", onChange }: { label: string; value: number; min: number; max: number; step?: number; suffix?: string; onChange: (v: number) => void; }) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-sm text-white/70">{label}</label>
        <span className="text-sm font-semibold" style={{ color: "#00D4FF" }}>{value}{suffix}</span>
      </div>
      <div className="relative h-2 rounded-full" style={{ background: "rgba(255,255,255,0.1)" }}>
        <div className="absolute left-0 top-0 h-full rounded-full" style={{ width: pct + "%", background: "linear-gradient(to right, #7C3AED, #00D4FF)" }} />
        <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="absolute inset-0 w-full h-full opacity-0 cursor-pointer" style={{ margin: 0 }} />
        <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-[#0A0E1A]" style={{ left: "calc(" + pct + "% - 8px)", background: "#00D4FF", boxShadow: "0 0 10px rgba(0,212,255,0.6)" }} />
      </div>
      <div className="flex justify-between text-xs text-white/30 mt-1"><span>{min}{suffix}</span><span>{max}{suffix}</span></div>
    </div>
  );
}

export default function ROICalculator() {
  const [hours, setHours] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [leads, setLeads] = useState(50);
  const hoursRecoveredPerYear = Math.round(hours * 0.8 * 52);
  const valueRecovered = hoursRecoveredPerYear * hourlyRate;
  const additionalLeads = Math.round(leads * 2.4);
  const investment = 1997;
  const totalValue = valueRecovered + additionalLeads * 150;
  const roi = Math.round(((totalValue - investment * 12) / (investment * 12)) * 100);
  return (
    <section id="roi" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,212,255,0.1), transparent)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#00D4FF" }}>Calculadora de ROI</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Quanto Estás a <span className="gradient-text-cyan">Perder por Mês?</span></h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">Calcula o retorno real da automação para o teu negócio em segundos.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass rounded-2xl p-8 space-y-8">
            <h3 className="text-lg font-semibold text-white">Os Teus Dados</h3>
            <Slider label="Horas por semana em tarefas repetitivas" value={hours} min={1} max={40} suffix="h" onChange={setHours} />
            <div>
              <div className="flex items-center justify-between mb-2"><label className="text-sm text-white/70">Custo hora de trabalho</label><span className="text-sm font-semibold" style={{ color: "#00D4FF" }}>{hourlyRate}€/h</span></div>
              <div className="relative"><span className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 text-sm">€</span><input type="number" min={5} max={500} value={hourlyRate} onChange={(e) => setHourlyRate(Math.max(5, Number(e.target.value)))} className="w-full pl-8 pr-4 py-3 rounded-xl text-white text-sm outline-none" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }} /></div>
            </div>
            <Slider label="Leads qualificados necessários por mês" value={leads} min={10} max={500} step={5} onChange={setLeads} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-4">
            <div className="glass rounded-2xl p-6"><p className="text-sm text-white/50 mb-1">Horas recuperadas por ano</p><p className="text-3xl font-bold" style={{ color: "#00D4FF" }}><AnimatedNumber value={hoursRecoveredPerYear} suffix="h" /></p></div>
            <div className="glass rounded-2xl p-6"><p className="text-sm text-white/50 mb-1">Valor em tempo recuperado</p><p className="text-3xl font-bold" style={{ color: "#00D4FF" }}><AnimatedNumber value={valueRecovered} prefix="€" /></p></div>
            <div className="glass rounded-2xl p-6"><p className="text-sm text-white/50 mb-1">Leads adicionais estimados/mês</p><p className="text-3xl font-bold" style={{ color: "#7C3AED" }}><AnimatedNumber value={additionalLeads} /></p></div>
            <div className="rounded-2xl p-6" style={{ background: "linear-gradient(135deg, rgba(0,212,255,0.1), rgba(124,58,237,0.1))", border: "1px solid rgba(0,212,255,0.3)" }}>
              <p className="text-sm text-white/50 mb-1">ROI Estimado (Ano 1)</p>
              <p className="text-5xl font-bold gradient-text-cyan"><AnimatedNumber value={Math.max(0, roi)} suffix="%" /></p>
              <p className="text-xs text-white/30 mt-2">*Baseado em valores médios dos nossos clientes</p>
            </div>
            <a href="#contact" className="flex w-full items-center justify-center rounded-2xl py-4 text-base font-semibold text-[#0A0E1A]" style={{ background: "#00D4FF", boxShadow: "0 0 30px rgba(0,212,255,0.4)" }}>Quero este resultado →</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}