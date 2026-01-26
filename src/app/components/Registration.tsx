import React from 'react';
import { ExternalLink, Sparkles, Phone, UserPlus } from 'lucide-react';
import { RetroHeading, ArcadeButton, PixelDot } from './ArcadeElements';
import { FadeInUp, StaggerContainer, StaggerItem } from './ScrollAnimations';
import { PacManGhost, PowerStar, Coin, PixelHeart } from './ArcadeIcons';

const studentCoordinators = [
  {
    name: 'Aayush Seth',
    role: 'ASCII President',
    phone: '+91 85888 02698',
  },
  {
    name: 'Canice Robert Norenj',
    role: 'ASCII Club Coordinator',
    phone: '+91 70575 69482',
  },
];

export function Registration() {
  const boxClipPath = 'polygon(0 4px, 4px 4px, 4px 0, calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px, 100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%, 4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px))';

  return (
    <section id="register" className="py-20 relative" style={{ backgroundColor: '#FF6B35' }}>
      {/* Pixel Grid Background */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.2) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.2) 2px, transparent 2px)',
        backgroundSize: '20px 20px',
      }}></div>

      {/* Floating Arcade Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-12 left-16"><PacManGhost size={55} color="#FF0000" /></div>
        <div className="absolute top-24 right-20"><PacManGhost size={50} color="#00FFFF" /></div>
        <div className="absolute bottom-32 left-32"><PacManGhost size={45} color="#FFB8FF" /></div>
        <div className="absolute bottom-20 right-48"><PacManGhost size={48} color="#FFB852" /></div>
        <div className="absolute top-40 left-24"><PowerStar size={52} /></div>
        <div className="absolute top-1/2 right-16"><PowerStar size={48} /></div>
        <div className="absolute bottom-48 left-12"><PowerStar size={45} /></div>
        <div className="absolute top-20 right-32"><Coin size={42} /></div>
        <div className="absolute top-2/3 left-20"><Coin size={38} /></div>
        <div className="absolute bottom-24 right-24"><Coin size={44} /></div>
        <div className="absolute top-1/3 left-40"><PixelHeart size={40} /></div>
        <div className="absolute top-1/2 left-8"><PixelHeart size={46} /></div>
        <div className="absolute bottom-40 right-12"><PixelHeart size={42} /></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* --- UPDATED HEADING --- */}
        <div className="text-center mb-8">
            <FadeInUp>
                <RetroHeading size="medium" className="text-white drop-shadow-[6px_6px_0_rgba(0,0,0,1)]">
                    IMPORTANT DETAILS
                </RetroHeading>
            </FadeInUp>
        </div>

        {/* Main Info Box */}
        <FadeInUp delay={0.2}>
          <div className="bg-cyan-300 p-8 relative border-4 border-black" style={{
            boxShadow: '12px 12px 0px rgba(0,0,0,1)',
            clipPath: `polygon(
              0 12px, 8px 12px, 8px 8px, 12px 8px, 12px 0,
              calc(100% - 12px) 0, calc(100% - 12px) 8px, calc(100% - 8px) 8px, calc(100% - 8px) 12px, 100% 12px,
              100% calc(100% - 12px), calc(100% - 8px) calc(100% - 12px), calc(100% - 8px) calc(100% - 8px), calc(100% - 12px) calc(100% - 8px), calc(100% - 12px) 100%,
              12px 100%, 12px calc(100% - 8px), 8px calc(100% - 8px), 8px calc(100% - 12px), 0 calc(100% - 12px)
            )`
          }}>
            {/* Retro Scanline Effect */}
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
            }}></div>
            
            <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-3 relative z-10" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.6' }}>
              <span className="text-3xl">📋</span> INFO
            </h3>

            <div className="grid md:grid-cols-2 gap-6 text-gray-900 relative z-10">
              {/* Left Column */}
              <div className="space-y-3">
                <div className="flex items-start gap-2 bg-white p-3 hover:bg-yellow-50 transition-colors" style={{ clipPath: boxClipPath }}>
                  <PixelDot color="magenta" />
                  <p className="text-sm"><span className="font-bold">HACKATHON:</span> Compete for a total cash bounty of ₹10,000!</p>
                </div>
                <div className="flex items-start gap-2 bg-white p-3 hover:bg-yellow-50 transition-colors" style={{ clipPath: boxClipPath }}>
                  <PixelDot color="cyan" />
                  <p className="text-sm"><span className="font-bold">FCFS:</span> Registrations are limited so book as soon as possible!!</p>
                </div>
                <div className="flex items-start gap-2 bg-white p-3 hover:bg-yellow-50 transition-colors" style={{ clipPath: boxClipPath }}>
                  <PixelDot color="yellow" />
                  <p className="text-sm"><span className="font-bold">PERKS:</span> Earn valuable experience and networking opportunities.</p>
                </div>
                <div className="flex items-start gap-2 bg-white p-3 hover:bg-yellow-50 transition-colors" style={{ clipPath: boxClipPath }}>
                  <PixelDot color="green" />
                  <p className="text-sm"><span className="font-bold">TEAMS:</span> Squad up! Participate Solo or in teams of up to 4.</p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-3">
                <div className="flex items-start gap-2 bg-white p-3 hover:bg-yellow-50 transition-colors" style={{ clipPath: boxClipPath }}>
                  <PixelDot color="red" />
                  <p className="text-sm"><span className="font-bold">Authentication Required:</span> Flash your ID Card at the entrance.</p>
                </div>
                <div className="flex items-start gap-2 bg-white p-3 hover:bg-yellow-50 transition-colors" style={{ clipPath: boxClipPath }}>
                  <PixelDot color="green" />
                  <p className="text-sm"><span className="font-bold">E-CERTIFICATES:</span> Participants will receive a verified e-certificate upon completion.</p>
                </div>
                <div className="flex items-start gap-2 bg-white p-3 hover:bg-yellow-50 transition-colors" style={{ clipPath: boxClipPath }}>
                  <PixelDot color="magenta" />
                  <p className="text-sm"><span className="font-bold">BYOD:</span> Gear up! Bring your own Device + Chargers for the event.</p>
                </div>
                <div className="flex items-start gap-2 bg-white p-3 hover:bg-yellow-50 transition-colors" style={{ clipPath: boxClipPath }}>
                  <PixelDot color="yellow" />
                  <p className="text-sm"><span className="font-bold">QUESTIONS?</span> Feel free to contact us using the below given phone numbers</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Contact CTA Section */}
        <div className="mt-12">
          <FadeInUp delay={0.4}>
            <p className="text-xl text-gray-900 mb-6 text-center font-bold bg-yellow-400 p-4 border-4 border-black" style={{ 
              fontFamily: '"Press Start 2P", cursive', 
              lineHeight: '1.8', 
              fontSize: '0.85rem',
              boxShadow: '8px 8px 0px rgba(0,0,0,1)',
              clipPath: `polygon(
                0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 8px) calc(100% - 8px), calc(100% - 12px) calc(100% - 8px), calc(100% - 12px) 100%,
                8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
              )`
            }}>
              HAVE QUESTIONS?
            </p>
          </FadeInUp>
          
          <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {studentCoordinators.map((coordinator, index) => (
              <StaggerItem key={index}>
                <div className="bg-purple-200 p-6 hover:-translate-y-1 transition-all border-4 border-black h-full flex flex-col justify-center items-center" style={{
                  boxShadow: '8px 8px 0px rgba(0,0,0,1)',
                  clipPath: `polygon(
                    0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                    calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                    100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                    8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
                  )`
                }}>
                  <div className="flex flex-col items-center text-center mb-3">
                    <div>
                      <div className="text-black font-bold text-sm mb-2" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.6', fontSize: '0.7rem' }}>{coordinator.name}</div>
                      <div className="text-xs font-bold text-gray-700 bg-white px-2 py-1 rounded inline-block border-2 border-black/10">{coordinator.role}</div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <div className="flex items-center gap-2 bg-white p-2 border-2 border-black/10" style={{ borderRadius: '8px' }}>
                      <Phone className="text-orange-700 flex-shrink-0" size={16} />
                      <a href={`tel:${coordinator.phone}`} className="text-gray-800 font-mono font-bold hover:text-orange-700 transition-colors text-sm">
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
