document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.collage img');
    const maxOverlap = 500; // Set maximum overlap allowed in pixels
    const container = document.querySelector('.collage');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    function checkOverlap(img, top, left) {
        for (let otherImg of images) {
            if (otherImg === img) continue; // Skip self-comparison

            const otherTop = parseFloat(otherImg.style.top) || 0;
            const otherLeft = parseFloat(otherImg.style.left) || 0;

            const verticalDistance = Math.abs(top - otherTop);
            const horizontalDistance = Math.abs(left - otherLeft);

            const overlapsVertically = verticalDistance < img.offsetHeight - maxOverlap;
            const overlapsHorizontally = horizontalDistance < img.offsetWidth - maxOverlap;

            if (overlapsVertically && overlapsHorizontally) {
                return true; // Overlap detected
            }
        }
        return false; // No overlap
    }

    images.forEach(img => {
        let positionSet = false;
        let attempts = 0;
        const maxAttempts = 1000; // Prevent infinite loop

        while (!positionSet && attempts < maxAttempts) {
            attempts++;

            const randomTop = Math.random() * (containerHeight - img.offsetHeight);
            const randomLeft = Math.random() * (containerWidth - img.offsetWidth);

            if (!checkOverlap(img, randomTop, randomLeft)) {
                img.style.top = randomTop + "px";
                img.style.left = randomLeft + "px";
                positionSet = true;
            }
        }

        if (!positionSet) {
            console.error("Could not position image after max attempts:", img);
        }
    });
});
