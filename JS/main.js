let img = document.getElementById('img')

let container = document.getElementById('contain')

function changeimg (phoneSrc) {

    img.src = phoneSrc ;

};

function colors (color) {
    container.style.backgroundColor = color ;
}

let btn = document.getElementById('btn') ;

let icon = document.getElementById('icon') ;

btn.addEventListener('click', () => {

    icon.classList.toggle('activate') ;

}) ;

let menu = document.getElementById('menu') ;

let nav = document.getElementById('nav') ;

menu.addEventListener('click', function () {
    menu.classList.toggle('active') ;
    nav.classList.toggle('active')
})

