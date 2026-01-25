import { Users, Trophy, Lightbulb, Rocket, Heart, Zap } from 'lucide-react';
import { RetroHeading, PixelDot } from './ArcadeElements';
import { FadeInUp, StaggerContainer, StaggerItem } from './ScrollAnimations';

const highlights = [
  {
    icon: Users,
    title: '500+ Attendees',
    description: 'Connect with tech enthusiasts from around the world',
    color: '#93C5FD',
  },
  {
    icon: Trophy,
    title: 'Amazing Prizes',
    description: 'Win incredible prizes',
    color: '#FDE047',
  },
  {
    icon: Lightbulb,
    title: '30+ Workshops',
    description: 'Hands-on learning from industry experts',
    color: '#F0ABFC',
  },
  {
    icon: Rocket,
    title: 'Startup Pitches',
    description: 'Showcase your ideas to top investors',
    color: '#86EFAC',
  },
  {
    icon: Heart,
    title: 'Networking',
    description: 'Build lasting connections with peers',
    color: '#FCA5A5',
  },
  {
    icon: Zap,
    title: 'Live Demos',
    description: 'See cutting-edge tech in action',
    color: '#C4B5FD',
  },
];

export function AboutEvent() {
  return (
    <section id="about" className="py-20 relative" style={{ backgroundColor: '#F9FAFB' }}>
      {/* Pixel Grid Background */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.1) 2px, transparent 2px)',
        backgroundSize: '30px 30px',
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <FadeInUp>
            <RetroHeading size="medium" className="mb-8 text-yellow-400">
              ABOUT FOOBAR 10.0
            </RetroHeading>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-black leading-relaxed bg-cyan-400 p-8 border-4 border-black" style={{ 
              fontFamily: 'system-ui, sans-serif',
              boxShadow: '8px 8px 0px rgba(0,0,0,1)',
              clipPath: `polygon(
                0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
              )`
            }}>
              FOOBAR 10.0 is more than just an event—it's a movement! We bring together innovators, 
              developers, designers, and entrepreneurs for three days of learning, building, and 
              celebrating technology. Whether you're a beginner or a seasoned pro, there's 
              something here for everyone.
            </p>
          </FadeInUp>
        </div>

        {/* Highlights Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <StaggerItem key={index}>
                <div className="group relative p-6 hover:-translate-y-2 transition-all duration-300 border-4 border-black" style={{ 
                  backgroundColor: highlight.color,
                  boxShadow: '8px 8px 0px rgba(0,0,0,1)',
                  clipPath: `polygon(
                    0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                    calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                    100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                    8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
                  )`
                }}>
                  {/* Scanline effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-20" style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
                  }}></div>
                  
                  <div className="relative z-10">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-black mb-4 group-hover:scale-110 transition-transform" style={{
                      clipPath: `polygon(
                        0 4px, 4px 4px, 4px 0,
                        calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                        100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                        4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                      )`
                    }}>
                      <Icon className="text-white" size={32} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-black mb-2" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.6', fontSize: '0.9rem' }}>
                      {highlight.title}
                    </h3>
                    
                    <p className="text-gray-900">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* What to Expect */}
        <FadeInUp delay={0.4}>
          <div className="relative bg-cyan-400 p-8 md:p-12 overflow-hidden border-4 border-black" style={{
            boxShadow: '12px 12px 0px rgba(0,0,0,1)',
            clipPath: `polygon(
              0 12px, 8px 12px, 8px 8px, 12px 8px, 12px 0,
              calc(100% - 12px) 0, calc(100% - 12px) 8px, calc(100% - 8px) 8px, calc(100% - 8px) 12px, 100% 12px,
              100% calc(100% - 12px), calc(100% - 8px) calc(100% - 12px), calc(100% - 8px) calc(100% - 8px), calc(100% - 12px) calc(100% - 8px), calc(100% - 12px) 100%,
              12px 100%, 12px calc(100% - 8px), 8px calc(100% - 8px), 8px calc(100% - 12px), 0 calc(100% - 12px)
            )`
          }}>
            {/* Scanline effect */}
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
            }}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8 text-center text-black" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.8' }}>
                WHAT TO EXPECT
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white/80 p-4" style={{
                    clipPath: `polygon(
                      0 4px, 4px 4px, 4px 0,
                      calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                      100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                      4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                    )`
                  }}>
                    <PixelDot color="cyan" size="lg" />
                    <p className="text-lg text-gray-800 font-semibold">Interactive workshops and hands-on coding sessions</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white/80 p-4" style={{
                    clipPath: `polygon(
                      0 4px, 4px 4px, 4px 0,
                      calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                      100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                      4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                    )`
                  }}>
                    <PixelDot color="yellow" size="lg" />
                    <p className="text-lg text-gray-800 font-semibold">Keynote speeches from tech industry leaders</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white/80 p-4" style={{
                    clipPath: `polygon(
                      0 4px, 4px 4px, 4px 0,
                      calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                      100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                      4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                    )`
                  }}>
                    <PixelDot color="green" size="lg" />
                    <p className="text-lg text-gray-800 font-semibold">24-hour hackathon with amazing prizes</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3 bg-white/80 p-4" style={{
                    clipPath: `polygon(
                      0 4px, 4px 4px, 4px 0,
                      calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                      100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                      4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                    )`
                  }}>
                    <PixelDot color="magenta" size="lg" />
                    <p className="text-lg text-gray-800 font-semibold">Networking sessions with industry professionals</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white/80 p-4" style={{
                    clipPath: `polygon(
                      0 4px, 4px 4px, 4px 0,
                      calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                      100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                      4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                    )`
                  }}>
                    <PixelDot color="red" size="lg" />
                    <p className="text-lg text-gray-800 font-semibold">Career fair with top tech companies</p>
                  </div>
                  <div className="flex items-start gap-3 bg-white/80 p-4" style={{
                    clipPath: `polygon(
                      0 4px, 4px 4px, 4px 0,
                      calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                      100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                      4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                    )`
                  }}>
                    <PixelDot color="yellow" size="lg" />
                    <p className="text-lg text-gray-800 font-semibold">Free swag, food, and entertainment!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}