import Link from "next/link";

export default function Page(){
  return (
    <main className="container py-20">
      <h1 className="text-4xl md:text-5xl font-bold">Plan Nuclear Argentino</h1>
      <p className="mt-4 text-lg text-zinc-600">Energía limpia 24/7 para una economía inteligente.</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link className="px-5 py-3 rounded-xl border hover:bg-zinc-50" href="/news">Noticias</Link>
        <Link className="px-5 py-3 rounded-xl border hover:bg-zinc-50" href="/faq">Preguntas frecuentes</Link>
        <Link className="px-5 py-3 rounded-xl border border-dashed hover:bg-zinc-50" href="/atucha-ii/tour">
          Visita Atucha II (próximamente)
        </Link>
      </div>
    </main>
  );
}
