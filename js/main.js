document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('backToTop');
    if (backToTopButton) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                backToTopButton.classList.add('show');
            } else {
                backToTopButton.classList.remove('show');
            }
        });

        backToTopButton.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });
    }
});


// Selecciona el botón
// const backToTopButton = document.getElementById('backToTop');

// // Escucha el evento de scroll
// window.addEventListener('scroll', () => {
//   if (window.scrollY > 200) {
//     backToTopButton.classList.add('show'); // Muestra el botón
//   } else {
//     backToTopButton.classList.remove('show'); // Oculta el botón
//   }
// });

// // Añade el evento de clic al botón
// backToTopButton.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth' // Scroll suave hacia arriba
//   });
// });
