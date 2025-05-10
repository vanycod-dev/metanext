const METAS = 'metas';

export const guardarMeta = (meta) => {
    const metasGuardadas = JSON.parse(localStorage.getItem(METAS)) || [];
    metasGuardadas.push(meta);
    localStorage.setItem(METAS, JSON.stringify(metasGuardadas));
    return metasGuardadas;
}

export const obtenerMetas = () => {
    return JSON.parse(localStorage.getItem(METAS)) || [];
}


export const actualizarMeta = (meta) => {
    const metas = obtenerMetas();
    const metaIndex = metas.findIndex(m => m.id === meta.id);
    if (metaIndex !== -1) {
        metas[metaIndex] = meta;
        localStorage.setItem(METAS, JSON.stringify(metas));
    } else {
        console.error("Meta no encontrada");
        alert("Meta no encontrada");
    }
}