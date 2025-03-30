function registrar() {
    let registro = {};
    registro["nombre"] = document.getElementById('nombre').value.trim();
    registro["email"] = document.getElementById('email').value.trim();

    let presentacionSeleccionada = document.querySelectorAll('input[name="presentacion"]:checked');
    registro["presentacion"] = Array.from(presentacionSeleccionada).map(el => el.value).join(", ");

    let tipoSeleccionado = document.querySelector('input[name="tipo"]:checked');
    registro["tipo"] = tipoSeleccionado ? tipoSeleccionado.value : "";

    registro["fecha"] = document.getElementById('fecha').value;
    registro["color"] = document.getElementById('color').value;
    registro["dosis"] = document.getElementById('dosis').value;

    // Validación de campos vacíos
    let camposVacios = [];

    for (let campo in registro) {
        if (!registro[campo]) {
            camposVacios.push(campo);
        }
    }

    if (camposVacios.length > 0) {
        alert(`Debes llenar todos los campos. Faltan: ${camposVacios.join(", ")}`);
        return;
    }

    // Llenar tabla
    let fila = "<tr>";
    for (let key in registro) {
        fila += `<td>${registro[key]}</td>`;
    }
    fila += "</tr>";

    document.getElementById("medicamentos-body").innerHTML += fila;

    // Limpiar formulario
    document.getElementById('nombre').value = "";
    document.getElementById('email').value = "";
    presentacionSeleccionada.forEach(el => el.checked = false);
    tipoSeleccionado.checked = false;
    document.getElementById('fecha').value = "";
    document.getElementById('color').value = "";
    document.getElementById('dosis').value = "";
}
