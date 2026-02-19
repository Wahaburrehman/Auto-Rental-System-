document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.testimonials-carousel');
    const container = carousel.querySelector('.testimonials-container');
    const cards = carousel.querySelectorAll('.testimonial-card');
    const prevButton = carousel.querySelector('.carousel-prev');
    const nextButton = carousel.querySelector('.carousel-next');
    let currentIndex = 0;

    // Function to update the displayed cards
    function updateCarousel() {
        cards.forEach((card, index) => {
            card.style.display = (index >= currentIndex && index < currentIndex + 3) ? 'block' : 'none';
        });
    }

    // Initial display
    updateCarousel();

    // Next button click handler
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 3) % cards.length;
        if (currentIndex + 3 > cards.length) {
            currentIndex = 0; // Reset to start if we can't show 3 cards
        }
        updateCarousel();
    });

    // Previous button click handler
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 3 + cards.length) % cards.length;
        if (currentIndex < 0) {
            currentIndex = Math.max(0, cards.length - 3); // Adjust to show last set of cards
        }
        updateCarousel();
    });
});