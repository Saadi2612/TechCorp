'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';

const sections = [
  { id: 'challenge', label: 'The Challenge' },
  { id: 'solution', label: 'Our Solution' },
  { id: 'technologies', label: 'Technologies Used' },
  { id: 'results', label: 'Key Results' },
  { id: 'links', label: 'Project Links' },
];

const TableOfContents = () => {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="sticky top-24 hidden lg:block"
    >
      <h3 className="text-sm font-semibold text-gray-500 mb-4">On this page</h3>
      <nav className="space-y-2">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`block text-sm py-1 duration-150 ${
              activeSection === id
                ? 'text-secondary-600 font-medium'
                : 'text-gray-600 hover:text-secondary-600 -translate-x-2'
            }`}
            onClick={(e) => {
              e.preventDefault();
                const element = document.getElementById(id);
                if (element) {
                const offset = 80; // Adjust this value as needed
                const top = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top, behavior: 'smooth' });
                }
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </motion.div>
  );
};

export default TableOfContents;

