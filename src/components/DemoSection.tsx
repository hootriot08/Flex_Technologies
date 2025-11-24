const DemoSection = () => {
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
          <div className="mb-8">
            <video
              className="w-full rounded-lg shadow-lg"
              controls
              poster=""
            >
              <source src="/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
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

