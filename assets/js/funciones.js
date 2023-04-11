const btnEnviar = document.querySelector("#enviar");
const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const alertaVacio = document.querySelector(".alert-danger");
const alertaCompleto = document.querySelector(".alert-success");
const spinner = document.querySelector(".lds-facebook");

btnEnviar.addEventListener("click", validarFormulario);
spinner.style.display = "none";

function validarFormulario(e) {
    e.preventDefault();

    validarCampo();
}

function validarCampo() {
    if (nombre.value === "" || email.value === "" || mensaje.value === "") {
        alertaVacio.textContent = "Unos o todos los campos esta vacio";
        alertaVacio.style.display = "block";

        setTimeout(() => {
            alertaVacio.style.display = "none";
        }, 3000);
    } else {
        spinner.style.display = "block";
        setTimeout(function () {
            spinner.style.display = "none";
                alertaCompleto.textContent = "Mensaje Enviado";
                alertaCompleto.style.display = "block";
            setTimeout(function () {
                alertaCompleto.style.display = "none";
            }, 3000);
            
        }, 3000);

        nombre.value = "";
        email.value = "";
        mensaje.value = "";
    }
}
