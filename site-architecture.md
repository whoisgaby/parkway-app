# 

**Arquitectura del sitio — Parkway App**

---

# **1\. Secciones principales del sitio**

Parkway App se organiza alrededor de tres tipos principales de contenido:

* Eventos del Parkway  
* Restaurantes y cafés  
* Información del sector

Estas secciones permiten que los usuarios descubran actividades, lugares para visitar y contenido cultural relacionado con el Parkway.

Las páginas principales serán:

* Home  
* Eventos  
* Restaurantes  
* Lugares del Parkway  
* Artículos

---

# **2\. Sitemap**

# La arquitectura del sitio se mantiene simple para facilitar la navegación y reducir la profundidad del contenido.

Home  
├── Eventos  
│ └── Página de evento  
│  
├── Restaurantes  
│ └── Página de restaurante  
│  
├── Lugares del Parkway  
│ └── Detalle del lugar  
│  
└── Artículos  
└── Página de artículo

Profundidad máxima del sitio: **3 niveles**

Nivel 1  
Home

Nivel 2  
Secciones principales (Eventos, Restaurantes, Lugares, Artículos)

Nivel 3  
Páginas de detalle (evento, restaurante, lugar, artículo)

---

# 3\. Jerarquía de páginas

## **Home**

Página principal del sitio que introduce el Parkway y muestra contenido destacado.

Contenido:

* Eventos destacados  
* Restaurantes recomendados  
* Imagen del Parkway  
* Acceso a explorar eventos y lugares

---

## Eventos

Listado de eventos culturales y gastronómicos que ocurren en el sector.

Contenido:

* Lista de eventos  
* Imagen del evento  
* Fecha  
* Descripción corta

### **Página de evento**

Detalle del evento seleccionado.

Contenido:

* Imagen  
* Descripción  
* Fecha  
* Ubicación  
* Eventos relacionados

---

## Restaurantes

Directorio de restaurantes, bares y cafés del Parkway.

Contenido:

* Lista de restaurantes  
* Categorías (café, restaurante, bar)

### **Página de restaurante**

Detalle del restaurante.

Contenido:

* Fotos  
* Descripción  
* Dirección  
* Enlace a redes sociales

---

## Lugares del Parkway

Sección que presenta espacios representativos del sector.

Contenido:

* Historia breve  
* Fotografías del parque  
* Lugares destacados

---

## **Artículos**

Contenido editorial con recomendaciones y guías sobre el sector.

Contenido:

* Títulos de artículos  
* Imagen  
* Resumen corto

### **Página de artículo**

Detalle del contenido.

Contenido:

* Imagen principal  
* Texto completo  
* Recomendaciones relacionadas

---

# 4\. Flujos de usuario principales

## **Flujo 1 — Descubrir un café**

Home  
↓  
Explorar restaurantes  
↓  
Filtrar por cafés  
↓  
Página del café

Objetivo del usuario: encontrar un lugar para comer o tomar café en el Parkway.

---

## **Flujo 2 — Descubrir un evento**

Home  
↓  
Ver eventos  
↓  
Lista de eventos  
↓  
Página del evento

Objetivo del usuario: descubrir actividades culturales o gastronómicas en el sector.

---

## **Flujo 3 — Explorar el sector**

Home  
↓  
Lugares del Parkway  
↓  
Detalle del lugar

Objetivo del usuario: conocer el parque y su ambiente.

---

## **Flujo 4 — Descubrir lugares desde un restaurante**

Home  
↓  
Restaurantes  
↓  
Página de restaurante  
↓  
Ver eventos cercanos

Objetivo del usuario: complementar su visita con actividades cercanas.

---

# 5\. Páginas clave del sitio

Las páginas más importantes para la experiencia del usuario son:

* Home  
* Lista de eventos  
* Página de evento  
* Lista de restaurantes  
* Página de restaurante

Estas páginas concentran la mayoría de la navegación del sitio.

---

# 6\. Resumen de arquitectura

La arquitectura del sitio prioriza:

* navegación simple  
* contenido fácil de encontrar  
* máximo 3 niveles de profundidad

Esto permite que los usuarios descubran rápidamente eventos y lugares del Parkway sin recorrer demasiadas páginas.

