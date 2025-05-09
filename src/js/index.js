import { renderRoute } from "./utils/route.js";

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const route = link.dataset.route;
        renderRoute(route);
    });
});
const initialRoute = window.location.hash.substring(1) || "crear"; // Obtener la ruta inicial
renderRoute(initialRoute); // Cargar la ruta por defecto al inicio
