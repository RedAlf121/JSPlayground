# Playground

Editor web de HTML, CSS y JavaScript inspirado en CodePen. Renderiza el
resultado dentro de un iframe con `srcdoc` y muestra la salida de consola.
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
- **Auto-run** con debounce y botón Run (o Ctrl/Cmd + Enter).
- **Reset** con confirmación para restaurar el contenido inicial.
- **Sandbox** en el iframe (`allow-scripts allow-forms allow-modals`) para
  aislar el código del usuario.
- **Accesibilidad**: labels, foco visible, respeto a
  `prefers-reduced-motion`.

## Cómo ejecutar

```bash
python -m http.server 8000
```

Luego abre <http://localhost:8000> en tu navegador. El proyecto está
diseñado para servirse por HTTP porque `localStorage` bajo `file://` tiene
comportamiento inconsistente en algunos navegadores.

## Stack

- HTML5, CSS3, vanilla JavaScript (ES modules).
- Estilos propios con tokens de Material 3 (tema oscuro, superficies y
  elevación), sin librería de componentes.
- CodeMirror 5 (core + modos HTML/CSS/JS + tema oscuro) desde CDN.
- No se usan frameworks ni build steps.

## Seguridad del sandbox

El iframe carga el código del usuario con:

```
sandbox="allow-scripts allow-forms allow-modals"
```

Esto evita que el código acceda a `window.parent`, `window.top` o al DOM
del padre, excepto lo necesario para enviar mensajes a la consola. El
script principal valida siempre `event.source === iframe.contentWindow`
antes de procesar cualquier mensaje.

## Autor / portafolio

Proyecto de portafolio para demostrar manipulación del DOM, aislamiento en
iframe, actualización en vivo y persistencia local.