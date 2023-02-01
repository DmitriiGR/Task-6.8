
var textForm = document.querySelector('#duplicateField');
var textInput = document.querySelector('input');
var clickButton = document.querySelector('button');

textInput.addEventListener('input', (e) => {
    textForm.textContent = textInput.value;
 
});

clickButton.addEventListener('click', (e) => {
    console.log('') = textInput;
    textInput.value ='';
    textForm.value ='';
    e.preventDefault();
});







