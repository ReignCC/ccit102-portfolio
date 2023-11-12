var images = document.querySelectorAll('.image');
var currentImageIndex = 0;

var texts = document.querySelectorAll('.text');
var currentTextIndex = 0;

function crossfadeImage() {
  var nextImageIndex = (currentImageIndex + 1) % images.length;

  images[currentImageIndex].style.opacity = 0;
  images[nextImageIndex].style.opacity = 1;

  currentImageIndex = nextImageIndex;
}

function crossfadeText() {
  var nextTextIndex = (currentTextIndex + 1) % texts.length;

  texts[currentTextIndex].style.opacity = 0;
  texts[nextTextIndex].style.opacity = 1;

  currentTextIndex = nextTextIndex;
}

function crossfade() {
  crossfadeImage();
  crossfadeText();
  setTimeout(crossfade, 7000);
}

crossfade();
