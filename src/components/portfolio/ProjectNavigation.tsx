'use client';
import Link from 'next/link';
import { motion } from 'motion/react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

type Project = {
  id: string;
  title: string;
  category: string;
};

type ProjectNavigationProps = {
  currentProjectId: string;
  allProjects: Project[];
};

const ProjectNavigation = ({ currentProjectId, allProjects }: ProjectNavigationProps) => {
  const currentIndex = allProjects.findIndex(p => p.id === currentProjectId);
  const prevProject = currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <nav className="border-t border-secondary-100 mt-16 pt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {prevProject ? (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <Link
                href={`/portfolio/${prevProject.id}`}
                className="group flex items-center text-gray-600 hover:text-primary"
              >
                <FaArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
                <div>
                  <div className="text-sm text-gray-500">Previous Project</div>
                  <div className="font-medium">{prevProject.title}</div>
                  <div className="text-sm text-secondary-600">{prevProject.category}</div>
                </div>
              </Link>
            </motion.div>
          ) : (
            <div className="flex-1" />
          )}

          <div className="mx-4">
            <Link
              href="/portfolio"
              className="text-secondary-600 hover:text-secondary-600/80 font-medium"
            >
              All Projects
            </Link>
          </div>

          {nextProject ? (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1 text-right"
            >
              <Link
                href={`/portfolio/${nextProject.id}`}
                className="group flex items-center justify-end text-gray-600 hover:text-primary"
              >
                <div>
                  <div className="text-sm text-gray-500">Next Project</div>
                  <div className="font-medium">{nextProject.title}</div>
                  <div className="text-sm text-secondary-600">{nextProject.category}</div>
                </div>
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          ) : (
            <div className="flex-1" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default ProjectNavigation;

