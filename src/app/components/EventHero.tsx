import { Calendar } from 'lucide-react';
import { ContinuousTetris } from './ContinuousTetris';
import { StarryBackground } from './StarryBackground';
import { RetroHeading, ArcadeButton, PixelDot } from './ArcadeElements';
import { FadeInUp, StaggerContainer, StaggerItem } from './ScrollAnimations';

export function EventHero() {
  return (
    <section id="home" className="pt-32 pb-20 overflow-hidden bg-black relative min-h-screen flex items-center">
      {/* Starry Background */}
      <StarryBackground />
      
      {/* Continuous Tetris Background */}
      <ContinuousTetris />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Center Content */}
        <div className="text-center space-y-8">
          <FadeInUp delay={0.2}>
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-400 text-black border-4 border-black" style={{
              boxShadow: '8px 8px 0px rgba(0,0,0,1)',
              clipPath: `polygon(
                0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
              )`
            }}>
              <PixelDot color="red" animated />
              <span className="font-bold text-sm" style={{ fontFamily: '"Press Start 2P", cursive' }}>ULTIMATE TECH EVENT 2026</span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.4}>
            {/* Large Pixelated FOOBAR 10.0 Logo */}
            <div className="mb-6 flex flex-col items-center justify-center gap-3">
              <div 
                className="text-yellow-400"
                style={{
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: 'clamp(2rem, 10vw, 6rem)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  lineHeight: '1',
                  textShadow: `3px 3px 0 #000, 6px 6px 0 rgba(0,0,0,0.3)`,
                }}
              >
                FOOBAR
              </div>

              <div 
                style={{
                  fontFamily: '"Press Start 2P", cursive',
                  fontSize: 'clamp(1.5rem, 8vw, 4.5rem)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  lineHeight: '1',
                  color: '#FF6B35',
                  textShadow: `3px 3px 0 #000, 6px 6px 0 rgba(0,0,0,0.3)`,
                }}
              >
                10.0
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.6}>
            <div className="text-3xl font-bold text-white px-8 py-5 bg-yellow-400 text-black inline-block" style={{ 
              fontFamily: '"Press Start 2P", cursive', 
              lineHeight: '2',
              clipPath: `polygon(
                0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
              )`
            }}>
              2026
            </div>
          </FadeInUp>

          <FadeInUp delay={0.8}>
            <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto bg-gray-900/80 p-8" style={{ 
              fontFamily: 'system-ui, sans-serif',
              clipPath: `polygon(
                0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
              )`
            }}>
              Join us for an extraordinary celebration of innovation, creativity, and technology. 
              Experience cutting-edge workshops, inspiring talks, and unforgettable networking 
              opportunities with the brightest minds in tech.
            </p>
          </FadeInUp>

          {/* Centered Date Block */}
          <div className="flex justify-center">
            <FadeInUp delay={1.0}>
              <div className="flex items-center gap-3 p-4 bg-cyan-400 text-black hover:bg-cyan-300 transition-colors mx-auto" style={{
                clipPath: `polygon(
                  0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                  calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                  100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 4px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                  8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
                )`
              }}>
                <Calendar size={28} />
                <div className="text-left">
                  <div className="text-xs font-bold" style={{ fontFamily: '"Press Start 2P", cursive' }}>DATE</div>
                  <div className="font-bold text-sm">Jan 30 Onwards</div>
                </div>
              </div>
            </FadeInUp>
          </div>

        </div>
      </div>
    </section>
  );
}