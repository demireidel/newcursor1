"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
export default function SectionPager({ sections, initial = 0 }) {
  const ids = sections.map(s => s.id);
  const [active, setActive] = React.useState(initial);
  const containersRef = React.useRef([]);
  const [showTop, setShowTop] = React.useState(false);
  React.useEffect(() => { const onHash = () => { const hash = window.location.hash.slice(1); const idx = ids.indexOf(hash); if (idx >= 0) setActive(idx); }; window.addEventListener("hashchange", onHash); onHash(); return () => window.removeEventListener("hashchange", onHash); }, [ids]);
  React.useEffect(() => { const el = containersRef.current[active]; if (!el) return; const onScroll = () => setShowTop(el.scrollTop > 150); el.addEventListener("scroll", onScroll); return () => el.removeEventListener("scroll", onScroll); }, [active]);
  const scrollToTop = () => { const el = containersRef.current[active]; if (el) el.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <div className="fixed inset-0">
      <AnimatePresence mode="wait">
        {sections.map((s, i) => i === active && (
          <motion.section key={s.id} id={s.id} className="section-screen" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25, ease: 'easeOut' }} style={{ position:'relative' }}>
            <div className="section-content" ref={el => (containersRef.current[i] = el)}>{s.node}</div>
          </motion.section>
        ))}
      </AnimatePresence>
      {showTop && (<button onClick={scrollToTop} aria-label="Volver arriba" className="fixed right-4 bottom-4 z-50 px-3 py-2 rounded-full text-sm text-white bg-white/10 border border-white/15 backdrop-blur-md shadow-lg shadow-black/50 hover:bg-white/20 hover:border-white/30 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:shadow-md transition-all duration-200">↑ Arriba</button>)}
    </div>
  );
}
