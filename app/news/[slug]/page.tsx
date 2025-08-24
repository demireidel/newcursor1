type Post = { titulo:string; fecha:string; contenido:string };

const POSTS: Record<string, Post> = {
  "atucha-ii-record": {
    titulo: "Atucha II marca un nuevo récord operativo",
    fecha: "2025-08-10",
    contenido: "Atucha II alcanzó un período prolongado de operación a plena potencia, aportando confiabilidad al sistema eléctrico argentino."
  },
  "acr-300-avance": {
    titulo: "Avanza el desarrollo del ACR-300",
    fecha: "2025-08-08",
    contenido: "El ACR-300 completa validaciones de ingeniería para su diseño industrial. El proyecto prioriza manufactura local y exportación regional."
  },
  "medicina-nuclear": {
    titulo: "Medicina nuclear: más diagnósticos, menos esperas",
    fecha: "2025-08-01",
    contenido: "La expansión de la red de radiofármacos permite aumentar la capacidad diagnóstica, reduciendo tiempos de espera en todo el país."
  }
};

export default function Post({ params }: { params: { slug: string } }){
  const post = POSTS[params.slug];
  if(!post){
    return (
      <main className="container py-16">
        <h1 className="text-3xl font-semibold">Noticia no encontrada</h1>
        <p className="mt-4 text-zinc-600">Volvé a <a className="underline" href="/news">Noticias</a>.</p>
      </main>
    );
  }
  return (
    <main className="container py-16 prose">
      <h1>{post.titulo}</h1>
      <p className="text-sm text-zinc-500">{post.fecha}</p>
      <p className="mt-4">{post.contenido}</p>
    </main>
  );
}
