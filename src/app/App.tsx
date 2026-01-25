import { Navbar } from './components/Navbar';
import { EventHero } from './components/EventHero';
import { AboutEvent } from './components/AboutEvent';
import { EventsList } from './components/EventsList';
import { Registration } from './components/Registration';
import { EventFooter } from './components/EventFooter';
import { ScanlineOverlay } from './components/ArcadeElements';

export default function App() {
  return (
    <div className="size-full bg-white">
      {/* Global scanline effect for arcade CRT monitor feel */}
      <ScanlineOverlay />
      
      <Navbar />
      <EventHero />
      <AboutEvent />
      <EventsList />
      <Registration />
      <EventFooter />
    </div>
  );
}