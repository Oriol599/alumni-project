import './landing.css';

export async function renderizarLanding(): Promise<void> {
  const { renderizarAuth } = await import('../auth/auth');
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = ''; // Limpieza total del DOM

  // Contenedor principal de la landing con clase para estilos de página completa
  const landingContainer = document.createElement("div");
  landingContainer.className = "pantalla-completa landing-page";

  // --- SECCIÓN HERO (Encabezado principal) ---
  const heroSection = document.createElement("section");
  heroSection.className = "landing-hero";

  const titulo = document.createElement("h1");
  titulo.textContent = "Benvingut, Alumni";

  const subtitulo = document.createElement("p");
  subtitulo.textContent = "Connectant i impulsant la nostra comunitat global d'alumnes.";

  // Contenedor de botones de acción
  const ctaContainer = document.createElement("div");
  ctaContainer.className = "landing-ctas";

  const btnLogin = document.createElement("button");
  btnLogin.innerText = "Inicia sessió";
  btnLogin.className = "btn-cta btn-primary-magenta";
  btnLogin.addEventListener("click", () => renderizarAuth());

  const btnRegister = document.createElement("button");
  btnRegister.innerText = "Registra't";
  btnRegister.className = "btn-cta btn-secondary-outline";
  btnRegister.addEventListener("click", () => renderizarAuth());

  ctaContainer.appendChild(btnLogin);
  ctaContainer.appendChild(btnRegister);
  heroSection.appendChild(titulo);
  heroSection.appendChild(subtitulo);
  heroSection.appendChild(ctaContainer);
  landingContainer.appendChild(heroSection);

  // --- SECCIÓN BENEFICIOS (Simulación de los 3 bloques inferiores de tu maqueta) ---
  const benefitsSection = document.createElement("section");
  benefitsSection.className = "landing-benefits";
  
  const benefitsTitle = document.createElement("h2");
  benefitsTitle.textContent = "Què guanyes en formar-ne part?";
  benefitsSection.appendChild(benefitsTitle);

  const gridBenefits = document.createElement("div");
  gridBenefits.className = "contenedor-beneficios";

  const bloques = [
    {
      titulo: "Oportunitats",
      texto: "Descobreix ofertes i projectes que encaixen amb la teva trajectòria.",
      boton: "Explora"
    },
    {
      titulo: "Comunitat",
      texto: "Connecta amb alumni i professionals que comparteixen el teu interès.",
      boton: "Uneix-te"
    },
    {
      titulo: "Networking",
      texto: "Accedeix a esdeveniments i trobades per crear relacions valuoses.",
      boton: "Veure esdeveniments"
    }
  ];

  bloques.forEach(({ titulo, texto, boton }) => {
    const bloque = document.createElement("div");
    bloque.className = "bloque-beneficio";

    const h3 = document.createElement("h3");
    h3.textContent = titulo;

    const p = document.createElement("p");
    p.textContent = texto;

    const btn = document.createElement("button");
    btn.className = "btn-benefit";
    btn.textContent = boton;

    bloque.appendChild(h3);
    bloque.appendChild(p);
    bloque.appendChild(btn);
    gridBenefits.appendChild(bloque);
  });

  benefitsSection.appendChild(gridBenefits);
  landingContainer.appendChild(benefitsSection);

    // --- 1. BLOQUE DE SUSCRIPCIÓN (Zona gris oscuro intermedia) ---
  const subscribeSection = document.createElement("section");
  subscribeSection.className = "landing-subscribe";

  const subTitle = document.createElement("h3");
  subTitle.textContent = '"No et perdis res, subscriu-te!"';

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

  // --- 2. FOOTER PRINCIPAL (Fondo negro/antracita) ---
  const footer = document.createElement("footer");
  footer.className = "landing-footer";

  // Fila superior: Logo y Enlaces de navegación
  const footerTop = document.createElement("div");
  footerTop.className = "footer-top";

  const footerLogo = document.createElement("div");
  footerLogo.className = "footer-logo";
  footerLogo.textContent = "X ALUMNI"; // Reemplazable por tu <img> de logo

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

  // Fila inferior: Copyright y Redes Sociales
  const footerBottom = document.createElement("div");
  footerBottom.className = "footer-bottom";

  const copyright = document.createElement("p");
  copyright.textContent = "© 2026 XAlumni, Inc. • Privacitat • Termes d'ús • Mapa del lloc";

  const footerActions = document.createElement("div");
  footerActions.className = "footer-actions";

  const languageSelector = document.createElement("select");
  languageSelector.className = "language-selector";
  languageSelector.innerHTML = `
    <option value="ca">Català</option>
    <option value="es">Español</option>
    <option value="en">English</option>
  `;

  const socialContainer = document.createElement("div");
  socialContainer.className = "footer-socials";
  socialContainer.innerHTML = `
    <a href="#" aria-label="Facebook">🌐</a>
    <a href="#" aria-label="LinkedIn">💼</a>
    <a href="#" aria-label="YouTube">📺</a>
  `;

  footerActions.appendChild(languageSelector);
  footerActions.appendChild(socialContainer);

  footerBottom.appendChild(copyright);
  footerBottom.appendChild(footerActions);
  footer.appendChild(footerBottom);

  // Inyectamos todo el árbol en el contenedor
  landingContainer.appendChild(footer);

  app.appendChild(landingContainer);
}
