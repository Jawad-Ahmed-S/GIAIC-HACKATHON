// Get references to the elements
const btnjs = document.getElementById('btnjs');
const btnH = document.querySelector('.btnH');

// Add event listener to the button
btnjs.addEventListener('click', () => {
  btnH.classList.toggle('btnH-h');
});