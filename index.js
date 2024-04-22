document.addEventListener('DOMContentLoaded', function () {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;
    let currentSlide = 0;
    
    // Fonction pour montrer le slide avec animation
    function showSlide(index, animation) {
        slides[currentSlide].style.display = 'none';
        slides[currentSlide].classList.remove('carousel-visible', 'slideInRight', 'slideInLeft', 'fadeIn', 'zoomIn');
        
        slides[index].style.display = 'block';
        slides[index].classList.add('carousel-visible', animation);
        currentSlide = index;
    }

    // Boutons ou contrôles pour naviguer
    const nextButton = document.querySelector('.next-button');
    const prevButton = document.querySelector('.prev-button');

    nextButton.addEventListener('click', () => {
        const nextIndex = (currentSlide + 1) % totalSlides;
        showSlide(nextIndex, 'slideInRight'); // Changez ici pour 'fadeIn', 'zoomIn', etc.
    });

    prevButton.addEventListener('click', () => {
        const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(prevIndex, 'slideInLeft'); // Utilisez une animation différente si vous voulez
    });

    // Initialisation du premier slide
    slides[currentSlide].style.display = 'block';
    slides[currentSlide].classList.add('carousel-visible', 'zoomIn'); // Animation initiale
});
