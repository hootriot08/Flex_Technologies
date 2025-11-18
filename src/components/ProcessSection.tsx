const ProcessSection = () => {
  const steps = [
    {
      number: '1',
      title: 'Discover',
      description: 'We identify a single, repetitive, high-impact workflow.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
    },
    {
      number: '2',
      title: 'Prepare',
      description: 'We clean and structure your historical data.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      number: '3',
      title: 'Fine-Tune',
      description: 'We train a specialist small model on your data.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      number: '4',
      title: 'Deploy On-Prem',
      description: 'We install and integrate the model on your server or private cloud.',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
  ];

  return (
    <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-primary-light to-primary z-0" style={{ width: 'calc(100% - 4rem)', marginLeft: '4rem' }} />
              )}
              <div className="relative z-10 bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary-light to-primary text-white font-bold text-2xl mb-6 mx-auto">
                  {step.number}
                </div>
                <div className="text-primary mb-4 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

