const btn1 = document.querySelector('.btn1')
const btn2 = document.querySelector('.btn2')
const num = document.querySelector('.svetonum')




btn1.addEventListener('click', () => {
  num.textContent = parseInt(num.textContent) + 1;
  num.style.color = 'green';
});

btn2.addEventListener('click', () => {
  num.textContent = parseInt(num.textContent) - 1;
  num.style.color = 'red';
});

if (parseInt(num.textContent) === 0) {
  num.style.color = 'gold';
}