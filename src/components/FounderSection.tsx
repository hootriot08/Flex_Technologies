const FounderSection = () => {
  return (
    <section id="founder" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          About the Founder
        </h2>
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src="/self.png"
                alt="Atharva Vaze"
                className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary/20 shadow-lg"
                onError={(e) => {
                  // Fallback if image doesn't load
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
                loading="eager"
              />
            </div>
            
            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Atharva Vaze
              </h3>
              <p className="text-lg text-primary font-semibold mb-6">
                Founder, Flex Technologies
              </p>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Atharva is a high school founder building specialized, on-premise AI systems 
                  that solve real business problems. He trained a Llama 3.1 8B model on{' '}
                  <strong>2×H100 GPUs</strong> in a high-performance computing environment at the 
                  University of Missouri (Mizzou HPC) under Dr. Kuntara P.
                </p>
                <p>
                  His work includes building models to predict EPS (earnings per share) beats/misses 
                  from financial transcripts, demonstrating the practical value of fine-tuned AI for 
                  business intelligence.
                </p>
                <p>
                  Today, Atharva focuses on making practical, private AI tools accessible to law firms, 
                  finance companies, healthcare organizations, and other high-compliance sectors that 
                  need secure, on-premise solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;

