
document.querySelector('#userTextField').addEventListener('click', 
  (event) => {
  let userText = prompt('Введите текст');
  let userTextField = document.querySelector('#userTextField');
  userTextField.textContent = userText;
  event.preventDefault();
})






