"use client";
import { motion } from "framer-motion";
import { Search, Cpu, Rocket } from "lucide-react";
const steps = [
  { icon: Search, title: "Diagnóstico", description: "Analisamos os teus processos de negócio em detalhe. Identificamos onde estás a perder tempo e dinheiro — e onde a automação tem maior impacto.", detail: "Reunião de 60 min + relatório completo", color: "#00D4FF" },
  { icon: Cpu, title: "Arquitectura", description: "Desenhamos a solução técnica completa — workflows, integrações, triggers e dashboards. Apresentamos o plano antes de escrever código.", detail: "Proposta técnica detalhada incluída", color: "#7C3AED" },
  { icon: Rocket, title: "Entrega", description: "Implementamos, testamos e colocamos em produção em 48 a 72 horas. Formão completa da tua equipa e suporte pós-entrega garantido.", detail: "Live em 48-72h, garantido", color: "#00D4FF" },
];
export default function HowItWorks() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#00D4FF" }}>Como Trabalhamos</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">3 Passos para a <span className="gradient-text-cyan">Automação Total</span></h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto">Um processo simples, rápido e sem surpresas.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div key={step.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.15 }} className="flex flex-col items-center text-center">
                <div className="relative mb-8">
                  <div className="w-32 h-32 rounded-full flex items-center justify-center" style={{ background: "radial-gradient(circle, " + step.color + "10 0%, transparent 70%)", border: "1px solid " + step.color + "25" }}>
                    <div className="w-20 h-20 rounded-full flex items-center justify-center" style={{ background: step.color + "15", border: "1px solid " + step.color + "40" }}>
                      <Icon size={28} style={{ color: step.color }} />
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-[#0A0E1A]" style={{ background: step.color }}>{i + 1}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/55 leading-relaxed mb-4">{step.description}</p>
                <div className="inline-flex rounded-full px-4 py-1.5 text-xs font-medium" style={{ background: step.color + "15", color: step.color, border: "1px solid " + step.color + "25" }}>{step.detail}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}