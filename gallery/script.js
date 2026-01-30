const images = [
    'images/photo1.jpg',
    'images/photo2.jpg',
    'images/photo3.jpg',
    // add more image paths - up to 10 total
];

let currentIndex = 0;
const imgElement = document.getElementById('current-image');
const nextBtn = document.getElementById('next-btn');

// Load first image
imgElement.src = images[currentIndex];

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
});