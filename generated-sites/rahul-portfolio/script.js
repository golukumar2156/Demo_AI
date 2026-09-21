document.addEventListener('DOMContentLoaded',()=>{
  const ham=document.getElementById('hamburger');
  const nav=document.querySelector('.nav');
  ham.addEventListener('click',()=>{nav.classList.toggle('open');});
});