import { obtenerMetas } from "../memoria/memoria.js";

export const listaMetas = () => {
    const metas = obtenerMetas();
    const container = document.createElement("div");
    container.classList.add("container-lista-metas");

    const titulo = document.createElement("h2");
    titulo.textContent = "Lista de metas";
    container.appendChild(titulo);

    const tarjetas = document.createElement("div");
    tarjetas.classList.add("lista-metas");

    metas.forEach(meta => {
        const tarjeta = document.createElement("div");
        tarjeta.classList.add("meta-item");

        const nombre = document.createElement("h3");
        nombre.textContent = meta.nombre;

        const prioridad = document.createElement("p");
        prioridad.innerHTML = `<strong>Prioridad:</strong> ${meta.prioridad}`;

        const categoria = document.createElement("p");
        categoria.innerHTML = `<strong>Categoría:</strong> ${meta.categoria}`;

        const estado = document.createElement("p");
        estado.innerHTML = `<strong>Estado:</strong> ${meta.estado}`;

        // Barra de progreso
        const progressText = document.createElement("div");
        progressText.classList.add("progress-text");
        progressText.innerHTML = `
            <span>Progreso:</span>
            <span>${meta.repeticiones}/${meta.totalRepeticiones}</span>
        `;

        const progressContainer = document.createElement("div");
        progressContainer.classList.add("progress-container");

        const progressBar = document.createElement("div");
        progressBar.classList.add("progress-bar");
        progressBar.style.width = `${(meta.repeticiones / meta.totalRepeticiones) * 100}%`;

        progressContainer.appendChild(progressBar);

        // Agregar elementos a la tarjeta
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(prioridad);
        tarjeta.appendChild(categoria);
        tarjeta.appendChild(estado);
        tarjeta.appendChild(progressText);
        tarjeta.appendChild(progressContainer);

        tarjetas.appendChild(tarjeta);

        tarjeta.addEventListener("click", () => {
            console.log("Meta seleccionada:", meta);
        });
    });

    container.appendChild(tarjetas);
    return container;
};