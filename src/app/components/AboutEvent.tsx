import { Users, Trophy, Lightbulb, Rocket, Heart, Zap, Joystick, Gamepad, Coins, Sword, Crown, Cpu, Briefcase } from 'lucide-react';
import { RetroHeading } from './ArcadeElements';
import { FadeInUp, StaggerContainer, StaggerItem } from './ScrollAnimations';

// --- VIBRANT ARCADE PALETTE ---
const highlights = [
  {
    icon: Users,
    title: '500+ Players',
    description: 'Connect with Tech Enthusiasts.',
    color: '#06B6D4', // Vibrant Cyan
    shadow: 'rgba(6, 182, 212, 1)'
  },
  {
    icon: Coins,
    title: 'Epic Loot',
    description: 'Win incredible prizes and Exclusive Swag.',
    color: '#FACC15', // Vibrant Yellow
    shadow: 'rgba(250, 204, 21, 1)'
  },
  {
    icon: Cpu,
    title: 'Level Up',
    description: 'Gain New Skills by participating in Events and Workshops.',
    color: '#E879F9', // Vibrant Magenta
    shadow: 'rgba(232, 121, 249, 1)'
  },
  {
    icon: Rocket,
    title: 'Launch Pad',
    description: 'Chance to Showcase your Creativity and Ideas.',
    color: '#84CC16', // Vibrant Lime
    shadow: 'rgba(132, 204, 22, 1)'
  },
  {
    icon: Gamepad,
    title: 'Co-op Mode',
    description: 'Build lasting connections with peers.',
    color: '#F97316', // Vibrant Orange
    shadow: 'rgba(249, 115, 22, 1)'
  },
  {
    icon: Zap,
    title: 'Power Ups',
    description: 'Earn Certificates and Cash Prizes.',
    color: '#8B5CF6', // Vibrant Violet
    shadow: 'rgba(139, 92, 246, 1)'
  },
];

export function AboutEvent() {
  return (
    <section id="about" className="py-24 relative bg-slate-50">
      
      {/* Pixel Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.1) 2px, transparent 2px)',
        backgroundSize: '40px 40px',
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <FadeInUp>
            <RetroHeading size="medium" className="mb-8 text-yellow-400 drop-shadow-md">
              ABOUT FOOBAR 10.0
            </RetroHeading>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            {/* Main Description Box */}
            <div className="relative bg-white p-8 md:p-10 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(37,99,235,1)]"> 
              <p className="text-xl md:text-2xl text-gray-800 leading-relaxed font-bold font-sans">
                FOOBAR 10.0 is more than just an event—it's a movement! We bring together innovators, 
                developers, designers, and entrepreneurs for three days of learning, building, and 
                celebrating technology. Whether you're a beginner or a seasoned pro, there's 
                something here for everyone.
              </p>
              
              {/* Decorative Corner Screws */}
              <div className="absolute top-3 left-3 w-3 h-3 bg-black rounded-full border-2 border-gray-500"></div>
              <div className="absolute top-3 right-3 w-3 h-3 bg-black rounded-full border-2 border-gray-500"></div>
              <div className="absolute bottom-3 left-3 w-3 h-3 bg-black rounded-full border-2 border-gray-500"></div>
              <div className="absolute bottom-3 right-3 w-3 h-3 bg-black rounded-full border-2 border-gray-500"></div>
            </div>
          </FadeInUp>
        </div>

        {/* Highlights Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            
            return (
              <StaggerItem key={index}>
                {/* Individual Card */}
                <div 
                  className="group relative h-full bg-white rounded-2xl border-4 border-black p-0 transition-all duration-300 hover:-translate-y-2"
                  style={{ boxShadow: `8px 8px 0px 0px ${highlight.shadow}` }}
                >
                  {/* Colored Header Strip */}
                  <div 
                    className="h-24 rounded-t-xl border-b-4 border-black flex items-center justify-center relative overflow-hidden"
                    style={{ backgroundColor: highlight.color }}
                  >
                     <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}></div>
                     
                     <div className="relative z-10 w-14 h-14 bg-black flex items-center justify-center rounded-xl border-2 border-white transform group-hover:scale-110 transition-transform duration-300">
                         <Icon className="text-white" size={28} />
                     </div>
                  </div>

                  <div className="p-6 text-center">
                    <h3 className="text-lg font-black mb-3 text-black uppercase tracking-tight" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.4', fontSize: '0.8rem' }}>
                      {highlight.title}
                    </h3>
                    
                    <p className="text-gray-600 font-bold text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* What to Expect Section */}
        <FadeInUp delay={0.4}>
          <div className="relative bg-[#0F766E] p-8 md:p-12 rounded-3xl border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden mb-16">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
               backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 2px, transparent 0, transparent 50%)',
               backgroundSize: '20px 20px'
            }}></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-black mb-12 text-center text-white flex items-center justify-center gap-4 drop-shadow-[4px_4px_0_#000]" style={{ fontFamily: '"Press Start 2P", cursive' }}>
                <Joystick size={40} className="hidden md:block text-yellow-400" />
                WHAT TO EXPECT
                <Joystick size={40} className="hidden md:block transform scale-x-[-1] text-yellow-400" />
              </h3>

              <div className="grid md:grid-cols-2 gap-6">
                
                {/* Expectation Items - Fully Colored Bars */}
                <div className="space-y-4">
                   <ExpectationItem icon={Crown} text="Interactive Workshops and Hands-On Coding Sessions" color="bg-[#FACC15]" textColor="text-black" />
                   <ExpectationItem icon={Sword} text="Competitive and Exciting Environment " color="bg-[#EF4444]" textColor="text-white" />
                   <ExpectationItem icon={Trophy} text="Hackathon and other Events with Amazing Prizes" color="bg-[#84CC16]" textColor="text-black" />
                </div>
                
                <div className="space-y-4">
                   <ExpectationItem icon={Users} text="Network with Like-Minded Individuals" color="bg-[#A855F7]" textColor="text-white" />
                   <ExpectationItem icon={Briefcase} text="Opportunities to Learn and Grow" color="bg-[#3B82F6]" textColor="text-white" />
                   <ExpectationItem icon={Heart} text="Participate in Fun and Entertaining Events" color="bg-[#EC4899]" textColor="text-white" />
                </div>

              </div>
            </div>
          </div>
        </FadeInUp>

        {/* --- PRIZE POOL BANNER --- */}
        <FadeInUp delay={0.6}>
          <div className="relative max-w-4xl mx-auto bg-yellow-400 p-8 rounded-2xl border-4 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] text-center overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
             
             {/* Diagonal Stripes Pattern */}
             <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, #000 0, #000 10px, transparent 10px, transparent 20px)'
             }}></div>

             <div className="relative z-10 flex flex-col items-center">
                <div className="flex items-center gap-3 mb-4">
                   <Coins size={48} className="text-black animate-bounce" />
                   <h3 className="text-3xl md:text-4xl font-black text-black tracking-tighter" style={{ fontFamily: '"Press Start 2P", cursive' }}>
                      PRIZE POOL
                   </h3>
                   <Coins size={48} className="text-black animate-bounce" style={{ animationDelay: '0.1s' }} />
                </div>
                
                <div className="bg-black text-white px-8 py-4 rounded-xl border-4 border-white shadow-lg inline-block transform -rotate-2">
                   <span className="text-4xl md:text-5xl font-black tracking-wide" style={{ textShadow: '4px 4px 0 #F59E0B' }}>
                      ₹55,000
                   </span>
                </div>
                
                <p className="mt-6 text-black font-bold text-lg md:text-xl max-w-2xl mx-auto">
                   Compete for glory and grab your share of the massive prize pool! 
                   <br/> 
                </p>
             </div>
          </div>
        </FadeInUp>

      </div>
    </section>
  );
}

// Helper Component for List Items
function ExpectationItem({ icon: Icon, text, color, textColor }: { icon: any, text: string, color: string, textColor: string }) {
    return (
        <div className={`flex items-center gap-4 ${color} p-4 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,0.5)] hover:translate-x-1 hover:-translate-y-1 transition-transform`}>
            <div className={`w-10 h-10 bg-black/20 rounded-lg flex items-center justify-center shrink-0`}>
                <Icon size={22} className={textColor} />
            </div>
            <p className={`font-bold ${textColor} text-sm md:text-base`}>{text}</p>
        </div>
    );
}