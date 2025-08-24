export default function Timeline(){
  const steps = [
    { y: '2025', t: 'Fase de ingeniería y acuerdos marco', d: 'Estandarización, licencias, acuerdos internacionales.' },
    { y: '2026', t: 'Contratación y sitio', d: 'Obras civiles tempranas, cadena de suministro.' },
    { y: '2027–2028', t: 'Construcción', d: 'Instalación modular, fabricación nacional.' },
    { y: '2029', t: 'Puesta en marcha', d: 'Comisionado y pruebas de seguridad.' },
    { y: '2030+', t: 'Escalamiento', d: 'Despliegue multi-módulo, exportaciones.' },
  ];
  return (
    <section className="section bg-slate-950">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">Hoja de ruta</h2>
        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <div key={i} className="pl-10 relative">
                <div className="w-3 h-3 rounded-full bg-white absolute left-3 top-2" />
                <div className="text-sm text-slate-400">{s.y}</div>
                <div className="font-semibold">{s.t}</div>
                <div className="text-slate-300 text-sm">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
