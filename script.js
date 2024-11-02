let level = 1;
const levelDisplay = document.getElementById('level');
const clickButton = document.getElementById('clickButton');
const noButton = document.getElementById('noButton');

// Función para mover el botón de "Sí"
const moveButton = () => {
    const maxWidth = window.innerWidth - clickButton.offsetWidth;
    const maxHeight = window.innerHeight - clickButton.offsetHeight;
    const randomX = Math.random() * maxWidth;
    const randomY = Math.random() * maxHeight;

    clickButton.style.position = 'absolute';
    clickButton.style.left = `${randomX}px`;
    clickButton.style.top = `${randomY}px`;
};

// Evento para el botón "No"
noButton.addEventListener('click', () => {
    window.location.href = 'gameover.html'; // Redirige a la página Game Over
});

// Evento para el botón "Sí"
clickButton.addEventListener('click', () => {
    level++;
    switch (level) {
        case 2:
            levelDisplay.textContent = `Nivel ${level}: ¿Seguro?`;
            break;
        case 3:
            levelDisplay.textContent = `Nivel ${level}: ¿Me quieres?`;
            break;
        case 4:
            levelDisplay.textContent = `Nivel ${level}: ¿De verdad?`;
            break;
        case 5:
            // Redirige a la página de finalización
            window.location.href = 'fin.html';
            return; // Sale de la función para no mover el botón
        default:
            return; // No se ejecuta nada más
    }
    moveButton();
});

// Mueve el botón de forma continua
const startMovingButton = () => {
    moveButton();
    const speed = Math.max(1000 - level * 100, 200); // velocidad mínima de 200ms
    setTimeout(startMovingButton, speed);
};

// Inicia el movimiento del botón
startMovingButton();

function animateHeart() {
    const heart = document.querySelector(".heart");
    heart.style.display = "block"; // Muestra el corazón
    heart.style.animation = "pulse 1s"; // Añade la animación

    setTimeout(() => {
        heart.style.display = "none"; // Oculta el corazón después de la animación
        heart.style.animation = ""; // Reinicia la animación
    }, 1000); // Oculta después de 1 segundo
}