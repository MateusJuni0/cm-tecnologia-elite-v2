"use client";
import { motion } from "framer-motion";

function AIOrb() {
  const floatItems = [
    { x: -110, y: -80, delay: 0, label: "n8n" },
    { x: 120, y: -60, delay: 1.5, label: "AI" },
    { x: -100, y: 80, delay: 0.8, label: "API" },
    { x: 110, y: 90, delay: 2, label: "CRM" },
  ];
  return (
    <div className="relative flex items-center justify-center select-none" style={{ width: 500, height: 500 }}>
      <motion.div className="absolute rounded-full border border-[#00D4FF]/10" style={{ width: 480, height: 480 }} animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute rounded-full border border-[#7C3AED]/15" style={{ width: 380, height: 380 }} animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute" style={{ width: 380, height: 380 }} animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
        <div className="absolute rounded-full" style={{ width: 12, height: 12, background: "#00D4FF", top: 0, left: "50%", transform: "translateX(-50%)", boxShadow: "0 0 12px #00D4FF" }} />
      </motion.div>
      <motion.div className="relative" animate={{ y: [0, -18, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}>
        <div className="absolute rounded-full pulse-glow" style={{ width: 220, height: 220, top: "50%", left: "50%", transform: "translate(-50%, -50%)", background: "radial-gradient(circle, rgba(0,212,255,0.3) 0%, transparent 70%)", filter: "blur(20px)" }} />
        <div className="relative rounded-full flex items-center justify-center" style={{ width: 180, height: 180, background: "radial-gradient(circle at 35% 35%, rgba(0,212,255,0.25) 0%, rgba(10,14,26,0.9) 100%)", border: "1px solid rgba(0,212,255,0.4)", boxShadow: "0 0 40px rgba(0,212,255,0.3)" }}>
          <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 3, repeat: Infinity }}>
            <div style={{ width: 60, height: 60, borderRadius: "50%", background: "rgba(0,212,255,0.2)", border: "2px solid #00D4FF", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#00D4FF" }} />
            </div>
          </motion.div>
        </div>
      </motion.div>
      {floatItems.map(({ x, y, delay, label }) => (
        <motion.div key={label} className="absolute glass rounded-lg px-3 py-1.5 text-xs font-mono border border-[#00D4FF]/20" style={{ left: "calc(50% + " + x + "px)", top: "calc(50% + " + y + "px)", transform: "translate(-50%,-50%)" }} animate={{ y: [0, -8, 0] }} transition={{ duration: 4, repeat: Infinity, delay }}>
          <span style={{ color: "#00D4FF" }}>{label}</span>
        </motion.div>
      ))}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center grid-bg overflow-hidden">
      <div className="absolute -top-40 -left-40 rounded-full opacity-20 blur-[120px] pointer-events-none" style={{ width: 600, height: 600, background: "radial-gradient(circle, #00D4FF, transparent)" }} />
      <div className="absolute -bottom-40 -right-40 rounded-full opacity-15 blur-[120px] pointer-events-none" style={{ width: 500, height: 500, background: "radial-gradient(circle, #7C3AED, transparent)" }} />
      <div className="relative mx-auto max-w-7xl px-6 pt-28 pb-16 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
          <div className="flex-1 max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 text-xs font-medium mb-6 border border-[#00D4FF]/20">
              <span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "#00D4FF" }} /><span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#00D4FF" }} /></span>
              <span style={{ color: "#00D4FF" }}>Automação de Elite para Empresas Portuguesas</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-6">
              Automatizamos o{" "}
              <span className="gradient-text-cyan">Teu Negócio.</span>
              <br />
              <span className="text-white">Tu Cresces.</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="text-lg text-white/60 leading-relaxed mb-8 max-w-xl">
              Da geração de leads ao marketing digital — a CMTecnologia transforma processos manuais em máquinas de crescimento autónomas.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-[#0A0E1A] hover:scale-105 transition-transform" style={{ background: "#00D4FF", boxShadow: "0 0 30px rgba(0,212,255,0.5)" }}>
                Ver Demo Grátis
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-semibold text-white hover:bg-white/5 transition-colors border border-white/20">
                Conhecer Serviços
              </a>
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.5 }} className="mt-10 flex items-center gap-4">
              <div className="flex -space-x-2">{["#00D4FF", "#7C3AED", "#00D4FF", "#7C3AED"].map((color, i) => (<div key={i} className="w-8 h-8 rounded-full border-2 border-[#0A0E1A] flex items-center justify-center text-xs font-bold" style={{ background: color + "30", color }}>{String.fromCharCode(65 + i)}</div>))}</div>
              <div className="text-sm text-white/50"><span className="text-white font-semibold">127+</span> empresas já automatizadas</div>
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="flex-1 flex items-center justify-center">
            <AIOrb />
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(transparent, #0A0E1A)" }} />
    </section>
  );
}
