// Retro arcade game icons as SVG components
import { motion } from 'motion/react';

// Mario Mushroom (Power-up)
export function Mushroom({ className = "", size = 40, animate = true }: { className?: string, size?: number, animate?: boolean }) {
  const Component = animate ? motion.div : 'div';
  const animationProps = animate ? {
    animate: { 
      y: [0, -10, 0],
      rotate: [0, 5, -5, 0]
    },
    transition: { 
      duration: 2, 
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  return (
    <Component className={`inline-block ${className}`} {...animationProps}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        {/* Mushroom cap */}
        <rect x="4" y="8" width="4" height="4" fill="#FF0000"/>
        <rect x="8" y="4" width="16" height="4" fill="#FF0000"/>
        <rect x="24" y="8" width="4" height="4" fill="#FF0000"/>
        <rect x="4" y="12" width="24" height="4" fill="#FF0000"/>
        
        {/* White spots */}
        <rect x="8" y="8" width="4" height="4" fill="#FFFFFF"/>
        <rect x="20" y="8" width="4" height="4" fill="#FFFFFF"/>
        <rect x="14" y="12" width="4" height="4" fill="#FFFFFF"/>
        
        {/* Stem */}
        <rect x="12" y="16" width="8" height="4" fill="#F5DEB3"/>
        <rect x="10" y="20" width="12" height="8" fill="#F5DEB3"/>
        
        {/* Stem shadow */}
        <rect x="16" y="20" width="2" height="8" fill="#D2B48C"/>
      </svg>
    </Component>
  );
}

// Sonic Ring (Gold Ring)
export function SonicRing({ className = "", size = 40, animate = true }: { className?: string, size?: number, animate?: boolean }) {
  const Component = animate ? motion.div : 'div';
  const animationProps = animate ? {
    animate: { 
      rotate: 360,
      scale: [1, 1.1, 1]
    },
    transition: { 
      rotate: { duration: 3, repeat: Infinity, ease: "linear" },
      scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    }
  } : {};

  return (
    <Component className={`inline-block ${className}`} {...animationProps}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        {/* Outer ring */}
        <rect x="8" y="4" width="16" height="4" fill="#FFD700"/>
        <rect x="4" y="8" width="4" height="16" fill="#FFD700"/>
        <rect x="24" y="8" width="4" height="16" fill="#FFD700"/>
        <rect x="8" y="24" width="16" height="4" fill="#FFD700"/>
        
        {/* Inner hollow */}
        <rect x="12" y="12" width="8" height="8" fill="transparent"/>
        
        {/* Highlights */}
        <rect x="8" y="6" width="8" height="2" fill="#FFFF00"/>
        <rect x="6" y="8" width="2" height="8" fill="#FFFF00"/>
      </svg>
    </Component>
  );
}

// Pac-Man Ghost
export function PacManGhost({ className = "", size = 40, color = "#FF0000", animate = true }: { className?: string, size?: number, color?: string, animate?: boolean }) {
  const Component = animate ? motion.div : 'div';
  const animationProps = animate ? {
    animate: { 
      x: [0, 5, 0, -5, 0],
      y: [0, -3, 0]
    },
    transition: { 
      duration: 2, 
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  return (
    <Component className={`inline-block ${className}`} {...animationProps}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        {/* Ghost body */}
        <rect x="8" y="8" width="16" height="4" fill={color}/>
        <rect x="4" y="12" width="24" height="12" fill={color}/>
        
        {/* Bottom wavy part */}
        <rect x="4" y="24" width="4" height="4" fill={color}/>
        <rect x="12" y="24" width="4" height="4" fill={color}/>
        <rect x="20" y="24" width="4" height="4" fill={color}/>
        
        {/* Eyes */}
        <rect x="10" y="14" width="4" height="6" fill="#FFFFFF"/>
        <rect x="18" y="14" width="4" height="6" fill="#FFFFFF"/>
        <rect x="12" y="16" width="2" height="3" fill="#0000FF"/>
        <rect x="20" y="16" width="2" height="3" fill="#0000FF"/>
      </svg>
    </Component>
  );
}

// Space Invader Alien
export function SpaceInvader({ className = "", size = 40, animate = true }: { className?: string, size?: number, animate?: boolean }) {
  const Component = animate ? motion.div : 'div';
  const animationProps = animate ? {
    animate: { 
      y: [0, -8, 0],
      x: [0, 4, 0, -4, 0]
    },
    transition: { 
      duration: 3, 
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  return (
    <Component className={`inline-block ${className}`} {...animationProps}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        {/* Space Invader sprite */}
        <rect x="8" y="4" width="4" height="4" fill="#00FF00"/>
        <rect x="20" y="4" width="4" height="4" fill="#00FF00"/>
        <rect x="12" y="8" width="8" height="4" fill="#00FF00"/>
        <rect x="8" y="12" width="16" height="4" fill="#00FF00"/>
        <rect x="4" y="16" width="24" height="4" fill="#00FF00"/>
        <rect x="4" y="20" width="4" height="4" fill="#00FF00"/>
        <rect x="8" y="20" width="4" height="4" fill="#00FF00"/>
        <rect x="20" y="20" width="4" height="4" fill="#00FF00"/>
        <rect x="24" y="20" width="4" height="4" fill="#00FF00"/>
        <rect x="12" y="24" width="4" height="4" fill="#00FF00"/>
        <rect x="16" y="24" width="4" height="4" fill="#00FF00"/>
      </svg>
    </Component>
  );
}

// Question Block (Mario)
export function QuestionBlock({ className = "", size = 40, animate = true }: { className?: string, size?: number, animate?: boolean }) {
  const Component = animate ? motion.div : 'div';
  const animationProps = animate ? {
    animate: { 
      y: [0, -15, 0],
      scale: [1, 1.05, 1]
    },
    transition: { 
      duration: 1.5, 
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  return (
    <Component className={`inline-block ${className}`} {...animationProps}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        {/* Block background */}
        <rect x="4" y="4" width="24" height="24" fill="#F4A300"/>
        
        {/* Border/shadow */}
        <rect x="4" y="4" width="24" height="4" fill="#FFD700"/>
        <rect x="4" y="4" width="4" height="24" fill="#FFD700"/>
        <rect x="24" y="24" width="4" height="4" fill="#8B6914"/>
        <rect x="4" y="24" width="24" height="4" fill="#8B6914"/>
        <rect x="24" y="4" width="4" height="24" fill="#8B6914"/>
        
        {/* Question mark */}
        <rect x="12" y="10" width="8" height="2" fill="#000000"/>
        <rect x="18" y="12" width="2" height="4" fill="#000000"/>
        <rect x="12" y="16" width="8" height="2" fill="#000000"/>
        <rect x="14" y="20" width="4" height="2" fill="#000000"/>
      </svg>
    </Component>
  );
}

// Retro Potion/Health
export function Potion({ className = "", size = 40, color = "#00BFFF", animate = true }: { className?: string, size?: number, color?: string, animate?: boolean }) {
  const Component = animate ? motion.div : 'div';
  const animationProps = animate ? {
    animate: { 
      rotate: [0, -5, 5, 0],
      y: [0, -5, 0]
    },
    transition: { 
      duration: 2.5, 
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  return (
    <Component className={`inline-block ${className}`} {...animationProps}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        {/* Bottle neck */}
        <rect x="12" y="6" width="8" height="4" fill="#CCCCCC"/>
        <rect x="10" y="10" width="12" height="2" fill="#CCCCCC"/>
        
        {/* Bottle body */}
        <rect x="8" y="12" width="16" height="14" fill={color}/>
        <rect x="6" y="14" width="2" height="10" fill={color}/>
        <rect x="24" y="14" width="2" height="10" fill={color}/>
        <rect x="8" y="26" width="16" height="2" fill={color}/>
        
        {/* Liquid shine */}
        <rect x="10" y="14" width="4" height="8" fill="#FFFFFF" opacity="0.5"/>
      </svg>
    </Component>
  );
}

// Retro Heart/Life
export function PixelHeart({ className = "", size = 40, animate = true }: { className?: string, size?: number, animate?: boolean }) {
  const Component = animate ? motion.div : 'div';
  const animationProps = animate ? {
    animate: { 
      scale: [1, 1.2, 1],
    },
    transition: { 
      duration: 1, 
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  return (
    <Component className={`inline-block ${className}`} {...animationProps}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        {/* Heart shape */}
        <rect x="8" y="8" width="4" height="4" fill="#FF1493"/>
        <rect x="20" y="8" width="4" height="4" fill="#FF1493"/>
        <rect x="4" y="12" width="24" height="4" fill="#FF1493"/>
        <rect x="4" y="16" width="24" height="4" fill="#FF1493"/>
        <rect x="8" y="20" width="16" height="4" fill="#FF1493"/>
        <rect x="12" y="24" width="8" height="4" fill="#FF1493"/>
      </svg>
    </Component>
  );
}

// Star/Power Star
export function PowerStar({ className = "", size = 40, animate = true }: { className?: string, size?: number, animate?: boolean }) {
  const Component = animate ? motion.div : 'div';
  const animationProps = animate ? {
    animate: { 
      rotate: 360,
      scale: [1, 1.15, 1]
    },
    transition: { 
      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
    }
  } : {};

  return (
    <Component className={`inline-block ${className}`} {...animationProps}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        {/* Star */}
        <rect x="14" y="4" width="4" height="4" fill="#FFD700"/>
        <rect x="10" y="8" width="12" height="4" fill="#FFD700"/>
        <rect x="6" y="12" width="20" height="4" fill="#FFD700"/>
        <rect x="4" y="16" width="24" height="4" fill="#FFD700"/>
        <rect x="10" y="20" width="12" height="4" fill="#FFD700"/>
        <rect x="8" y="24" width="4" height="4" fill="#FFD700"/>
        <rect x="20" y="24" width="4" height="4" fill="#FFD700"/>
        
        {/* Eyes */}
        <rect x="10" y="14" width="2" height="2" fill="#000000"/>
        <rect x="20" y="14" width="2" height="2" fill="#000000"/>
      </svg>
    </Component>
  );
}

// Cherry (Pac-Man bonus)
export function Cherry({ className = "", size = 40, animate = true }: { className?: string, size?: number, animate?: boolean }) {
  const Component = animate ? motion.div : 'div';
  const animationProps = animate ? {
    animate: { 
      rotate: [-5, 5, -5],
      y: [0, -3, 0]
    },
    transition: { 
      duration: 2, 
      repeat: Infinity,
      ease: "easeInOut"
    }
  } : {};

  return (
    <Component className={`inline-block ${className}`} {...animationProps}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        {/* Stem */}
        <rect x="14" y="4" width="4" height="8" fill="#8B4513"/>
        <rect x="10" y="8" width="4" height="4" fill="#8B4513"/>
        
        {/* Cherries */}
        <rect x="6" y="16" width="8" height="8" fill="#DC143C"/>
        <rect x="18" y="18" width="8" height="8" fill="#DC143C"/>
        
        {/* Highlights */}
        <rect x="8" y="18" width="2" height="2" fill="#FF6B9D"/>
        <rect x="20" y="20" width="2" height="2" fill="#FF6B9D"/>
      </svg>
    </Component>
  );
}

// Coin (Classic game coin)
export function Coin({ className = "", size = 40, animate = true }: { className?: string, size?: number, animate?: boolean }) {
  const Component = animate ? motion.div : 'div';
  const animationProps = animate ? {
    animate: { 
      rotateY: [0, 360],
      y: [0, -10, 0]
    },
    transition: { 
      rotateY: { duration: 2, repeat: Infinity, ease: "linear" },
      y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
    }
  } : {};

  return (
    <Component className={`inline-block ${className}`} style={{ transformStyle: 'preserve-3d' }} {...animationProps}>
      <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
        {/* Coin */}
        <rect x="8" y="6" width="16" height="20" fill="#FFD700"/>
        <rect x="6" y="8" width="20" height="16" fill="#FFD700"/>
        
        {/* Inner detail */}
        <rect x="12" y="10" width="8" height="12" fill="#FFA500"/>
        <rect x="10" y="12" width="12" height="8" fill="#FFA500"/>
        
        {/* Shine */}
        <rect x="10" y="10" width="4" height="4" fill="#FFFF00"/>
      </svg>
    </Component>
  );
}