document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.collage img');

    images.forEach(img => {
        const randomTop = Math.random() * 80 + '%'; // Random value between 0 and 80%
        const randomLeft = Math.random() * 80 + '%'; // Random value between 0 and 80%
        
        img.style.top = randomTop;
        img.style.left = randomLeft;
    });
});
