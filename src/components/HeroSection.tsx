import { scrollToSection } from '../utils/scroll';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white via-green-50/30 to-white"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Private, On-Premise AI for{' '}
          <span className="text-gradient">Mid-Sized Businesses</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
          We build small, secure AI models that run on your hardware — not the cloud.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 text-lg"
          >
            Book a Free Consultation
          </button>
          <button
            onClick={() => scrollToSection('use-cases')}
            className="px-8 py-4 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary hover:text-white transition-all duration-200 text-lg"
          >
            See Use Cases
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

