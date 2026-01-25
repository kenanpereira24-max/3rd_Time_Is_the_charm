import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-center items-center gap-2 text-sm font-medium">
          <span>Made with</span>
          <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
          <span>by the foobar team</span>
        </div>
      </div>
    </footer>
  );
}