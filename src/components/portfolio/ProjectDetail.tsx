'use client';
import { motion } from 'motion/react';
import Link from 'next/link';
import { FaArrowLeft, FaGlobe, FaGithub } from 'react-icons/fa';
import RelatedProjects from './RelatedProjects';
import ProjectNavigation from './ProjectNavigation';
import TableOfContents from './TableOfContents';
import ReadingProgress from './ReadingProgress';
import BackToTop from './BackToTop';

type ProjectDetailProps = {
  project: {
    id: string;
    title: string;
    description: string;
    category: string;
    technologies: string[];
    challenge: string;
    solution: string;
    results: string[];
    links?: {
      live?: string;
      github?: string;
    };
  };
  allProjects: Array<{
    id: string;
    title: string;
    description: string;
    category: string;
    technologies: string[];
  }>;
};

const ProjectDetail = ({ project, allProjects }: ProjectDetailProps) => {
  return (
    <>
      <ReadingProgress />
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-4 lg:gap-8">
            <div className="lg:col-span-3">
              <div className="mb-8">
                <Link 
                  href="/portfolio"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700"
                >
                  <FaArrowLeft className="mr-2" />
                  Back to Portfolio
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-12">
                  <h1 className="text-4xl font-bold text-text mb-4">{project.title}</h1>
                  <p className="text-xl text-gray-600">{project.description}</p>
                </div>

                <div className="grid gap-12">
                  <section id="challenge">
                    <h2 className="text-2xl font-semibold text-secondary-900 mb-4">The Challenge</h2>
                    <p className="text-gray-600">{project.challenge}</p>
                  </section>

                  <section id="solution">
                    <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Our Solution</h2>
                    <p className="text-gray-600">{project.solution}</p>
                  </section>

                  <section id="technologies">
                    <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Technologies Used</h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </section>

                  <section id="results">
                    <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Key Results</h2>
                    <ul className="space-y-3">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-center text-gray-600">
                          <span className="h-2 w-2 bg-primary-500 rounded-full mr-3" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </section>

                  {project.links && (
                    <section id="links">
                      <h2 className="text-2xl font-semibold text-secondary-900 mb-4">Project Links</h2>
                      <div className="flex gap-4">
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                          >
                            <FaGlobe className="mr-2" />
                            Live Demo
                          </a>
                        )}
                        {project.links.github && (
                          <a
                            href={project.links.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-secondary-800 text-white rounded-lg hover:bg-secondary-900 transition-colors"
                          >
                            <FaGithub className="mr-2" />
                            View Code
                          </a>
                        )}
                      </div>
                    </section>
                  )}
                </div>
              </motion.div>

              <ProjectNavigation
                currentProjectId={project.id}
                allProjects={allProjects}
              />
            </div>

            <div className="hidden lg:block">
              <TableOfContents />
            </div>
          </div>
        </div>
      </article>
      
      <RelatedProjects
        currentProjectId={project.id}
        category={project.category}
        allProjects={allProjects}
      />
      <BackToTop />
    </>
  );
};

export default ProjectDetail;

