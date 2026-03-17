# La Velada del Año VI - Mini Web

Este es un mini proyecto web realizado con **Next.js**, **React** y **Tailwind CSS** para mostrar información del evento La Velada del Año VI.

## Estructura de Carpetas

- `src/app/`
	- `page.tsx` — Página principal (home) con portada y contador para el evento.
	- `combates/page.tsx` — Página de combates, muestra peleadores y tabla de combates.
	- `stream/page.tsx` — Página para el streaming en vivo (placeholder de video).
	- `evento/page.tsx` — Página con detalles del evento (fecha, lugar, organizador).
	- `layout.tsx` — Layout global con barra de navegación y footer.
	- `globals.css` — Estilos globales y animación de fondo.

## Código Destacado

- **Contador para el evento:**
	- Implementado en `page.tsx` usando React hooks para mostrar días, horas, minutos y segundos restantes.
- **Sección de peleadores y combates:**
	- En `combates/page.tsx` se listan peleadores destacados y una tabla de combates.
- **Diseño streaming/gaming:**
	- Fondo animado y colores vibrantes usando Tailwind y CSS personalizado.
	- Barra de navegación superior y diseño responsive.

## Cómo ejecutar

1. Instala dependencias:
	 ```bash
	 npm install
	 ```
2. Inicia el servidor de desarrollo:
	 ```bash
	 npm run dev
	 ```
3. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

**Puedes modificar los datos de peleadores y combates en** `src/app/combates/page.tsx` **para personalizar el evento.**

---

Proyecto de ejemplo para fines educativos. No afiliado oficialmente a La Velada del Año VI ni a sus organizadores.
