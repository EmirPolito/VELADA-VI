# La Velada del Año VI — Mini Web

> Proyecto fan-made desarrollado como práctica de frontend para simular una web de evento con alto tráfico.

---

## Sobre el proyecto

Mini sitio web inspirado en **La Velada del Año VI**, el evento de boxeo entre creadores de contenido organizado por Ibai Llanos.

# Este proyecto fue desarrollado con el objetivo de:

- Simular una **web de evento masivo**
- Practicar **arquitectura frontend moderna**
- Implementar **interfaces dinámicas y animadas**
- Aplicar buenas prácticas de **rendimiento y organización del código**

# Características

- Diseño estilo **streaming / esports**
- Interfaz optimizada y responsiva
- Animaciones con **Framer Motion**
- Componentes reutilizables
- Sección de combates con efecto **VS dinámico**
- Adaptado a móvil, tablet y desktop

# Páginas

| Ruta        | Descripción                                        |
| ----------- | -------------------------------------------------- |
| `/`         | Landing principal con hero animado                 |
| `/combates` | Cartelera completa con animaciones al hacer scroll |
| `/entradas` | Información de precios y acceso                    |
| `/noticias` | Noticias, horario y dónde ver el evento            |

## Stack

- **Framework:** Next.js 14 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Iconos:** Lucide React

## Estructura del proyecto

src/
├── app/
│ ├── combates/
│ ├── entradas/
│ ├── noticias/
│ ├── layout.tsx
│ └── page.tsx
│
├── components/
│ ├── ui/
│ │ ├── minimalist-hero.tsx
│ ├──combates.tsx
│ ├──entradas.tsx
│ ├──noticias.tsx
│ ├── header.tsx
│ └── HeroSection.tsx

---

## Instalación

```bash
git clone https://github.com/emirpolitog/velada.git
cd velada
npm install
npm run dev


4. Abre en el navegador
http://localhost:3000


Este proyecto busca simular cómo se estructuraría una web para un evento con:
Alto volumen de usuarios concurrentes
Interfaces dinámicas
Contenido visual atractivo
Navegación fluida

  Posibles mejoras

Integración con API real de eventos
Sistema de autenticación
Streaming en tiempo real
Optimización SSR/ISR
Mejora de performance con lazy loading


## Aviso legal
Este proyecto es un ejercicio educativo y de práctica con Next.js y Tailwind CSS.
- No está afiliado a La Velada del Año, Ibai Llanos ni a ninguno de los participantes
- No procesa pagos ni vende entradas — la página de entradas es puramente informativa
- Los nombres, imágenes y marcas pertenecen a sus respectivos propietarios


👨‍💻 Autor
Emir Polito
Frontend Developer (React / Next.js)
Interesado en interfaces modernas y proyectos web escalables
