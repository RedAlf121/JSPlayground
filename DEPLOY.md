# Deploy en Vercel

El proyecto es un sitio 100 % estático: no hay build, dependencias ni
variables de entorno. Vercel sirve `index.html` desde la raíz.

## Requisitos

- Cuenta de Vercel.
- Vercel CLI (`npm i -g vercel` o el instalador nativo).

## Primera vez

```bash
vercel login      # solo si no hay sesión iniciada
vercel link       # vincula la carpeta con un proyecto de Vercel
```

`vercel link` crea la carpeta `.vercel/`, que está ignorada por Git.

## Despliegues

```bash
vercel            # despliegue de preview (URL temporal)
vercel --prod     # despliegue de producción
```

## Configuración del repositorio

- `vercel.json`: activa `cleanUrls` (`/index.html` → `/`).
- `.vercelignore`: excluye documentación y metadatos del sitio publicado.
- `.gitignore`: excluye `.vercel/`.

## Deploy automático desde Git

Ahora mismo el repositorio no tiene remoto. Para activar los despliegues
automáticos:

1. Crea un repositorio en GitHub/GitLab y añade el remoto.
2. Sube esta rama (`git push -u origin deploy/vercel`).
3. En Vercel, importa el repositorio.
4. Framework preset: **Other**. Build command: vacío. Output directory:
   `.` (raíz).
5. Cada push a la rama producirá un preview; los push a `main`, producción.

## Comprobaciones tras el deploy

- La página carga y los tres editores muestran números de línea.
- El CDN de CodeMirror responde (el sitio no funciona sin red al CDN).
- Editar HTML/CSS/JS actualiza la vista previa.
- La consola del navegador no muestra errores propios.
