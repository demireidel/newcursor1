type Noticia = { id:number; titulo:string; fecha:string; resumen:string; slug:string };

const noticias: Noticia[] = [
  { id: 1, titulo: "Atucha II marca un nuevo récord operativo", fecha: "2025-08-10", slug: "atucha-ii-record", resumen: "La central alcanzó un nuevo hito de disponibilidad sostenida, aportando base de carga limpia al sistema." },
  { id: 2, titulo: "Avanza el desarrollo del ACR-300", fecha: "2025-08-08", slug: "acr-300-avance", resumen: "El reactor modular argentino completa validaciones de ingeniería clave para manufactura local." },
  { id: 3, titulo: "Medicina nuclear: más diagnósticos, menos esperas", fecha: "2025-08-01", slug: "medicina-nuclear", resumen: "Se amplía la red de radiofármacos con nuevos centros de producción y distribución." }
];

export default function News(){
  return (
    <main className="container py-16">
      <h1 className="text-3xl font-semibold">Noticias</h1>
      <div className="mt-6 grid gap-6">
        {noticias.map(n => (
          <article key={n.id} className="rounded-2xl border p-6 hover:bg-zinc-50">
            <h2 className="text-xl font-semibold">
              <a href={`/news/${n.slug}`}>{n.titulo}</a>
            </h2>
            <div className="text-sm text-zinc-500">{n.fecha}</div>
            <p className="mt-2 text-zinc-600">{n.resumen}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
