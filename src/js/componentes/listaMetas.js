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
        nombre.textContent = `Meta: ${meta.nombre}`;

        const prioridad = document.createElement("p");
        prioridad.textContent = `Prioridad: ${meta.prioridad}`;

        const categoria = document.createElement("p");
        categoria.textContent = `Categoría: ${meta.categoria}`;

        const estado = document.createElement("p");
        estado.textContent = `Estado: ${meta.estado}`;

        const repeticiones = document.createElement("p");
        repeticiones.textContent = `Repeticiones: ${meta.repeticiones}`;

        const frecuencia = document.createElement("p");
        frecuencia.textContent = `Frecuencia: ${meta.frecuencia}`;

        const totalRepeticiones = document.createElement("p");
        totalRepeticiones.textContent = `Total repeticiones: ${meta.totalRepeticiones}`;

        tarjeta.appendChild(nombre);
        tarjeta.appendChild(prioridad);
        tarjeta.appendChild(categoria);
        tarjeta.appendChild(estado);
        tarjeta.appendChild(repeticiones);
        tarjeta.appendChild(frecuencia);
        tarjeta.appendChild(totalRepeticiones);
        tarjetas.appendChild(tarjeta);

        tarjeta.addEventListener("click", () => {
            leerMetas(meta);
            // console.log("Meta seleccionada:", meta);
        });
    });

    const leerMetas = (metas) => {
        console.log("Lista de metas:", metas);
    }

    container.appendChild(tarjetas);
    return container;
}