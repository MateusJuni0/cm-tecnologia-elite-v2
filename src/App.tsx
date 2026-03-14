import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
  <section className="py-20 px-10 bg-gray-950 border-b border-gray-800">
    <h2 className="text-4xl font-bold mb-10 text-white">{title}</h2>
    {children}
  </section>
);

const ROICalculator = () => {
  const [leads, setLeads] = useState(100);
  const ROI = leads * 50; 
  return (
    <div className="p-8 bg-gray-900 rounded-2xl border border-indigo-500/30">
      <h3 className="text-2xl mb-4 text-indigo-400">Calculadora de Automação</h3>
      <input type="range" min="10" max="1000" value={leads} onChange={(e) => setLeads(Number(e.target.value))} />
      <p className="mt-4 text-3xl font-bold">Ganho Estimado: R$ {ROI}</p>
    </div>
  );
};

export default function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <nav className="p-6 flex justify-between fixed w-full z-50 backdrop-blur-md">
        <span className="font-bold text-xl">CM Tecnologia</span>
        <div className="space-x-6">
          <a href="#servicos">Serviços</a>
          <a href="#roi">ROI</a>
          <button className="bg-white text-black px-4 py-2 rounded-lg">Contato</button>
        </div>
      </nav>
      
      <main>
        <Section title="Automação Elite V2">
          <p className="text-gray-400 mb-10">A revolução do marketing digital.</p>
          <ROICalculator />
        </Section>
      </main>

      <footer className="py-10 text-center text-gray-600">
        © 2026 CMTecnologia - Elite V2.0
      </footer>
    </div>
  );
}
