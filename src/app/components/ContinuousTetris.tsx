import { useEffect, useRef } from 'react';

interface TetrisBlock {
  x: number;
  y: number;
  color: string;
  shape: number[][];
  speed: number;
  trail: { x: number; y: number; opacity: number }[];
}

const TETRIS_SHAPES = [
  [[1, 1, 1, 1]], // I
  [[1, 1], [1, 1]], // O
  [[0, 1, 0], [1, 1, 1]], // T
  [[1, 1, 0], [0, 1, 1]], // S
  [[0, 1, 1], [1, 1, 0]], // Z
  [[1, 0, 0], [1, 1, 1]], // L
  [[0, 0, 1], [1, 1, 1]], // J
];

// Brighter, more vibrant colors
const TETRIS_COLORS = [
  '#00FFFF', // Bright Cyan
  '#FFFF00', // Bright Yellow
  '#FF00FF', // Bright Magenta
  '#00FF00', // Bright Green
  '#FF0000', // Bright Red
  '#FF8800', // Bright Orange
  '#4444FF', // Bright Blue
];

const BLOCK_SIZE = 30;
const TRAIL_LENGTH = 8;

export function ContinuousTetris() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blocksRef = useRef<TetrisBlock[]>([]);
  const animationRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const createNewBlock = (): TetrisBlock => {
      const shapeIndex = Math.floor(Math.random() * TETRIS_SHAPES.length);
      return {
        x: Math.random() * (canvas.width - 100),
        y: -100,
        color: TETRIS_COLORS[shapeIndex],
        shape: TETRIS_SHAPES[shapeIndex],
        speed: 0.3 + Math.random() * 0.4,
        trail: [],
      };
    };

    const animate = (timestamp: number) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new blocks more frequently
      if (timestamp - lastSpawnRef.current > 800) {
        blocksRef.current.push(createNewBlock());
        lastSpawnRef.current = timestamp;
      }

      // Update and draw blocks
      blocksRef.current = blocksRef.current.filter(block => {
        // Add current position to trail
        if (block.y > 0) {
          block.trail.push({ x: block.x, y: block.y, opacity: 0.6 });
          if (block.trail.length > TRAIL_LENGTH) {
            block.trail.shift();
          }
        }

        block.y += block.speed * 1.5; // Increased fall speed

        // Remove blocks that are off screen
        if (block.y > canvas.height + 100) {
          return false;
        }

        // Draw trail first (behind the block)
        block.trail.forEach((trailPoint, index) => {
          const trailOpacity = (index / block.trail.length) * trailPoint.opacity;
          const shape = block.shape;
          
          for (let row = 0; row < shape.length; row++) {
            for (let col = 0; col < shape[row].length; col++) {
              if (shape[row][col]) {
                const x = trailPoint.x + col * BLOCK_SIZE;
                const y = trailPoint.y + row * BLOCK_SIZE;

                // Draw trail with light color and fade
                ctx.fillStyle = block.color.replace(')', `, ${trailOpacity * 0.4})`).replace('rgb', 'rgba').replace('#', 'rgba(');
                
                // Convert hex to rgba for trail
                const hex = block.color;
                const r = parseInt(hex.slice(1, 3), 16);
                const g = parseInt(hex.slice(3, 5), 16);
                const b = parseInt(hex.slice(5, 7), 16);
                ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${trailOpacity * 0.5})`;
                
                ctx.beginPath();
                ctx.roundRect(x, y, BLOCK_SIZE - 2, BLOCK_SIZE - 2, 6);
                ctx.fill();
              }
            }
          }
        });

        // Draw the main block with rounded corners
        const shape = block.shape;
        for (let row = 0; row < shape.length; row++) {
          for (let col = 0; col < shape[row].length; col++) {
            if (shape[row][col]) {
              const x = block.x + col * BLOCK_SIZE;
              const y = block.y + row * BLOCK_SIZE;

              // Main block with bright color
              ctx.fillStyle = block.color;
              ctx.beginPath();
              ctx.roundRect(x, y, BLOCK_SIZE - 2, BLOCK_SIZE - 2, 6);
              ctx.fill();

              // Add bright shine effect on top
              const gradient = ctx.createLinearGradient(x, y, x, y + BLOCK_SIZE - 2);
              gradient.addColorStop(0, 'rgba(255, 255, 255, 0.6)');
              gradient.addColorStop(0.3, 'rgba(255, 255, 255, 0.2)');
              gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
              ctx.fillStyle = gradient;
              ctx.beginPath();
              ctx.roundRect(x, y, BLOCK_SIZE - 2, BLOCK_SIZE - 2, 6);
              ctx.fill();

              // Add glow effect around blocks
              ctx.shadowBlur = 15;
              ctx.shadowColor = block.color;
              ctx.fillStyle = block.color;
              ctx.beginPath();
              ctx.roundRect(x, y, BLOCK_SIZE - 2, BLOCK_SIZE - 2, 6);
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }

        return true;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
        style={{
          imageRendering: 'pixelated',
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
}