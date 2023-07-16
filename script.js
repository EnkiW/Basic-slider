let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Come Back ;(";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
})

const slider = document.getElementById('slider');
const images = slider.getElementsByTagName('img');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

let currentImageIndex = 0;

if (currentImageIndex === 0) {
    prevButton.style.display = 'none';
}
function showPrevImage() {
    if (currentImageIndex === 1) {
        prevButton.style.display = 'none';
    }
    currentImageIndex--;
    images[currentImageIndex].style.display = 'block';
    images[currentImageIndex + 1].style.display = 'none';
    nextButton.style.display = 'block';
}
function showNextImage() {
    if (currentImageIndex === images.length - 2) {
        nextButton.style.display = 'none';
    }
    currentImageIndex++;
    images[currentImageIndex].style.display = 'block';
    images[currentImageIndex - 1].style.display = 'none';
    prevButton.style.display = 'block';
}
prevButton.addEventListener('click', showPrevImage);
nextButton.addEventListener('click', showNextImage);
