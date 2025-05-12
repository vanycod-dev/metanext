export function crearSelect(labelText, id, opciones, selectedValue = "") {
    const section = document.createElement("div");
    section.classList.add("section");

    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = labelText;

    const select = document.createElement("select");
    select.id = id;
    select.name = id;
    select.required = true;

    opciones.forEach(valor => {
        const option = document.createElement("option");
        option.value = valor.toLowerCase();
        option.textContent = valor;
        if (selectedValue && valor.toLowerCase() === selectedValue.toLowerCase()) {
            option.selected = true;
        }
        select.appendChild(option);
    });

    section.appendChild(label);
    section.appendChild(select);
    return section;
}