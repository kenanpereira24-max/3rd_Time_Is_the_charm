import { Heart } from 'lucide-react';

export function EventFooter() {
  return (
    <footer className="bg-stone-200 py-12 border-t-4 border-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-black flex items-center justify-center gap-2 font-bold text-sm" style={{ fontFamily: '"Press Start 2P", cursive', lineHeight: '1.6' }}>
          MADE WITH <Heart className="text-red-500 fill-red-500 animate-pulse" size={16} /> BY FOOBAR TEAM
        </p>
      </div>
    </footer>
  );
}
