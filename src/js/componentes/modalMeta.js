export const modalMeta = (meta) => {
    const container = document.createElement("div");
    container.classList.add("modal-container");

    const modal = document.createElement("div");
    modal.classList.add("modal");

    const form = document.createElement("form");
    form.classList.add("form-modal");

    container.appendChild(modal);

    