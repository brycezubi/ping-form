const form = document.querySelector('.form')
// console.log(form)

form.addEventListener('submit' , e=>{
  e.preventDefault();

  const email = form['email'].value;
  const formEmail = form['email'].parentNode;

  if(email === ''){
    formEmail.classList.add('error')
  }else{
    formEmail.classList.remove('error')
    
  }
})