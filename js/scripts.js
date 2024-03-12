let menuBox = document.querySelector('.primary__navigation__list')
let menuIcon = document.querySelector('.menuIcon')

menuIcon.addEventListener('click', () => {
    menuBox.classList.toggle('open-menu')
    console.log('hello');
    
})

let links = document.querySelectorAll('.primary__nav-items')
console.log(links);
links.forEach(element => {
    element.addEventListener('click', () => {
        menuBox.classList.toggle('open-menu')
    })
});