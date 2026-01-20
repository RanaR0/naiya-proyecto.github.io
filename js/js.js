document.addEventListener("DOMContentLoaded", function () {
    // MENU ACCESIBLE
    const menuToggle = document.getElementById('menu-toggle');
    const menuItems = document.getElementById('menu-items');

    menuToggle.addEventListener('change', () => {
        const expanded = menuToggle.checked;
        menuToggle.setAttribute('aria-expanded', expanded);
        menuItems.setAttribute('aria-hidden', !expanded);
    });

    // AVISO LEGAL
    const aviso = document.getElementById("avisoLegal");
    const boton = document.getElementById("aceptarAviso");

    if (localStorage.getItem("avisoLegalAceptado") === "true") {
        aviso.style.display = "none";
    }

    boton.addEventListener("click", function () {
        localStorage.setItem("avisoLegalAceptado", "true");
        aviso.style.display = "none";
    });

    // FORMULARIO
    const formulario = document.querySelector('#formulario-contacto form');
    if (formulario) {
        formulario.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            console.log('Formulario enviado:', { nombre, email, mensaje });
            alert('Gracias por tu mensaje. Hemos recibido tus datos.');
            formulario.reset();
        });
    }
    const colorFondo = document.getElementById("colorFondo");
    const colorTexto = document.getElementById("colorTexto");

    colorFondo.addEventListener("input", () => {
        document.documentElement.style.setProperty(
            "--color-fondo",
            colorFondo.value
        );
    });

    colorTexto.addEventListener("input", () => {
        document.documentElement.style.setProperty(
            "--color-texto",
            colorTexto.value
        );
    });
});
