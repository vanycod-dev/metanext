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
