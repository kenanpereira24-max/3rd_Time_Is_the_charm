import { Zap, Shield, Rocket, Users, Globe, BarChart } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience blazing fast performance with our optimized infrastructure and cutting-edge technology.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
  },
  {
    icon: Shield,
    title: 'Secure & Safe',
    description: 'Bank-level security with end-to-end encryption to keep your data protected at all times.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
  },
  {
    icon: Rocket,
    title: 'Easy to Scale',
    description: 'Grow your business without limits. Our platform scales seamlessly with your needs.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together in real-time with powerful collaboration tools and seamless workflows.',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Connect with customers worldwide with multi-language support and global infrastructure.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100',
  },
  {
    icon: BarChart,
    title: 'Advanced Analytics',
    description: 'Make data-driven decisions with comprehensive analytics and insightful reports.',
    color: 'text-pink-600',
    bgColor: 'bg-pink-100',
  },
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600">
            Powerful features designed to help you work smarter, not harder. 
            Build, launch, and scale with confidence.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-white border border-gray-200 rounded-2xl hover:shadow-xl hover:border-blue-300 transition-all duration-300"
              >
                <div className={`inline-flex items-center justify-center w-14 h-14 ${feature.bgColor} rounded-xl mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`${feature.color}`} size={28} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
