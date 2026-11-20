# Playground

Editor web de HTML, CSS y JavaScript inspirado en CodePen. Renderiza el
resultado dentro de un iframey muestra la salida de consola.
Está construido sin framework con index.html, main.js y style.css.

## Demo rápida

Abre la página servida por HTTP (por ejemplo `python -m http.server 8000`)
y empieza a escribir. Los cambios aparecen al instante.

## Características

- ** tres editores** (HTML, CSS y JavaScript) con resaltado de sintaxis
  usando CodeMirror 5.
- **Vista previa en vivo**: los cambios se reflejan en un iframe al instante.
- **Consola integrada**: muestra `log`, `warn`, `error` y excepciones con
  aspecto de terminal.
- **Tema oscuro** coherente en todos los paneles y la consola.
- **Responsive**: en pantallas <900px los paneles se apilan y la consola
  ocupa el ancho completo.
- **Persistencia en localStorage**: al recargar la página se recupera el
  último trabajo. El contenido también se guarda automáticamente cada 30 s.
- **Sandbox** en el iframe (`allow-scripts allow-forms allow-modals`) para
  aislar el código del usuario.
- **Accesibilidad**: labels, foco visible, respeto a
  `prefers-reduced-motion`.

## Stack

- HTML, CSS, vanilla JavaScript (ES modules).
- Estilos propios con tokens de Material 3 (tema oscuro, superficies y
  elevación), sin librería de componentes.
- CodeMirror 5 (core + modos HTML/CSS/JS + tema oscuro) desde CDN.
- No se usan frameworks ni build steps.

Proyecto de portafolio para demostrar manipulación del DOM, aislamiento en
iframe, actualización en vivo y persistencia local.
