"use client";
import React from "react";
export default function ShareBar(){
  const url = typeof window !== 'undefined' ? window.location.href : 'https://plan-nuclear-site.vercel.app';
  const text = encodeURIComponent('El futuro es nuclear — Consejo Nuclear');
  return (
    <div className="flex gap-3 items-center text-xs text-slate-400">
      <span>Compartir:</span>
      <a className="badge" href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${text}`} target="_blank" rel="noopener noreferrer">X/Twitter</a>
      <a className="badge" href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      <button className="badge" onClick={()=>navigator.clipboard.writeText(url)}>Copiar link</button>
    </div>
  );
}
