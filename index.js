const body=document.querySelector('body');
const toggle=document.querySelector('.toggle');
const indicator=document.querySelector('.indicator');
indicator.addEventListener('click',()=>{
    toggle.classList.toggle('active');
    indicator.classList.toggle('active');
    body.classList.toggle('active');
})