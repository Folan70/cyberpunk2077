const images = ['./img/intro-1.jpg', './img/intro-2.jpg','./img/intro-3.jpg' ];

let currentIndex = 0;

function changeBackgroundImage() {
  const intro = document.querySelector('.intro');
  currentIndex = (currentIndex + 1) % images.length;
  intro.style.background = `url('${images[currentIndex]}')`;
}

setInterval(changeBackgroundImage, 10000);
