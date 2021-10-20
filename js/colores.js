
const cuadrado = document.querySelector('.caja');
const btnRojo  = document.querySelector('#btn-rojo');
const btnVerde = document.querySelector('#btn-verde');
const btnAzul  = document.querySelector('#btn-azul');

btnRojo.addEventListener('click', () => {
   cuadrado.classList = '';
   cuadrado.classList.add('caja');
   cuadrado.classList.add('btn-1');
   console.log(cuadrado.className)
})

btnVerde.addEventListener('click', () => {
   cuadrado.classList = '';
   cuadrado.classList.add('caja');
   cuadrado.classList.add('btn-2');
   console.log(cuadrado.className)
})

btnAzul.addEventListener('click', () => {
   cuadrado.classList = '';
   cuadrado.classList.add('caja');
   cuadrado.classList.add('btn-3');
   console.log(cuadrado.className)
})
