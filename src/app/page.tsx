import Nav from '@/components/Nav';
import HeroSection from '@/components/HeroSection';
import TimelineSection from '@/components/TimelineSection';
import ProjectsSection from '@/components/ProjectsSection';
import InvestorSection from '@/components/InvestorSection';
import MetricsSection from '@/components/MetricsSection';
import ContentSection from '@/components/ContentSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <HeroSection />
        <TimelineSection />
        <ProjectsSection />
        <InvestorSection />
        <MetricsSection />
        <ContentSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
