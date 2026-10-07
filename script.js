// The three images used in both stories
const hungrySequence = [
    "images/ragdoll3.jpg",
    "images/ragdoll2.jpg",
    "images/ragdoll1.jpg"
];

const fullSequence = [
    "images/ragdoll1.jpg",
    "images/ragdoll2.jpg",
    "images/ragdoll3.jpg"
];

// Start with the hungry sequence
let currentSequence = hungrySequence;
let currentIndex = 0;

// Get elements from the HTML
const storyImage = document.getElementById("storyImage");
const imageCounter = document.getElementById("imageCounter");
const storyTitle = document.getElementById("storyTitle");

const previousBtn = document.getElementById("previousBtn");
const nextBtn = document.getElementById("nextBtn");

const hungryBtn = document.getElementById("hungryBtn");
const fullBtn = document.getElementById("fullBtn");

// Updates the image shown on the page
function updateImage() {
    storyImage.src = currentSequence[currentIndex];
    imageCounter.textContent = (currentIndex + 1) + " / 3";
}

// Go to the next image
function nextImage() {
    currentIndex++;

    if (currentIndex >= currentSequence.length) {
        currentIndex = 0;
    }

    updateImage();
}

// Go to the previous image
function previousImage() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = currentSequence.length - 1;
    }

    updateImage();
}

// Switch to Hungry Mochi
function showHungrySequence() {
    currentSequence = hungrySequence;
    currentIndex = 0;

    storyTitle.textContent = "Hungry Mochi";

    hungryBtn.classList.add("active");
    fullBtn.classList.remove("active");

    updateImage();
}

// Switch to Full Mochi
function showFullSequence() {
    currentSequence = fullSequence;
    currentIndex = 0;

    storyTitle.textContent = "Full Mochi";

    fullBtn.classList.add("active");
    hungryBtn.classList.remove("active");

    updateImage();
}

// Event listeners
nextBtn.addEventListener("click", nextImage);
previousBtn.addEventListener("click", previousImage);

hungryBtn.addEventListener("click", showHungrySequence);
fullBtn.addEventListener("click", showFullSequence);

// Display the first image when the page loads
updateImage();
