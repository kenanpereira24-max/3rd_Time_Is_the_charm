import { useState } from 'react';
import { Code, Palette, Brain, Gamepad2, Globe, Music, Mic, Coffee, Instagram } from 'lucide-react';
import { RetroHeading } from './ArcadeElements';
import { FadeInUp, StaggerContainer, StaggerItem } from './ScrollAnimations';

const events = [
  {
    id: 1,
    title: 'Opening Ceremony',
    day: 'Day 1',
    time: '9:00 AM - 10:00 AM',
    icon: Music,
    description: 'Kick off FOOBAR 2026 with an electrifying opening ceremony featuring keynote speakers and special performances.',
    color: 'from-purple-500 to-purple-600',
    category: 'Main Event',
  },
  {
    id: 2,
    title: 'Web Development Workshop',
    day: 'Day 1',
    time: '10:30 AM - 1:00 PM',
    icon: Code,
    description: 'Learn modern web development with React, Next.js, and Tailwind CSS. Build a full-stack application from scratch!',
    color: 'from-blue-500 to-blue-600',
    category: 'Workshop',
  },
  {
    id: 3,
    title: 'UI/UX Design Masterclass',
    day: 'Day 1',
    time: '2:00 PM - 5:00 PM',
    icon: Palette,
    description: 'Master the art of user interface and user experience design with industry-leading designers.',
    color: 'from-pink-500 to-pink-600',
    category: 'Workshop',
  },
  {
    id: 4,
    title: 'AI & Machine Learning Talk',
    day: 'Day 2',
    time: '9:00 AM - 11:00 AM',
    icon: Brain,
    description: 'Explore the latest in artificial intelligence and machine learning. Hands-on demos with real-world applications.',
    color: 'from-green-500 to-green-600',
    category: 'Talk',
  },
  {
    id: 5,
    title: 'Game Development Jam',
    day: 'Day 2',
    time: '11:30 AM - 4:00 PM',
    icon: Gamepad2,
    description: 'Create your own game in just a few hours! Learn game design, Unity, and Unreal Engine basics.',
    color: 'from-orange-500 to-red-500',
    category: 'Workshop',
  },
  {
    id: 6,
    title: '24-Hour Hackathon',
    day: 'Day 2',
    time: '6:00 PM - Day 3 6:00 PM',
    icon: Code,
    description: 'The main event! Build amazing projects, compete for $50,000 in prizes, and showcase your skills.',
    color: 'from-red-500 to-pink-500',
    category: 'Hackathon',
  },
  {
    id: 7,
    title: 'Startup Pitch Competition',
    day: 'Day 3',
    time: '10:00 AM - 12:00 PM',
    icon: Mic,
    description: 'Present your startup ideas to top VCs and investors. Win funding and mentorship opportunities!',
    color: 'from-yellow-500 to-orange-500',
    category: 'Competition',
  },
  {
    id: 8,
    title: 'Tech Career Fair',
    day: 'Day 3',
    time: '1:00 PM - 4:00 PM',
    icon: Globe,
    description: 'Meet recruiters from top tech companies. Get interview opportunities and career guidance.',
    color: 'from-teal-500 to-cyan-500',
    category: 'Networking',
  },
  {
    id: 9,
    title: 'Closing Ceremony & Awards',
    day: 'Day 3',
    time: '7:00 PM - 9:00 PM',
    icon: Coffee,
    description: 'Celebrate the winners, network with new friends, and wrap up an incredible three days of innovation!',
    color: 'from-indigo-500 to-purple-500',
    category: 'Main Event',
  },
];

const categories = ['All', 'Workshop', 'Talk', 'Hackathon', 'Competition', 'Networking', 'Main Event'];

export function EventsList() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 relative">
      {/* Pixel Grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 2px)',
        backgroundSize: '25px 25px',
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeInUp>
            <RetroHeading size="medium" className="mb-6 text-yellow-400">
              EVENT SCHEDULE
            </RetroHeading>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-white max-w-2xl mx-auto bg-pink-500 p-6 border-4 border-black" style={{
              boxShadow: '8px 8px 0px rgba(0,0,0,1)',
              clipPath: `polygon(
                0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
              )`
            }}>
              Three action-packed days filled with workshops, talks, competitions, and unforgettable experiences!
            </p>
          </FadeInUp>
        </div>

        {/* Category Filter */}
        <FadeInUp delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-bold transition-all text-sm ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-black scale-105'
                    : 'bg-black text-white hover:bg-gray-800 hover:scale-105'
                }`}
                style={{ 
                  fontFamily: '"Press Start 2P", cursive', 
                  fontSize: '0.7rem',
                  clipPath: `polygon(
                    0 4px, 4px 4px, 4px 0,
                    calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                    100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                    4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                  )`
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Events Grid */}
        <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => {
            const Icon = event.icon;
            const bgColors: { [key: string]: string } = {
              'from-purple-500 to-purple-600': '#C4B5FD',
              'from-blue-500 to-blue-600': '#93C5FD',
              'from-pink-500 to-pink-600': '#F0ABFC',
              'from-green-500 to-green-600': '#86EFAC',
              'from-orange-500 to-orange-600': '#FED7AA',
              'from-cyan-500 to-cyan-600': '#A5F3FC',
              'from-red-500 to-red-600': '#FCA5A5',
              'from-yellow-500 to-yellow-600': '#FDE047',
            };
            const bgColor = bgColors[event.color] || '#E5E7EB';
            
            return (
              <StaggerItem key={event.id}>
                <div className="group overflow-hidden hover:-translate-y-2 transition-all duration-300 border-4 border-black" style={{
                  boxShadow: '8px 8px 0px rgba(0,0,0,1)',
                  clipPath: `polygon(
                    0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                    calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                    100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                    8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
                  )`
                }}>
                  {/* Header */}
                  <div className="p-6 text-black relative overflow-hidden" style={{ backgroundColor: bgColor }}>
                    {/* Arcade pattern overlay */}
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)',
                    }}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-black text-white text-xs font-bold" style={{ 
                          fontFamily: '"Press Start 2P", cursive',
                          clipPath: `polygon(
                            0 4px, 4px 4px, 4px 0,
                            calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                            100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                            4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                          )`
                        }}>
                          {event.day}
                        </span>
                        <div className="w-12 h-12 bg-black flex items-center justify-center" style={{
                          clipPath: `polygon(
                            0 4px, 4px 4px, 4px 0,
                            calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                            100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                            4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                          )`
                        }}>
                          <Icon size={24} className="text-white" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold mb-2" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.6', fontSize: '0.8rem' }}>
                        {event.title}
                      </h3>
                      <p className="text-sm font-semibold">{event.time}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 bg-gray-100">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-bold" style={{
                        clipPath: `polygon(
                          0 4px, 4px 4px, 4px 0,
                          calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                          100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                          4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                        )`
                      }}>
                        {event.category}
                      </span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* Note */}
        <FadeInUp delay={0.5}>
          <div className="mt-12 text-center">
            <p className="text-gray-800 bg-pink-400 p-6 inline-block font-semibold text-lg mb-6 border-4 border-black" style={{
              boxShadow: '8px 8px 0px rgba(0,0,0,1)',
              clipPath: `polygon(
                0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
              )`
            }}>
              <span className="font-bold text-black" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.8rem' }}>NOTE:</span> More events and surprise sessions will be announced soon! 
              Follow us on social media for updates.
            </p>
            
            {/* Instagram Link */}
            <div className="flex justify-center">
              <a
                href="https://www.instagram.com/foobar2026"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 transition-all hover:scale-105 border-4 border-black"
                style={{
                  boxShadow: '8px 8px 0px rgba(0,0,0,1)',
                  clipPath: `polygon(
                    0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                    calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                    100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                    8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
                  )`
                }}
              >
                <Instagram size={32} className="animate-pulse" />
                <div className="text-left">
                  <div className="font-bold text-sm" style={{ fontFamily: '"Press Start 2P", cursive' }}>FOLLOW US!</div>
                  <div className="text-xs">@foobar2026</div>
                </div>
              </a>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}