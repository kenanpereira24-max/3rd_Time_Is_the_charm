import { ExternalLink, Sparkles, Mail, Phone } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { RetroHeading, ArcadeButton, PixelDot } from './ArcadeElements';
import { FadeInUp, StaggerContainer, StaggerItem } from './ScrollAnimations';
import { PacManGhost, PowerStar, Coin, PixelHeart } from './ArcadeIcons';

const studentCoordinators = [
  {
    name: 'Alex Johnson',
    role: 'Lead Coordinator',
    email: 'alex.johnson@university.edu',
    phone: '+1 (555) 123-4567',
    image: 'https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMHN0dWRlbnR8ZW58MXx8fHwxNzY4MjE2MDMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Sarah Chen',
    role: 'Technical Coordinator',
    email: 'sarah.chen@university.edu',
    phone: '+1 (555) 234-5678',
    image: 'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBoZWFkc2hvdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NjgyNzI1NjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    name: 'Michael Patel',
    role: 'Events Coordinator',
    email: 'michael.patel@university.edu',
    phone: '+1 (555) 345-6789',
    image: 'https://images.unsplash.com/photo-1622319107576-cca7c8a906f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwcG9ydHJhaXQlMjB5b3VuZ3xlbnwxfHx8fDE3NjgzMTUzNjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export function Registration() {
  return (
    <section id="register" className="py-20 relative" style={{ backgroundColor: '#FF6B35' }}>
      {/* Pixel Grid */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.2) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.2) 2px, transparent 2px)',
        backgroundSize: '20px 20px',
      }}></div>

      {/* Easter Egg Arcade Icons - Scattered throughout registration section */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Pac-Man Ghosts */}
        <div className="absolute top-12 left-16">
          <PacManGhost size={55} color="#FF0000" />
        </div>
        <div className="absolute top-24 right-20">
          <PacManGhost size={50} color="#00FFFF" />
        </div>
        <div className="absolute bottom-32 left-32">
          <PacManGhost size={45} color="#FFB8FF" />
        </div>
        <div className="absolute bottom-20 right-48">
          <PacManGhost size={48} color="#FFB852" />
        </div>
        
        {/* Power Stars */}
        <div className="absolute top-40 left-24">
          <PowerStar size={52} />
        </div>
        <div className="absolute top-1/2 right-16">
          <PowerStar size={48} />
        </div>
        <div className="absolute bottom-48 left-12">
          <PowerStar size={45} />
        </div>
        
        {/* Coins */}
        <div className="absolute top-20 right-32">
          <Coin size={42} />
        </div>
        <div className="absolute top-2/3 left-20">
          <Coin size={38} />
        </div>
        <div className="absolute bottom-24 right-24">
          <Coin size={44} />
        </div>
        
        {/* Pixel Hearts */}
        <div className="absolute top-1/3 left-40">
          <PixelHeart size={40} />
        </div>
        <div className="absolute top-1/2 left-8">
          <PixelHeart size={46} />
        </div>
        <div className="absolute bottom-40 right-12">
          <PixelHeart size={42} />
        </div>
        
        {/* Additional scattered elements */}
        <div className="absolute top-1/4 right-1/4">
          <Coin size={35} />
        </div>
        <div className="absolute bottom-1/3 left-1/3">
          <PowerStar size={40} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <FadeInUp>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white" style={{
              clipPath: `polygon(
                0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
              )`
            }}>
              <PixelDot color="yellow" animated size="lg" />
              <span className="font-bold text-sm" style={{ fontFamily: '"Press Start 2P", cursive' }}>LIMITED SPOTS!</span>
            </div>
          </FadeInUp>
          
          <FadeInUp delay={0.2}>
            <RetroHeading size="medium" className="mb-6 text-white mt-8">
              REGISTER NOW
            </RetroHeading>
          </FadeInUp>
          
          <FadeInUp delay={0.3}>
            <p className="text-xl text-black max-w-2xl mx-auto mb-12 bg-yellow-400 p-8 border-4 border-black" style={{
              boxShadow: '8px 8px 0px rgba(0,0,0,1)',
              clipPath: `polygon(
                0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
              )`
            }}>
              Secure your spot at FOOBAR 10.0 and be part of this incredible tech event. 
              Don't miss out on this amazing opportunity!
            </p>
          </FadeInUp>

          {/* Registration CTA */}
          <FadeInUp delay={0.4}>
            <div className="bg-green-400 p-12 border-4 border-black" style={{
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
              
              <div className="mb-8 relative z-10">
                <p className="text-xl text-black mb-4 font-bold" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.8', fontSize: '0.9rem' }}>
                  CLICK TO REGISTER
                </p>
                <p className="text-gray-900 text-lg">
                  Fill out the registration form and join us for three amazing days of innovation and learning!
                </p>
              </div>

              <ArcadeButton onClick={() => window.open('https://forms.google.com/registration', '_blank')}>
                REGISTER! 🚀
              </ArcadeButton>
            </div>
          </FadeInUp>
        </div>

        {/* Important Info */}
        <FadeInUp delay={0.5}>
          <div className="bg-cyan-300 p-8 mt-12 relative border-4 border-black" style={{
            boxShadow: '12px 12px 0px rgba(0,0,0,1)',
            clipPath: `polygon(
              0 12px, 8px 12px, 8px 8px, 12px 8px, 12px 0,
              calc(100% - 12px) 0, calc(100% - 12px) 8px, calc(100% - 8px) 8px, calc(100% - 8px) 12px, 100% 12px,
              100% calc(100% - 12px), calc(100% - 8px) calc(100% - 12px), calc(100% - 8px) calc(100% - 8px), calc(100% - 12px) calc(100% - 8px), calc(100% - 12px) 100%,
              12px 100%, 12px calc(100% - 8px), 8px calc(100% - 8px), 8px calc(100% - 12px), 0 calc(100% - 12px)
            )`
          }}>
            {/* Scanline */}
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
            }}></div>
            
            <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-3 relative z-10" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.6' }}>
              <span className="text-3xl">📋</span> INFO
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-gray-900 relative z-10">
              <div className="space-y-3">
                <div className="flex items-start gap-2 bg-white p-3" style={{
                  clipPath: `polygon(
                    0 4px, 4px 4px, 4px 0,
                    calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                    100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                    4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                  )`
                }}>
                  <PixelDot color="cyan" />
                  <p className="text-sm">
                    <span className="font-bold">Early Bird:</span> Register before Feb 28, get 20% off!
                  </p>
                </div>
                <div className="flex items-start gap-2 bg-white p-3" style={{
                  clipPath: `polygon(
                    0 4px, 4px 4px, 4px 0,
                    calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                    100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                    4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                  )`
                }}>
                  <PixelDot color="yellow" />
                  <p className="text-sm">
                    <span className="font-bold">Group Rates:</span> Bring 10+ people for special pricing
                  </p>
                </div>
                <div className="flex items-start gap-2 bg-white p-3" style={{
                  clipPath: `polygon(
                    0 4px, 4px 4px, 4px 0,
                    calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                    100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                    4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                  )`
                }}>
                  <PixelDot color="green" />
                  <p className="text-sm">
                    <span className="font-bold">Refunds:</span> Full refund until March 1, 2026
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2 bg-white p-3" style={{
                  clipPath: `polygon(
                    0 4px, 4px 4px, 4px 0,
                    calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                    100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                    4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                  )`
                }}>
                  <PixelDot color="magenta" />
                  <p className="text-sm">
                    <span className="font-bold">Included:</span> All meals, swag, event access
                  </p>
                </div>
                <div className="flex items-start gap-2 bg-white p-3" style={{
                  clipPath: `polygon(
                    0 4px, 4px 4px, 4px 0,
                    calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                    100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                    4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                  )`
                }}>
                  <PixelDot color="red" />
                  <p className="text-sm">
                    <span className="font-bold">ID Required:</span> Bring valid student/pro ID
                  </p>
                </div>
                <div className="flex items-start gap-2 bg-white p-3" style={{
                  clipPath: `polygon(
                    0 4px, 4px 4px, 4px 0,
                    calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                    100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                    4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                  )`
                }}>
                  <PixelDot color="yellow" />
                  <p className="text-sm">
                    <span className="font-bold">Questions?</span> hello@foobar2026.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Contact CTA */}
        <div className="mt-12">
          <FadeInUp delay={0.6}>
            <p className="text-xl text-gray-900 mb-6 text-center font-bold bg-yellow-400 p-4 border-4 border-black" style={{ 
              fontFamily: '"Press Start 2P", cursive', 
              lineHeight: '1.8', 
              fontSize: '0.85rem',
              boxShadow: '8px 8px 0px rgba(0,0,0,1)',
              clipPath: `polygon(
                0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
              )`
            }}>
              HAVE QUESTIONS?
            </p>
          </FadeInUp>
          
          {/* Student Coordinators */}
          <StaggerContainer className="grid md:grid-cols-3 gap-6">
            {studentCoordinators.map((coordinator, index) => (
              <StaggerItem key={index}>
                <div className="bg-purple-200 p-4 hover:-translate-y-1 transition-all border-4 border-black" style={{
                  boxShadow: '8px 8px 0px rgba(0,0,0,1)',
                  clipPath: `polygon(
                    0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                    calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                    100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                    8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
                  )`
                }}>
                  <div className="flex flex-col items-center text-center mb-3">
                    <img 
                      src={coordinator.image}
                      alt={coordinator.name}
                      className="w-20 h-20 object-cover mb-3"
                      style={{
                        clipPath: `polygon(
                          0 4px, 4px 4px, 4px 0,
                          calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                          100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                          4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                        )`
                      }}
                    />
                    <div>
                      <div className="text-black font-bold text-sm" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.6', fontSize: '0.65rem' }}>{coordinator.name}</div>
                      <div className="text-xs text-gray-700 mt-1">{coordinator.role}</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 bg-white p-2" style={{
                      clipPath: `polygon(
                        0 4px, 4px 4px, 4px 0,
                        calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                        100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                        4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                      )`
                    }}>
                      <Mail className="text-cyan-700 flex-shrink-0" size={14} />
                      <a href={`mailto:${coordinator.email}`} className="text-gray-700 hover:text-cyan-700 transition-colors truncate text-xs">
                        {coordinator.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 bg-white p-2" style={{
                      clipPath: `polygon(
                        0 4px, 4px 4px, 4px 0,
                        calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                        100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                        4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                      )`
                    }}>
                      <Phone className="text-orange-700 flex-shrink-0" size={14} />
                      <a href={`tel:${coordinator.phone}`} className="text-gray-700 hover:text-orange-700 transition-colors text-xs">
                        {coordinator.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}