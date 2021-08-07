'use sctrict';

const video = document.querySelector('#video');
const btn = document.querySelector('#btn');

btn.addEventListener('click', (e) => {
  console.log(e.target);
  video.play();
});