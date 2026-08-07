import './alumni.css';
import { alumni } from '../../data/mock-data';
import type { Alumni } from '../../models/types';

// Estados de los filtros para Alumni
let filtroTextoAlumni = "";
let filtroStackAlumni = "All stack";
let filtroAvailabilityAlumni = "All availability";

// Array dinámico que se renderiza
let alumnosFiltrados = [...alumni];

// Extrae todas las tecnologías únicas de tus alumnos
function obtenerTodosLosStacks(): string[] {
  const todos: string[] = [];
  alumni.forEach(a => {
    a.stack.forEach(s => {
      if (!todos.includes(s)) todos.push(s);
    });
  });
  return todos;
}

// Extrae todos los estados de disponibilidad únicos
function obtenerTodasLasDisponibilidades(): string[] {
  const todos: string[] = [];
  alumni.forEach(a => {
    if (!todos.includes(a.availability)) todos.push(a.availability);
  });
  return todos;
}

export function renderizarAlumni(): void {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = ''; 

  const intro = document.createElement('section');
  intro.className = 'alumni-intro';

  const title = document.createElement('h1');
  title.textContent = 'Descobreix alumni i connecta amb la teva comunitat';

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Explora perfils, competències i estat d\'ocupació per trobar el contacte adequat.';

  intro.appendChild(title);
  intro.appendChild(subtitle);
  app.appendChild(intro);

  // --- CONTENEDOR DE FILTROS (Misma estructura que la imagen) ---
  const zonaFiltros = document.createElement("div");
  zonaFiltros.className = "zona-filtros";

  // 1. Buscador de Texto
  const inputBusqueda = document.createElement("input");
  inputBusqueda.type = "text";
  inputBusqueda.placeholder = "Search by name, skill or keyword...";
  inputBusqueda.value = filtroTextoAlumni;
  inputBusqueda.addEventListener("input", (e) => {
    filtroTextoAlumni = (e.target as HTMLInputElement).value;
    ejecutarFiltradoAlumni(); 
  });
  zonaFiltros.appendChild(inputBusqueda);

  // 2. Desplegable Stack
  const selectStack = document.createElement("select");
  const optDefaultStack = document.createElement("option");
  optDefaultStack.text = "All stack";
  selectStack.appendChild(optDefaultStack);
  
  obtenerTodosLosStacks().forEach(stack => {
    const opt = document.createElement("option");
    opt.value = stack;
    opt.text = stack;
    if (stack === filtroStackAlumni) opt.selected = true;
    selectStack.appendChild(opt);
  });
  
  selectStack.addEventListener("change", (e) => {
    filtroStackAlumni = (e.target as HTMLSelectElement).value;
    ejecutarFiltradoAlumni();
  });
  zonaFiltros.appendChild(selectStack);

  // 3. Desplegable Disponibilidad
  const selectAvail = document.createElement("select");
  const optDefaultAvail = document.createElement("option");
  optDefaultAvail.text = "All availability";
  selectAvail.appendChild(optDefaultAvail);

  obtenerTodasLasDisponibilidades().forEach(status => {
    const opt = document.createElement("option");
    opt.value = status;
    opt.text = status;
    if (status === filtroAvailabilityAlumni) opt.selected = true;
    selectAvail.appendChild(opt);
  });

  selectAvail.addEventListener("change", (e) => {
    filtroAvailabilityAlumni = (e.target as HTMLSelectElement).value;
    ejecutarFiltradoAlumni();
  });
  zonaFiltros.appendChild(selectAvail);

  // 4. Botón Clear Filters
  const btnClear = document.createElement("button");
  btnClear.innerText = "Clear filters";
  btnClear.className = "btn-clear-filters";
  btnClear.addEventListener("click", () => {
    filtroTextoAlumni = "";
    filtroStackAlumni = "All stack";
    filtroAvailabilityAlumni = "All availability";
    ejecutarFiltradoAlumni();
  });
  zonaFiltros.appendChild(btnClear);

  app.appendChild(zonaFiltros);

  // --- CONTENEDOR DE TARJETAS ---
  // ==========================================
  // SEGUNDO: TU MAQUETACIÓN DE TARJETAS (Abajo)
  // ==========================================
  const contenedor = document.createElement("main");
  contenedor.className = "contenedor alumni-grid"; 

  // ¡CAMBIO CLAVE!: Usamos alumnosFiltrados en vez de alumni
  alumnosFiltrados.forEach((item: Alumni) => {
    const tarjeta = document.createElement("section");
    tarjeta.className = "tarjeta";

    const avatar = document.createElement('div');
    avatar.className = 'alumni-avatar';
    avatar.textContent = item.name.charAt(0);

    const img = document.createElement("img");
    img.src = item.imageUrl; 
    img.alt = item.name;     

    const info = document.createElement('div');
    info.className = 'alumni-card-info';

    const h2 = document.createElement("h2");
    h2.textContent = item.name;

    const role = document.createElement('p');
    role.className = 'alumni-role';
    role.textContent = item.role;

    const loc = document.createElement("p");
    loc.textContent = item.location;

    const stackList = document.createElement("ul");
    stackList.className = 'alumni-tags';
    item.stack.forEach(tech => {
      const li = document.createElement("li");
      li.textContent = tech;
      stackList.appendChild(li);
    });

    const dispo = document.createElement("p");
    dispo.className = 'alumni-availability';
    dispo.textContent = item.availability;

    info.appendChild(h2);
    info.appendChild(role);
    info.appendChild(loc);
    info.appendChild(stackList);
    info.appendChild(dispo);

    tarjeta.appendChild(avatar);
    tarjeta.appendChild(img);
    tarjeta.appendChild(info);

    // (Aquí sigues insertando tu estructura de tarjetas: img, tags...)

    contenedor.appendChild(tarjeta);
  });

  app.appendChild(contenedor);

  // Mantener el cursor activo si el usuario estaba escribiendo
  if (document.activeElement !== selectStack && document.activeElement !== selectAvail) {
    inputBusqueda.focus();
    inputBusqueda.setSelectionRange(inputBusqueda.value.length, inputBusqueda.value.length);
  }
}

function ejecutarFiltradoAlumni(): void {
  const busqueda = filtroTextoAlumni.toLowerCase();

  alumnosFiltrados = alumni.filter(item => {
    // Condición 1: Texto (nombre o rol)
    const coincideTexto = item.name.toLowerCase().includes(busqueda) || 
                          item.role.toLowerCase().includes(busqueda);

    // Condición 2: Stack (si es 'All stack' pasa siempre, si no, busca en su array)
    const coincideStack = filtroStackAlumni === "All stack" || 
                          item.stack.includes(filtroStackAlumni);

    // Condición 3: Disponibilidad
    const coincideAvail = filtroAvailabilityAlumni === "All availability" || 
                          item.availability === filtroAvailabilityAlumni;

    // El alumno debe cumplir las tres condiciones a la vez
    return coincideTexto && coincideStack && coincideAvail;
  });

  renderizarAlumni();
}
