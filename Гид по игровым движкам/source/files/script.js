window.addEventListener('resize', changeImage); //Вызываем функцию при изменении размера окна

function changeImage() {
  const image = document.querySelector('.banner-image img');
  if (window.innerWidth < 400) {
    image.src = 'source/images/banner-phone-small.png';
  } else if (window.innerWidth < 900) {
    image.src = 'source/images/banner-phone.png';
  } else {
    image.src = 'source/images/game1.gif';
  }
}

changeImage();

const texts = [
  "Потрачено",
  "вверх, вверх, вниз, вниз, влево, вправо, влево, вправо, B, A",
  "Sus",
  "Почему программисты не любят природу? У нее слишком много багов.",
  "Хирурги, которые регулярно играют в видеоигры, совершают на 37% меньше ошибок и выполняют свои задачи на 27% быстрее."
];

function getRandomText() {
  const randomIndex = Math.floor(Math.random() * texts.length);
  return texts[randomIndex];
}

window.onload = function () {
  const element = document.getElementById('myText');
  if (element) {
    element.textContent = getRandomText();
  }
};
