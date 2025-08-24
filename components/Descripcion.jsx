"use client";
import React from "react";

export default function Descripcion({ path = "/content/descripcion.es.md" }){
  const [text, setText] = React.useState("");
  React.useEffect(() => {
    fetch(path).then(r => r.text()).then(setText).catch(()=>setText(""));
  }, [path]);
  return (
    <article className="prose prose-invert max-w-none whitespace-pre-wrap leading-relaxed">
      {text || "Cargando…"}
    </article>
  );
}
