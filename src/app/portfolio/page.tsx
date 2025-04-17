import PortfolioHero from '@/components/portfolio/PortfolioHero';
import ProjectGrid from '@/components/portfolio/ProjectGrid';

export const metadata = {
  title: 'Portfolio - TechCorp',
  description: 'Explore our successful projects and see how we\'ve helped businesses achieve their digital goals.',
};

export default function Portfolio() {
  return (
    <div className="overflow-hidden">
      <PortfolioHero />
      <ProjectGrid />
    </div>
  );
}

