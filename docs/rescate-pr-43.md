# Recuperación del PR #43

Base verificada: `main` en `24258eb` (PR #44 integrado). Fuente conservada: PR #43, rama `claude/nice-dirac-ByspT`, commit `31a0414`. No se modifica ni se cierra el original.

## Separación y correspondencia

| Rama | Trabajo recuperado | Origen |
| --- | --- | --- |
| `codex/rescate-43-mantenimiento` | Exclusiones de Git y referencia de tipos de Astro | `a57158a` |
| `codex/rescate-43-responsive` | Menú móvil, estilos de diez módulos y cuatro páginas de detalle | `31a0414` |
| `codex/rescate-43-imagenes` | Assets WebP, componentes Image, esquema image(), referencias de contenido y consumidores | `31a0414` |
| `codex/rescate-43-enlaces` | Tarjetas de eventos enlazadas a sus páginas | `31a0414`, conservando rutas raíz de Cloudflare |

Orden recomendado: mantenimiento, responsive, imágenes y enlaces. Los tres primeros apuntan a main; enlaces se apoya en la rama de imágenes y debe integrarse después de ella. Al integrar imágenes, cambiar la base de enlaces a main (si GitHub no la actualiza automáticamente).

Las imágenes, su esquema y sus consumidores se mantienen juntos: separarlos dejaría propiedades incompatibles entre cadenas e ImageMetadata. El responsive y la navegación de tarjetas se revisan aparte.

## Trabajo que ya estaba en main

Las cuatro colecciones, doce entradas completas, páginas índice y detalle, módulos y configuración de Astro/ESLint ya estaban integrados. El PR #44 quitó el prefijo `/parkway-app/`, el workflow de GitHub Pages y `.nojekyll`, y añadió Node 22 y `wrangler.jsonc` con assets desde `dist/`. No se revierte esa migración.

## Trabajo excluido y conservado en el original

- Contraseña del cliente: `86a3a64`, `054a62d`, `d041b6f`, `gate.astro`, overlay de BaseLayout e inyección de PUBLIC_SITE_PASSWORD en el workflow. El valor se serializa en HTML y el contenido sigue presente; no proporciona control de acceso.
- `content/` no lo leen los loaders, que apuntan a `src/content/`. Doce archivos repiten entradas existentes. Los otros cuatro son borradores breves: `articulos/guia-gastronomica.md`, `eventos/festival-vino.md`, `lugares/parque-simon-bolivar.md` y `restaurantes/cafe-parkway.md`. Siguen disponibles en el commit original para revisión editorial; no se activan ni se eliminan del respaldo.
- La conversión parcial a BASE_URL no es necesaria en Cloudflare. El PR original aún combina rutas con y sin prefijo; las ramas recuperadas conservan las rutas raíz de main.

## Validación y pendientes

El original vuelve a compilar y pasar ESLint, pero GitHub informa conflictos con main. Cada rama recuperada compila por separado y pasa ESLint; produce 21 páginas. Se verifican destinos href/src locales en el HTML generado y la ausencia del prefijo antiguo.

La revisión visual se realiza a 390 × 844 y 1440 × 900. Los ajustes móviles se concentran en su PR; la rama de imágenes por sí sola conserva las limitaciones responsive de main. El catálogo interno tiene problemas de adaptación propios que no forman parte del rescate. Las descripciones de cada PR registran las comprobaciones y limitaciones concretas.

`npm run check` requiere @astrojs/check, que no está instalado en la base: build y ESLint no equivalen a una revisión completa de tipos. No se añaden dependencias en este rescate.

Cloudflare registra un Workers Build exitoso para el PR #45. Esto confirma la integración de compilación, no una auditoría del dominio de producción, previews públicos o protección de acceso. Confirmar el destino de preview y el estado de GitHub Pages antes de publicar; no se cambian ajustes de infraestructura aquí.

Para continuar el sprint: elegir una tarea por rama/PR, indicar qué cambia y cómo se comprueba, revisar antes de integrar y crear la siguiente rama desde main actualizado. Las fechas de eventos de 2025 y enlaces de marcador `#` existentes requieren tareas editoriales separadas.
