import './auth.css';

export function renderizarAuth(): void {
  const app = document.getElementById("app");
  if (!app) return;

  document.querySelector('.simple-banner')?.remove();
  app.innerHTML = '';

  const authContainer = document.createElement("div");
  authContainer.className = "pantalla-completa auth-layout";

  // Bloque Izquierdo: Imagen decorativa del campus (Oculta en móvil con CSS)
  const imageSidebar = document.createElement("div");
  imageSidebar.className = "auth-image-sidebar";
  authContainer.appendChild(imageSidebar);

  // Bloque Derecho: Formulario "Crea un compte"
  const formContainer = document.createElement("div");
  formContainer.className = "auth-form-container";

  const formBox = document.createElement("div");
  formBox.className = "auth-form-box";

  const h2 = document.createElement("h2");
  h2.textContent = "Crea un compte";

  const pInfo = document.createElement("p");
  pInfo.textContent = "Crea el teu perfil per començar a compartir oportunitats.";

  // Campos de entrada simulados (Mañana los estilizaremos en fila)
  const inputName = document.createElement("input");
  inputName.type = "text";
  inputName.placeholder = "Nom i cognoms";

  const inputEmail = document.createElement("input");
  inputEmail.type = "email";
  inputEmail.placeholder = "Correu electrònic";

  // Botón principal de registro (Acción determinante de la SPA)
  const btnSubmit = document.createElement("button");
  btnSubmit.innerText = "Registra't";
  btnSubmit.className = "btn-submit-auth";
  
  btnSubmit.addEventListener("click", async () => {
    // 1. Inyectamos la barra de navegación superior fija de la aplicación
    const { mostrarBannerNavegacion } = await import('../../main');
    mostrarBannerNavegacion(); 
    
    // 2. Cargamos dinámicamente la vista por defecto (Alumni)
    const { renderizarAlumni } = await import('../alumni/alumni');
    renderizarAlumni(); 
  });

  formBox.appendChild(h2);
  formBox.appendChild(pInfo);
  formBox.appendChild(inputName);
  formBox.appendChild(inputEmail);
  formBox.appendChild(btnSubmit);
  formContainer.appendChild(formBox);
  
  authContainer.appendChild(formContainer);
  app.appendChild(authContainer);
}
