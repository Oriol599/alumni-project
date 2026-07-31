import './events.css';
import { events } from '../../data/mock-data';
import type { Event } from '../../models/types';

// Estados de los filtros para EVENTS
let filtroTextoEvents = "";
let filtroCategoryEvents = "All category";
let eventsFiltrados = [...events]; // Empezamos con todos los eventos mock

export function renderizarEvents(): void {
  const app = document.getElementById("app");
  if (!app) return;
  app.innerHTML = ''; 

  // --- ZONA DE FILTROS ---
  const zonaFiltros = document.createElement("div");
  zonaFiltros.className = "zona-filtros";

  // Buscador
  const inputBusqueda = document.createElement("input");
  inputBusqueda.type = "text";
  inputBusqueda.placeholder = "Search by name, skill or keyword...";
  inputBusqueda.value = filtroTextoEvents;
  inputBusqueda.addEventListener("input", (e) => {
    filtroTextoEvents = (e.target as HTMLInputElement).value;
    ejecutarFiltradoEvents();
  });
  zonaFiltros.appendChild(inputBusqueda);

  // Selector Category
  const selectCategory = document.createElement("select");
  const optDefaultCat = document.createElement("option");
  optDefaultCat.text = "All category";
  selectCategory.appendChild(optDefaultCat);
  obtenerTodasLasCategorias().forEach(c => {
    const opt = document.createElement("option");
    opt.value = c; opt.text = c;
    if (c === filtroCategoryEvents) opt.selected = true;
    selectCategory.appendChild(opt);
  });
  selectCategory.addEventListener("change", (e) => {
    filtroCategoryEvents = (e.target as HTMLSelectElement).value;
    ejecutarFiltradoEvents();
  });
  zonaFiltros.appendChild(selectCategory);

  // Botón Clear
  const btnClear = document.createElement("button");
  btnClear.innerText = "Clear filters";
  btnClear.className = "btn-clear-filters";
  btnClear.addEventListener("click", () => {
    filtroTextoEvents = "";
    filtroCategoryEvents = "All category";
    ejecutarFiltradoEvents();
  });
  zonaFiltros.appendChild(btnClear);
  app.appendChild(zonaFiltros);

  // --- CONTADOR DE RESULTADOS ---
  const contador = document.createElement("p");
  contador.className = "contador-resultados";
  contador.innerText = `${eventsFiltrados.length} results`;
  app.appendChild(contador);

  // --- CONTENEDOR DE TARJETAS HORIZONTALES ---
  const contenedor = document.createElement("main");
  contenedor.className = "contenedor-lineal"; // Nueva clase para filas de mañana

  eventsFiltrados.forEach((item: Event) => {
    const tarjeta = document.createElement("section");
    tarjeta.className = "tarjeta-horizontal";

    // Bloque Izquierdo: Fecha (Dividimos el string ej: "15/10/2026" o usamos tu dato)
    const bloqueFecha = document.createElement("div");
    bloqueFecha.className = "bloque-fecha";
    const numeroFecha = document.createElement("h2");
    numeroFecha.textContent = item.date.split('/')[0] || item.date; // Extrae el número del día
    const textoFecha = document.createElement("p");
    textoFecha.textContent = "Date"; // Mañana le daremos formato de mes con CSS
    bloqueFecha.appendChild(numeroFecha);
    bloqueFecha.appendChild(textoFecha);

    // Bloque Derecho: Información
    const bloqueInfo = document.createElement("div");
    bloqueInfo.className = "bloque-info";

    const tagsFila = document.createElement("p");
    tagsFila.className = "tags-fila";
    tagsFila.textContent = `${item.category.toUpperCase()} • ${item.format.toUpperCase()}`;

    const titulo = document.createElement("h2");
    titulo.textContent = item.title;

    const desc = document.createElement("p");
    desc.textContent = item.description;

    const infoDetalles = document.createElement("p");
    infoDetalles.className = "info-detalles";
    infoDetalles.textContent = `${item.location}`;

    bloqueInfo.appendChild(tagsFila);
    bloqueInfo.appendChild(titulo);
    bloqueInfo.appendChild(desc);
    bloqueInfo.appendChild(infoDetalles);

    tarjeta.appendChild(bloqueFecha);
    tarjeta.appendChild(bloqueInfo);
    contenedor.appendChild(tarjeta);
  });

  app.appendChild(contenedor);

  if (document.activeElement !== selectCategory) {
    inputBusqueda.focus();
    inputBusqueda.setSelectionRange(inputBusqueda.value.length, inputBusqueda.value.length);
  }
}

function ejecutarFiltradoEvents(): void {
  const busqueda = filtroTextoEvents.toLowerCase();

  eventsFiltrados = events.filter(item => {
    const coincideTexto = item.title.toLowerCase().includes(busqueda) || 
                          item.description.toLowerCase().includes(busqueda) ||
                          item.location.toLowerCase().includes(busqueda);

    const coincideCategory = filtroCategoryEvents === "All category" || item.category === filtroCategoryEvents;

    return coincideTexto && coincideCategory;
  });

  renderizarEvents();
}

// Extrae categorías únicas de Events (Networking, Workshop, Conference)
function obtenerTodasLasCategorias(): string[] {
  const todos: string[] = [];
  events.forEach(e => { if (!todos.includes(e.category)) todos.push(e.category); });
  return todos;
}