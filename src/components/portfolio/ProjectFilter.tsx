'use client';
import { motion } from 'motion/react';

type ProjectFilterProps = {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
};

const ProjectFilter = ({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((category) => (
        <motion.button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
            activeCategory === category
              ? 'bg-secondary text-text-black'
              : 'bg-secondary-100 text-gray-500 hover:bg-secondary'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {category}
        </motion.button>
      ))}
    </div>
  );
};

export default ProjectFilter;

