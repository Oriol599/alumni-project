import './style.css';

// La aplicación se inicia mostrando la landing como pantalla principal.
async function iniciarAplicacion(): Promise<void> {
  const { renderizarLanding } = await import('./modules/landing/landing');
  renderizarLanding();
}

iniciarAplicacion();

// Exportamos esta función para poder llamarla desde cualquier módulo cuando queramos pintar el menú de datos
export function mostrarBannerNavegacion(): void {
  // Evitamos duplicar el banner si ya existe
  if (document.querySelector('.simple-banner')) return;

  const banner = document.createElement('div');
  banner.className = 'simple-banner';

  // --- LOGO: "X" en magenta + "LUMNI" en oscuro ---
  const logo = document.createElement('div');
  logo.className = 'banner-logo';
  logo.innerHTML = '<span class="logo-x">X</span>LUMNI';
  logo.addEventListener('click', async () => {
    document.querySelector('.simple-banner')?.remove();
    const { renderizarLanding } = await import('./modules/landing/landing');
    renderizarLanding();
  });
  banner.appendChild(logo);

  // --- NAV CENTRAL: Alumni, Job Board, Events ---
  const nav = document.createElement('nav');
  nav.className = 'banner-nav';

  const navLinks = [
    { label: 'Alumni', action: async () => { const { renderizarAlumni } = await import('./modules/alumni/alumni.ts'); renderizarAlumni(); } },
    { label: 'Borsa de treball', action: async () => { const { renderizarJobs } = await import('./modules/jobs/jobs.ts'); renderizarJobs(); } },
    { label: 'Esdeveniments', action: async () => { const { renderizarEvents } = await import('./modules/events/events.ts'); renderizarEvents(); } },
  ];

  navLinks.forEach(({ label, action }) => {
    const btn = document.createElement('button');
    btn.innerText = label;
    btn.addEventListener('click', () => {
      // Marca el activo
      nav.querySelectorAll('button').forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
      action();
    });
    nav.appendChild(btn);
  });

  banner.appendChild(nav);

  // --- ACCIONES DERECHA: Entra-hi + Registra't ---
  const actions = document.createElement('div');
  actions.className = 'banner-actions';

  const btnLogin = document.createElement('button');
  btnLogin.innerText = 'Entra-hi';
  btnLogin.className = 'btn-banner-outline';
  btnLogin.addEventListener('click', async () => {
    const { renderizarAuth } = await import('./modules/auth/auth');
    renderizarAuth();
  });

  const btnRegister = document.createElement('button');
  btnRegister.innerText = "Registra't";
  btnRegister.className = 'btn-banner-solid';
  btnRegister.addEventListener('click', async () => {
    const { renderizarAuth } = await import('./modules/auth/auth');
    renderizarAuth();
  });

  actions.appendChild(btnLogin);
  actions.appendChild(btnRegister);
  banner.appendChild(actions);

  document.body.appendChild(banner);
}
