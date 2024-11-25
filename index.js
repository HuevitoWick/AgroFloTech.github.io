
// Función para hacer el scroll suave entre secciones de la página
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Efecto hover para las imágenes de la galería
const galleryImages = document.querySelectorAll('.gallery-item img');
galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = "scale(1.1)";
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = "scale(1)";
    });
});

// Efecto hover para las imágenes en la sección de cultivo
const columnImages = document.querySelectorAll('.image-column img');
columnImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.transform = "scale(1.05)";
    });
    image.addEventListener('mouseout', () => {
        image.style.transform = "scale(1)";
    });
});

// Función para manejar el cambio en el color de los enlaces del menú al hacer hover
const menuLinks = document.querySelectorAll('.menu nav ul li a');
menuLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.color = "#3498db"; // Cambiar el color al pasar el mouse
    });
    link.addEventListener('mouseout', () => {
        link.style.color = "#ecf0f1"; // Restablecer el color cuando el mouse sale
    });
});

// Mostrar el logo en un tamaño mayor al pasar el mouse por encima
const logo = document.querySelector('.logo img');
logo.addEventListener('mouseover', () => {
    logo.style.transform = "scale(1.1)"; // Aumentar el tamaño del logo
});
logo.addEventListener('mouseout', () => {
    logo.style.transform = "scale(1)"; // Restablecer el tamaño del logo
});

// Si tu página tuviera un formulario (ejemplo de validación)
function validateForm() {
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;

    if (name === "" || email === "") {
        alert("Por favor, complete todos los campos.");
        return false; // Detener el envío si faltan campos
    }
    return true; // Permitir el envío del formulario
}

// Manejo de la visibilidad de la barra de navegación al hacer scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Establecer un comportamiento para los botones "Conoce nuestros servicios"
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', () => {
    window.location.href = '#servicios'; // Redirigir a la sección de servicios
});

// Implementación de un menú desplegable (si lo agregas en el futuro)
const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.menu nav ul');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Controlar el cierre del menú móvil al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuButton.contains(e.target)) {
        menu.classList.remove('active');
    }
});
