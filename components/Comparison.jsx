export default function Comparison(){
  const rows = [
    { metric: 'Disponibilidad', acr: 'Alta (objetivo >90%)', alt: 'Variable' },
    { metric: 'Emisiones operativas', acr: '≈0 gCO₂/kWh', alt: '> 350–900 gCO₂/kWh' },
    { metric: 'Uso de suelo', acr: 'Bajo', alt: 'Alto' },
    { metric: 'Despachabilidad', acr: 'Sí, 24/7', alt: 'No / Intermitente' },
  ];
  return (
    <section className="section">
      <div className="container">
        <h2 className="text-3xl font-bold mb-6">ACR-300 frente a alternativas</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-slate-400">
                <th className="p-3">Métrica</th>
                <th className="p-3">ACR-300</th>
                <th className="p-3">Otras fuentes</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-t border-white/10">
                  <td className="p-3">{r.metric}</td>
                  <td className="p-3">{r.acr}</td>
                  <td className="p-3">{r.alt}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
