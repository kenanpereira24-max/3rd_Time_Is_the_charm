import { useEffect, useRef } from 'react';

interface TetrisPiece {
  x: number;
  y: number;
  shape: number[][];
  color: string;
  speed: number;
}

// Tetris piece shapes (larger grid for better visibility)
const SHAPES = [
  // I piece
  [[1, 1, 1, 1]],
  // O piece
  [[1, 1], [1, 1]],
  // T piece
  [[0, 1, 0], [1, 1, 1]],
  // S piece
  [[0, 1, 1], [1, 1, 0]],
  // Z piece
  [[1, 1, 0], [0, 1, 1]],
  // J piece
  [[1, 0, 0], [1, 1, 1]],
  // L piece
  [[0, 0, 1], [1, 1, 1]],
];

// Bright retro arcade colors (more vibrant and saturated)
const COLORS = [
  '#00FFFF', // Bright Cyan (I piece)
  '#FFFF00', // Bright Yellow (O piece)
  '#FF00FF', // Bright Magenta (T piece)
  '#00FF00', // Bright Green (S piece)
  '#FF0000', // Bright Red (Z piece)
  '#0000FF', // Bright Blue (J piece)
  '#FF8800', // Bright Orange (L piece)
];

export function TetrisBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const pieces: TetrisPiece[] = [];
    const blockSize = 30; // Larger blocks for better visibility

    // Create initial pieces
    const numPieces = 12; // More pieces for fuller screen
    for (let i = 0; i < numPieces; i++) {
      const shapeIndex = Math.floor(Math.random() * SHAPES.length);
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * -canvas.height,
        speed: 1 + Math.random() * 0.5, // Consistent falling speed
        shape: SHAPES[shapeIndex],
        color: COLORS[shapeIndex],
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      // Lighter background for arcade feel
      ctx.fillStyle = 'rgba(100, 116, 139, 0.08)'; // Very light transparent overlay
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      pieces.forEach((piece) => {
        // Draw the tetris piece (no rotation, just straight down like real Tetris)
        piece.shape.forEach((row, rowIndex) => {
          row.forEach((cell, colIndex) => {
            if (cell) {
              const x = piece.x + colIndex * blockSize;
              const y = piece.y + rowIndex * blockSize;

              // Outer glow for arcade neon effect
              ctx.shadowBlur = 15;
              ctx.shadowColor = piece.color;

              // Main block with bright color
              ctx.fillStyle = piece.color;
              ctx.fillRect(x, y, blockSize - 3, blockSize - 3);

              // Pixel-art style highlight (top-left)
              ctx.shadowBlur = 0;
              ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
              ctx.fillRect(x + 3, y + 3, blockSize - 10, 4);
              ctx.fillRect(x + 3, y + 3, 4, blockSize - 10);

              // Shadow (bottom-right) for 3D effect
              ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
              ctx.fillRect(x + blockSize - 7, y + 7, 4, blockSize - 10);
              ctx.fillRect(x + 7, y + blockSize - 7, blockSize - 10, 4);

              // Thick black border for pixel-perfect arcade look
              ctx.strokeStyle = '#000000';
              ctx.lineWidth = 2;
              ctx.strokeRect(x, y, blockSize - 3, blockSize - 3);
            }
          });
        });

        // Update position - straight down movement only (like real Tetris)
        piece.y += piece.speed;

        // Reset if out of bounds
        if (piece.y > canvas.height + 100) {
          piece.y = -100;
          piece.x = Math.random() * canvas.width;
          const shapeIndex = Math.floor(Math.random() * SHAPES.length);
          piece.shape = SHAPES[shapeIndex];
          piece.color = COLORS[shapeIndex];
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
}