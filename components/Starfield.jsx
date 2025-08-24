"use client";
import React, { useEffect, useRef } from "react";
export default function Starfield(){
  const ref = useRef(null);
  useEffect(() => {
    const canvas = ref.current; const ctx = canvas.getContext('2d');
    let w, h, raf; const stars = Array.from({length: 140}, ()=>({ x: Math.random(), y: Math.random(), z: Math.random() }));
    const resize = () => { w = canvas.width = canvas.clientWidth; h = canvas.height = canvas.clientHeight; };
    const draw = () => {
      ctx.clearRect(0,0,w,h); ctx.fillStyle = "rgba(57,255,20,0.05)";
      stars.forEach(s => { s.z += 0.0025; if (s.z>1) s.z=0; const px = (s.x-0.5)/(s.z+0.1)*w*0.2 + w/2; const py = (s.y-0.5)/(s.z+0.1)*h*0.2 + h/2; ctx.beginPath(); ctx.arc(px,py,(1-s.z)*2+0.2,0,Math.PI*2); ctx.fill(); });
      raf = requestAnimationFrame(draw);
    };
    resize(); draw(); window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className="absolute inset-0 w-full h-full pointer-events-none opacity-60" />;
}
