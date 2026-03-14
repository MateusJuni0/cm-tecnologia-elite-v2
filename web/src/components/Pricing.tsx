"use client";
import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
const plans = [
  { name: "Starter", price: "997€", period: "/mês", description: "Para negócios que querem começar a automatizar com impacto imediato.", features: ["1 automação completa", "Onboarding e configuração", "Suporte por email", "Dashboard de monitorização", "Atualizações mensais"], cta: "Começar Agora", popular: false, color: "#00D4FF" },
  { name: "Growth", price: "1.997€", period: "/mês", description: "Para empresas a escalar com automação e marketing integrados.", features: ["3 automações completas", "Marketing digital incluído", "Geração de leads automatizada", "Suporte prioritário 24/7", "Relatórios semanais de performance", "Reunião mensal de estratégia"], cta: "Escolher Growth", popular: true, color: "#7C3AED" },
  { name: "Enterprise", price: "Personalizado", period: "", description: "Para empresas que precisam de um squad dedicado e resultados à escala.", features: ["Automações ilimitadas", "Squad completo dedicado", "SaaS / app incluído", "Marketing 360°", "SLA garantido", "Account manager dedicado"], cta: "Falar com a Equipa", popular: false, color: "#00D4FF" },
];
export default function Pricing() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ background: "radial-gradient(ellipse 70% 40% at 50% 100%, rgba(124,58,237,0.2), transparent)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#00D4FF" }}>Preços</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Investimento <span className="gradient-text-cyan">Transparente</span></h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">Sem surpresas, sem letras pequenas. Escolhe o plano certo para o teu negócio.</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div key={plan.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className={"relative rounded-2xl p-8 flex flex-col " + (plan.popular ? "scale-105" : "")} style={plan.popular ? { background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(0,212,255,0.08))", border: "1px solid rgba(124,58,237,0.5)", boxShadow: "0 0 40px rgba(124,58,237,0.15)" } : { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}>
              {plan.popular && <div className="absolute -top-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white" style={{ background: "linear-gradient(135deg, #7C3AED, #00D4FF)" }}><Star size={10} fill="white" />Mais Popular</div>}
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <div className="flex items-end gap-1 mb-3"><span className="text-4xl font-extrabold" style={{ color: plan.color }}>{plan.price}</span>{plan.period && <span className="text-white/40 text-sm pb-1">{plan.period}</span>}</div>
                <p className="text-sm text-white/50">{plan.description}</p>
              </div>
              <ul className="space-y-3 mb-8 flex-1">{plan.features.map((feature) => (<li key={feature} className="flex items-start gap-3 text-sm text-white/70"><Check size={16} className="flex-shrink-0 mt-0.5" style={{ color: plan.color }} />{feature}</li>))}</ul>
              <a href="#contact" className="flex w-full items-center justify-center rounded-xl py-3.5 text-sm font-semibold transition-all hover:scale-[1.02]" style={plan.popular ? { background: "linear-gradient(135deg, #7C3AED, #00D4FF)", color: "white" } : { background: "transparent", color: plan.color, border: "1px solid " + plan.color + "40" }}>{plan.cta}</a>
            </motion.div>
          ))}
        </div>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }} className="text-center text-sm text-white/30 mt-10">Todos os planos incluem diagnóstico inicial gratuito • Sem contratos de longa duração • Cancela quando quiseres</motion.p>
      </div>
    </section>
  );
}