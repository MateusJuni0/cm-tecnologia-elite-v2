import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="h-screen flex flex-col justify-center items-center bg-gray-950 text-white"
  >
    <h1 className="text-6xl font-bold mb-6">Automação Elite V2</h1>
    <p className="text-xl text-gray-400">Escala teus leads com inteligência real.</p>
    <motion.button
      whileHover={{ scale: 1.05 }}
      className="mt-8 px-8 py-4 bg-indigo-600 rounded-full font-bold"
    >
      Calcular ROI
    </motion.button>
  </motion.div>
);

export default Hero;
