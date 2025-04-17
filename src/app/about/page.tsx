import AboutHero from '@/components/about/AboutHero';
import CompanyStory from '@/components/about/CompanyStory';
import Values from '@/components/about/Values';

export const metadata = {
  title: 'About Us - TechCorp',
  description: 'Learn about our journey, values, and the team behind TechCorp\'s innovative IT solutions.',
};

export default function About() {
  return (
    <div className="overflow-hidden">
      <AboutHero />
      <CompanyStory />
      <Values />
    </div>
  );
}

