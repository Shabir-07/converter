const inputElement = document.querySelector('.js-cm-input');

const metreInputElement = document.querySelector('.js-m-input');

const resultElement = document.querySelector('.js-result');

document.querySelector('.js-button')
.addEventListener('click', convertFunction = () => {
  if (resultElement.innerHTML === '' && inputElement.value === '' && metreInputElement.value === '' ) {
    alert('Add a value!!')
    return;
  }
  if (inputElement.value === '' ) {
   inputElement.value = metreInputElement.value * 100

   resultElement.innerHTML = `${metreInputElement.value} metre is ${metreInputElement.value * 100} centimetre`

  } else if (metreInputElement.value === '') {
    metreInputElement.value = inputElement.value / 100

    resultElement.innerHTML = `${inputElement.value} centimetre is ${inputElement.value / 100} metre`
  } else if (inputElement.value !== '' && metreInputElement.value !== '' ) {
    alert('Add one value!!')
    clearFunction()
  }
});

document.body.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    convertFunction()
  } else if (event.key === 'Backspace') {
    clearFunction()
  }
})

document.querySelector('.js-clear-button')
.addEventListener('click', clearFunction = () => {
  inputElement.value ='';
  metreInputElement.value = '';
  resultElement.innerHTML = '';
})

document.querySelector('.js-dark-button')
.addEventListener('click',darkFunction = () => {

  addClass('header', 'header1')
  addClass('result-input-container', 'result-input-container-dark')
  addClass('input-container', 'input-container-dark')
  addClass('result-container', 'result-container-dark')
  addClass('convert-button', 'convert-button-dark')
  addClass('clear-button', 'clear-button-dark')
  addClass('js-result', 'result-text')
  addClass('js-m-input', 'input-dark')
  addClass('js-cm-input', 'input-dark')
  addClass('input-box', 'input-box-dark')
  addClass('input-box2', 'input-box-dark')
  document.body.style.backgroundColor = 'rgb(38, 60, 90)';
});

document.querySelector('.js-light-button')
.addEventListener('click',lightFunction = () => {
  removeClass('header', 'header1')
  removeClass('result-input-container', 'result-input-container-dark')
  removeClass('input-container', 'input-container-dark')
  removeClass('result-container', 'result-container-dark')
  removeClass('convert-button', 'convert-button-dark')
  removeClass('clear-button', 'clear-button-dark')
  removeClass('js-result', 'result-text')
  removeClass('js-m-input', 'input-dark')
  removeClass('js-cm-input', 'input-dark')
  removeClass('input-box', 'input-box-dark')
  removeClass('input-box2', 'input-box-dark')
  document.body.style.backgroundColor = 'rgb(223, 213, 202)';
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'd') {
    darkFunction()
  } else if (event.key === 'l') {
    lightFunction();
  }
})

addClass = (class1, class2) => {
  document.querySelector(`.${class1}`)
  .classList.add(`${class2}`)
};

removeClass = (class1, class2) => {
  document.querySelector(`.${class1}`)
  .classList.remove(`${class2}`)
};