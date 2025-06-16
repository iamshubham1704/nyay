// components/AnimatedStats.tsx
'use client';

import { motion } from 'framer-motion';

export default function AnimatedStats() {
  return (
    <motion.div
      className="flex flex-col sm:flex-row justify-around text-center gap-10 max-w-5xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div>
        <h2 className="text-4xl font-bold text-indigo-700">500+</h2>
        <p className="text-gray-600 mt-2">Cases Solved</p>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-indigo-700">100+</h2>
        <p className="text-gray-600 mt-2">Verified Lawyers</p>
      </div>
      <div>
        <h2 className="text-4xl font-bold text-indigo-700">24x7</h2>
        <p className="text-gray-600 mt-2">Legal Support</p>
      </div>
    </motion.div>
  );
}
