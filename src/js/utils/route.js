import { crearFormularioMeta } from "../componentes/formulario.js";
import { listaMetas } from "../componentes/listaMetas.js";

const routes = {
    crear: crearFormularioMeta,
    meta: listaMetas
};

export const renderRoute = (route) => {
    history.pushState(null, null, `#${route}`);
    const app = document.getElementById('app');
    app.innerHTML = ""; // Limpiar el contenido previo
    const component = routes[route];
    if (component) {
        const elemento = component();
        app.appendChild(elemento);
    } else {
        app.innerHTML = "<h2>Ruta no encontrada</h2>";
    }
}