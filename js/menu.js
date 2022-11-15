const nav = document.getElementById('nav');
const header = document.getElementById('header-two');
const particles = document.getElementsByClassName('parti-two');
const navTwo = document.getElementById('nav-two');

window.addEventListener('scroll', function(){
    nav.classList.toggle('active', this.window.scrollY >0);

    // // Cuando el contenedor tenga la clase 'active'
    // if (nav.matches('.active')) {
    //     // Agregamos clases a elementos div.
    //     header.classList.add('header-two');
    //     particles.classList.add('particles-two');
    //     navTwo.classList.add('nav-two');
        
    // } else {
    //     // Eliminamos clases a elementos div.
    //     header.classList.remove('header-two');
    //     particles.classList.remove('particles-two');
    //     navTwo.classList.remove('nav-two');
    // }
})


