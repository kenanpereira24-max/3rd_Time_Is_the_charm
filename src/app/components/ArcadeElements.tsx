// Retro Arcade Decorative Elements

export function PixelBorder({ children, className = '', color = 'yellow' }: { children: React.ReactNode; className?: string; color?: string }) {
  const colorClasses = {
    yellow: 'border-yellow-400 shadow-yellow-400/50',
    cyan: 'border-cyan-400 shadow-cyan-400/50',
    magenta: 'border-pink-500 shadow-pink-500/50',
    green: 'border-green-400 shadow-green-400/50',
  };

  return (
    <div className={`relative ${className}`}>
      {/* Corner Pixels */}
      <div className={`absolute -top-1 -left-1 w-3 h-3 bg-${color}-400 border-2 border-black`}></div>
      <div className={`absolute -top-1 -right-1 w-3 h-3 bg-${color}-400 border-2 border-black`}></div>
      <div className={`absolute -bottom-1 -left-1 w-3 h-3 bg-${color}-400 border-2 border-black`}></div>
      <div className={`absolute -bottom-1 -right-1 w-3 h-3 bg-${color}-400 border-2 border-black`}></div>
      
      {/* Main Border */}
      <div className={`border-4 border-dashed ${colorClasses[color as keyof typeof colorClasses] || colorClasses.yellow} shadow-lg rounded-lg p-1`}>
        {children}
      </div>
    </div>
  );
}

export function ArcadeButton({ children, onClick, className = '', variant = 'primary' }: { 
  children: React.ReactNode; 
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}) {
  const variantClasses = variant === 'primary'
    ? 'bg-gradient-to-b from-yellow-400 via-yellow-500 to-yellow-600 text-black border-yellow-300 shadow-yellow-500/50 hover:shadow-yellow-400/80 active:from-yellow-600 active:to-yellow-700'
    : 'bg-gradient-to-b from-cyan-400 via-cyan-500 to-cyan-600 text-black border-cyan-300 shadow-cyan-500/50 hover:shadow-cyan-400/80 active:from-cyan-600 active:to-cyan-700';

  return (
    <button
      onClick={onClick}
      className={`relative px-8 py-4 ${variantClasses} border-4 border-b-8 rounded-lg font-bold shadow-lg transform transition-all hover:scale-105 hover:-translate-y-1 active:translate-y-1 active:border-b-4 ${className}`}
      style={{ 
        fontFamily: '"Press Start 2P", cursive',
        textShadow: '2px 2px 0px rgba(0,0,0,0.3)',
      }}
    >
      {children}
    </button>
  );
}

export function RetroHeading({ children, className = '', size = 'large' }: { 
  children: React.ReactNode; 
  className?: string;
  size?: 'large' | 'medium' | 'small';
}) {
  const sizeClasses = {
    large: 'text-4xl md:text-5xl lg:text-6xl',
    medium: 'text-2xl md:text-3xl lg:text-4xl',
    small: 'text-xl md:text-2xl',
  };

  return (
    <h2 
      className={`${sizeClasses[size]} ${className}`}
      style={{ 
        fontFamily: '"Press Start 2P", cursive',
        textShadow: '4px 4px 0px rgba(0,0,0,0.3), 0 0 20px currentColor',
        lineHeight: '1.6',
      }}
    >
      {children}
    </h2>
  );
}

export function ArcadeCard({ children, className = '', glowColor = 'yellow' }: { 
  children: React.ReactNode; 
  className?: string;
  glowColor?: string;
}) {
  return (
    <div className={`bg-gradient-to-br from-purple-900/80 via-indigo-900/80 to-blue-900/80 border-4 border-yellow-400 rounded-xl p-6 shadow-2xl relative overflow-hidden ${className}`}>
      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.1) 2px, rgba(0,0,0,0.1) 4px)',
      }}></div>
      
      {/* Glow effect */}
      <div className="absolute inset-0 pointer-events-none opacity-30" style={{
        boxShadow: `inset 0 0 50px ${glowColor === 'yellow' ? '#facc15' : glowColor}`,
      }}></div>
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export function PixelDot({ color = 'yellow', size = 'md', animated = false }: {
  color?: string;
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}) {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4',
  };

  const colorClasses = {
    yellow: 'bg-yellow-400 shadow-yellow-400/80',
    cyan: 'bg-cyan-400 shadow-cyan-400/80',
    green: 'bg-green-400 shadow-green-400/80',
    magenta: 'bg-pink-500 shadow-pink-500/80',
    red: 'bg-red-500 shadow-red-500/80',
  };

  return (
    <div 
      className={`${sizeClasses[size]} ${colorClasses[color as keyof typeof colorClasses] || colorClasses.yellow} border-2 border-black shadow-lg ${animated ? 'animate-pulse' : ''}`}
      style={{ imageRendering: 'pixelated' }}
    ></div>
  );
}

export function ScanlineOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none z-50 opacity-10">
      <div 
        className="w-full h-full"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
        }}
      ></div>
    </div>
  );
}
