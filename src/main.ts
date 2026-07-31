import './style.css';
import { renderizarLanding } from './modules/landing/landing';

// La aplicación se inicia mostrando la landing como pantalla principal.
renderizarLanding();

// Exportamos esta función para poder llamarla desde cualquier módulo cuando queramos pintar el menú de datos
export function mostrarBannerNavegacion(): void {
  // Evitamos duplicar el banner si ya existe
  if (document.querySelector('.simple-banner')) return;

  const banner = document.createElement('div');
  banner.className = 'simple-banner';

  const text = document.createElement('p');
  text.innerText = 'X ALUMNI'; // Nombre oficial que se ve en tu logo magenta
  banner.appendChild(text);

  const buttonContainer = document.createElement('div');
  buttonContainer.className = 'banner-buttons';

  const btn1 = document.createElement('button');
  btn1.innerText = 'Alumni';
  // Nota: Al importar dinámicamente mañana evitaremos bucles de importación
  btn1.addEventListener('click', async () => {
    const { renderizarAlumni } = await import('./modules/alumni/alumni.ts');
    renderizarAlumni();
  });

  const btn2 = document.createElement('button');
  btn2.innerText = 'Job board';
  btn2.addEventListener('click', async () => {
    const { renderizarJobs } = await import('./modules/jobs/jobs.ts');
    renderizarJobs();
  });

  const btn3 = document.createElement('button');
  btn3.innerText = 'Events';
  btn3.addEventListener('click', async () => {
    const { renderizarEvents } = await import('./modules/events/events.ts');
    renderizarEvents();
  });

  buttonContainer.appendChild(btn1);
  buttonContainer.appendChild(btn2);
  buttonContainer.appendChild(btn3);
  banner.appendChild(buttonContainer);
  document.body.appendChild(banner);
}




