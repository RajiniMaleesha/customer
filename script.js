const color =document.querySelector('.color');
const colorInput = document.querySelector('.color-input');


colorInput.addEventListener('input',()=>{

    color.computedStyleMap.backgroungcolor = color.ariaValueMax;

});