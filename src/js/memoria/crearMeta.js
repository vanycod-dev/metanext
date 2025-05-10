import { actualizarMeta, guardarMeta, obtenerMetas, } from "./memoria.js";

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

export const editarMeta = (id, cambios) => {
    const metaId = parseInt(id);
    const metas = obtenerMetas();
    const metaIndex = metas.findIndex(meta => meta.id === metaId);
    
    if (metaIndex === -1) {
        console.error("Meta no encontrada");
        alert("Meta no encontrada");
        return false; // Retorna false para manejar el error
    }

    // ✅ Elimina la condición incorrecta y actualiza directamente
    const metaActualizada = { 
        ...metas[metaIndex], // Mantenemos los datos existentes
        ...cambios            // Aplicamos los cambios
    };
    
    actualizarMeta(metaActualizada);
    console.log("Meta editada:", metaActualizada);
    return true; // Retorna true para indicar éxito
}
