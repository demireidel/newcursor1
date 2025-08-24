type FAQ = { q:string; a:string };
const faqs: FAQ[] = [
  { q: "¿La energía nuclear es segura?", a: "Sí. Las centrales modernas incorporan múltiples barreras y sistemas redundantes. En Argentina, la regulación es estricta y transparente." },
  { q: "¿Qué es el ACR-300?", a: "Un reactor modular compacto diseñado para alta disponibilidad, manufactura local y exportación. Base de carga limpia y estable." },
  { q: "¿Qué beneficios trae la medicina nuclear?", a: "Diagnósticos precisos y tratamientos oncológicos avanzados con radioisótopos, acortando tiempos de espera y mejorando resultados de salud." }
];

export default function FAQ(){
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-semibold">Preguntas frecuentes</h1>
      <div className="mt-6 divide-y">
        {faqs.map((f, i) => (
          <details key={i} className="py-4">
            <summary className="cursor-pointer text-lg font-medium">{f.q}</summary>
            <div className="mt-2 text-zinc-700">{f.a}</div>
          </details>
        ))}
      </div>
    </main>
  );
}
