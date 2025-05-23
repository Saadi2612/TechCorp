'use client';
import { motion } from 'motion/react';
import Link from 'next/link';

export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 duration-300"
    >
      <Link href={`/portfolio/${project.id}`}>
        <div className="relative aspect-video overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary/80">
            {/* <div className="absolute inset-0 bg-primary-900/[2] bg-[size:20px_20px]" /> */}
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-4xl font-bold text-center text-text-white/70 group-hover:text-text-white transition-colors duration-300 px-4">
              {project.title}
            </div>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-primary mb-2 group-hover:text-secondary-hover transition-colors duration-300">
            {project.title}
          </h3>
          <p className="text-gray-600 mb-4">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-secondary-100 text-gray-500 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProjectCard;

