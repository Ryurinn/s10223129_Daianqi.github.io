const dropdown = document.querySelector('.header .nav-bar .nav-list .dropdown')
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul')
const header =document.querySelector('.header.container')

dropdown.addEventListener('click',() => {
    dropdown.classList.toggle('active');
    mobile_menu.classList.toggle('active');
});