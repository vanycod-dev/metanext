export function crearModal(contenido, config = {}) {
    // Crear elementos
    const modalOverlay = document.createElement('div');
    const modalContainer = document.createElement('div');
    const modalContent = document.createElement('div');
    
    // Estructura básica
    modalOverlay.className = 'modal-overlay';
    modalContainer.className = 'modal-container';
    modalContent.className = 'modal-content';
    
    // Configuración
    if (config.titulo) {
        const modalHeader = document.createElement('div');
        modalHeader.className = 'modal-header';
        modalHeader.innerHTML = `
            <h3>${config.titulo}</h3>
            <button class="modal-close">&times;</button>
        `;
        modalContainer.appendChild(modalHeader);
    }
    
    modalContent.appendChild(contenido);
    modalContainer.appendChild(modalContent);
    modalOverlay.appendChild(modalContainer);

    // Funcionalidad de cierre
    const closeModal = () => {
        modalOverlay.classList.add('fade-out');
        setTimeout(() => modalOverlay.remove(), 300);
    };

    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay || e.target.classList.contains('modal-close')) {
            closeModal();
        }
    });

    // Animación de entrada
    setTimeout(() => {
        modalOverlay.classList.add('show');
        modalContainer.classList.add('show');
    }, 10);

    return modalOverlay;
}