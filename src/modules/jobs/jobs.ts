import './jobs.css';
import { jobs } from '../../data/mock-data';
import type { Job } from '../../models/types';

// Estados de los filtros para JOBS
let filtroTextoJobs = "";
let filtroModeJobs = "All mode";
let filtroContractJobs = "All contract";
let jobsFiltrados = [...jobs]; // Empezamos con todos los empleos mock

// Extrae modalidades únicas de Jobs (Remote, Hybrid, On-site)
function obtenerTodosLosModos(): string[] {
  const todos: string[] = [];
  jobs.forEach(j => { if (!todos.includes(j.mode)) todos.push(j.mode); });
  return todos;
}

// Extrae contratos únicos de Jobs (Full-time, Part-time, Practices)
function obtenerTodosLosContratos(): string[] {
  const todos: string[] = [];
  jobs.forEach(j => { if (!todos.includes(j.contract)) todos.push(j.contract); });
  return todos;
}

export function renderizarJobs(): void {
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = '';

  const intro = document.createElement('section');
  intro.className = 'jobs-intro';

  const title = document.createElement('h1');
  title.textContent = 'Explora oportunitats laborals i projectes que encaixen amb tu trajectòria';

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Filtra per modalitat, contracte i competències per trobar el teu proper pas professional.';

  intro.appendChild(title);
  intro.appendChild(subtitle);
  app.appendChild(intro);

  // --- ZONA DE FILTROS ---
  const zonaFiltros = document.createElement("div");
  zonaFiltros.className = "zona-filtros";

  // Buscador
  const inputBusqueda = document.createElement("input");
  inputBusqueda.type = "text";
  inputBusqueda.placeholder = "Search by name, skill or keyword...";
  inputBusqueda.value = filtroTextoJobs;
  inputBusqueda.addEventListener("input", (e) => {
    filtroTextoJobs = (e.target as HTMLInputElement).value;
    ejecutarFiltradoJobs();
  });
  zonaFiltros.appendChild(inputBusqueda);

  // Selector Mode
  const selectMode = document.createElement("select");
  const optDefaultMode = document.createElement("option");
  optDefaultMode.text = "All mode";
  selectMode.appendChild(optDefaultMode);
  obtenerTodosLosModos().forEach(m => {
    const opt = document.createElement("option");
    opt.value = m; opt.text = m;
    if (m === filtroModeJobs) opt.selected = true;
    selectMode.appendChild(opt);
  });
  selectMode.addEventListener("change", (e) => {
    filtroModeJobs = (e.target as HTMLSelectElement).value;
    ejecutarFiltradoJobs();
  });
  zonaFiltros.appendChild(selectMode);

  // Selector Contract
  const selectContract = document.createElement("select");
  const optDefaultContract = document.createElement("option");
  optDefaultContract.text = "All contract";
  selectContract.appendChild(optDefaultContract);
  obtenerTodosLosContratos().forEach(c => {
    const opt = document.createElement("option");
    opt.value = c; opt.text = c;
    if (c === filtroContractJobs) opt.selected = true;
    selectContract.appendChild(opt);
  });
  selectContract.addEventListener("change", (e) => {
    filtroContractJobs = (e.target as HTMLSelectElement).value;
    ejecutarFiltradoJobs();
  });
  zonaFiltros.appendChild(selectContract);

  // Botón Clear
  const btnClear = document.createElement("button");
  btnClear.innerText = "Clear filters";
  btnClear.className = "btn-clear-filters";
  btnClear.addEventListener("click", () => {
    filtroTextoJobs = "";
    filtroModeJobs = "All mode";
    filtroContractJobs = "All contract";
    ejecutarFiltradoJobs();
  });
  zonaFiltros.appendChild(btnClear);
  app.appendChild(zonaFiltros);

  // --- CONTADOR DE RESULTADOS ---
  const contador = document.createElement("p");
  contador.className = "contador-resultados";
  contador.innerText = `${jobsFiltrados.length} results`;
  app.appendChild(contador);

  // --- CONTEDOR DE TARJETAS (GRID) ---
  const contenedor = document.createElement("main");
  contenedor.className = "contenedor jobs-grid";

  jobsFiltrados.forEach((item: Job) => {
    const tarjeta = document.createElement("section");
    tarjeta.className = "tarjeta";

    const h2 = document.createElement("h2");
    h2.textContent = item.title;

    const empresa = document.createElement("h3");
    empresa.textContent = item.company;

    const loc = document.createElement("p");
    loc.className = 'jobs-location';
    loc.textContent = item.location;

    const badgesContainer = document.createElement("div");
    badgesContainer.className = "badges-container";
    const badgeMode = document.createElement("span");
    badgeMode.className = `badge badge-${item.mode.toLowerCase()}`;
    badgeMode.textContent = item.mode;
    const badgeContract = document.createElement("span");
    badgeContract.className = "badge badge-contract";
    badgeContract.textContent = item.contract;
    badgesContainer.appendChild(badgeMode);
    badgesContainer.appendChild(badgeContract);

    const stackList = document.createElement("ul");
    stackList.className = 'jobs-tags';
    item.stack.forEach(tech => {
      const li = document.createElement("li");
      li.textContent = tech;
      stackList.appendChild(li);
    });

    tarjeta.appendChild(h2);
    tarjeta.appendChild(empresa);
    tarjeta.appendChild(loc);
    tarjeta.appendChild(badgesContainer);
    tarjeta.appendChild(stackList);
    contenedor.appendChild(tarjeta);
  });

  app.appendChild(contenedor);

  if (document.activeElement !== selectMode && document.activeElement !== selectContract) {
    inputBusqueda.focus();
    inputBusqueda.setSelectionRange(inputBusqueda.value.length, inputBusqueda.value.length);
  }
}

function ejecutarFiltradoJobs(): void {
  const busqueda = filtroTextoJobs.toLowerCase();

  jobsFiltrados = jobs.filter(item => {
    const coincideTexto = item.title.toLowerCase().includes(busqueda) ||
      item.company.toLowerCase().includes(busqueda) ||
      item.stack.some(s => s.toLowerCase().includes(busqueda));

    const coincideMode = filtroModeJobs === "All mode" || item.mode === filtroModeJobs;
    const coincideContract = filtroContractJobs === "All contract" || item.contract === filtroContractJobs;

    return coincideTexto && coincideMode && coincideContract;
  });

  renderizarJobs();
}
