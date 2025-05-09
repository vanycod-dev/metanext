// src/js/componentes/formulario.js
import { crearMeta } from "../memoria/crearMeta.js";
import { crearInput } from "./compartidos/Input.js";
import { crearSelect } from "./compartidos/Select.js";
import { crearGrupo } from "./compartidos/Group.js";

export function crearFormularioMeta() {
    const container = document.createElement("div");
    container.classList.add("container-form");

    const titulo = document.createElement("h2");
    titulo.textContent = "Crear metas";
    container.appendChild(titulo);

    const form = document.createElement("form");
    form.id = "form-meta";

    // Campos básicos
    form.appendChild(crearInput("Nombre de la meta", "nombre", "text"));
    form.appendChild(crearInput("Descripción", "descripcion", "textarea"));

    // Grupos de campos
    form.appendChild(crearGrupo([
        crearInput("Fecha de inicio", "fecha", "date"),
        crearSelect("Prioridad", "prioridad", ["Alta", "Media", "Baja"])
    ]));

    form.appendChild(crearGrupo([
        crearSelect("Categoría", "categoria", ["Salud", "Finanzas", "Estudio", "Trabajo", "Ocio"]),
        crearSelect("Estado", "estado", ["Pendiente", "En progreso", "Completada"])
    ]));

    form.appendChild(crearGrupo([
        crearInput("Repeticiones", "repeticiones", "number", { min: "1" }),
        crearSelect("Frecuencia", "frecuencia", ["Diaria", "Semanal", "Mensual", "Anual"])
    ]));

    // Campo adicional
    form.appendChild(crearInput("Total repeticiones", "totalRepeticiones", "number", { min: "1", required: true }));

    // Botón de submit
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Crear meta";
    form.appendChild(button);

    button.addEventListener("click", (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        crearMeta(data);
        form.reset();
    });

    container.appendChild(form);
    return container;
}