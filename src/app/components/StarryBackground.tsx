import { useEffect, useRef, useState } from 'react';

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  twinkleSpeed: number;
  baseSize: number;
}

export function StarryBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const targetMousePos = useRef({ x: 0, y: 0 });
  const currentMousePos = useRef({ x: 0, y: 0 });

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

    // Mouse move handler for interactivity
    const handleMouseMove = (e: MouseEvent) => {
      targetMousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Create stars with diverse sizes
    const stars: Star[] = [];
    const numStars = 200;

    for (let i = 0; i < numStars; i++) {
      const baseSize = Math.random() * 3 + 0.5; // Range from 0.5 to 3.5
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: baseSize,
        opacity: Math.random() * 0.8 + 0.2,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        baseSize: baseSize,
      });
    }
    starsRef.current = stars;

    // Animation loop
    let animationId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth lerp for mouse position (more graceful movement)
      currentMousePos.current.x += (targetMousePos.current.x - currentMousePos.current.x) * 0.05;
      currentMousePos.current.y += (targetMousePos.current.y - currentMousePos.current.y) * 0.05;

      starsRef.current.forEach(star => {
        // Twinkling effect
        star.opacity += star.twinkleSpeed;
        if (star.opacity >= 1 || star.opacity <= 0.2) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }

        // Interactive effect - stars grow when mouse is near (smoother and more gradual)
        const dx = star.x - currentMousePos.current.x;
        const dy = star.y - currentMousePos.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const maxDistance = 200;

        if (distance < maxDistance) {
          const scale = 1 + (1 - distance / maxDistance) * 1.2; // Reduced from 2 to 1.2
          star.size += (star.baseSize * scale - star.size) * 0.1; // Smooth transition
        } else {
          star.size += (star.baseSize - star.size) * 0.1; // Smooth return to base size
        }

        // Draw star with glow effect for larger stars
        if (star.size > 2) {
          // Outer glow
          const gradient = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 3);
          gradient.addColorStop(0, `rgba(150, 200, 255, ${star.opacity * 0.3})`);
          gradient.addColorStop(1, 'rgba(150, 200, 255, 0)');
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 3, 0, Math.PI * 2);
          ctx.fill();
        }

        // Main star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(120, 180, 255, ${star.opacity})`;
        ctx.fill();

        // Bright center for larger stars
        if (star.size > 1.5) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 0.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(200, 230, 255, ${star.opacity})`;
          ctx.fill();
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
}