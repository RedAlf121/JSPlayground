# AGENTS.md

## Rol
Guía para agentes que trabajen en este repositorio. El README es la
presentación pública del proyecto; este archivo son las instrucciones técnicas.

## Objetivo
Editor web tipo CodePen en vanilla HTML/CSS/JS: tres editores, vista previa
aislada en iframe, consola y persistencia local.

## Stack y restricciones
- Sin frameworks ni bundler.
- ES modules nativos.
- CodeMirror 5 por CDN (core, modos, tema oscuro, addons).
- Español para UI y comentarios; identificadores de código en inglés.
- Fines de línea LF.


## Flujo de trabajo obligatorio
Marcar cada casilla SOLO después de verificarla. Añadir junto a cada una
la evidencia de la comprobación (comando, navegador o descripción).

- [ ] Normalizar a LF y añadir .gitattributes.
- [ ] Crear AGENTS.md y reescribir README como presentación.
- [ ] Crear estructura js/ y mover la lógica existente.
- [ ] Toolbar y layout de paneles.
- [ ] Tema oscuro y responsive.
- [x] CodeMirror inicializado, con fallback y refresh al redimensionar.
  Evidencia: 3 instancias 5.65.5 con `lineNumbers` y `styleActiveLine`;
  página de prueba sin CDN mantiene textareas y preview; `resize` refresca
  las 3 instancias.
- [ ] srcdoc con escapado correcto; eliminar htmlFilter.
- [ ] Puente postMessage con log/info/warn/error, onerror y unhandledrejection.
- [ ] Consola segura con niveles, timestamp, contador, clear y autoscroll.
- [ ] Auto-run con debounce, botón Run y Ctrl/Cmd+Enter.
- [ ] localStorage con plantilla inicial, restauración y Reset.
- [ ] Verificar aislamiento del sandbox.
- [ ] Accesibilidad: labels, aria, foco visible.
- [ ] Pruebas manuales completas.
- [ ] Actualizar README con uso y capturas.

## Protocolo de verificación
1. Servir con `python -m http.server 8000`.
2. Probar cada caso de la lista de pruebas.
3. Revisar la consola del navegador: sin errores propios.
4. Confirmar que el diff de Git solo contiene cambios intencionados.

## Lista de pruebas
- HTML con etiquetas anidadas y texto.
- CSS que afecte al HTML.
- JS válido con console.log/warn/error.
- JS inválido y promesa rechazada.
- `</script>` escrito por el usuario no rompe la página.
- Recarga: el contenido persiste.
- Reset restaura la plantilla.
- El código del iframe no accede a window.parent.
- Vista móvil (<900px) usable.

## Criterios de aceptación
Editar los tres lenguajes, ver cambios sin recargar, recuperar el trabajo,
leer la consola y usar la interfaz en escritorio y móvil.