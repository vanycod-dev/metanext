// src/js/componentes/compartidos/Group.js
export function crearGrupo(children) {
    const group = document.createElement("div");
    group.classList.add("group");
    children.forEach(child => group.appendChild(child));
    return group;
}