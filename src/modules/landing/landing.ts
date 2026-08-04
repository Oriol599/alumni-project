import './landing.css';

export async function renderizarLanding(): Promise<void> {
  const { renderizarAuth } = await import('../auth/auth');
  const { mostrarBannerNavegacion } = await import('../../main');
  const app = document.getElementById("app");
  if (!app) return;

  app.classList.remove('auth-page');
  mostrarBannerNavegacion();
  app.innerHTML = ''; // Limpieza total del DOM

  const landingContainer = document.createElement("div");
  landingContainer.className = "pantalla-completa landing-page";

  // =============================================
  // SECCIÓN HERO — Layout 2 columnas (Figma)
  // Columna izquierda: texto + CTAs
  // Columna derecha: foto con botón play
  // =============================================
  const heroSection = document.createElement("section");
  heroSection.className = "landing-hero";

  // --- Columna izquierda ---
  const heroLeft = document.createElement("div");
  heroLeft.className = "hero-left";

  const logo = document.createElement("div");
  logo.className = "hero-logo";
  logo.innerHTML = '<span class="hero-logo-x">X</span><span class="hero-logo-text">LUMNI</span>';

  const titulo = document.createElement("h1");
  titulo.textContent = "Benvingut, Alumni";

  const subtitulo = document.createElement("p");
  subtitulo.className = "hero-subtitle";
  subtitulo.textContent = "Conectant i empoderant a la nostra comunitat global d’alumnes";

  const ctaContainer = document.createElement("div");
  ctaContainer.className = "landing-ctas";

  const btnJoin = document.createElement("button");
  btnJoin.innerText = "Uneix-te";
  btnJoin.className = "btn-cta btn-cta-solid";
  btnJoin.addEventListener("click", () => renderizarAuth());

  const btnExplore = document.createElement("button");
  btnExplore.innerText = "Mira què fem";
  btnExplore.className = "btn-cta btn-cta-outline";
  btnExplore.addEventListener("click", () => renderizarAuth());

  ctaContainer.appendChild(btnJoin);
  ctaContainer.appendChild(btnExplore);
  heroLeft.appendChild(logo);
  heroLeft.appendChild(titulo);
  heroLeft.appendChild(subtitulo);
  heroLeft.appendChild(ctaContainer);

  // --- Columna derecha: imagen con play button ---
  const heroRight = document.createElement("div");
  heroRight.className = "hero-right";

  const heroImageWrapper = document.createElement("div");
  heroImageWrapper.className = "hero-image-wrapper";

  const heroImg = document.createElement("img");
  heroImg.src = new URL('../../img/focused-teamwork-session-stockcake.jpg', import.meta.url).href;
  heroImg.alt = "Alumni en xarxa";
  heroImg.className = "hero-img";

  const playBtn = document.createElement("div");
  playBtn.className = "hero-play-btn";
  playBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M8 5v14l11-7z"/></svg>`;

  heroImageWrapper.appendChild(heroImg);
  heroImageWrapper.appendChild(playBtn);
  heroRight.appendChild(heroImageWrapper);

  heroSection.appendChild(heroLeft);
  heroSection.appendChild(heroRight);
  landingContainer.appendChild(heroSection);

  // =============================================
  // SECCIÓN BENEFICIOS — 3 columnas con iconos
  // =============================================
  const benefitsSection = document.createElement("section");
  benefitsSection.className = "landing-benefits";

  const benefitsTitle = document.createElement("h2");
  benefitsTitle.textContent = "Què guanyes en formar-ne part?";
  benefitsSection.appendChild(benefitsTitle);

  const gridBenefits = document.createElement("div");
  gridBenefits.className = "contenedor-beneficios";

  const bloques = [
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="7" r="4"/><path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="19" cy="9" r="3"/><circle cx="5" cy="9" r="3"/></svg>`,
      titulo: "Networking",
      texto: "Connecta amb alumni i professionals que comparteixen el teu interès.",
      boton: "Registra't"
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>`,
      titulo: "Mentoria",
      texto: "Guia als alumnes més joves i comparteix la teva experiència professional.",
      boton: "Aprendre més"
    },
    {
      icon: `<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>`,
      titulo: "Oportunitats",
      texto: "Descobreix ofertes i projectes exclusius que encaixen amb la teva trajectòria.",
      boton: "Registra't"
    }
  ];

  bloques.forEach(({ icon, titulo, texto, boton }) => {
    const bloque = document.createElement("div");
    bloque.className = "bloque-beneficio";

    const iconEl = document.createElement("div");
    iconEl.className = "benefit-icon";
    iconEl.innerHTML = icon;

    const h3 = document.createElement("h3");
    h3.textContent = titulo;

    const p = document.createElement("p");
    p.textContent = texto;

    const btn = document.createElement("button");
    btn.className = "btn-benefit";
    btn.textContent = boton;

    bloque.appendChild(iconEl);
    bloque.appendChild(h3);
    bloque.appendChild(p);
    bloque.appendChild(btn);
    gridBenefits.appendChild(bloque);
  });

  benefitsSection.appendChild(gridBenefits);
  landingContainer.appendChild(benefitsSection);

  // =============================================
  // SECCIÓN TESTIMONIOS
  // =============================================
  const testimonialsSection = document.createElement("section");
  testimonialsSection.className = "landing-testimonials";

  const testimTitle = document.createElement("h2");
  testimTitle.textContent = "T'ensenyem el que opinen els nostres súper-usuaris!";
  testimonialsSection.appendChild(testimTitle);

  const testimGrid = document.createElement("div");
  testimGrid.className = "testimonials-grid";

  const testimonials = [
    {
      name: "Miquel",
      role: "Enginyer de Software",
      text: "Gràcies a XAlumni vaig trobar el meu primer lloc de treball en menys de dos mesos. La xarxa d'antics alumnes és increïble!"
    },
    {
      name: "Emma",
      role: "Product Designer",
      text: "La plataforma m'ha permès connectar amb mentors que han transformat la meva carrera professional completament."
    },
    {
      name: "Laia",
      role: "Data Analyst",
      text: "Els esdeveniments de networking organitzats a través de XAlumni han sigut clau per als meus projectes professionals."
    }
  ];

  testimonials.forEach(({ name, role, text }) => {
    const card = document.createElement("div");
    card.className = "testimonial-card";

    const stars = document.createElement("div");
    stars.className = "testimonial-stars";
    stars.textContent = "★★★★★";

    const quote = document.createElement("p");
    quote.className = "testimonial-text";
    quote.textContent = `"${text}"`;

    const author = document.createElement("div");
    author.className = "testimonial-author";

    const avatar = document.createElement("div");
    avatar.className = "testimonial-avatar";
    avatar.textContent = name[0];

    const authorInfo = document.createElement("div");
    const authorName = document.createElement("strong");
    authorName.textContent = name;
    const authorRole = document.createElement("span");
    authorRole.textContent = role;
    authorInfo.appendChild(authorName);
    authorInfo.appendChild(authorRole);

    author.appendChild(avatar);
    author.appendChild(authorInfo);

    card.appendChild(stars);
    card.appendChild(quote);
    card.appendChild(author);
    testimGrid.appendChild(card);
  });

  testimonialsSection.appendChild(testimGrid);
  landingContainer.appendChild(testimonialsSection);

  // =============================================
  // BLOQUE SUSCRIPCIÓN
  // =============================================
  const subscribeSection = document.createElement("section");
  subscribeSection.className = "landing-subscribe";

  const subTitle = document.createElement("h3");
  subTitle.textContent = "No et perdis res, subscriu-te!";

  const subForm = document.createElement("div");
  subForm.className = "subscribe-form";

  const subInput = document.createElement("input");
  subInput.type = "email";
  subInput.placeholder = "El teu email";

  const subBtn = document.createElement("button");
  subBtn.innerText = "Subscriu-te";
  subBtn.className = "btn-subscribe";

  subForm.appendChild(subInput);
  subForm.appendChild(subBtn);
  subscribeSection.appendChild(subTitle);
  subscribeSection.appendChild(subForm);
  landingContainer.appendChild(subscribeSection);

  // =============================================
  // FOOTER
  // =============================================
  const footer = document.createElement("footer");
  footer.className = "landing-footer";

  const footerTop = document.createElement("div");
  footerTop.className = "footer-top";

  const footerLogo = document.createElement("div");
  footerLogo.className = "footer-logo";
  footerLogo.innerHTML = '<span class="logo-x">X</span>LUMNI';

  const footerNav = document.createElement("nav");
  footerNav.className = "footer-nav";

  const enlacesFooter = ["Sobre nosaltres", "Funcionalitats", "Centre d'ajuda", "Contacta'ns", "FAQs", "Oportunitats laborals"];
  enlacesFooter.forEach(texto => {
    const link = document.createElement("a");
    link.href = "#";
    link.textContent = texto;
    footerNav.appendChild(link);
  });

  footerTop.appendChild(footerLogo);
  footerTop.appendChild(footerNav);
  footer.appendChild(footerTop);

  const footerBottom = document.createElement("div");
  footerBottom.className = "footer-bottom";

  const copyright = document.createElement("p");
  copyright.textContent = "© 2026 XAlumni, Inc. • Privacitat • Termes d'ús • Mapa del lloc";

  const footerActions = document.createElement("div");
  footerActions.className = "footer-actions";

  const socialContainer = document.createElement("div");
  socialContainer.className = "footer-socials";
  socialContainer.innerHTML = `
    <a href="#" aria-label="Facebook">
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
    </a>
    <a href="#" aria-label="Instagram">
      <svg width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
    </a>
    <a href="#" aria-label="LinkedIn">
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
    </a>
    <a href="#" aria-label="Twitter">
      <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
    </a>
  `;

  footerActions.appendChild(socialContainer);
  footerBottom.appendChild(copyright);
  footerBottom.appendChild(footerActions);
  footer.appendChild(footerBottom);

  landingContainer.appendChild(footer);
  app.appendChild(landingContainer);
}
