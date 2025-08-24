"use client";
import React from "react";
function useCountUp(target, duration = 1200) {
  const [value, setValue] = React.useState(0);
  React.useEffect(() => {
    let raf, start;
    const step = (t) => { if (!start) start = t; const p = Math.min(1, (t - start) / duration);
      setValue(Math.floor(target * (0.5 - Math.cos(Math.PI * p) / 2))); if (p < 1) raf = requestAnimationFrame(step); };
    raf = requestAnimationFrame(step); return () => cancelAnimationFrame(raf);
  }, [target, duration]); return value;
}
export default function KPIs(){
  const data = [
    { label: 'Potencia por módulo', value: 300, suffix: ' MWe' },
    { label: 'Capacidad anual', value: 2.5, suffix: ' TWh/mód' },
    { label: 'Factor de carga objetivo', value: 90, suffix: '%' },
    { label: 'CO₂ en operación', value: 0, suffix: ' g/kWh' },
  ];
  return (
    <section className="section">
      <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((k, i) => {
          const n = useCountUp(Math.round(k.value * 100) / 100);
          return (
            <div key={i} className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/[0.07] transition will-change-transform hover:-translate-y-0.5 hover:shadow-2xl">
              <div className="text-3xl font-black">{k.value % 1 === 0 ? n : (n/100).toFixed(2)}{k.suffix}</div>
              <div className="text-slate-300 mt-1">{k.label}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
