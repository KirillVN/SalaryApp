const btnMenu = document.querySelector('.menu');
const sideBar = document.querySelector('.side-bar');
const closeBtn = document.querySelector('.close-btn');

btnMenu.addEventListener('click', () => {
    sideBar.classList.add('show')
})
closeBtn.addEventListener('click', () => {
    sideBar.classList.remove('show')
})
