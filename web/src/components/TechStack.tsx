"use client";
import { motion } from "framer-motion";
const techItems = [
  { name: "n8n", description: "Workflow automation", color: "#E25B2A" },
  { name: "Supabase", description: "Open source Firebase", color: "#3ECF8E" },
  { name: "React", description: "UI library", color: "#61DAFB" },
  { name: "Next.js", description: "React framework", color: "#FFFFFF" },
  { name: "OpenAI", description: "AI models", color: "#FFFFFF" },
  { name: "Telegram", description: "Bot automation", color: "#26A5E4" },
  { name: "Vercel", description: "Deployment platform", color: "#FFFFFF" },
  { name: "Docker", description: "Containerization", color: "#2496ED" },
];
export default function TechStack() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest uppercase mb-4" style={{ color: "#00D4FF" }}>Stack Tecnológica</p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">As Ferramentas que <span className="gradient-text-cyan">Usamos</span></h2>
          <p className="text-lg text-white/50 max-w-xl mx-auto">Tecnologia de ponta, escolhida a dedo para entregar resultados sem compromissos.</p>
        </motion.div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {techItems.map((tech, i) => (
            <motion.div key={tech.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.07 }} whileHover={{ y: -4 }} className="glass rounded-2xl p-6 flex flex-col items-center gap-3 text-center hover:border-[#00D4FF]/20 cursor-default">
              <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-bold" style={{ background: tech.color + "20", color: tech.color, border: "1px solid " + tech.color + "30" }}>{tech.name.slice(0, 2)}</div>
              <div><div className="font-semibold text-white text-sm">{tech.name}</div><div className="text-xs text-white/40 mt-0.5">{tech.description}</div></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}