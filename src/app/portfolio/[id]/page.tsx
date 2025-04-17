import { notFound } from 'next/navigation';
import ProjectDetail from '@/components/portfolio/ProjectDetail';

// This would typically come from a database or API
const projects = {
  'ecommerce-platform': {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform with advanced features and seamless user experience.',
    category: 'Web Development',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    challenge: 'The client needed a scalable e-commerce solution that could handle high traffic volumes while providing a seamless shopping experience across all devices. They required advanced features such as real-time inventory management, multi-currency support, and integration with various payment gateways.',
    solution: 'We developed a custom e-commerce platform using Next.js for the frontend and Node.js for the backend. The solution includes real-time inventory tracking, automated order processing, and a responsive design that works flawlessly across all devices. We implemented Stripe for secure payment processing and MongoDB for efficient data management.',
    results: [
      'Increased conversion rate by 45%',
      'Reduced page load time by 60%',
      'Improved mobile user engagement by 75%',
      'Successfully processed over 10,000 orders in the first month',
    ],
    links: {
      live: 'https://example-ecommerce.com',
      github: 'https://github.com/techcorp/ecommerce-platform',
    },
  },
  'ai-chatbot': {
    id: 'ai-chatbot',
    title: 'AI Customer Service Bot',
    description: 'Intelligent chatbot system for automated customer support and query resolution.',
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'NLP', 'Docker'],
    challenge: 'The client was experiencing high volumes of customer support requests, leading to longer response times and increased support costs. They needed an automated solution that could handle common queries while maintaining a personal touch.',
    solution: 'We developed an AI-powered chatbot using natural language processing and machine learning. The system can understand context, maintain conversation history, and provide accurate responses to customer queries. It integrates with existing customer support tools and can escalate complex issues to human agents when necessary.',
    results: [
      'Reduced response time by 90%',
      'Automated handling of 70% of customer queries',
      'Achieved 85% customer satisfaction rate',
      'Reduced support costs by 50%',
    ],
    links: {
      live: 'https://example-chatbot.com',
    },
  },
  'mobile-banking': {
    id: 'mobile-banking',
    title: 'Mobile Banking App',
    description: 'Secure and user-friendly mobile banking application with real-time transactions.',
    category: 'App Development',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'AWS'],
    challenge: 'The bank needed a modern mobile banking solution that would provide their customers with secure, instant access to their accounts while meeting strict financial regulations and security requirements.',
    solution: 'We developed a comprehensive mobile banking application using React Native for cross-platform compatibility. The app features biometric authentication, real-time transaction processing, and secure communication protocols. We implemented a microservices architecture for scalability and used AWS for robust cloud infrastructure.',
    results: [
      'Achieved 100,000+ downloads in the first month',
      'Reduced transaction processing time by 75%',
      'Increased mobile banking adoption by 150%',
      'Maintained 99.99% uptime',
    ],
    links: {
      live: 'https://example-banking.com',
    },
  },
  'analytics-dashboard': {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    description: 'Comprehensive analytics dashboard with real-time data visualization and reporting.',
    category: 'Web Development',
    technologies: ['React', 'D3.js', 'GraphQL', 'Firebase'],
    challenge: 'The client needed a powerful analytics platform that could process and visualize large amounts of data in real-time, while providing intuitive insights for non-technical users.',
    solution: 'We created a responsive dashboard using React and D3.js for dynamic data visualization. The application features real-time data updates, customizable widgets, and automated report generation. GraphQL was implemented for efficient data fetching, while Firebase provided reliable real-time capabilities.',
    results: [
      'Reduced data analysis time by 65%',
      'Improved decision-making efficiency by 40%',
      'Increased user engagement by 85%',
      'Successfully processing 1M+ data points daily',
    ],
    links: {
      live: 'https://example-analytics.com',
      github: 'https://github.com/techcorp/analytics-dashboard',
    },
  },
  'iot-platform': {
    id: 'iot-platform',
    title: 'IoT Management Platform',
    description: 'Centralized platform for managing and monitoring IoT devices and data.',
    category: 'Smart Automation',
    technologies: ['Vue.js', 'Python', 'MQTT', 'InfluxDB'],
    challenge: 'The client needed a centralized system to manage thousands of IoT devices across multiple locations, with real-time monitoring and automated response capabilities.',
    solution: 'We developed a comprehensive IoT management platform using Vue.js for the frontend and Python for backend services. The system implements MQTT for efficient device communication and InfluxDB for time-series data storage. Features include real-time device monitoring, automated alerts, and predictive maintenance.',
    results: [
      'Successfully managing 10,000+ connected devices',
      'Reduced device downtime by 80%',
      'Automated 90% of routine maintenance tasks',
      'Improved energy efficiency by 35%',
    ],
    links: {
      live: 'https://example-iot.com',
    },
  },
  'healthcare-app': {
    id: 'healthcare-app',
    title: 'Healthcare Management App',
    description: 'Patient and healthcare provider management system with secure data handling.',
    category: 'App Development',
    technologies: ['Flutter', 'Spring Boot', 'PostgreSQL', 'FHIR'],
    challenge: 'Healthcare providers needed a secure, HIPAA-compliant platform for managing patient data and streamlining healthcare delivery workflows.',
    solution: 'We developed a Flutter-based mobile application with Spring Boot backend, ensuring HIPAA compliance and secure data handling. The system integrates with existing healthcare systems using FHIR standards and provides real-time access to patient records and appointment management.',
    results: [
      'Reduced patient wait times by 40%',
      'Improved appointment scheduling efficiency by 60%',
      'Achieved 95% user satisfaction rate',
      'Successfully managing 50,000+ patient records',
    ],
    links: {
      live: 'https://example-healthcare.com',
    },
  },
  'design-system': {
    id: 'design-system',
    title: 'Enterprise Design System',
    description: 'Comprehensive design system and component library for enterprise applications.',
    category: 'UI/UX Design',
    technologies: ['Figma', 'React', 'Storybook', 'Styled Components'],
    challenge: 'The enterprise needed a consistent design language across multiple applications and teams, with reusable components that would speed up development and ensure brand consistency.',
    solution: 'We created a comprehensive design system in Figma and implemented it as a React component library. The system includes detailed documentation, automated testing, and a Storybook showcase of all components.',
    results: [
      'Reduced development time by 40%',
      'Achieved 100% design consistency across applications',
      'Improved team collaboration efficiency by 50%',
      'Successfully implemented across 10+ enterprise applications',
    ],
    links: {
      github: 'https://github.com/techcorp/design-system',
    },
  },
  'ml-recommendation': {
    id: 'ml-recommendation',
    title: 'ML Recommendation Engine',
    description: 'Advanced recommendation system using machine learning algorithms.',
    category: 'AI/ML',
    technologies: ['Python', 'TensorFlow', 'scikit-learn', 'Redis'],
    challenge: 'The client needed a sophisticated recommendation system that could process user behavior and provide personalized product recommendations in real-time.',
    solution: 'We developed a machine learning-based recommendation engine using collaborative filtering and content-based approaches. The system processes user behavior in real-time and uses Redis for caching to ensure fast response times.',
    results: [
      'Increased conversion rate by 35%',
      'Improved user engagement by 50%',
      'Achieved 95% recommendation accuracy',
      'Processing 1M+ recommendations daily',
    ],
    links: {
      live: 'https://example-recommendations.com',
    },
  },
  'smart-home': {
    id: 'smart-home',
    title: 'Smart Home Automation',
    description: 'Comprehensive home automation system with AI-powered controls.',
    category: 'Smart Automation',
    technologies: ['React', 'Node.js', 'MQTT', 'TensorFlow Lite'],
    challenge: 'The client wanted to create a smart home automation system that could learn from user behavior and automatically adjust home settings for optimal comfort and energy efficiency.',
    solution: 'We developed an AI-powered home automation system that uses machine learning to predict user preferences and automatically adjust lighting, temperature, and other home systems. The solution includes a user-friendly mobile app and voice control integration.',
    results: [
      'Reduced energy consumption by 30%',
      'Improved user comfort satisfaction by 85%',
      'Automated 95% of routine home adjustments',
      'Successfully deployed in 1000+ homes',
    ],
    links: {
      live: 'https://example-smarthome.com',
    },
  },
};

export async function generateMetadata({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects];
  if (!project) return {};

  return {
    title: `${project.title} - TechCorp Portfolio`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound();
  }

  // Convert projects object to array and pass it to ProjectDetail
  const allProjects = Object.values(projects);

  return <ProjectDetail project={project} allProjects={allProjects} />;
}

