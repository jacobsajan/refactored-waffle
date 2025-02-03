// Number of images in the folder and the folder path
const imageFolder = "images/";
const totalImages = 57; // Adjust this to match the number of images in the folder

// Number of images to display in the grid
const imagesToDisplay = 20; // Change as needed

// Generate an array of image filenames
const imageFilenames = Array.from({ length: totalImages }, (_, i) => `image${i + 1}.jpg`);

// Shuffle the array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Pick random images from the shuffled array
const randomImages = shuffleArray(imageFilenames).slice(0, imagesToDisplay);

// Add images to the grid
const collage = document.querySelector(".collage");
randomImages.forEach((filename) => {
    const img = document.createElement("img");
    img.src = `${imageFolder}${filename}`;
    img.alt = filename;
    collage.appendChild(img);
});
