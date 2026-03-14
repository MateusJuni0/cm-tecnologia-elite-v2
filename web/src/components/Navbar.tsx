"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrollY } = useScroll();
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const links = [
    { label: "Serviços", href: "#services" },
    { label: "Casos de Sucesso", href: "#cases" },
    { label: "Calculadora ROI", href: "#roi" },
    { label: "Contacto", href: "#contact" },
  ];
  return (
    <motion.header className="fixed top-0 left-0 right-0 z-50" initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
      <motion.div className="absolute inset-0 glass" style={{ opacity: bgOpacity }} />
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-1 text-xl font-bold">
          <span style={{ color: "#00D4FF" }}>CM</span><span className="text-white">Tecnologia</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <li key={link.href}><a href={link.href} className="text-sm text-white/70 hover:text-[#00D4FF] transition-colors">{link.label}</a></li>
          ))}
        </ul>
        <div className="hidden md:block">
          <a href="#contact" className="rounded-full px-5 py-2.5 text-sm font-semibold text-[#0A0E1A] hover:scale-105 transition-transform" style={{ background: "#00D4FF", boxShadow: "0 0 20px rgba(0,212,255,0.4)" }}>Começar Agora</a>
        </div>
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>{mobileOpen ? <X size={24} /> : <Menu size={24} />}</button>
      </nav>
      {mobileOpen && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="glass md:hidden px-6 py-4">
          <ul className="flex flex-col gap-4 mb-4">{links.map((link) => (<li key={link.href}><a href={link.href} className="text-white/70 hover:text-[#00D4FF]" onClick={() => setMobileOpen(false)}>{link.label}</a></li>))}</ul>
          <a href="#contact" className="flex w-full justify-center rounded-full py-3 text-sm font-semibold text-[#0A0E1A]" style={{ background: "#00D4FF" }} onClick={() => setMobileOpen(false)}>Começar Agora</a>
        </motion.div>
      )}
    </motion.header>
  );
}