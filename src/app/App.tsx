import { OrbitalHero } from './components/OrbitalHero';
import { MissionSection } from './components/MissionSection';
import { SystemsOverview } from './components/SystemsOverview';
import { LiveDataSection } from './components/LiveDataSection';
import { ClientsSection } from './components/ClientsSection';
import { SecuritySection } from './components/SecuritySection';
import { CaseStudy } from './components/CaseStudy';
import { DeveloperAPI } from './components/DeveloperAPI';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-['Inter']">
      <OrbitalHero />
      <MissionSection />
      <SystemsOverview />
      <LiveDataSection />
      <ClientsSection />
      <SecuritySection />
      <CaseStudy />
      <DeveloperAPI />
      <FinalCTA />
      <Footer />
    </div>
  );
}
