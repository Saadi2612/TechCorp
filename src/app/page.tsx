import Hero from '@/components/home/Hero';
import ServicesOverview from '@/components/home/ServicesOverview';
import MetricsSection from '@/components/home/MetricsSection';
import ContactSection from '@/components/home/ContactSection';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="relative">
        <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-primary/15 to-transparent" />
        <ServicesOverview />
      </div>
      <MetricsSection />
      <ContactSection />
    </div>
  );
}
