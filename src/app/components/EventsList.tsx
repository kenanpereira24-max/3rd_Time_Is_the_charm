import { useState, useEffect } from 'react';
import { 
  Code, Brain, Gamepad2, Globe, Mic, Coffee, Video, Users, Puzzle, 
  Lock, Terminal, Cpu, X, Calendar, Phone, Ticket, ExternalLink, Instagram
} from 'lucide-react';
import { RetroHeading } from './ArcadeElements';
import { FadeInUp } from './ScrollAnimations';

// --- HELPER: Date Formatter ---
function formatDate(dateStr: string) {
  if (!dateStr) return 'TBA';
  
  const parts = dateStr.split('-');
  const day = parseInt(parts[0], 10);
  const month = parseInt(parts[1], 10);

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

// --- DATA: Synced with Schedule Image ---
const events = [
  {
    id: 'e1',
    title: 'Interaction/Inauguration',
    day: 'Monday',
    date: '09-02-2026',
    icon: Coffee,
    description: 'A fun interaction event to kick things off! Meet the teams, break the ice, and get ready for FOOBAR.',
    color: 'from-pink-500 to-rose-500',
    category: 'Non-Technical',
    registration_link: null, 
    pocs: [{ name: 'Keren', phone: '+91 8129498109' }, { name: 'Joel', phone: '+91 7736278854' }]
  },
  {
    id: 'e2',
    title: 'Beat the Bot',
    day: 'Tuesday',
    date: '10-02-2026',
    icon: Brain,
    description: 'Technical & Creative Challenge. Identify AI hallucinations and inconsistencies.',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [{ name: 'Rupal', phone: '+91 9606998764' }, { name: 'Tharun J', phone: '+91 8904739898' }]
  },
  {
    id: 'e3',
    title: 'Pitch and Perish',
    day: 'Wednesday',
    date: '11-02-2026',
    icon: Mic,
    description: 'Entrepreneurship-focused competition. Logo redesign and business strategy pitching.',
    color: 'from-pink-500 to-rose-500',
    category: 'Non-Technical',
    registration_link: "#", 
    pocs: [{ name: 'Prachi', phone: '+91 7982126893' }, { name: 'Paul', phone: '+91 9606867886' }]
  },
  {
    id: 'e4',
    title: 'Code Relay',
    day: 'Thursday',
    date: '12-02-2026',
    icon: Terminal,
    description: 'Multi-round software engineering challenge. Debug and extend a broken Dockerized application.',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [{ name: 'Hans', phone: '+91 8861566069' }, { name: 'Samuel', phone: '+91 7337703388' }]
  },
  {
    id: 'e5',
    title: 'Hackstrom',
    day: 'Friday',
    date: '13-02-2026',
    icon: Code,
    description: 'CodeSense, PairStorm, and algorithmic problem solving.',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [{ name: 'Parthiv', phone: '+91 9862811449' }]
  },
  {
    id: 'e6',
    title: 'Workshop 1',
    day: 'Saturday',
    date: '14-02-2026',
    icon: Cpu,
    description: 'Hands-on technical workshop to build core skills.',
    color: 'from-blue-500 to-cyan-500',
    category: 'Workshop',
    registration_link: "#", 
    pocs: [{ name: 'Joel', phone: '+91 7736278854' }]
  },
  {
    id: 'e7',
    title: 'Ace Clutch',
    day: 'Monday',
    date: '16-02-2026',
    icon: Gamepad2,
    description: 'Multi-stage digital gaming event. Compete across multiple titles.',
    color: 'from-pink-500 to-rose-500',
    category: 'Non-Technical',
    registration_link: "#", 
    pocs: [{ name: 'Priyanshu', phone: '+91 9917524263' }]
  },
  {
    id: 'e8',
    title: 'Ace Clutch (Day 2)',
    day: 'Tuesday',
    date: '17-02-2026',
    icon: Gamepad2,
    description: 'Continuation of the gaming tournament finals.',
    color: 'from-pink-500 to-rose-500',
    category: 'Non-Technical',
    registration_link: "#", 
    pocs: [{ name: 'Aayush', phone: '+91 8588802698' }]
  },
  {
    id: 'e9',
    title: 'Hackathon',
    day: 'Wednesday',
    date: '18-02-2026',
    icon: Code,
    description: 'Innovation for a Better Tomorrow. Day 1: Prelims.',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [{ name: 'Karthik', phone: '+91 7019348614' }]
  },
  {
    id: 'e10',
    title: 'Hackathon (Remote Build)',
    day: 'Thursday',
    date: '19-02-2026',
    icon: Code,
    description: 'Intensive building phase for the main hackathon event.',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [{ name: 'Tharun', phone: '+91 7539932035' }]
  },
  {
    id: 'e11',
    title: 'Workshop (Sajal)',
    day: 'Friday',
    date: '20-02-2026',
    icon: Globe,
    description: 'Docker 101 workshop by Pixelstack club.',
    color: 'from-blue-500 to-cyan-500',
    category: 'Workshop',
    registration_link: "#", 
    pocs: [{ name: 'Sajal', phone: '+91 7068839791' }]
  },
  {
    id: 'e12',
    title: 'Escape Room',
    day: 'Monday',
    date: '23-02-2026',
    icon: Puzzle,
    description: 'Find clues to escape. Theme: Stranger Things.',
    color: 'from-pink-500 to-rose-500',
    category: 'Non-Technical',
    registration_link: "#", 
    pocs: [{ name: 'Seliya', phone: '+91 7356652672' }]
  },
  {
    id: 'e13',
    title: 'Trust Issues',
    day: 'Tuesday',
    date: '24-02-2026',
    icon: Lock,
    description: 'Technical logic and security challenges.',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [{ name: 'Akash', phone: '+91 7483515673' }]
  },
  {
    id: 'e14',
    title: 'Trust Issues (Round 2)',
    day: 'Wednesday',
    date: '25-02-2026',
    icon: Lock,
    description: 'Advanced rounds of the Trust Issues challenge.',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [{ name: 'Canice', phone: '+91 7057569482' }]
  },
  {
    id: 'e15',
    title: 'Board Game/Flick Fiesta',
    day: 'Thursday',
    date: '26-02-2026',
    icon: Video,
    description: 'A giant board path on ground and short film-making competition.',
    color: 'from-pink-500 to-rose-500',
    category: 'Non-Technical',
    registration_link: "#", 
    pocs: [{ name: 'Arpith', phone: '+91 9137739949' }, { name: 'Varsha', phone: '+91 6362764914' }]
  },
  {
    id: 'e16',
    title: 'Browser Blitz',
    day: 'Friday',
    date: '27-02-2026',
    icon: Globe,
    description: 'Debugging hunt and production rescue challenges.',
    color: 'from-green-500 to-emerald-600',
    category: 'Technical',
    registration_link: "#", 
    pocs: [{ name: 'Sajal', phone: '+91 7068839791' }]
  },
  {
    id: 'e17',
    title: 'Flick Fiesta + Valedictory',
    day: 'Saturday',
    date: '28-02-2026',
    icon: Ticket,
    description: 'Final screenings and the closing ceremony.',
    color: 'from-purple-500 to-purple-600',
    category: 'Non-Technical',
    registration_link: "#", 
    pocs: [{ name: 'Nathan', phone: '+91 9100816441' }]
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
    document.body.style.overflow = selectedEvent ? 'hidden' : 'unset';
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
              Three weeks of workshops, competitions, and experiences!
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                <div className="p-6 bg-white flex flex-col flex-grow">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-yellow-400 text-black text-xs font-bold rounded-full border-2 border-black">
                      {event.category}
                    </span>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm line-clamp-3 mb-4 flex-grow">{event.description}</p>
                  
                  <div className="mb-4">
                      {!event.registration_link ? null : event.registration_link !== "#" ? (
                        <a href={event.registration_link} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center py-2 bg-black text-white text-xs font-bold rounded hover:bg-gray-800 transition-colors">REGISTER NOW</a>
                      ) : (
                        <div className="w-full text-center py-2 bg-gray-100 text-gray-400 text-xs font-bold rounded cursor-not-allowed border-2 border-dashed border-gray-300">OPENING SOON</div>
                      )}
                  </div>
                  
                  <div className="pt-4 border-t-2 border-gray-100 mt-auto">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">POCs</p>
                    <div className="flex flex-wrap gap-2">
                      {event.pocs.map((p: any, i: number) => (
                          <span key={i} className="text-xs font-bold text-gray-800 bg-gray-100 px-2 py-1 rounded">{p.name}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* --- POP-OUT MODAL --- */}
        {selectedEvent && (
          <div className="fixed inset-0 z-[9999] flex items-start justify-center p-4 pt-24">
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" onClick={() => setSelectedEvent(null)}></div>
            <div className="relative bg-white w-full max-w-2xl max-h-[85vh] flex flex-col rounded-3xl border-4 border-black shadow-[0_0_40px_rgba(255,255,0,0.5)] overflow-hidden">
              <div className="overflow-y-auto flex-1">
                <div className="p-8 relative overflow-hidden shrink-0" 
                     style={{ background: selectedEvent.color.includes('green') ? '#86EFAC' : selectedEvent.color.includes('blue') ? '#93C5FD' : selectedEvent.color.includes('pink') ? '#F0ABFC' : '#C4B5FD' }}>
                  <button onClick={() => setSelectedEvent(null)} className="absolute top-4 right-4 p-2 bg-black text-white rounded-full hover:bg-red-600 transition-colors z-50"><X size={24} /></button>
                  <div className="relative z-10 flex flex-col md:flex-row gap-6 items-start">
                    <div className="w-16 h-16 bg-black flex items-center justify-center rounded-2xl shrink-0"><selectedEvent.icon size={32} className="text-white" /></div>
                    <div>
                      <span className="inline-block px-3 py-1 bg-black text-white text-xs font-bold rounded-md mb-2" style={{ fontFamily: '"Press Start 2P", cursive', fontSize: '0.6rem' }}>{selectedEvent.category}</span>
                      <h2 className="text-2xl md:text-3xl font-black text-black mb-2" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.4' }}>{selectedEvent.title}</h2>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-white">
                  <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-4 p-4 bg-gray-50 rounded-xl border-2 border-gray-200 min-w-[200px] justify-center">
                      <Calendar className="text-purple-600" size={24} />
                      <div>
                        <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Date</p>
                        <p className="font-bold text-lg text-gray-800">{formatDate(selectedEvent.date)}</p>
                      </div>
                    </div>
                  </div>
                  <div className="prose max-w-none mb-8">
                    <h3 className="text-lg font-bold mb-2">Description</h3>
                    <p className="text-gray-700 text-lg leading-relaxed whitespace-pre-line">{selectedEvent.description}</p>
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
                           <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-gray-200">
                               <Phone size={14} className="text-green-600"/><span className="font-mono text-xs font-bold text-gray-600">{poc.phone}</span>
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
