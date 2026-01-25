import { Mail, Phone, MapPin, Twitter, Instagram, Linkedin, Github, Heart } from 'lucide-react';
import { FadeInUp } from './ScrollAnimations';

export function EventFooter() {
  return (
    <footer className="bg-stone-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <FadeInUp>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-black" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.6' }}>
                FOOBAR<br/>10.0 2026
              </h3>
              <p className="text-gray-700 mb-4">
                Building the future of digital experiences, one innovation at a time.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://twitter.com/foobar2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-cyan-400 flex items-center justify-center hover:bg-cyan-300 hover:scale-110 transition-all"
                  style={{
                    clipPath: `polygon(
                      0 4px, 4px 4px, 4px 0,
                      calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                      100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                      4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                    )`
                  }}
                >
                  <Twitter size={20} className="text-black" />
                </a>
                <a
                  href="https://instagram.com/foobar2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-pink-400 flex items-center justify-center hover:bg-pink-300 hover:scale-110 transition-all"
                  style={{
                    clipPath: `polygon(
                      0 4px, 4px 4px, 4px 0,
                      calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                      100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                      4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                    )`
                  }}
                >
                  <Instagram size={20} className="text-black" />
                </a>
                <a
                  href="https://linkedin.com/company/foobar2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-blue-400 flex items-center justify-center hover:bg-blue-300 hover:scale-110 transition-all"
                  style={{
                    clipPath: `polygon(
                      0 4px, 4px 4px, 4px 0,
                      calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                      100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                      4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                    )`
                  }}
                >
                  <Linkedin size={20} className="text-black" />
                </a>
                <a
                  href="https://github.com/foobar2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-green-400 flex items-center justify-center hover:bg-green-300 hover:scale-110 transition-all"
                  style={{
                    clipPath: `polygon(
                      0 4px, 4px 4px, 4px 0,
                      calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                      100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                      4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                    )`
                  }}
                >
                  <Github size={20} className="text-black" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-black font-bold mb-4 text-sm" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.6' }}>QUICK LINKS</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-gray-700 hover:text-black transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-gray-700 hover:text-black transition-colors">
                    About Event
                  </a>
                </li>
                <li>
                  <a href="#events" className="text-gray-700 hover:text-black transition-colors">
                    Schedule
                  </a>
                </li>
                <li>
                  <a href="#register" className="text-gray-700 hover:text-black transition-colors">
                    Register
                  </a>
                </li>
                <li>
                  <a href="#sponsors" className="text-gray-700 hover:text-black transition-colors">
                    Sponsors
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-black font-bold mb-4 text-sm" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.6' }}>RESOURCES</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-700 hover:text-cyan-600 transition-colors">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-cyan-600 transition-colors">
                    Code of Conduct
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-cyan-600 transition-colors">
                    Media Kit
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 hover:text-cyan-600 transition-colors">
                    Sponsors
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-black font-bold mb-4 text-sm" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.6' }}>CONTACT US</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 bg-cyan-300 p-2" style={{
                  clipPath: `polygon(
                    0 4px, 4px 4px, 4px 0,
                    calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                    100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                    4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                  )`
                }}>
                  <Mail className="flex-shrink-0 mt-1 text-black" size={20} />
                  <div>
                    <div className="text-xs text-gray-700">Email</div>
                    <a href="mailto:hello@foobar10.0.com" className="text-black hover:text-gray-700 transition-colors text-sm font-semibold">
                      hello@foobar10.0.com
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-yellow-300 p-2" style={{
                  clipPath: `polygon(
                    0 4px, 4px 4px, 4px 0,
                    calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                    100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                    4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                  )`
                }}>
                  <Phone className="flex-shrink-0 mt-1 text-black" size={20} />
                  <div>
                    <div className="text-xs text-gray-700">Phone</div>
                    <a href="tel:+1234567890" className="text-black hover:text-gray-700 transition-colors text-sm font-semibold">
                      +1 (234) 567-890
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3 bg-green-300 p-2" style={{
                  clipPath: `polygon(
                    0 4px, 4px 4px, 4px 0,
                    calc(100% - 4px) 0, calc(100% - 4px) 4px, 100% 4px,
                    100% calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 100%,
                    4px 100%, 4px calc(100% - 4px), 0 calc(100% - 4px)
                  )`
                }}>
                  <MapPin className="flex-shrink-0 mt-1 text-black" size={20} />
                  <div>
                    <div className="text-xs text-gray-700">Location</div>
                    <span className="text-black text-sm font-semibold">
                      Christ University <br/>Kengeri Campus
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </FadeInUp>

        {/* Bottom */}
        <div className="border-t-4 border-black pt-8 text-center">
          <p className="text-black flex items-center justify-center gap-2 font-bold text-sm" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.6' }}>
            MADE WITH <Heart className="text-red-500 fill-red-500 animate-pulse" size={16} /> BY FOOBAR TEAM
          </p>
        </div>
      </div>
    </footer>
  );
}