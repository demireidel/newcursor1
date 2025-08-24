PLAN NUCLEAR — ARGENTINA

El futuro es nuclear.
Energía limpia, estable y escalable para la era de la IA.

Este proyecto es el sitio oficial del Plan Nuclear argentino, con foco en el desarrollo del ACR-300 y la integración de todos los componentes estratégicos: RA-10, PIAP, medicina nuclear, Ciudad Nuclear y más.

CARACTERÍSTICAS

- Diseño moderno con Tailwind CSS y navegación fija.
- Secciones a pantalla completa con scroll interno controlado.
- Sección "Descripción" leída desde public/content/descripcion.es.md para edición fácil sin tocar código.
- 3D interactivo del ACR-300 (cutaway procedural por defecto) con hotspots y fallback optimizado para mobile.
- Infografía interactiva con zoom, paneo y hotspots.
- Prensa PRO:
  - Búsqueda y filtros por medio y año.
  - Logos clicables que filtran al instante.
  - Paginación y botón de compartir.
  - Press kit descargable (public/press/press-kit.zip).
- Assets listos: og.png, favicon.ico, logos de medios, infografía placeholder y frame mobile.
- Configuración para Vercel (vercel.json, robots.txt, sitemap.xml).

ESTRUCTURA DE CARPETAS

plan-nuclear-site/
├── app/                 # Páginas y layout principal (Next.js App Router)
├── components/          # Componentes React (UI, 3D, Prensa, etc.)
├── data/                # Datos estáticos (press.json)
├── public/              # Assets públicos (imágenes, modelos, contenido markdown)
│   ├── content/         # Descripciones editables en Markdown
│   ├── images/          # Infografías, logos y frames
│   ├── models/          # Modelos 3D (.glb)
│   └── press/           # Press kit y recursos descargables
├── styles/              # Estilos globales Tailwind
├── package.json         # Dependencias y scripts
└── tailwind.config.js   # Configuración Tailwind

USO

Desarrollo local:
1. Clonar este repo:
   git clone https://github.com/<tu-usuario>/plan-nuclear-site.git
   cd plan-nuclear-site
2. Instalar dependencias:
   npm install
3. Ejecutar en modo desarrollo:
   npm run dev
4. Abrir http://localhost:3000 en el navegador.

Deploy en Vercel:
1. Subir este repo a GitHub.
2. En https://vercel.com/new → Import Project → elegir este repo.
3. Deploy automático.
   URL por defecto: https://<nombre-proyecto>.vercel.app

PERSONALIZACIÓN

- Editar la descripción larga:
  Modificar public/content/descripcion.es.md y redeploy.
- Cambiar/añadir notas de prensa:
  Editar data/press.json y agregar logos en public/images/press/.
- Reemplazar el modelo 3D:
  Poner tu GLB real en public/models/acr300.glb.
  (Si no está, se usa el placeholder procedural).
- Infografía:
  Reemplazar public/images/la-nacion-acr300-infographic.png por la infografía real.

LICENCIA

Este proyecto se entrega sin licencia explícita.
Todos los derechos reservados a sus autores y al Consejo Nuclear.

"Argentina tiene capital humano y tecnología en la frontera del conocimiento."
El futuro es nuclear.
