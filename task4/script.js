
let userTextField = document.querySelector('#userTextField');
userTextField.addEventListener('click', 
  (e) => {  
  let userText = prompt('Введите текст');
  userTextField.textContent = userText;
  e.preventDefault(); ;
})

