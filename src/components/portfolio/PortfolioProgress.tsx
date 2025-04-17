'use client';
import { motion } from 'motion/react';

type PortfolioProgressProps = {
  currentIndex: number;
  total: number;
};

const PortfolioProgress = ({ currentIndex, total }: PortfolioProgressProps) => {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 pointer-events-none hidden md:block">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black/75 text-white px-4 py-2 rounded-full flex items-center space-x-3"
      >
        <div className="text-sm">
          Project {currentIndex + 1} of {total}
        </div>
        <div className="w-32 h-1 bg-gray-600 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-primary-500"
            initial={{ width: 0 }}
            animate={{ width: `${((currentIndex + 1) / total) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PortfolioProgress;

