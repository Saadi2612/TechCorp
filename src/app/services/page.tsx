import ServicesHero from '@/components/services/ServicesHero';
import ServiceDetail from '@/components/services/ServiceDetail';

export const metadata = {
  title: 'Services - TechCorp',
  description: 'Explore our comprehensive range of IT services including app development, web development, AI/ML solutions, UI/UX design, automation, and security services.',
};

export default function Services() {
  return (
    <div className="overflow-hidden">
      <ServicesHero />
      <ServiceDetail />
    </div>
  );
}

