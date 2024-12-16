"use client";
import { useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

const ParticleAnimation = ( { side }) => {
  const canvasRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const svg = svgRef.current;

    if (!ctx) {
      console.error("Failed to get canvas rendering context.");
      return;
    }

    const particles = [];
    
    // Set canvas width and height to match the SVG size
    const svgBoundingBox = svg.getBoundingClientRect();
    canvas.width = svgBoundingBox.width;
    canvas.height = svgBoundingBox.height;

    // Particle class
    function Particle(x, y) {
      this.x = x;
      this.y = y;
      this.size = Math.random() * 2;
      this.speedX = (Math.random() - 0.5) * 0.5;
      this.speedY = (Math.random() - 0.5) * 0.5;
      this.opacity = Math.random();

      this.update = function () {
        this.x += this.speedX;
        this.y += this.speedY;

        if (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        ) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.opacity = Math.random();
        }

        this.opacity -= 0.002;
        if (this.opacity <= 0) {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.opacity = Math.random();
        }
      };

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.fill();
      };
    }

    function initParticles() {
      for (let i = 0; i < 150; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push(new Particle(x, y));
      }
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animateParticles);
    }

    initParticles();
    animateParticles();

    // Handle resize of SVG
    const handleResize = () => {
      const svgBoundingBox = svg.getBoundingClientRect();
      canvas.width = svgBoundingBox.width;
      canvas.height = svgBoundingBox.height;
      particles.length = 0;
      initParticles();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-full h-full">
      {/* Canvas for particles */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
      {/* SVG layered above the canvas */}
      <svg
        ref={svgRef}
        className={cn("absolute z-[1] pointer-events-none")}
        width="1172"
        height="1094"
        viewBox="0 0 1172 1094"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_9_123)">
          <path
            d="M-133.675 271.556L-283.153 100.838L922 823.014L1071.48 993.733L-133.675 271.556Z"
            fill="#FF8133"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_9_123"
            x="-383.153"
            y="0.837891"
            width="1554.63"
            height="1092.9"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="50"
              result="effect1_foregroundBlur_9_123"
            />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ParticleAnimation;
