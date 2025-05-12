export function crearInput(labelText, id, type, attrs = {}) {
    const section = document.createElement("div");
    section.classList.add("section");

    const label = document.createElement("label");
    label.htmlFor = id;
    label.textContent = labelText;

    const input = type === "textarea" 
        ? document.createElement("textarea")
        : document.createElement("input");

    input.id = id;
    input.name = id;
    input.required = true;
    
    if (type !== "textarea") input.type = type;

    Object.entries(attrs).forEach(([key, value]) => {
        input.setAttribute(key, value);
    });

    section.appendChild(label);
    section.appendChild(input);
    return section;
}