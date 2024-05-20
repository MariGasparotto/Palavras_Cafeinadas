let currentSlide = 0;

function updateCarousel(){
    const carousel = document.querySelector('.carousel');
    const itemWidth = document.querySelector('.carousel .container-itens');
    const offset = currentSlide * -itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

function nextslide(){
    const totalItems = document.querySelectorAll('.carousel .container-itens');
    const visibleItems = 1;
    if(currentSlide < totalItems - visibleItems) {
        currentSlide++
        updateCarousel();
    }
}

function prevSlide() {
    if (currentSlide < 0) {
        currentSlide--;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCarousel();
})

$('.carousel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 4
  });