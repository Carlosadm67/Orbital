import { motion } from 'motion/react';
import { useEffect, useRef } from 'react';

export function OrbitalHero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();
    window.addEventListener('resize', setCanvasSize);

    // Create stars
    const stars: { x: number; y: number; radius: number; opacity: number }[] = [];
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        opacity: Math.random() * 0.7 + 0.3,
      });
    }

    // Orbital paths
    const centerX = canvas.width * 0.5;
    const centerY = canvas.height * 0.5;
    const orbits = [
      { radius: 80, speed: 0.0005, angle: 0, color: '#00FFFF' },
      { radius: 120, speed: 0.0003, angle: Math.PI / 3, color: '#9D7CFF' },
      { radius: 160, speed: 0.0004, angle: Math.PI / 2, color: '#00FFFF' },
    ];

    let animationId: number;
    const animate = (time: number) => {
      ctx.fillStyle = 'rgba(3, 7, 30, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw orbital paths and satellites
      orbits.forEach((orbit) => {
        orbit.angle += orbit.speed;

        // Draw orbit path
        ctx.strokeStyle = `${orbit.color}20`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, orbit.radius, 0, Math.PI * 2);
        ctx.stroke();

        // Draw satellite
        const x = centerX + Math.cos(orbit.angle) * orbit.radius;
        const y = centerY + Math.sin(orbit.angle) * orbit.radius;
        
        // Satellite glow
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
        gradient.addColorStop(0, orbit.color);
        gradient.addColorStop(1, 'transparent');
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Satellite core
        ctx.fillStyle = orbit.color;
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      });

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0E27] via-[#030712] to-[#000000]" />
      
      {/* Canvas Animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 opacity-80"
      />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl"
        >
          <h1 className="mb-6 font-['Space_Grotesk'] text-7xl font-bold uppercase tracking-tight text-white sm:text-8xl lg:text-9xl">
            Redefining Orbital Infrastructure.
          </h1>
          <p className="mb-12 text-xl text-cyan-100/80 sm:text-2xl">
            Autonomous satellite deployment networks and orbital logistics systems
            <br />
            for governments and research institutions.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button className="border-2 border-[#00FFFF] bg-[#00FFFF]/10 px-10 py-4 font-['Space_Grotesk'] text-lg font-bold uppercase tracking-wider text-[#00FFFF] backdrop-blur-sm transition-all hover:bg-[#00FFFF]/20">
              Request Briefing
            </button>
            <button className="border-2 border-[#9D7CFF] bg-[#9D7CFF]/10 px-10 py-4 font-['Space_Grotesk'] text-lg font-bold uppercase tracking-wider text-[#9D7CFF] backdrop-blur-sm transition-all hover:bg-[#9D7CFF]/20">
              Explore Systems
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="h-12 w-[2px] bg-gradient-to-b from-[#00FFFF] to-transparent" />
      </motion.div>
    </section>
  );
}
