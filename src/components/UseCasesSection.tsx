const UseCasesSection = () => {
  const useCases = [
    {
      industry: 'Legal',
      title: 'Legal Document Automation',
      description: 'Classify and route incoming legal documents, or auto-generate concise case summaries.',
      color: 'from-blue-500 to-blue-600',
    },
    {
      industry: 'Accounting & Finance',
      title: 'Financial Report Processing',
      description: 'Summarize financial reports, extract key metrics, and organize client documents.',
      color: 'from-green-500 to-green-600',
    },
    {
      industry: 'Healthcare Admin',
      title: 'Healthcare Documentation',
      description: 'Detect and redact PII/PHI, classify intake forms, and streamline billing documentation.',
      color: 'from-red-500 to-red-600',
    },
    {
      industry: 'Support & Operations',
      title: 'Ticket Management',
      description: 'Automatically categorize and prioritize support tickets and internal requests.',
      color: 'from-purple-500 to-purple-600',
    },
  ];

  return (
    <section id="use-cases" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          Examples of What We Build
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${useCase.color} mr-3`} />
                <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                  {useCase.industry}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{useCase.title}</h3>
              <p className="text-gray-600 leading-relaxed">{useCase.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;

