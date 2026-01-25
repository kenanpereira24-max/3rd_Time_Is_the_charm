import { ArrowRight, Sparkles } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          </div>

          {/* Content */}
          <div className="relative px-8 py-16 sm:px-16 sm:py-20 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm mb-6">
              <Sparkles size={16} />
              <span>Limited Time Offer</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>

            <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-10">
              Join thousands of successful businesses already using our platform. 
              Start your free trial today and see the difference for yourself.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors gap-2 font-semibold">
                Start Free Trial
                <ArrowRight size={20} />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white border-2 border-white rounded-lg hover:bg-white/10 transition-colors font-semibold">
                Schedule a Demo
              </button>
            </div>

            <p className="text-sm text-blue-100 mt-6">
              No credit card required • Free 14-day trial • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
