
## Resumen de cambios realizados

Actualización de **todos los archivos CSS y los módulos TS clave** para que el proyecto se ajuste al diseño original:

### Correcciones de diseño global (`style.css`)
- **Color principal**: de `#b61c5c` → `#d946ef` (magenta más brillante/puro del Figma)
- **Border-radius**: de bordes muy redondeados (999px/18px) → rectangulares (8px/12px) como en el Figma
- **Tags/Skills**: color magenta translúcido con borde, en lugar de gris plano

### Navbar (`main.ts`)
- **Logo**: "**X**LUMNI" con la X en magenta (antes era solo texto "X ALUMNI")
- **Navegación central**: links *Alumni, Borsa de treball, Esdeveniments* (en catalán como en Figma)
- **Acciones derecha**: botón *Entra-hi* (outline) + *Registra't* (sólido magenta)

### Landing (`landing.ts` + `landing.css`)
- **Hero**: layout de **2 columnas** (texto izquierda + foto derecha con botón play), antes era un hero de fondo con overlay oscuro
- **Beneficios**: añadidos **iconos SVG** en caja redondeada magenta
- **Testimonios**: nueva sección con **3 reviews** (Miquel, Emma, Laia) con estrellas y avatares
- **Subscribe**: sección morada oscura a ancho completo
- **Footer**: fondo oscuro a ancho completo con logo XAlumni e iconos de redes sociales SVG

### Auth (`auth.ts` + `auth.css`)
- **Botones sociales**: Google, Apple, Facebook (con iconos reales)
- **Divisor** "o" entre login social y formulario
- **Campos adicionales**: Cognoms + Contrasenya
- **Checkbox** Termes i Condicions
- **Link** "Ja tens un compte? Entra-hi" al pie

### Events/Jobs
- **Events**: tarjetas horizontales con bloque fecha en magenta translúcido, tipografía más fiel al Figma
- **Jobs**: badges con bordes, colores más suaves y alineados al nuevo sistema de color

### Revision del comportamiento de los breakpoints
- **Banner**: arreglo del comportamiento del banner en los distintos breackponts.
- **Aspectos Visuales**: Se han ajustado para que se asemejen al aspecto del prototipo en Figma