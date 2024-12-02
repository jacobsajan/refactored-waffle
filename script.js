document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.collage img');
    const maxOverlap = 0; // Maximum overlap allowed in pixels
    const container = document.querySelector('.collage');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    images.forEach(img => {
        let positionSet = false;

        while (!positionSet) {
            // Generate random positions within the container
            const randomTop = Math.random() * (containerHeight - img.offsetHeight);
            const randomLeft = Math.random() * (containerWidth - img.offsetWidth);

            // Check for overlap with other images
            let overlap = false;
            images.forEach(otherImg => {
                if (otherImg === img) return; // Skip self-comparison

                const otherTop = parseFloat(otherImg.style.top) || 0;
                const otherLeft = parseFloat(otherImg.style.left) || 0;

                const verticalOverlap = Math.abs(randomTop - otherTop) < maxOverlap;
                const horizontalOverlap = Math.abs(randomLeft - otherLeft) < maxOverlap;

                if (verticalOverlap && horizontalOverlap) {
                    overlap = true;
                }
            });

            // If no overlap, set the position and exit the loop
            if (!overlap) {
                img.style.top = randomTop + "px";
                img.style.left = randomLeft + "px";
                positionSet = true;
            }
        }
    });
});
