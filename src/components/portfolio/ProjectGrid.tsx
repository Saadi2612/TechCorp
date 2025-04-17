'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import ProjectFilter from './ProjectFilter';
import ProjectCard from './ProjectCard';

const projects = [
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with advanced features and seamless user experience.',
    category: 'Web Development',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 'ai-chatbot',
    title: 'AI Customer Service Bot',
    description: 'Intelligent chatbot system for automated customer support and query resolution.',
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'NLP', 'Docker'],
  },
  {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application with real-time transactions.',
    category: 'App Development',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics dashboard with real-time data visualization and reporting.',
    category: 'Web Development',
    technologies: ['React', 'D3.js', 'GraphQL', 'Firebase'],
  },
  {
    id: 'iot-platform',
    title: 'IoT Management Platform',
    description: 'Centralized platform for managing and monitoring IoT devices and data.',
    category: 'Smart Automation',
    technologies: ['Vue.js', 'Python', 'MQTT', 'InfluxDB'],
  },
  {
    id: 'healthcare-app',
    title: 'Healthcare Management App',
    description: 'Patient and healthcare provider management system with secure data handling.',
    category: 'App Development',
    technologies: ['Flutter', 'Spring Boot', 'PostgreSQL', 'FHIR'],
  },
  {
    id: 'design-system',
    title: 'Enterprise Design System',
    description: 'Comprehensive design system and component library for enterprise applications.',
    category: 'UI/UX Design',
    technologies: ['Figma', 'React', 'Storybook', 'Styled Components'],
  },
  {
    id: 'ml-recommendation',
    title: 'ML Recommendation Engine',
    description: 'Advanced recommendation system using machine learning algorithms.',
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Redis'],
  },
  {
    id: 'smart-home',
    title: 'Smart Home Automation',
    description: 'Comprehensive home automation system with AI-powered controls.',
    category: 'Smart Automation',
    technologies: ['React', 'Node.js', 'MQTT', 'TensorFlow Lite'],
  },
];

const categories = ['All', 'Web Development', 'App Development', 'AI/ML', 'Smart Automation', 'UI/UX Design'];

const ProjectGrid = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projects.filter(
    (project) => activeCategory === 'All' || project.category === activeCategory
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProjectFilter
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectGrid;

