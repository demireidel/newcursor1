"use client";
import React from "react";
export default function Infographic({ source, alt = "ACR-300 infographic" }){
  const [scale, setScale] = React.useState(1);
  const [pos, setPos] = React.useState({ x: 0, y: 0 });
  const dragging = React.useRef(false);
  const last = React.useRef({ x: 0, y: 0 });
  function onWheel(e){ e.preventDefault(); const d = e.deltaY > 0 ? -0.1 : 0.1; setScale(s => Math.min(3, Math.max(1, s + d))); }
  function onPointerDown(e){ dragging.current = true; last.current = { x: e.clientX, y: e.clientY }; }
  function onPointerUp(){ dragging.current = false; }
  function onPointerMove(e){ if(!dragging.current) return; const dx=e.clientX-last.current.x, dy=e.clientY-last.current.y; last.current={x:e.clientX,y:e.clientY}; setPos(p=>({x:p.x+dx,y:p.y+dy})); }
  const Hotspot = ({ left, top, label }) => (<div className="absolute" style={{ left: `${left}%`, top: `${top}%` }}><div className="hotspot" /><div className="hotspot-label">{label}</div></div>);
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-black/20" onWheel={onWheel} onPointerDown={onPointerDown} onPointerUp={onPointerUp} onPointerLeave={onPointerUp} onPointerMove={onPointerMove} style={{ touchAction:'none' }}>
      <div className="relative" style={{ transform:`translate(${pos.x}px, ${pos.y}px) scale(${scale})`, transformOrigin:'center center', transition:'transform .06s linear' }}>
        <img src={source} alt={alt} className="block w-full select-none pointer-events-none" />
        <Hotspot left={50} top={58} label="Núcleo / Core" />
        <Hotspot left={75} top={46} label="Generador de vapor horizontal / HSG" />
        <Hotspot left={50} top={28} label="Contención / Containment" />
      </div>
      <div className="px-2 pb-2 text-slate-400 text-xs">Infografía técnica (rediseñada).</div>
    </div>
  );
}
