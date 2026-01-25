import { Check } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const benefits = [
  'Intuitive and easy-to-use interface',
  '24/7 dedicated customer support',
  'Regular updates and new features',
  'Comprehensive documentation',
  'Free trial with no credit card required',
  '99.9% uptime guarantee',
];

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1753162658596-2ccba5e4246a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2ODAyNjk1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Team collaboration"
                className="w-full h-auto"
              />
            </div>

            {/* Decorative Elements */}
            <div className="hidden lg:block absolute -top-6 -right-6 w-32 h-32 bg-blue-200 rounded-full opacity-50 blur-3xl"></div>
            <div className="hidden lg:block absolute -bottom-6 -left-6 w-32 h-32 bg-purple-200 rounded-full opacity-50 blur-3xl"></div>
          </div>

          {/* Right Content */}
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm">
              Why Choose Us
            </div>

            <h2 className="text-4xl font-bold text-gray-900">
              Trusted by Thousands of Businesses Worldwide
            </h2>

            <p className="text-lg text-gray-600">
              We're committed to helping businesses of all sizes achieve their goals. 
              Our platform combines powerful features with simplicity, making it easy 
              for anyone to get started and succeed.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <Check className="text-green-600" size={16} />
                  </div>
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Learn More About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
