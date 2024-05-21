let currentSlide = 0;

function updateCarousel(){
    const carousel = document.querySelector('.carousel');
    const itemWidth = document.querySelector('.carousel .container-itens');
    const offset = currentSlide * -itemWidth;
    carousel.style.transform = `translateX(${offset}px)`;
}

function nextslide(){
    const totalItems = document.querySelectorAll('.carousel .container-itens');
    const visibleItems = 3;
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

  const menuDiv = document.getElementById('nav-mobile')
  const btnAnimar = document.getElementById('btn-menu')

  menuDiv.addEventListener('click', animarMenu) 
  
  function animarMenu(){
    menuDiv.classList.toggle('abrir')
    btnAnimar.classList.toggle('ativo')
  }