document.addEventListener("DOMContentLoaded", () => {
    const formEstudiante = document.getElementById("formEstudiante");
    const tablaEstudiantes = document.getElementById("tablaEstudiantes");

    if (formEstudiante && tablaEstudiantes) {
        let contador = tablaEstudiantes.rows.length + 1;

        formEstudiante.addEventListener("submit", (e) => {
            e.preventDefault();

            const nombre = document.getElementById("nombre").value;
            const carrera = document.getElementById("carrera").value;
            const semestre = document.getElementById("semestre").value;

            const nuevaFila = document.createElement("tr");
            nuevaFila.innerHTML = `
                <td>${contador++}</td>
                <td>${nombre}</td>
                <td>${carrera}</td>
                <td>${semestre}.º Semestre</td>
            `;

            tablaEstudiantes.appendChild(nuevaFila);
            formEstudiante.reset();
        });
    }

    
    const formContacto = document.getElementById("formContacto");
    const mensajeConfirmacion = document.getElementById("mensajeConfirmacion");

    if (formContacto && mensajeConfirmacion) {
        formContacto.addEventListener("submit", (e) => {
            e.preventDefault();
            mensajeConfirmacion.textContent = "¡Gracias por contactarnos! Tu mensaje ha sido enviado.";
            formContacto.reset();
        });
    }
});