"use client";

import { useEffect, useRef } from "react";
import { useMotion } from "./GlobalMotionProvider";

export function BackgroundLayers() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const motion = useMotion();

  useEffect(() => {
    if (motion.reducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = 0;
    let H = 0;
    let animId: number;
    let time = 0;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      r: number;
      alpha: number;
    }

    interface GlowBlob {
      x: number;
      y: number;
      r: number;
      vx: number;
      vy: number;
      hue: number;
    }

    const particles: Particle[] = [];
    const blobs: GlowBlob[] = [];

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = canvas!.clientWidth;
      H = canvas!.clientHeight;
      canvas!.width = W * dpr;
      canvas!.height = H * dpr;
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function initParticles() {
      particles.length = 0;
      const count = Math.min(80, Math.floor((W * H) / 18000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.15,
          vy: (Math.random() - 0.5) * 0.15,
          r: Math.random() * 1.2 + 0.3,
          alpha: Math.random() * 0.3 + 0.1,
        });
      }
    }

    function initBlobs() {
      blobs.length = 0;
      for (let i = 0; i < 4; i++) {
        blobs.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: 150 + Math.random() * 200,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          hue: 20 + Math.random() * 15,
        });
      }
    }

    function drawGradient() {
      const t = time * 0.0002;
      const mx = motion.mouse.nx * 0.15;
      const my = motion.mouse.ny * 0.15;

      const grad = ctx!.createRadialGradient(
        W * (0.5 + mx),
        H * (0.4 + my),
        0,
        W * 0.5,
        H * 0.5,
        W * 0.8,
      );
      grad.addColorStop(0, "rgba(192, 103, 43, 0.04)");
      grad.addColorStop(0.5, "rgba(6, 13, 21, 0)");
      grad.addColorStop(1, "rgba(6, 13, 21, 0)");
      ctx!.fillStyle = grad;
      ctx!.fillRect(0, 0, W, H);

      const grad2 = ctx!.createRadialGradient(
        W * (0.3 - mx * 0.5),
        H * (0.7 - my * 0.5),
        0,
        W * 0.3,
        H * 0.7,
        W * 0.5,
      );
      grad2.addColorStop(0, `rgba(192, 103, 43, ${0.02 + Math.sin(t) * 0.01})`);
      grad2.addColorStop(1, "rgba(6, 13, 21, 0)");
      ctx!.fillStyle = grad2;
      ctx!.fillRect(0, 0, W, H);
    }

    function drawGrid() {
      const spacing = 56;
      const scrollOffset = (motion.scroll.y * 0.05) % spacing;
      ctx!.strokeStyle = "rgba(51, 84, 111, 0.07)";
      ctx!.lineWidth = 0.5;

      for (let x = 0; x <= W; x += spacing) {
        ctx!.beginPath();
        ctx!.moveTo(x, 0);
        ctx!.lineTo(x, H);
        ctx!.stroke();
      }
      for (let y = -spacing + scrollOffset; y <= H; y += spacing) {
        ctx!.beginPath();
        ctx!.moveTo(0, y);
        ctx!.lineTo(W, y);
        ctx!.stroke();
      }
    }

    function drawNoise() {
      const w = 128;
      const h = 128;
      const offscreen = new OffscreenCanvas(w, h);
      const offCtx = offscreen.getContext("2d");
      if (!offCtx) return;

      const imageData = offCtx.createImageData(w, h);
      const data = imageData.data;
      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 6;
      }
      offCtx.putImageData(imageData, 0, 0);

      ctx!.save();
      ctx!.globalAlpha = 0.4;
      ctx!.drawImage(offscreen, 0, 0, W, H);
      ctx!.restore();
    }

    function drawBlobs() {
      for (const b of blobs) {
        b.x += b.vx;
        b.y += b.vy;
        if (b.x < -b.r) b.x = W + b.r;
        if (b.x > W + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = H + b.r;
        if (b.y > H + b.r) b.y = -b.r;

        const grad = ctx!.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0, `hsla(${b.hue}, 60%, 45%, 0.035)`);
        grad.addColorStop(1, "hsla(0, 0%, 0%, 0)");
        ctx!.fillStyle = grad;
        ctx!.fillRect(b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
      }
    }

    function drawParticles() {
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -10) p.x = W + 10;
        if (p.x > W + 10) p.x = -10;
        if (p.y < -10) p.y = H + 10;
        if (p.y > H + 10) p.y = -10;

        ctx!.fillStyle = `rgba(147, 167, 183, ${p.alpha})`;
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dd = dx * dx + dy * dy;
          if (dd < 6400) {
            ctx!.strokeStyle = `rgba(51, 84, 111, ${0.15 * (1 - dd / 6400)})`;
            ctx!.lineWidth = 0.5;
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.stroke();
          }
        }
      }
    }

    function drawNetworkLines() {
      const cx = W * 0.5 + motion.mouse.nx * 40;
      const cy = H * 0.45 + motion.mouse.ny * 40;

      const nodes = [
        { x: cx - 200, y: cy - 120 },
        { x: cx + 180, y: cy - 100 },
        { x: cx + 250, y: cy + 60 },
        { x: cx - 160, y: cy + 140 },
        { x: cx, y: cy - 180 },
        { x: cx + 80, y: cy + 180 },
      ];

      const pulse = (Math.sin(time * 0.002) + 1) / 2;

      ctx!.lineWidth = 0.5;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 400) {
            const alpha = (1 - dist / 400) * 0.12 * (0.5 + pulse * 0.5);
            ctx!.strokeStyle = `rgba(192, 103, 43, ${alpha})`;
            ctx!.beginPath();
            ctx!.moveTo(nodes[i].x, nodes[i].y);
            ctx!.lineTo(nodes[j].x, nodes[j].y);
            ctx!.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx!.fillStyle = `rgba(192, 103, 43, ${0.15 + pulse * 0.1})`;
        ctx!.beginPath();
        ctx!.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx!.fill();
      }
    }

    function tick() {
      time = performance.now();
      ctx!.clearRect(0, 0, W, H);

      drawGradient();
      drawGrid();
      drawBlobs();
      drawParticles();
      drawNetworkLines();

      animId = requestAnimationFrame(tick);
    }

    resize();
    initParticles();
    initBlobs();
    window.addEventListener("resize", () => {
      resize();
      initParticles();
      initBlobs();
    });
    animId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [motion.reducedMotion, motion.mouse.nx, motion.mouse.ny, motion.scroll.y]);

  if (motion.reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}
