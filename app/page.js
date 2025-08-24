import dynamic from "next/dynamic";
import React from "react";
import SectionPager from "../components/SectionPager";
import TopNav from "../components/TopNav";
import Infographic from "../components/Infographic";
import Quotes from "../components/Quotes";
import KPIs from "../components/KPIs";
import Timeline from "../components/Timeline";
import Comparison from "../components/Comparison";
import Press from "../components/Press";
import Starfield from "../components/Starfield";
import ShareBar from "../components/ShareBar";
import Descripcion from "../components/Descripcion";
import pressItems from "../data/press.json";
const ThreeScene = dynamic(() => import("../components/ThreeScene"), { ssr: false });

export default function Page() {
  const t = { motto: 'El futuro es nuclear', sub: 'Energía limpia, estable y escalable', cta: 'Descubrí el plan' };

  const sections = [
    { id: 'hero', node: (
      <main>
        <section className="section parallax relative overflow-hidden">
          <Starfield />
          <div className="container grid md:grid-cols-2 gap-10 items-center pt-16 relative">
            <div>
              <div className="badge mb-4">Consejo Nuclear</div>
              <h1>{t.motto}</h1>
              <p className="mt-4 text-lg text-slate-300">{t.sub}</p>
              <p className="mt-4 text-slate-300">Un plan integral para asegurar potencia 24/7 con cero emisiones en operación, apalancando décadas de ciencia y tecnología argentina.</p>
              <a href="#acr300" className="btn mt-8">{t.cta}</a>
              <div className="mt-4"><ShareBar /></div>
            </div>
            <div className="rounded-2xl border border-white/10 aspect-[4/3] grid place-items-center text-slate-400 bg-slate-950/30 backdrop-blur-sm">
              Visual hero
            </div>
          </div>
        </section>
      </main>
    )},
    { id: 'why', node: (
      <section className="section">
        <div className="container grid md:grid-cols-2 gap-10 pt-16">
          <div>
            <h2>¿Por qué el futuro es nuclear?</h2>
            <p className="mt-3 text-slate-300">La revolución de la IA y la electrificación masiva exigen bases de generación firmes y libres de carbono. Hoy, el mundo no produce esa energía en la escala y confiabilidad que se necesita. La energía nuclear es la única que combina disponibilidad 24/7, cero emisiones operativas, bajo uso de suelo y costos predecibles a largo plazo.</p>
            <p className="mt-3 text-slate-300">Argentina cuenta con capital humano, infraestructura y trayectoria nuclear: reactores de investigación, formación de excelencia, industria metalmecánica, y un ecosistema científico-tecnológico en la frontera del conocimiento.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold">Pilares</h3>
            <ul className="list-disc list-inside text-slate-300 mt-2 space-y-1">
              <li>Potencia firme 24/7 para IA y la industria.</li>
              <li>Cero emisiones operativas y huella territorial baja.</li>
              <li>Escalabilidad modular para crecer por etapas.</li>
              <li>Transferencia tecnológica y empleo calificado local.</li>
            </ul>
          </div>
        </div>
        <KPIs />
      </section>
    )},
    { id: 'descripcion', node: (
      <section className="section bg-slate-950">
        <div className="container pt-16">
          <h2>Descripción</h2>
          <p className="text-slate-300 mb-4">Versión larga, conservada como archivo para edición simple.</p>
          <Descripcion />
        </div>
      </section>
    )},
    { id: 'acr300', node: (
      <section className="section bg-slate-900">
        <div className="container pt-16">
          <h2>ACR-300 (3D cutaway)</h2>
          <p className="text-slate-300 mt-3">El ACR-300 propone un enfoque modular para acelerar despliegue, reducir costos y elevar la confiabilidad. El corte 3D permite explorar los sistemas principales (núcleo, generadores de vapor horizontales, contención) con hotspots.</p>
          <div className="rounded-2xl border border-white/10 overflow-hidden aspect-video mt-6"><ThreeScene /></div>
          <p className="text-slate-400 text-sm mt-2">En mobile mostramos una vista simplificada para rendimiento.</p>
        </div>
      </section>
    )},
    { id: 'infografia', node: (
      <section className="section bg-slate-950">
        <div className="container pt-16">
          <h2>Infografía ACR-300 (interactiva)</h2>
          <p className="text-slate-300 mb-4">Zoom, paneo y hotspots para entender los subsistemas. Rediseño técnico.</p>
          <Infographic source="/images/la-nacion-acr300-infographic.png" />
        </div>
      </section>
    )},
    { id: 'plan', node: (
      <section className="section">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-16">
          {[
            {t:'RA-10', d:'Reactor de investigación de última generación para radioisótopos y ciencia aplicada.'},
            {t:'PIAP', d:'Planta Industrial de Agua Pesada. Capacidad estratégica para el parque nuclear.'},
            {t:'Medicina Nuclear', d:'Diagnóstico y tratamiento con radiofármacos de precisión.'},
            {t:'Ciudad Nuclear', d:'Distrito de talento, industria y servicios de alto valor agregado.'},
            {t:'Uranio', d:'Cadena de valor y estándares internacionales. (Sin enriquecimiento en esta versión).'},
            {t:'Residuos', d:'Gestión responsable, trazabilidad y almacenamiento geológico.'},
            {t:'Educación', d:'Formación técnica y universitaria; becas y transferencia de conocimiento.'},
          ].map((x, i) => (
            <div key={i} className="card">
              <div className="font-semibold">{x.t}</div>
              <div className="text-slate-300 text-sm mt-1">{x.d}</div>
            </div>
          ))}
        </div>
      </section>
    )},
    { id: 'timeline', node: (
      <section className="section">
        <div className="container pt-16">
          <Timeline />
          <Comparison />
          <Quotes />
        </div>
      </section>
    )},
    { id: 'prensa', node: (
      <section className="section bg-slate-950">
        <div className="container pt-16">
          <Press items={pressItems} />
        </div>
      </section>
    )},
    { id: 'faq', node: (
      <section className="section bg-slate-900">
        <div className="container pt-16">
          <h2>FAQ</h2>
          <details className="mt-3 p-4 rounded border border-white/10"><summary>¿Es seguro?</summary><p className="mt-2 text-slate-300">Sí. Diseño con múltiples barreras, cultura de seguridad y estándares internacionales.</p></details>
          <details className="mt-3 p-4 rounded border border-white/10"><summary>¿Cuánto tarda construirlo?</summary><p className="mt-2 text-slate-300">Esquema modular con cronograma de ~4–5 años para el primer módulo.</p></details>
          <details className="mt-3 p-4 rounded border border-white/10"><summary>¿Cuál es el costo por kWh?</summary><p className="mt-2 text-slate-300">Objetivo competitivo a largo plazo, con contratos estables.</p></details>
          <footer className="py-10 text-center text-slate-400 border-t border-white/10">© Consejo Nuclear — Argentina</footer>
        </div>
      </section>
    )},
  ];
  return (<><TopNav sections={sections} /><SectionPager sections={sections} initial={0} /></>);
}
