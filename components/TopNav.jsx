"use client";
import React from "react";
import Logo from "./Logo";
import { motion } from "framer-motion";
export default function TopNav({ sections }){
  const ids = sections.map(s => s.id);
  const labels = { hero:'Inicio', why:'What & Why', descripcion:'Descripción', acr300:'ACR-300', infografia:'Infografía', plan:'Plan', timeline:'Hoja de ruta', prensa:'Prensa', faq:'FAQ' };
  const [active, setActive] = React.useState(ids[0]);
  React.useEffect(()=>{ const onHash=()=>{ const id=window.location.hash.slice(1); if(ids.includes(id)) setActive(id||ids[0]); }; onHash(); window.addEventListener('hashchange', onHash); return ()=>window.removeEventListener('hashchange', onHash); },[ids]);
  const go=(id)=>(e)=>{ e.preventDefault(); if(window.location.hash.slice(1)!==id){ history.replaceState(null,'',`#${id}`); window.dispatchEvent(new HashChangeEvent('hashchange')); } };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 backdrop-blur bg-slate-950/70">
      <div className="container py-3 flex items-center justify-between">
        <Logo className="h-8 w-auto" />
        <nav className="relative text-sm text-slate-300 flex gap-4 flex-wrap">
          {ids.map((id)=>{
            const isActive = active===id;
            return (
              <button key={id} onClick={go(id)} className={`relative pb-1 transition-colors ${isActive?'text-white':'hover:text-white'}`}>
                {labels[id]??id}
                {isActive && <motion.span layoutId="nav-underline" className="absolute left-0 right-0 -bottom-[2px] h-[2px]" style={{background:'var(--cn-accent)'}} transition={{type:'spring',stiffness:500,damping:40}} />}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
