document.getElementById("openLetter").addEventListener("click", function() {
    document.querySelector(".flap").style.transition = "transform 0.5s ease-in-out";
    document.querySelector(".letter").style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
    document.querySelector(".flap").style.transform = "rotateX(180deg)";
    setTimeout(() => {
        document.querySelector(".letter").style.transform = "translateY(-20px)";
        document.querySelector(".letter").style.opacity = "1";
    }, 200); // Añadir pequeño retraso para mayor fluidez
    releaseHearts(); // Lanza los corazones al abrir la carta
});

document.getElementById("closeLetter").addEventListener("click", function() {
    document.querySelector(".flap").style.transition = "transform 0.5s ease-in-out";
    document.querySelector(".letter").style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
    document.querySelector(".flap").style.transform = "rotateX(0)";
    document.querySelector(".letter").style.transform = "translateY(100px)";
    document.querySelector(".letter").style.opacity = "0";
});

// Función para generar corazones flotando por toda la pantalla
function releaseHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = Math.random() * (window.innerWidth - 50) + "px"; // Menos margen para evitar el desborde
        heart.style.top = window.innerHeight + "px"; // Empieza desde abajo
        heart.style.animationDuration = (Math.random() * 7 + 8) + "s"; // Duración entre 8s y 15s
        heart.style.animationDelay = Math.random() * 5 + "s"; // Aleatorio para evitar que aparezcan todos al mismo tiempo
        document.getElementById("hearts-container").appendChild(heart);

        // Elimina los corazones después de 15 segundos
        setTimeout(() => {
            heart.remove();
        }, 15000);
    }
}

// Crear corazones cuando el mouse se mueve, pero ahora solo si el mouse está en la pantalla
document.body.addEventListener("mousemove", function(e) {
    if (Math.random() < 0.1) { // Controlamos la frecuencia para no sobrecargar la pantalla
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "💖";
        heart.style.left = e.pageX + "px";
        heart.style.top = e.pageY + "px";
        heart.style.animationDuration = (Math.random() * 7 + 8) + "s"; // Variabilidad de la animación
        document.getElementById("hearts-container").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 15000); // Elimina el corazón después de 15 segundos
    }
});
