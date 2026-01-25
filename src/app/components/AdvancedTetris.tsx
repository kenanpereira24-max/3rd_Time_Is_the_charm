import { useEffect, useRef, useState } from 'react';

interface Block {
  x: number;
  y: number;
  color: string;
  shape: number[][];
  rotation: number;
  speed: number;
  locked: boolean;
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

const TETRIS_COLORS = ['#00F0F0', '#F0F000', '#A000F0', '#00F000', '#F00000', '#F0A000', '#0000F0'];

const GRID_WIDTH = 20;
const GRID_HEIGHT = 30;
const BLOCK_SIZE = 30;

export function AdvancedTetris() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [grid, setGrid] = useState<(string | null)[][]>(() => 
    Array(GRID_HEIGHT).fill(null).map(() => Array(GRID_WIDTH).fill(null))
  );
  const animationRef = useRef<number>(0);
  const lastSpawnRef = useRef<number>(0);

  const createNewBlock = (): Block => {
    const shapeIndex = Math.floor(Math.random() * TETRIS_SHAPES.length);
    return {
      x: Math.floor(Math.random() * (GRID_WIDTH - 4)),
      y: -4,
      color: TETRIS_COLORS[shapeIndex],
      shape: TETRIS_SHAPES[shapeIndex],
      rotation: 0,
      speed: 0.50 + Math.random() * 0.1, // Slower speed
      locked: false,
    };
  };

  const checkCollision = (block: Block, newY: number, currentGrid: (string | null)[][]): boolean => {
    const shape = block.shape;
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          const gridY = Math.floor(newY) + row;
          const gridX = block.x + col;
          
          // Check bottom boundary
          if (gridY >= GRID_HEIGHT) return true;
          
          // Check if there's already a block in the grid
          if (gridY >= 0 && currentGrid[gridY] && currentGrid[gridY][gridX]) return true;
        }
      }
    }
    return false;
  };

  const lockBlock = (block: Block, currentGrid: (string | null)[][]): (string | null)[][] => {
    const newGrid = currentGrid.map(row => [...row]);
    const shape = block.shape;
    
    for (let row = 0; row < shape.length; row++) {
      for (let col = 0; col < shape[row].length; col++) {
        if (shape[row][col]) {
          const gridY = Math.floor(block.y) + row;
          const gridX = block.x + col;
          
          if (gridY >= 0 && gridY < GRID_HEIGHT && gridX >= 0 && gridX < GRID_WIDTH) {
            newGrid[gridY][gridX] = block.color;
          }
        }
      }
    }
    
    return newGrid;
  };

  const clearLines = (currentGrid: (string | null)[][]): (string | null)[][] => {
    const newGrid = currentGrid.filter(row => row.some(cell => cell === null));
    const clearedLines = GRID_HEIGHT - newGrid.length;
    
    for (let i = 0; i < clearedLines; i++) {
      newGrid.unshift(Array(GRID_WIDTH).fill(null));
    }
    
    return newGrid;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const animate = (timestamp: number) => {
      // Clear canvas
      ctx.fillStyle = 'rgba(0, 0, 0, 0)';
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Spawn new blocks periodically
      if (timestamp - lastSpawnRef.current > 2000) {
        setBlocks(prev => [...prev, createNewBlock()]);
        lastSpawnRef.current = timestamp;
      }

      // Update blocks
      setBlocks(prevBlocks => {
        let newBlocks = [...prevBlocks];
        let currentGrid = [...grid];
        let gridChanged = false;

        newBlocks = newBlocks.filter(block => {
          if (block.locked) return false;

          const newY = block.y + block.speed;
          
          if (checkCollision(block, newY, currentGrid)) {
            // Lock the block
            currentGrid = lockBlock(block, currentGrid);
            gridChanged = true;
            return false;
          }

          block.y = newY;
          return true;
        });

        if (gridChanged) {
          currentGrid = clearLines(currentGrid);
          setGrid(currentGrid);
        }

        return newBlocks;
      });

      // Draw locked grid
      setGrid(currentGrid => {
        for (let row = 0; row < GRID_HEIGHT; row++) {
          for (let col = 0; col < GRID_WIDTH; col++) {
            if (currentGrid[row][col]) {
              ctx.fillStyle = currentGrid[row][col]!;
              ctx.fillRect(
                col * BLOCK_SIZE,
                row * BLOCK_SIZE,
                BLOCK_SIZE - 2,
                BLOCK_SIZE - 2
              );
              
              // Add shine effect
              ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
              ctx.fillRect(
                col * BLOCK_SIZE,
                row * BLOCK_SIZE,
                BLOCK_SIZE - 2,
                4
              );
            }
          }
        }
        return currentGrid;
      });

      // Draw moving blocks
      blocks.forEach(block => {
        const shape = block.shape;
        for (let row = 0; row < shape.length; row++) {
          for (let col = 0; col < shape[row].length; col++) {
            if (shape[row][col]) {
              const x = (block.x + col) * BLOCK_SIZE;
              const y = (block.y + row) * BLOCK_SIZE;
              
              if (y >= 0) {
                ctx.fillStyle = block.color;
                ctx.fillRect(x, y, BLOCK_SIZE - 2, BLOCK_SIZE - 2);
                
                // Add shine effect
                ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
                ctx.fillRect(x, y, BLOCK_SIZE - 2, 4);
              }
            }
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [blocks, grid]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
      <canvas
        ref={canvasRef}
        width={GRID_WIDTH * BLOCK_SIZE}
        height={GRID_HEIGHT * BLOCK_SIZE}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          imageRendering: 'pixelated',
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
        }}
      />
    </div>
  );
}