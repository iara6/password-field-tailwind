/**************
 SWITCH BUTTON 
***************/

const switchBtn = document.querySelector('.switch-button');

switchBtn.addEventListener('click', () => {
  switchBtn.classList.toggle('slide');
});


/****************
 IF INPUT'S EMPTY
*****************/

const input = document.getElementById('input');
const continueBtn = document.querySelector('.continue');

continueBtn.addEventListener('click', () => {
 if (input.value.trim() === '') return;
});


/***************
 RESET PASSWORD
****************/

const resetBtn = document.querySelector('.reset');

resetBtn.addEventListener('click', ()=> {
  input.value = '';
});


/******************
 SHOW/HIDE PASSWORD
*******************/

const eyeBtn = document.querySelector('.eye-container');
const eyeIcon = document.querySelector('.fa-regular.fa-eye');
const eyeSlashIcon = document.querySelector('.fa-regular.fa-eye-slash');

eyeBtn.addEventListener('click', () => {
  const visible = input.type === 'text';
  input.type = visible ? 'password' : 'text';
  
  eyeIcon.style.display = visible ? 'none' : 'block';
  eyeSlashIcon.style.display = visible ? 'block' : 'none';
});