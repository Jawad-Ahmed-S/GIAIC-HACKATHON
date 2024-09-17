const btnjs = document.getElementById('btnjs');
const btnH = document.querySelector('.btnH');

btnjs.addEventListener('click', () => {
  if (!btnH.classList.contains('btnH-h')) {
    btnH.classList.add('btnH-h');
  }
});
