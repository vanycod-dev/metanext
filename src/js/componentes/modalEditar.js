import { editarMeta } from '../memoria/crearMeta.js';
import { crearGrupo } from './compartidos/Group.js';
import { crearInput } from './compartidos/Input.js';
import { crearModal } from './compartidos/Modal.js';
import { crearSelect } from './compartidos/Select.js';

export function crearModalEditar(meta, onGuardar) {
    const form = document.createElement('form');
    
    // Campos editables reutilizando componentes
    form.appendChild(crearInput("Nombre", "nombre", "text", { 
        value: meta.nombre,
        required: true 
    }));
    
    form.appendChild(crearSelect("Prioridad", "prioridad", 
        ["Alta", "Media", "Baja"], 
        meta.prioridad
    ));

const textarea = crearInput("Descripción", "descripcion", "textarea", {
    required: true
});
textarea.querySelector('textarea').textContent = meta.descripcion;
form.appendChild(textarea);

    form.appendChild(crearSelect("Estado", "estado",
        ["Pendiente", "En progreso", "Completada"],
        meta.estado
    ));
    
    // Grupo de campos
    form.appendChild(crearGrupo([
        crearInput("Repeticiones", "repeticiones", "number", {
            value: meta.repeticiones,
            min: 0
        }),
        crearInput("Total", "totalRepeticiones", "number", {
            value: meta.totalRepeticiones,
            min: 1
        })
    ]));


    // Botón de guardar
    const submitBtn = document.createElement('button');
    submitBtn.type = 'submit';
    submitBtn.textContent = 'Guardar Cambios';
    submitBtn.className = 'btn-guardar';
    form.appendChild(submitBtn);

    // Manejar envío
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!form.checkValidity()) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        
        const formData = new FormData(form);
        const cambios = Object.fromEntries(formData.entries());
        
        // ✅ Verifica si se editó correctamente
        if (editarMeta(meta.id, cambios)) {
            onGuardar(cambios); // Solo se ejecuta si la edición fue exitosa
        }
    });

    return crearModal(form, {
        titulo: `Editando: ${meta.nombre}`,
        onClose: () => console.log('Modal cerrado')
    });
}