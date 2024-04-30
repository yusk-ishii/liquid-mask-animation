import './style.scss';

const liquidEffect = document.getElementById('liquid-effect') as HTMLElement;
const startButton = document.getElementById('start') as HTMLElement;
const resetButton = document.getElementById('reset') as HTMLElement;

startButton.addEventListener('click', () => {
  console.log(liquidEffect);
  liquidEffect.classList.add('is-active');
});

resetButton.addEventListener('click', () => {
  liquidEffect.classList.remove('is-active', 'is-done');
});
