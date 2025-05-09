import { crearFormularioMeta } from "../componentes/formulario.js";
import { listaMetas } from "../componentes/listaMetas.js";

const routes = {
    crear: crearFormularioMeta,
    meta: listaMetas
};

export const renderRoute = (route) => {
    history.pushState(null, null, `#${route}`);
    const app = document.getElementById('app');
    
    // Fuerza un ancho fijo antes del cambio
    app.style.minWidth = `${app.offsetWidth}px`;
    
    app.innerHTML = "";
    const component = routes[route];
    
    if (component) {
        const elemento = component();
        app.appendChild(elemento);
    } else {
        app.innerHTML = "<h2>Ruta no encontrada</h2>";
    }
    
    // Restaura el ancho después de 50ms (1 frame de animación)
    setTimeout(() => {
        app.style.minWidth = '';
    }, 50);
};