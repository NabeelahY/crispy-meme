const btn = document.getElementById('open-modal');
const modal = document.getElementById('modal');
const menus = document.querySelectorAll('.menu');
const close = document.getElementById('cancel');
const component = document.querySelector('.component');
const overlay = document.querySelector('.modal-overlay');
const imgs = document.querySelectorAll('.menu img');
const imgDisplay = document.querySelector('.img-display img');
const lightbox = document.querySelector('.img-display');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('remove');
  modal.classList.add('show');
  component.classList.add('active');
  overlay.classList.add('display');
  overlay.classList.remove('removeDisplay');
  for (let i = 0; i < menus.length; i++) {
    menus[i].classList.add('fall');
    menus[i].classList.remove('reverse');
  }
});

close.addEventListener('click', (e) => {
  e.preventDefault();
  overlay.classList.remove('display');
  overlay.classList.add('removeDisplay');
  modal.classList.add('remove');
  modal.classList.remove('show');
  component.classList.remove('active');

  for (let i = 0; i < menus.length; i++) {
    menus[i].classList.add('reverse');
    menus[i].classList.remove('fall');
  }
});

const appendImg = (img) => {
  imgDisplay.src = img.src;
  imgDisplay.alt = img.alt;
};

imgs.forEach((img) => {
  img.addEventListener('click', () => {
    console.log('click');
    img.classList.add('expand');
    appendImg(img);
    lightbox.classList.add('show');
  });
});

imgs.forEach((img) => {
  lightbox.addEventListener('click', () => {
    lightbox.classList.remove('show');
    img.classList.remove('expand');
    img.classList.add('show');
    // imgDisplay.src = '';
    // imgDisplay.alt = '';
  });
});
