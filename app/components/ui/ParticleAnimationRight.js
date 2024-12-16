"use client";
import { useRef, useEffect } from "react";
import { cn } from "../../lib/utils";

const ParticleAnimationRight = () => {
  const canvasRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const svg = svgRef.current;

    if (!svg || !ctx) {
      console.error("Failed to get SVG or canvas rendering context.");
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
      if (svgRef.current) {
        const svgBoundingBox = svg.getBoundingClientRect();
        canvas.width = svgBoundingBox.width;
        canvas.height = svgBoundingBox.height;
        particles.length = 0;
        initParticles();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // empty dependency array ensures this effect runs once on mount

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
        width="747"
        height="1488"
        viewBox="0 0 747 1488"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_f_9_126)">
          <path
            d="M906.748 237.54L1087.73 100.667L281.133 1251.03L100.153 1387.9L906.748 237.54Z"
            fill="#FF8133"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_9_126"
            x="0.152588"
            y="0.667236"
            width="1187.58"
            height="1487.24"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur stdDeviation="50" result="effect1_foregroundBlur_9_126" />
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default ParticleAnimationRight;
