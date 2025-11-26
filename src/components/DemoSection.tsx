import { useState, useEffect } from 'react';

const DemoSection = () => {
  const images = [
    '/demo-1.png',
    '/demo-2.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">
          <span className="text-primary">Live Demo</span>
        </h2>
        <p className="text-center text-gray-600 mb-12 text-lg max-w-3xl mx-auto">
          See our AI automation in action
        </p>
        
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="mb-8 relative">
            {/* Image Slideshow */}
            <div className="relative w-full rounded-lg shadow-lg overflow-hidden bg-gray-100">
              <div className="relative aspect-video">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Demo screenshot ${index + 1}`}
                    className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-500 ${
                      index === currentIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Previous image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                aria-label="Next image"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      index === currentIndex
                        ? 'bg-primary w-8'
                        : 'bg-white/60 hover:bg-white/80'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              End-to-End AI Automation System
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6 text-lg">
              This demo showcases a complete end-to-end AI automation pipeline that takes raw customer messages, processes them through a fine-tuned LLaMA model using Ollama, classifies the issue, assigns urgency levels, determines the correct company-specific department, generates clean summaries, and automatically pushes the results into structured systems like Google Sheets — all running privately on local hardware with zero cloud costs.
            </p>
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-primary">
              <p className="text-gray-800 leading-relaxed">
                <strong className="text-primary">Fine-Tuned for Your Business:</strong> The model was trained on a synthetic dataset specifically designed with your company's unique department structure and issue categories, ensuring accurate routing and classification tailored to your organizational needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;

