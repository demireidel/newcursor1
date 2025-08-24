export default function Quotes(){
  const quotes = [
    'El futuro es nuclear',
    'Energía limpia, estable y escalable',
    'La revolución de AI demanda una energía que el mundo hoy no produce',
    'Argentina tiene capital humano y tecnología en la frontera del conocimiento',
  ];
  return (
    <section className="section bg-slate-900">
      <div className="container grid md:grid-cols-2 gap-6">
        {quotes.map((q, i) => (<div key={i} className="card text-xl font-semibold">{q}</div>))}
      </div>
    </section>
  );
}
