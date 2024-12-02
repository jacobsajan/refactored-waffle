document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.collage img');
    const maxOverlap = 0; // Set maximum overlap allowed in pixels
    const container = document.querySelector('.collage');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    // Helper function to check overlap
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

        while (!positionSet) {
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
    });
});
