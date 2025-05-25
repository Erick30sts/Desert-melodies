// mensaje
document.addEventListener("DOMContentLoaded", function () {
    const welcomeMessage = document.getElementById("welcome-message");
    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) {
        message = "Good morning! Explore the world of Egyptian music.";
    } else if (hour < 18) {
        message = "Good afternoon! Explore the world of Egyptian music.";
    } else {
        message = "Good evening! Explore the world of Egyptian music.";
    }

    if (welcomeMessage) {
        welcomeMessage.textContent = message;
    }
});


// menu desplegable
document.addEventListener('DOMContentLoaded', () => {
    const dropdown = document.querySelector('.dropdown');
    const submenu = document.querySelector('.submenu');

    dropdown.addEventListener('mouseover', () => {
        submenu.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', () => {
        submenu.style.display = 'none';
    });
});


