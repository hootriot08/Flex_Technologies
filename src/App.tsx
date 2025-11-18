import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import OnPremSection from './components/OnPremSection';
import UseCasesSection from './components/UseCasesSection';
import FounderSection from './components/FounderSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ServicesSection />
        <ProcessSection />
        <OnPremSection />
        <UseCasesSection />
        <FounderSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

