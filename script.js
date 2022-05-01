let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

const readMoreBtn = document.querySelector('.js-read-more-btn')
const text = document.querySelector('.js-myText')

readMoreBtn.addEventListener('click', (e) => {
  text.classList.toggle('show-more');
  if(readMoreBtn.innerText === 'Lasīt vairāk') {
    readMoreBtn.innerText = 'Lasīt mazāk';
  }else{
    readMoreBtn.innerText = 'Lasīt vairāk';
  }
})

let scrollBar = document.getElementById('scroll')
let height = document.body.scrollHeight - window.innerHeight
window.onscroll = function (){
  let scrollHeight = (window.pageYOffset / height) * 100
  scrollBar.style.height = `${scrollHeight}%`
}



