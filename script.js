document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.collage img');
    const maxOverlap = 0; // Set maximum overlap allowed in pixels
    const container = document.querySelector('.collage');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    function checkOverlap(img, top, left) {
        for (let otherImg of images) {
            if (otherImg === img) continue; // Skip self-comparison

            const otherTop = parseFloat(otherImg.style.top) || 0;
            const otherLeft = parseFloat(otherImg.style.left) || 0;

            const verticalOverlap = Math.abs(top - otherTop) < img.offsetHeight - maxOverlap;
            const horizontalOverlap = Math.abs(left - otherLeft) < img.offsetWidth - maxOverlap;

            if (verticalOverlap || horizontalOverlap) {
                return true; // Overlap detected
            }
        }
        return false; // No overlap
    }

    images.forEach(img => {
        let positionSet = false;
        let attempts = 0; // Counter to prevent infinite loop
        const maxAttempts = 1000; // Limit for attempts

        while (!positionSet && attempts < maxAttempts) {
            attempts++;

            // Generate random positions within the container
            const randomTop = Math.random() * (containerHeight - img.offsetHeight);
            const randomLeft = Math.random() * (containerWidth - img.offsetWidth);

            // Check if the position overlaps with any other image
            if (!checkOverlap(img, randomTop, randomLeft)) {
                img.style.top = randomTop + "px";
                img.style.left = randomLeft + "px";
                positionSet = true; // Valid position found
            }
        }

        // Log an error if no valid position was found
        if (!positionSet) {
            console.error("Could not position image after max attempts:", img);
        }
    });
});
