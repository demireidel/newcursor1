"use client";
import React from 'react';
import Pagination from './Pagination';

function slugSource(src){
  const s = (src || "").toLowerCase();
  if (s.includes("la nación") || s.includes("la nacion")) return "la-nacion";
  if (s.includes("world nuclear news")) return "wnn";
  if (s.includes("infobae")) return "infobae";
  if (s.includes("clarín") || s.includes("clarin")) return "clarin";
  if (s.includes("perfil")) return "perfil";
  if (s.includes("ámbito") || s.includes("ambito")) return "ambito";
  return s.replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,'');
}

export default function Press({ items = [] }) {
  const [q, setQ] = React.useState("");
  const [source, setSource] = React.useState("all");
  const [year, setYear] = React.useState("all");
  const [sort, setSort] = React.useState("desc");
  const [page, setPage] = React.useState(1);
  const PER_PAGE = 8;

  const allSources = React.useMemo(() => {
    const s = Array.from(new Set(items.map(i => i.source))).filter(Boolean).sort();
    return ["all", ...s];
  }, [items]);

  const years = React.useMemo(() => {
    const y = Array.from(new Set(items.map(i => new Date(i.date).getFullYear()))).sort((a,b)=>b-a);
    return ["all", ...y];
  }, [items]);

  const filtered = React.useMemo(() => {
    let res = items.slice();
    if (q) {
      const qq = q.toLowerCase();
      res = res.filter(i => i.title.toLowerCase().includes(qq) || (i.summary||'').toLowerCase().includes(qq));
    }
    if (source !== "all") res = res.filter(i => i.source === source);
    if (year !== "all") res = res.filter(i => new Date(i.date).getFullYear() === Number(year));
    res.sort((a,b) => sort === "desc" ? (new Date(b.date) - new Date(a.date)) : (new Date(a.date) - new Date(b.date)));
    return res;
  }, [items, q, source, year, sort]);

  React.useEffect(()=>{ setPage(1); }, [q, source, year, sort]);

  const start = (page-1)*PER_PAGE;
  const paged = filtered.slice(start, start+PER_PAGE);

  const uniqueSources = Array.from(new Set(items.map(i => i.source))).filter(Boolean);
  const logoList = ["La Nación","World Nuclear News","Infobae","Clarín","Perfil","Ámbito"].filter(m => uniqueSources.includes(m));

  const clickLogo = (name) => () => setSource(prev => prev===name ? "all" : name);

  const share = (it) => (e) => {
    e.preventDefault();
    const text = encodeURIComponent(it.title + " — Consejo Nuclear");
    const url = encodeURIComponent(it.url);
    const shareUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;
    window.open(shareUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="prensa" className="section bg-slate-950">
      <div className="container">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2>Prensa y recursos</h2>
            <p className="subtle mt-1">Notas, análisis y coberturas sobre el Plan Nuclear.</p>
          </div>
          <div className="flex gap-2 items-center">
            <input className="input" placeholder="Buscar…" value={q} onChange={e=>setQ(e.target.value)} />
            <select className="select" value={source} onChange={e=>setSource(e.target.value)}>
              {allSources.map(s => <option key={s} value={s}>{s==='all'?'Todos los medios':s}</option>)}
            </select>
            <select className="select" value={year} onChange={e=>setYear(e.target.value)}>
              {years.map(y => <option key={y} value={y}>{y==='all'?'Todos los años':y}</option>)}
            </select>
            <select className="select" value={sort} onChange={e=>setSort(e.target.value)}>
              <option value="desc">Más recientes</option>
              <option value="asc">Más antiguas</option>
            </select>
          </div>
        </div>

        {/* Logo grid clickable */}
        <div className="flex flex-wrap gap-6 items-center justify-start mb-6 mt-6">
          {logoList.map((name) => {
            const slug = slugSource(name);
            const active = source === name;
            return (
              <button key={name} onClick={clickLogo(name)} className="relative">
                <img src={`/images/press/${slug}.png`} alt={name} className="h-8 object-contain bg-white/5 rounded-md p-1 border border-white/10" />
                <div className="text-center text-[10px] text-slate-400 mt-1">{name}</div>
                {active && <div className="absolute inset-0 rounded-md ring-2 ring-[--cn-accent] pointer-events-none" />}
              </button>
            );
          })}
          <a href="/press/press-kit.zip" className="badge ml-auto">Descargar Press Kit</a>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-2">
          {paged.map((it, i) => {
            const logo = `/images/press/${slugSource(it.source)}.png`;
            const date = new Date(it.date).toLocaleDateString();
            return (
              <a key={i} href={it.url} target="_blank" rel="noopener noreferrer"
                 className="block rounded-2xl border border-white/10 p-5 bg-white/5 transition card-press">
                <div className="flex items-center gap-3">
                  <img src={logo} alt={it.source} className="w-9 h-9 object-contain rounded-md bg-white/5 border border-white/10" onError={(e)=>{e.currentTarget.style.display='none';}}/>
                  <div className="text-xs text-slate-400">{it.source} • {date}</div>
                </div>
                <div className="font-semibold mt-2">{it.title}</div>
                <div className="text-slate-300 text-sm mt-2">{it.summary}</div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="text-[--cn-accent] text-xs">Leer artículo →</div>
                  <button className="badge" onClick={share(it)}>Compartir</button>
                </div>
              </a>
            );
          })}
          {paged.length === 0 && (
            <div className="text-slate-400">No se encontraron resultados.</div>
          )}
        </div>

        <Pagination total={filtered.length} page={page} perPage={PER_PAGE} onPage={setPage} />
      </div>
    </section>
  );
}
