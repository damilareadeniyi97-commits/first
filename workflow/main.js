/* PAUSE WHILE TOUCHING */

const slider = document.querySelector('.slider');
const track = document.querySelector('.track');

slider.addEventListener('touchstart', () => {
  track.classList.add('pause');
});

slider.addEventListener('touchend', () => {
  track.classList.remove('pause');
});

slider.addEventListener('touchcancel', () => {
  track.classList.remove('pause');
});