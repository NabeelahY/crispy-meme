const btn = document.getElementById('open-modal');
const info = document.querySelectorAll('.info')[1];
const modal = document.getElementById('modal');
const menus = document.querySelectorAll('.menu');
const close = document.getElementById('cancel');
const component = document.querySelector('.component');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.remove('remove');
  modal.classList.add('show');
  component.classList.add('active');
  for (let i = 0; i < menus.length; i++) {
    menus[i].classList.add('fall');
    menus[i].classList.remove('reverse');
  }
});

close.addEventListener('click', (e) => {
  e.preventDefault();
  modal.classList.add('remove');
  modal.classList.remove('show');
  component.classList.remove('active');
  for (let i = 0; i < menus.length; i++) {
    menus[i].classList.add('reverse');
    menus[i].classList.remove('fall');
  }
});
