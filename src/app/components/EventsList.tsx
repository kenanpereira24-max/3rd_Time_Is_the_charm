import { useState, useEffect } from 'react';
import { 
  Code, Brain, Gamepad2, Globe, Mic, Coffee, Video, Users, Puzzle, 
  Lock, Terminal, Cpu, X, Calendar, Phone, Ticket, ExternalLink, Instagram, ArrowRight 
} from 'lucide-react';
import { RetroHeading } from './ArcadeElements';
import { FadeInUp, StaggerContainer, StaggerItem } from './ScrollAnimations';

// --- HELPER: Date Formatter ---
function formatDate(dateStr: string) {
  if (!dateStr) return 'TBA';
  const cleanDate = dateStr.includes('/') ? dateStr.split('/')[0] + '-' + dateStr.split('-')[1] + '-' + dateStr.split('-')[2] : dateStr;
  
  const [dayPart, monthPart] = cleanDate.split('-');
  const day = parseInt(dayPart, 10);
  const month = parseInt(monthPart, 10);

  const monthNames = [
    '', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  let suffix = 'th';
  if (day === 1 || day === 21 || day === 31) suffix = 'st';
  else if (day === 2 || day === 22) suffix = 'nd';
  else if (day === 3 || day === 23) suffix = 'rd';

  return `${day}${suffix} ${monthNames[month]}`;
}

// --- DATA ---
const events = [
  // 1. Interaction Event
  {
    id: 'nt6',
    title: 'Interaction Event',
    day: 'Monday',
    date: '02-02-2026',
    icon: Coffee,
    description: 'A fun interaction event to kick things off! Meet the teams, break the ice, and get ready for FOOBAR. Timings: 12pm to 1pm and 4pm to 5pm',
    color: 'from-pink-500 to-rose-500',
    category: 'Non-Technical',
    registration_link: null, 
    pocs: [
      { name: 'Keren', phone: '+91 8129498109' },
      { name: 'Joel', phone: '+91 7736278854' },
      { name: 'Lebina', phone: '+91 7695856564' }
    ]
  },
  // 2. Workshop I
  {
    id: 'w1',
    title: 'Workshop I',
    day: 'Tuesday',
    date: '03-02-2026',
    icon: Cpu,
    description: '', 
    color: 'from-blue-500 to-cyan-500',
    category: 'Workshop',
    registration_link: "#", 
    pocs: [
      { name: 'Joel', phone: '+91 7736278854' },
      { name: 'Naman', phone: '+91 8127390863' }
    ]
  },
  // 3. Pitch or Perish
  {
    id: 'nt1',
    title: 'Pitch or Perish',
    day: 'Wednesday',
    date: '04-02-2026',
    icon: Mic,
    description: 'Entrepreneurship-focused competition designed to test participants’ creativity, branding sense, and business strategy. Round 1: Logo Redesign Challenge. Round 2: Pitching.',
    color: 'from-pink-500 to-rose-500',
    category: 'Non-Technical',
    registration_link: "#", 
    pocs: [
      { name: 'Prachi', phone: '+91 7982126893' },
      { name: 'Paul', phone: '+91 9606867886' }
    ]
  },
  // 4. Trust Issues
  {
    id: 't3',
    title: 'Trust Issues',
    day: 'Thu-Fri',
    date: '06-02-2026', 
    icon: Lock,
    description: '', 
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [
      { name: 'Akash', phone: '+91 7483515673' },
      { name: 'Canice', phone: '+91 7057569482' }
    ]
  },
  // 5. Hackathon
  {
    id: 't6',
    title: 'Hackathon',
    day: 'Sat-Mon',
    date: '07-02-2026',
    icon: Code,
    description: 'Theme: Innovation for a Better Tomorrow. Day 1 (Prelims), Day 2 (Remote build), Day 3 (Finals). Solve real-world problem statements under 10 thematic areas.',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [
      { name: 'Karthik', phone: '+91 7019348614' },
      { name: 'Rupal', phone: '+91 9606998764' },
      { name: 'Tharun', phone: '+91 7539932035' }
    ]
  },
  // 6. Escape Room
  {
    id: 'nt2',
    title: 'Escape Room',
    day: 'Tuesday',
    date: '10-02-2026',
    icon: Puzzle,
    description: 'Find clues in order to escape the room. Theme: Stranger Things.',
    color: 'from-pink-500 to-rose-500',
    category: 'Non-Technical',
    registration_link: "#", 
    pocs: [
      { name: 'Seliya', phone: '+91 7356652672' },
      { name: 'Keren', phone: '+91 8129498109' }
    ]
  },
  // 7. Browser Blitz
  {
    id: 't4',
    title: 'Browser Blitz',
    day: 'Wednesday',
    date: '11-02-2026',
    icon: Globe,
    description: 'Round 1: Debugging Hunt (Fix broken webpages). Round 2: Production Rescue (Fix broken React app, build errors, UI issues).',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [
      { name: 'Sajal', phone: '+91 7068839791' },
      { name: 'Arunima', phone: '+91 8794788693' }
    ]
  },
  // 8. HackStorm
  {
    id: 't5',
    title: 'HackStorm',
    day: 'Thursday',
    date: '12-02-2026',
    icon: Code,
    description: 'Round 1: CodeSense (Rapid-fire debugging/logic). Round 2: PairStorm (Collaborative coding). Round 3: HackStorm (Algorithmic problems).',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [
      { name: 'Parthiv', phone: '+91 9862811449' },
      { name: 'Arnav', phone: '+91 9144914517' }
    ]
  },
  // 9. Code Relay
  {
    id: 't1',
    title: 'Code Relay: The Last Commit',
    day: 'Friday',
    date: '13-02-2026',
    icon: Terminal,
    description: 'Multi-round software engineering challenge. Debug, stabilize, extend, and harden a broken Dockerized application simulating real-world open-source workflows.',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [
      { name: 'Hans', phone: '+91 8861566069' },
      { name: 'Samuel', phone: '+91 7337703388' },
      { name: 'Neha', phone: '+91 9390336410' }
    ]
  },
  // 10. Workshop III
  {
    id: 'w2',
    title: 'Workshop III',
    day: 'Saturday',
    date: '14-02-2026',
    icon: Cpu,
    description: '', 
    color: 'from-blue-500 to-cyan-500',
    category: 'Workshop',
    registration_link: "#", 
    pocs: [
      { name: 'Joel', phone: '+91 7736278854' },
      { name: 'Naman', phone: '+91 8127390863' }
    ]
  },
  // 11. Beat the Bot
  {
    id: 't2',
    title: 'Beat the Bot',
    day: 'Monday',
    date: '16-02-2026',
    icon: Brain,
    description: 'Technical & Creative Challenge. Round 1: Quick Quiz (Multi-Domain). Round 2: Beating the AI Storyteller (Identify AI hallucinations/inconsistencies).',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [
      { name: 'Rupal', phone: '+91 9606998764' },
      { name: 'Tharun J', phone: '+91 7539932035' }
    ]
  },
  // 12. Ace Clutch
  {
    id: 'nt5',
    title: 'Ace Clutch',
    day: 'Tue-Wed',
    date: '17-02-2026',
    icon: Gamepad2,
    description: 'Exhilarating multi-stage digital gaming event. Teams compete across multiple games to climb the dynamic leaderboard.',
    color: 'from-pink-500 to-rose-500',
    category: 'Non-Technical',
    registration_link: "#", 
    pocs: [
      { name: 'Priyanshu', phone: '+91 9917524263' },
      { name: 'Aayush', phone: '+91 8588802698' }
    ]
  },
  // 13. Workshop by Struxnet
  {
    id: 'w3',
    title: 'Workshop by Struxnet',
    day: 'Thursday',
    date: '19-02-2026',
    icon: Globe,
    description: '', 
    color: 'from-blue-500 to-cyan-500',
    category: 'Workshop',
    registration_link: "#", 
    pocs: [
      { name: 'Sajal', phone: '+91 7068839791' },
      { name: 'Arnav', phone: '+91 9144914517' }
    ]
  },
  // 14. Freeze Quest
  {
    id: 'nt3',
    title: 'Freeze Quest',
    day: 'Friday',
    date: '20-02-2026',
    icon: Users,
    description: 'A giant board path created on the ground. Teams move via dice rolls facing Challenges, Dares, Freeze, Lava, and Riddles.',
    color: 'from-pink-500 to-rose-500',
    category: 'Non-Technical',
    registration_link: "#", 
    pocs: [
      { name: 'Arpith', phone: '+91 9137739949' },
      { name: 'Canice', phone: '+91 7057569482' }
    ]
  },
  // 15. Flick Fiesta
  {
    id: 'nt4',
    title: 'Flick Fiesta',
    day: 'Monday',
    date: '23-02-2026',
    icon: Video,
    description: 'Short film-making competition. Teams create a compelling short movie based on a theme. Evaluated on storytelling and technical execution.',
    color: 'from-pink-500 to-rose-500',
    category: 'Non-Technical',
    registration_link: "#", 
    pocs: [
      { name: 'Varsha', phone: '+91 6362764914' },
      { name: 'Nathan', phone: '+91 9100816441' },
      { name: 'Kaviyan', phone: '+91 9019191532' }
    ]
  },
];

const categories = ['All', 'Workshop', 'Technical', 'Non-Technical'];

export function EventsList() {
  // CHANGED: Initial state is now null (instead of 'All')
  // This prevents events from loading automatically on scroll/mount.
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  // UPDATED FILTER LOGIC:
  // If no category is selected (null), return empty array.
  // If 'All', show everything.
  // Otherwise, filter by category.
  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : selectedCategory 
      ? events.filter(event => event.category === selectedCategory)
      : [];

  useEffect(() => {
    if (selectedEvent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [selectedEvent]);

  return (
    <section id="events" className="py-20 bg-gradient-to-b from-blue-900 via-indigo-900 to-purple-900 relative">
      
      {/* Background Pixel Grid */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
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
            <p className="text-xl text-white max-w-2xl mx-auto bg-pink-500 p-6 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Three weeks filled with workshops, talks, competitions, and unforgettable experiences!
            </p>
          </FadeInUp>
        </div>

        {/* Category Buttons */}
        <FadeInUp delay={0.3}>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 font-bold transition-all text-sm rounded-xl border-b-4 active:border-b-0 active:translate-y-1 ${
                  selectedCategory === category
                    ? 'bg-yellow-400 text-black border-yellow-600 scale-105 shadow-lg'
                    : 'bg-gray-900 text-white border-black hover:bg-gray-800'
                }`}
                style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.7rem' }}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeInUp>

        {/* Events Grid */}
        <StaggerContainer 
            key={selectedCategory || 'empty'} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredEvents.map((event) => {
            const Icon = event.icon;
            const bgColors: { [key: string]: string } = {
              'from-purple-500 to-purple-600': '#C4B5FD',
              'from-blue-500 to-cyan-500': '#93C5FD',
              'from-pink-500 to-rose-500': '#F0ABFC',
              'from-green-500 to-emerald-600': '#86EFAC',
            };
            const bgColor = bgColors[event.color] || '#E5E7EB';
            
            return (
              <StaggerItem key={event.id}>
                <div 
                  onClick={() => setSelectedEvent(event)}
                  className="group h-full flex flex-col overflow-hidden hover:-translate-y-2 transition-all duration-300 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white cursor-pointer hover:shadow-[12px_12px_0px_0px_rgba(255,255,0,1)] relative"
                >
                  
                  {/* "Click for Info" Badge */}
                  <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] px-2 py-1 rounded font-bold">
                    CLICK INFO
                  </div>

                  {/* Card Header */}
                  <div className="p-6 text-black relative overflow-hidden" style={{ backgroundColor: bgColor }}>
                    <div className="absolute inset-0 opacity-20" style={{
                      backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)',
                    }}></div>
                    
                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-2">
                        <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold rounded-md" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.6rem' }}>
                          {formatDate(event.date)}
                        </span>
                        <div className="w-10 h-10 bg-black flex items-center justify-center rounded-lg shadow-sm">
                          <Icon size={20} className="text-white" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold mt-2" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.4', fontSize: '0.75rem' }}>
                        {event.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 bg-white flex flex-col flex-grow">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full border-2 border-black">
                        {event.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 leading-relaxed text-sm line-clamp-3 mb-4 flex-grow">
                      {event.description}
                    </p>

                    {/* --- REGISTRATION BUTTON (IN CARD) --- */}
                    <div className="mb-4">
                       {/* UPDATED LOGIC: If registration_link is null, show nothing */}
                       {!event.registration_link ? null : event.registration_link !== "#" ? (
                         <a 
                           href={event.registration_link} 
                           target="_blank" 
                           rel="noopener noreferrer" 
                           onClick={(e) => e.stopPropagation()} 
                           className="inline-block w-full text-center py-2 bg-black text-white text-xs font-bold rounded hover:bg-gray-800 transition-colors"
                         >
                           REGISTER NOW
                         </a>
                       ) : (
                         <div className="w-full text-center py-2 bg-gray-100 text-gray-400 text-xs font-bold rounded cursor-not-allowed border-2 border-dashed border-gray-300">
                           OPENING SOON
                         </div>
                       )}
                    </div>
                    
                    {/* POC Names Only */}
                    <div className="pt-4 border-t-2 border-gray-100 mt-auto">
                      <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">POCs</p>
                      <div className="flex flex-wrap gap-2">
                        {event.pocs.map((p: any, i: number) => (
                           <span key={i} className="text-xs font-bold text-gray-800 bg-gray-100 px-2 py-1 rounded">
                             {p.name}
                           </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

        {/* --- SOCIAL MEDIA & ANNOUNCEMENTS --- */}
        <FadeInUp delay={0.4}>
          <div className="mt-16 text-center space-y-8">
            
            {/* NOTE BANNER */}
            <div className="bg-pink-400 py-2 px-4 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] w-full max-w-3xl mx-auto">
              <p className="text-xs md:text-sm font-bold text-black flex items-center justify-center gap-3">
                <span className="bg-black text-white px-2 py-1 rounded text-[10px]" style={{ fontFamily: '"Press Start 2P", cursive' }}>NOTE:</span>
                 Follow our Instagram page for updates.
              </p>
            </div>

            {/* Follow Us Button */}
            <div className="flex justify-center">
              <a 
                href="https://www.instagram.com/ascii.christ?igsh=MXJodG5kbG9kMTF6cQ==" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-purple-600 to-orange-500 rounded-xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(255,255,255,0.5)] hover:-translate-y-1 transition-all duration-300"
              >
                <Instagram className="text-white w-8 h-8" />
                <div className="text-left">
                  <p className="text-white font-black text-sm tracking-widest" style={{ fontFamily: '"Press Start 2P", cursive' }}>FOLLOW US!</p>
                  <p className="text-white/90 text-xs font-bold font-mono">@ascii.christ</p>
                </div>
              </a>
            </div>
          </div>
        </FadeInUp>


        {/* --- POP-OUT MODAL --- */}
        {selectedEvent && (
          <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 pt-24">
            
            {/* Backdrop */}
            <div 
              className="absolute inset-0 bg-black/80 backdrop-blur-md transition-all duration-300"
              onClick={() => setSelectedEvent(null)}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl border-4 border-black shadow-[0_0_40px_rgba(255,255,0,0.5)] transform transition-all scale-100 animate-in fade-in zoom-in duration-200 overflow-hidden">
              
              <div className="overflow-y-auto flex-1">
                
                {/* Modal Header */}
                <div className={`p-8 relative overflow-hidden shrink-0`} 
                     style={{ 
                       background: selectedEvent.color.includes('green') ? '#86EFAC' : 
                                   selectedEvent.color.includes('blue') ? '#93C5FD' : 
                                   selectedEvent.color.includes('pink') ? '#F0ABFC' : '#C4B5FD' 
                     }}>
                   <div className="absolute inset-0 opacity-10" style={{
                       backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 1px, transparent 0, transparent 50%)',
                       backgroundSize: '10px 10px'
                   }}></div>

                  <button 
                    onClick={() => setSelectedEvent(null)}
                    className="absolute top-4 right-4 p-2 bg-black text-white rounded-full hover:bg-red-600 transition-colors z-50"
                  >
                    <X size={24} />
                  </button>

                  <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-16 h-16 bg-black flex items-center justify-center rounded-2xl shadow-lg shrink-0">
                      <selectedEvent.icon size={32} className="text-white" />
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold rounded-md mb-2" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.6rem' }}>
                        {selectedEvent.category}
                      </span>
                      <h2 className="text-2xl md:text-3xl font-black text-black mb-2" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.4' }}>
                        {selectedEvent.title}
                      </h2>
                    </div>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-8 bg-white">
                  
                  <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-4 p-4 bg-gray-50 rounded-xl border-2 border-gray-200 min-w-[200px] justify-center shadow-sm">
                      <Calendar className="text-purple-600" size={24} />
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Date</p>
                        <p className="font-bold text-lg text-gray-800">{formatDate(selectedEvent.date)}</p>
                      </div>
                    </div>
                  </div>

                  <div className="prose max-w-none mb-8">
                    <h3 className="text-lg font-bold mb-2">Description</h3>
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">
                      {selectedEvent.description}
                    </p>
                  </div>

                  {/* --- MODAL VIEW: REGISTER BUTTON --- */}
                  {selectedEvent.registration_link && (
                    <div className="bg-yellow-400 p-6 rounded-2xl border-4 border-black text-center relative overflow-hidden mb-8">
                      <div className="relative z-10">
                         <h3 className="text-xl font-black mb-2 flex items-center justify-center gap-2" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '1rem' }}>
                            <Ticket size={24} /> REGISTER
                         </h3>
                         
                         {selectedEvent.registration_link !== "#" ? (
                           <>
                             <p className="font-bold mb-4">Secure your spot now!</p>
                             <a 
                               href={selectedEvent.registration_link}
                               target="_blank"
                               rel="noopener noreferrer"
                               className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-bold rounded-lg hover:scale-105 transition-transform hover:bg-gray-900 border-b-4 border-gray-700 active:border-b-0 active:translate-y-1"
                             >
                               REGISTER NOW <ExternalLink size={16}/>
                             </a>
                           </>
                         ) : (
                           <button disabled className="px-6 py-3 bg-black text-white font-bold rounded-lg opacity-80 cursor-not-allowed">
                             REGISTRATIONS OPENING SOON
                           </button>
                         )}
                      </div>
                      <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: 'repeating-linear-gradient(-45deg, #000 0, #000 10px, transparent 10px, transparent 20px)'
                      }}></div>
                    </div>
                  )}

                  {/* POC SECTION */}
                  <div className="border-t-2 border-gray-100 pt-6">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Event Coordinators</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedEvent.pocs.map((poc: any, i: number) => (
                        <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border-2 border-gray-100 hover:border-black transition-colors">
                           <div className="flex items-center gap-3">
                               <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">
                                 {poc.name.charAt(0)}
                               </div>
                               <span className="font-bold text-gray-800 text-sm">{poc.name}</span>
                           </div>
                           <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
                               <Phone size={14} className="text-green-600"/>
                               <span className="font-mono text-xs font-bold text-gray-600">{poc.phone}</span>
                           </div>
                        </div>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
