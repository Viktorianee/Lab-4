const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  index = (i + slides.length) % slides.length;
  slider.style.transform = `translateX(-${index * 100}%)`;
}

prev.addEventListener('click', () => showSlide(index - 1));
next.addEventListener('click', () => showSlide(index + 1));

setInterval(() => showSlide(index + 1), 6000);
