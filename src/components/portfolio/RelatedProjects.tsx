'use client';
import { motion } from 'motion/react';
import Link from 'next/link';

type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  technologies: string[];
};

type RelatedProjectsProps = {
  currentProjectId: string;
  category: string;
  allProjects: Project[];
};

const RelatedProjects = ({ currentProjectId, category, allProjects }: RelatedProjectsProps) => {
  const relatedProjects = allProjects
    .filter(project => project.category === category && project.id !== currentProjectId)
    .slice(0, 3);

  if (relatedProjects.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-primary mb-8">Related Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link href={`/portfolio/${project.id}`}>
                <div className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 duration-300 p-6">
                  <h3 className="text-lg font-semibold text-secondary-600 mb-2 hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 2).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProjects;

