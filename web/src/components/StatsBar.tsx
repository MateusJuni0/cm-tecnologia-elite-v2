"use client";
import { motion } from "framer-motion";
const stats = [
  { value: "127+", label: "Empresas Automatizadas" },
  { value: "3.2M€", label: "em Receita Gerada para Clientes" },
  { value: "89%", label: "Redução em Tarefas Manuais" },
  { value: "48h", label: "Tempo Médio de Entrega" },
];
export default function StatsBar() {
  return (
    <section className="relative py-12">
      <div className="absolute inset-0" style={{ background: "rgba(0,212,255,0.03)", borderTop: "1px solid rgba(0,212,255,0.1)", borderBottom: "1px solid rgba(0,212,255,0.1)" }} />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="text-center">
              <div className="text-3xl md:text-4xl font-bold mb-1" style={{ color: "#00D4FF" }}>{stat.value}</div>
              <div className="text-sm text-white/50">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}