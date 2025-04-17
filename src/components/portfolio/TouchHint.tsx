'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

type TouchHintProps = {
  hasPrev: boolean;
  hasNext: boolean;
};

const TouchHint = ({ hasPrev, hasNext }: TouchHintProps) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!hasPrev && !hasNext) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 pointer-events-none lg:hidden"
        >
          <div className="bg-black/75 text-white px-4 py-2 rounded-full flex items-center space-x-3 text-sm whitespace-nowrap">
            {hasPrev && <FaChevronLeft className="text-gray-400" />}
            <span>Swipe to navigate</span>
            {hasNext && <FaChevronRight className="text-gray-400" />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default TouchHint;

