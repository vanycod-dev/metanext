import { guardarMeta } from "./memoria.js";

export const crearMeta = (meta) => {
    const nuevaMeta = {
        id: new Date().getTime(),
        nombre: meta.nombre,
        descripcion: meta.descripcion,
        fecha: meta.fecha,
        prioridad: meta.prioridad,
        categoria: meta.categoria,
        estado: meta.estado,
        repeticiones: meta.repeticiones,
        frecuencia: meta.frecuencia,
        totalRepeticiones: meta.totalRepeticiones
    };
    console.log("Meta creada:", nuevaMeta);
    guardarMeta(nuevaMeta);
    return nuevaMeta;
}