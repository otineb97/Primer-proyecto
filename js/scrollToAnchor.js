window.addEventListener("DOMContentLoaded", (event) => {
    // Verifica si hay un anclaje en la URL
    if (window.location.hash) {
        // Encuentra el elemento con el ID correspondiente en la página de destino
        const targetElement = document.querySelector(window.location.hash);
        // Desplaza la página al elemento
        if (targetElement) {
            targetElement.scrollIntoView();
        }
    }
});