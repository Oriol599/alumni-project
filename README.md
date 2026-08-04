# Alumni Project

## Descripción general

Este proyecto constituye una propuesta de interfaz web para una plataforma de alumni orientada a fortalecer la conexión entre antiguos estudiantes, estudiantes actuales y profesionales. La idea central es ofrecer un espacio digital donde la comunidad pueda descubrir perfiles, explorar oportunidades laborales, participar en eventos y construir una red de contacto más sólida.

Desde una perspectiva de ingeniería de software, el desarrollo se ha planteado como un prototipo frontend modular, con énfasis en la organización del código, la experiencia de usuario y la separación clara de responsabilidades entre vistas, estilos y datos de ejemplo.

## Objetivo del proyecto

El objetivo principal de esta aplicación es facilitar la interacción entre personas que comparten un contexto académico común, pero que pueden encontrarse en etapas profesionales muy diferentes. En este sentido, la plataforma busca actuar como un puente entre:

- la experiencia acumulada de los alumni;
- las necesidades de networking de los estudiantes;
- las oportunidades de empleo y mentoría;
- la organización de eventos y actividades de comunidad.

## Funcionalidades principales

La aplicación actual incluye una estructura inicial con las siguientes secciones:

- Landing page con mensaje de presentación y llamado a la acción.
- Navegación principal entre Alumni, Job Board y Events.
- Directorio de alumni con filtros por nombre, stack y disponibilidad.
- Vista de oportunidades laborales con información de empresa, ubicación y modalidad.
- Sección de eventos para descubrir actividades relevantes.
- Vista inicial de autenticación como punto de partida para futuras integraciones.

## Stack tecnológico

El proyecto ha sido desarrollado con un enfoque ligero y práctico, utilizando las siguientes tecnologías:

- TypeScript para una base de código más segura y mantenible.
- Vite como herramienta de desarrollo y despliegue local.
- Vitest para pruebas unitarias y validación de componentes básicos.
- CSS modular para la definición de estilos por funcionalidad.

## Estructura del proyecto

La organización del repositorio sigue una estructura sencilla y comprensible:

- src/main.ts: punto de entrada de la aplicación.
- src/modules/: módulos principales de la interfaz (landing, alumni, jobs, events y auth).
- src/data/: datos mock utilizados para simular contenidos reales.
- src/models/: definiciones de tipos principales.
- src/tests/: pruebas de verificación del comportamiento de las vistas.

## Requisitos previos

Para ejecutar este proyecto localmente, es necesario tener instalado:

- Node.js
- npm

## Instalación y ejecución

1. Clona el repositorio.
2. Accede a la carpeta del proyecto.
3. Instala las dependencias:

```bash
npm install
```

4. Inicia el servidor de desarrollo:

```bash
npm run dev
```

5. Abre la URL que proporcione Vite en el navegador.

## Construcción y pruebas

Para generar una versión de producción:

```bash
npm run build
```

Para ejecutar las pruebas:

```bash
npm test
```

## Estado actual del proyecto

Este proyecto se encuentra en una fase inicial de prototipado frontend. En la actualidad se trabaja con datos simulados y se prioriza la experiencia visual, la navegación y la organización del código sobre la integración con servicios reales. Esto lo convierte en una base válida para validar ideas de producto, revisar la estructura de la interfaz y preparar futuras ampliaciones.

## Próximos pasos posibles

Entre las mejoras más interesantes para el siguiente ciclo de desarrollo se encuentran:

- integración con una API real;
- autenticación persistente;
- almacenamiento de perfiles y eventos;
- mejora de la accesibilidad y el diseño responsive;
- incorporación de testing más amplio y cobertura de casos de uso reales.

## Conclusión

Este trabajo representa una primera aproximación seria a la construcción de una plataforma de comunidad universitaria y profesional. Como ejercicio de desarrollo, combina aspectos de diseño de interfaz, arquitectura frontend y organización de un proyecto moderno, manteniendo un equilibrio entre la claridad conceptual y la posibilidad de evolución futura.
