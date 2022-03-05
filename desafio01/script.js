const img = document.querySelectorAll('img');

function darLike() {
  img.forEach((e) => {
    e.addEventListener('click', function () {
      e.src = 'img/heart-solid.png';
    });
  });
}

function tirarLike() {
  img.forEach((e) => {
    e.addEventListener('dblclick', function () {
      e.src = 'img/heater.png';
    });
  });
}

img.forEach(() => {
  darLike();
  tirarLike();
});