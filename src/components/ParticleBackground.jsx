import { useEffect, useRef } from "react";

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let animationFrame;

    const mouse = {
      x: null,
      y: null,
      radius: 140,
    };

    const particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // ⭐ FIX:
      // Screen resize hone par particles ko
      // poori new screen mein dobara spread karo
      createParticles();
    };

    const createParticles = () => {
      particles.length = 0;

      const count = Math.min(
        150,
        Math.floor(
          (window.innerWidth * window.innerHeight) / 9000
        )
      );

      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,

          size: Math.random() * 2.2 + 0.5,

          vx:
            Math.random() > 0.5
              ? Math.random() * 0.9 + 0.35
              : -(Math.random() * 0.9 + 0.35),

          vy: (Math.random() - 0.5) * 0.25,

          opacity: Math.random() * 0.7 + 0.2,

          type:
            Math.random() > 0.82
              ? "diamond"
              : "dot",

          pulse: Math.random() * Math.PI * 2,
        });
      }
    };

    resizeCanvas();

    window.addEventListener(
      "resize",
      resizeCanvas
    );

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    window.addEventListener(
      "mouseleave",
      handleMouseLeave
    );

    const drawParticle = (particle) => {
      particle.pulse += 0.015;

      const pulse =
        particle.opacity +
        Math.sin(particle.pulse) * 0.12;

      ctx.save();

      ctx.globalAlpha = Math.max(
        0.1,
        pulse
      );

      if (particle.type === "diamond") {
        ctx.translate(
          particle.x,
          particle.y
        );

        ctx.rotate(Math.PI / 4);

        ctx.fillStyle = "#67e8f9";

        ctx.fillRect(
          -particle.size,
          -particle.size,
          particle.size * 2,
          particle.size * 2
        );
      } else {
        ctx.beginPath();

        ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = "#e0f2fe";

        ctx.shadowBlur = 8;
        ctx.shadowColor = "#22d3ee";

        ctx.fill();
      }

      ctx.restore();
    };

    const connectParticles = () => {
      for (
        let i = 0;
        i < particles.length;
        i++
      ) {
        for (
          let j = i + 1;
          j < particles.length;
          j++
        ) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx =
            p1.x - p2.x;

          const dy =
            p1.y - p2.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (distance < 115) {
            const opacity =
              (1 - distance / 115) * 0.18;

            ctx.beginPath();

            ctx.strokeStyle = `rgba(
              103,
              232,
              249,
              ${opacity}
            )`;

            ctx.lineWidth = 0.5;

            ctx.moveTo(
              p1.x,
              p1.y
            );

            ctx.lineTo(
              p2.x,
              p2.y
            );

            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
      );

      particles.forEach((particle) => {
        // ============================
        // CONTINUOUS PARTICLE MOVEMENT
        // ============================

        particle.x += particle.vx;
        particle.y += particle.vy;

        // RIGHT -> LEFT
        if (
          particle.x <
          -10
        ) {
          particle.x =
            canvas.width + 10;
        }

        // LEFT -> RIGHT
        if (
          particle.x >
          canvas.width + 10
        ) {
          particle.x = -10;
        }

        // TOP -> BOTTOM
        if (
          particle.y <
          -10
        ) {
          particle.y =
            canvas.height + 10;
        }

        // BOTTOM -> TOP
        if (
          particle.y >
          canvas.height + 10
        ) {
          particle.y = -10;
        }

        // ============================
        // MOUSE INTERACTION
        // ============================

        if (
          mouse.x !== null &&
          mouse.y !== null
        ) {
          const dx =
            particle.x -
            mouse.x;

          const dy =
            particle.y -
            mouse.y;

          const distance = Math.sqrt(
            dx * dx + dy * dy
          );

          if (
            distance <
              mouse.radius &&
            distance > 0
          ) {
            const force =
              (mouse.radius -
                distance) /
              mouse.radius;

            particle.x +=
              (dx / distance) *
              force *
              0.7;

            particle.y +=
              (dy / distance) *
              force *
              0.7;
          }
        }

        drawParticle(particle);
      });

      connectParticles();

      animationFrame =
        requestAnimationFrame(
          animate
        );
    };

    animate();

    return () => {
      cancelAnimationFrame(
        animationFrame
      );

      window.removeEventListener(
        "resize",
        resizeCanvas
      );

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "mouseleave",
        handleMouseLeave
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="particle-canvas"
    />
  );
}

export default ParticleBackground;