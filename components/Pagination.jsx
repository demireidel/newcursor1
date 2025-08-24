"use client";
export default function Pagination({ total=0, page=1, perPage=8, onPage=()=>{} }){
  const pages = Math.max(1, Math.ceil(total / perPage));
  if (pages <= 1) return null;
  const go = (p)=>()=>onPage(Math.min(pages, Math.max(1, p)));
  const items = []; for (let i=1;i<=pages;i++) items.push(i);
  return (
    <div className="pager mt-6">
      <button onClick={go(page-1)} disabled={page<=1} aria-label="Anterior">←</button>
      {items.map(i => (<button key={i} className={i===page?'active':''} onClick={go(i)}>{i}</button>))}
      <button onClick={go(page+1)} disabled={page>=pages} aria-label="Siguiente">→</button>
    </div>
  );
}
