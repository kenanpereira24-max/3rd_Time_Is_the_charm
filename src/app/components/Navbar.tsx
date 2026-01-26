import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import asciiLogo from './ASCII.png';
import christLogo from './Christ.png';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black border-b-4 border-yellow-400 shadow-lg">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Left: Christ Logo + ASCII Logo */}
          <div className="flex items-center gap-3 z-10">
            <img 
              src={christLogo} 
              alt="Christ University" 
              className="h-10 md:h-12 w-auto object-contain"
            />
            <img 
              src={asciiLogo} 
              alt="ASCII Logo" 
              className="h-12 md:h-16 w-auto object-contain"
            />
          </div>

          {/* Center: FOOBAR Text */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <h1 className="text-base md:text-2xl font-bold text-yellow-400" style={{ fontFamily: '"Press Start 2P", cursive', textShadow: '3px 3px 0px rgba(255,255,0,0.3)', lineHeight: '1.4' }}>
              FOOBAR 10.0
            </h1>
          </div>

          {/* Right: Dropdown Menu */}
          <div className="flex items-center gap-3 z-10">
            {/* Desktop Dropdown */}
            <div className="hidden lg:block relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-black hover:bg-yellow-300 transition-all font-bold text-xs"
                style={{ 
                  fontFamily: '"Press Start 2P", cursive',
                  clipPath: `polygon(
                    0 4px, 4px 4px, 4px 0,
                    calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                    100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                    4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                  )`
                }}
              >
                MENU
                <ChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Content */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-black border-4 border-yellow-400" style={{
                  clipPath: `polygon(
                    0 8px, 4px 8px, 4px 4px, 8px 4px, 8px 0,
                    calc(100% - 8px) 0, calc(100% - 8px) 4px, calc(100% - 4px) 4px, calc(100% - 4px) 8px, 100% 8px,
                    100% calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 4px) calc(100% - 8px), calc(100% - 8px) calc(100% - 4px), calc(100% - 8px) 100%,
                    8px 100%, 8px calc(100% - 4px), 4px calc(100% - 4px), 4px calc(100% - 8px), 0 calc(100% - 8px)
                  )`
                }}>
                  <button
                    onClick={() => scrollToSection('home')}
                    className="block w-full text-left px-4 py-3 text-white hover:bg-yellow-400 hover:text-black transition-colors font-bold text-xs border-b-2 border-yellow-400"
                    style={{ fontFamily: '"Press Start 2P", cursive' }}
                  >
                    HOME
                  </button>
                  <button
                    onClick={() => scrollToSection('about')}
                    className="block w-full text-left px-4 py-3 text-white hover:bg-yellow-400 hover:text-black transition-colors font-bold text-xs border-b-2 border-yellow-400"
                    style={{ fontFamily: '"Press Start 2P", cursive' }}
                  >
                    ABOUT
                  </button>
                  <button
                    onClick={() => scrollToSection('events')}
                    className="block w-full text-left px-4 py-3 text-white hover:bg-yellow-400 hover:text-black transition-colors font-bold text-xs border-b-2 border-yellow-400"
                    style={{ fontFamily: '"Press Start 2P", cursive' }}
                  >
                    EVENTS
                  </button>
                </div>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-yellow-400 hover:text-yellow-300 transition-colors p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black border-t-2 border-yellow-400">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-white hover:text-yellow-300 transition-colors py-3 font-bold"
              style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.7rem' }}
            >
              HOME
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-white hover:text-yellow-300 transition-colors py-3 font-bold"
              style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.7rem' }}
            >
              ABOUT
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="block w-full text-left text-white hover:text-yellow-300 transition-colors py-3 font-bold"
              style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.7rem' }}
            >
              EVENTS
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
