const API_URL = "/api";

// Función reutilizable para endpoints que devuelven texto
function pedirTexto(ruta) {
    const salida = document.getElementById("resultadoSaludo");
    salida.innerText = "Cargando...";

    fetch(`${API_URL}${ruta}`)
        .then(response => response.text())
        .then(data => {
            salida.innerText = data;
        })
        .catch(error => {
            salida.innerText = `Error al consumir ${ruta}`;
            console.error(error);
        });
}

function saludar() {
    pedirTexto("/saludar");
}

function saludando() {
    pedirTexto("/saludando");
}

function despliegue() {
    pedirTexto("/despliegue");
}

function sumar() {
    const numero1 = document.getElementById("numero1").value;
    const numero2 = document.getElementById("numero2").value;
    const salida = document.getElementById("resultadoSuma");

    if (numero1 === "" || numero2 === "") {
        salida.innerText = "Escribe los dos números";
        return;
    }

    fetch(`${API_URL}/sumar?numero1=${numero1}&numero2=${numero2}`)
        .then(response => response.text())
        .then(data => {
            salida.innerText = "Resultado: " + data;
        })
        .catch(error => {
            salida.innerText = "Error al consumir /sumar";
            console.error(error);
        });
}

function listar() {
    const lista = document.getElementById("listaDatos");
    lista.innerHTML = "<li>Cargando...</li>";

    fetch(`${API_URL}/lista`)
        .then(response => response.json())
        .then(data => {
            lista.innerHTML = "";

            if (data.length === 0) {
                lista.innerHTML = "<li>No hay registros</li>";
                return;
            }

            // Cada registro se muestra como "campo: valor"
            data.forEach(item => {
                const li = document.createElement("li");
                Object.entries(item).forEach(([campo, valor]) => {
                    const linea = document.createElement("div");
                    linea.innerHTML = `<strong>${campo}:</strong> ${valor}`;
                    li.appendChild(linea);
                });
                lista.appendChild(li);
            });
        })
        .catch(error => {
            console.error(error);
            lista.innerHTML = "<li>Error al consumir /lista</li>";
        });
}