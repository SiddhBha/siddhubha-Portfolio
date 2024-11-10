let currentSlide = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll(".project");
    const totalSlides = slides.length;

    currentSlide = (currentSlide + step + totalSlides) % totalSlides;
    const slider = document.querySelector(".projects-slider");

    // Move the slider by adjusting the transform property
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Optional: Auto-slide functionality (uncomment to enable)
setInterval(() => {
    moveSlide(1);  // Auto move to the next slide every 5 seconds
}, 5000);
