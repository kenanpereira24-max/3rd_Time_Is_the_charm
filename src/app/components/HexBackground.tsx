import { useEffect, useRef } from 'react';

interface HexChar {
  x: number;
  y: number;
  speed: number;
  char: string;
  opacity: number;
}

export function HexBackground() {
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

    // Hexadecimal characters
    const hexChars = '0123456789ABCDEF';
    const chars: HexChar[] = [];

    // Create initial characters
    const numChars = 80; // Increased for more visibility
    for (let i = 0; i < numChars; i++) {
      chars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        speed: 1.5 + Math.random() * 2.0, // Faster speed
        char: hexChars[Math.floor(Math.random() * hexChars.length)],
        opacity: 0.3 + Math.random() * 0.4, // Higher opacity for visibility
      });
    }

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'; // Subtle trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      chars.forEach((char) => {
        // Draw character with gradient - Green Matrix style
        const gradient = ctx.createLinearGradient(char.x, char.y, char.x, char.y + 20);
        gradient.addColorStop(0, `rgba(132, 255, 0, ${char.opacity})`); // bright lime green
        gradient.addColorStop(1, `rgba(0, 255, 100, ${char.opacity})`); // vibrant green

        ctx.fillStyle = gradient;
        ctx.font = '16px monospace';
        ctx.fillText(char.char, char.x, char.y);

        // Update position
        char.y += char.speed;

        // Reset if out of bounds
        if (char.y > canvas.height) {
          char.y = -20;
          char.x = Math.random() * canvas.width;
          char.char = hexChars[Math.floor(Math.random() * hexChars.length)];
        }

        // Randomly change character
        if (Math.random() < 0.01) {
          char.char = hexChars[Math.floor(Math.random() * hexChars.length)];
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
      style={{ opacity: 0.6 }} // Increased opacity for more pop
    />
  );
}