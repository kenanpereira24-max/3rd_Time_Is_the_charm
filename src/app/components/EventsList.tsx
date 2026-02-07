import { useState, useEffect } from 'react';
import { 
  Code, Brain, Gamepad2, Globe, Mic, Coffee, Video, Users, Puzzle, 
  Lock, Terminal, Cpu, X, Calendar, Phone, Ticket, ExternalLink, Instagram, ArrowRight, MapPin, Clock 
} from 'lucide-react';
import { RetroHeading } from './ArcadeElements';
import { FadeInUp } from './ScrollAnimations';

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

const events = [
  {
    id: 'nt6',
    title: 'Interaction Event',
    day: 'Monday',
    date: '09-02-2026',
    time: null,
    venue: null,
    icon: Coffee,
    description: 'A fun interaction event to kick things off! Meet the teams, break the ice, and get ready for FOOBAR. Timings: 12pm to 1pm and 4pm to 5pm',
    color: 'from-pink-500 to-rose-500',
    category: 'Non-Technical',
    registration_link: null, 
    pocs: [
      { name: 'Keren', phone: '+91 8129498109' },
      { name: 'Joel', phone: '+91 7736278854' },
      { name: 'Libena', phone: '+91 7695856564' }
    ]
  },
  {
    id: 'w1',
    title: 'Workshop I',
    day: 'Saturday',
    date: '14-02-2026',
    time: null,
    venue: null,
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
  {
    id: 'nt1',
    title: 'Pitch and Perish',
    day: 'Wednesday',
    date: '11-02-2026',
    time: null,
    venue: null,
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
  {
    id: 't3',
    title: 'Trust Issues',
    day: 'Tuesday',
    date: '24-02-2026', 
    time: null,
    venue: null,
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
  {
    id: 't6',
    title: 'Hackathon',
    day: 'Wednesday',
    date: '18-02-2026',
    time: null,
    venue: null,
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
  {
    id: 'nt2',
    title: 'Escape Room',
    day: 'Monday',
    date: '23-02-2026',
    time: null,
    venue: null,
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
  {
    id: 't4',
    title: 'Browser Blitz',
    day: 'Friday',
    date: '27-02-2026',
    time: null,
    venue: null,
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
  {
    id: 't5',
    title: 'HackStorm',
    day: 'Friday',
    date: '13-02-2026',
    time: null,
    venue: null,
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
  {
    id: 't1',
    title: 'Code Relay: The Last Commit',
    day: 'Thursday',
    date: '12-02-2026',
    time: null,
    venue: null,
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
  {
    id: 'w2',
    title: 'Workshop III',
    day: 'Saturday',
    date: '14-02-2026',
    time: null,
    venue: null,
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
  {
    id: 't2',
    title: 'Beat the Bot',
    day: 'Tuesday',
    date: '10-02-2026',
    time: null,
    venue: null,
    icon: Brain,
    description: 'Technical & Creative Challenge. Round 1: Quick Quiz (Multi-Domain). Round 2: Beating the AI Storyteller (Identify AI hallucinations/inconsistencies).',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [
      { name: 'Rupal', phone: '+91 9606998764' },
      { name: 'Tharun J', phone: '+91 8904739898' }
    ]
  },
  {
    id: 'nt5',
    title: 'Ace Clutch',
    day: 'Monday',
    date: '16-02-2026',
    time: null,
    venue: null,
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
  {
    id: 'w3',
    title: 'Docker 101',
    day: 'Friday',
    date: '20-02-2026',
    time: null,
    venue: null,
    icon: Globe,
    description: 'Workshop by Pixelstack club', 
    color: 'from-blue-500 to-cyan-500',
    category: 'Workshop',
    registration_link: "#", 
    pocs: [
      { name: 'Sajal', phone: '+91 7068839791' },
      { name: 'Arnav', phone: '+91 9144914517' }
    ]
  },
  {
    id: 'nt3',
    title: 'Dice and Disaster',
    day: 'Thursday',
    date: '26-02-2026',
    time: null,
    venue: null,
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
  {
    id: 'nt4',
    title: 'Flick Fiesta',
    day: 'Thursday',
    date: '26-02-2026',
    time: null,
    venue: null,
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
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

  const filteredEvents = selectedCategory === 'All' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

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
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255,255,255,0.1) 2px, transparent 2px)',
        backgroundSize: '25px 25px',
      }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <FadeInUp>
            <RetroHeading size="medium" className="mb-6 text-yellow-400">EVENT SCHEDULE</RetroHeading>
          </FadeInUp>
          <FadeInUp delay={0.2}>
            <p className="text-xl text-white max-w-2xl mx-auto bg-pink-500 p-6 rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              Three weeks filled with workshops, talks, competitions, and unforgettable experiences!
            </p>
          </FadeInUp>
        </div>

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

        <div key={selectedCategory} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <div 
                key={event.id}
                onClick={() => setSelectedEvent(event)}
                className="group h-full flex flex-col overflow-hidden hover:-translate-y-2 transition-all duration-300 border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white cursor-pointer hover:shadow-[12px_12px_0px_0px_rgba(255,255,0,1)] relative"
              >
                <div className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-[10px] px-2 py-1 rounded font-bold">CLICK INFO</div>
                <div className="p-6 text-black relative overflow-hidden" style={{ backgroundColor: bgColor }}>
                  <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)' }}></div>
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex flex-col items-start gap-1">
                        <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold rounded-md" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.6rem' }}>{formatDate(event.date)}</span>
                        {event.venue && (
                            <div className="inline-flex items-center gap-1 px-2 py-1 bg-white/90 rounded border border-black shadow-sm">
                                <MapPin size={10} className="text-red-500" />
                                <span className="text-[10px] font-bold uppercase tracking-tight leading-none">{event.venue}</span>
                            </div>
                        )}
                        {event.time && (
                            <div className="inline-flex items-center gap-1 px-2 py-1 bg-white/90 rounded border border-black shadow-sm">
                                <Clock size={10} className="text-blue-600" />
                                <span className="text-[10px] font-bold uppercase tracking-tight leading-none">{event.time}</span>
                            </div>
                        )}
                      </div>
                      <div className="w-10 h-10 bg-black flex items-center justify-center rounded-lg shadow-sm"><Icon size={20} className="text-white" /></div>
                    </div>
                    <h3 className="text-lg font-bold mt-2" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.4', fontSize: '0.75rem' }}>{event.title}</h3>
                  </div>
                </div>
                <div className="p-6 bg-white flex flex-col flex-grow">
                  <div className="mb-4"><span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full border-2 border-black">{event.category}</span></div>
                  <p className="text-gray-700 leading-relaxed text-sm line-clamp-3 mb-4 flex-grow">{event.description}</p>
                  <div className="mb-4">
                      {event.registration_link && event.registration_link !== "#" ? (
                        <a href={event.registration_link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-block w-full text-center py-2 bg-black text-white text-xs font-bold rounded hover:bg-gray-800 transition-colors">REGISTER NOW</a>
                      ) : (
                        <div className="w-full text-center py-2 bg-gray-100 text-gray-400 text-xs font-bold rounded cursor-not-allowed border-2 border-dashed border-gray-300">OPENING SOON</div>
                      )}
                  </div>
                  <div className="pt-4 border-t-2 border-gray-100 mt-auto">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">POCs</p>
                    <div className="flex flex-wrap gap-2">{event.pocs.map((p: any, i: number) => (<span key={i} className="text-xs font-bold text-gray-800 bg-gray-100 px-2 py-1 rounded">{p.name}</span>))}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {selectedEvent && (
          <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 pt-24">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelectedEvent(null)}></div>
            <div className="relative bg-white w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl border-4 border-black shadow-[0_0_40px_rgba(255,255,0,0.5)] overflow-hidden">
              <div className="overflow-y-auto flex-1">
                <div className="p-8 relative overflow-hidden shrink-0" style={{ background: selectedEvent.color.includes('green') ? '#86EFAC' : selectedEvent.color.includes('blue') ? '#93C5FD' : selectedEvent.color.includes('pink') ? '#F0ABFC' : '#C4B5FD' }}>
                  <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4 p-2 bg-black text-white rounded-full hover:bg-red-600 transition-colors z-50"><X size={24} /></button>
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-16 h-16 bg-black flex items-center justify-center rounded-2xl shadow-lg shrink-0"><selectedEvent.icon size={32} className="text-white" /></div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold rounded-md mb-2" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.6rem' }}>{selectedEvent.category}</span>
                      <h2 className="text-2xl md:text-3xl font-black text-black mb-2" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.4' }}>{selectedEvent.title}</h2>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  
                  {/* SEPARATE BOXES FOR DATE, TIME, AND VENUE */}
                  <div className="flex flex-wrap justify-center gap-4 mb-8">
                    
                    {/* Date Box */}
                    <div className="inline-flex items-center gap-4 p-4 bg-gray-50 rounded-xl border-2 border-gray-200 min-w-[150px] justify-center shadow-sm">
                      <Calendar className="text-purple-600" size={24} />
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Date</p>
                        <p className="font-bold text-lg text-gray-800">{formatDate(selectedEvent.date)}</p>
                      </div>
                    </div>

                    {/* Time Box (Only if time exists) */}
                    {selectedEvent.time && (
                      <div className="inline-flex items-center gap-4 p-4 bg-gray-50 rounded-xl border-2 border-gray-200 min-w-[150px] justify-center shadow-sm">
                        <Clock className="text-blue-600" size={24} />
                        <div>
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Time</p>
                          <p className="font-bold text-lg text-gray-800">{selectedEvent.time}</p>
                        </div>
                      </div>
                    )}

                    {/* Venue Box (Only if venue exists) */}
                    {selectedEvent.venue && (
                      <div className="inline-flex items-center gap-4 p-4 bg-gray-50 rounded-xl border-2 border-gray-200 min-w-[150px] justify-center shadow-sm">
                        <MapPin className="text-red-600" size={24} />
                        <div>
                          <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Venue</p>
                          <p className="font-bold text-lg text-gray-800">{selectedEvent.venue}</p>
                        </div>
                      </div>
                    )}

                  </div>

                  <div className="prose max-w-none mb-8">
                    <h3 className="text-lg font-bold mb-2">Description</h3>
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{selectedEvent.description}</p>
                  </div>
                  <div className="bg-yellow-400 p-6 rounded-2xl border-4 border-black text-center relative overflow-hidden mb-8">
                    <div className="relative z-10">
                        <h3 className="text-xl font-black mb-2 flex items-center justify-center gap-2" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '1rem' }}><Ticket size={24} /> REGISTER</h3>
                        {selectedEvent.registration_link && selectedEvent.registration_link !== "#" ? (
                          <><p className="font-bold mb-4">Secure your spot now!</p><a href={selectedEvent.registration_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3 bg-black text-white font-bold rounded-lg border-b-4 border-gray-700 active:border-b-0 active:translate-y-1">REGISTER NOW <ExternalLink size={16}/></a></>
                        ) : (
                          <button disabled className="px-6 py-3 bg-black text-white font-bold rounded-lg opacity-80 cursor-not-allowed">REGISTRATIONS OPENING SOON</button>
                        )}
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-100 pt-6">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wide mb-4">Event Coordinators</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {selectedEvent.pocs.map((poc: any, i: number) => (
                        <div key={i} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl border-2 border-gray-100">
                           <div className="flex items-center gap-3">
                               <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">{poc.name.charAt(0)}</div>
                               <span className="font-bold text-gray-800 text-sm">{poc.name}</span>
                           </div>
                           <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200"><Phone size={14} className="text-green-600"/><span className="font-mono text-xs font-bold text-gray-600">{poc.phone}</span></div>
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
