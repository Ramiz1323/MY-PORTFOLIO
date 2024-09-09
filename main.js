// toggle icon navabr menu
let menuIcon= document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}





// let sections = document.querySelectorAll('section');
// let navLinks = document.querySelectorAll('header navbar container pane a');

// window.onscroll = () => {
//     sections.forEach(sec =>{
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if(top >= offset && top < offset + height) {
//             navLinks.forEach(links => {
//                 links.classList.remove('active');
//                 document.querySelector('header navbar container pane a[href*=' + id + ']').classList.add('active');
//             });
//         };
//     });
// };
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    // STICKY NAVBAR
        let header = document.querySelector('header');
        header.classList.toggle('sticky',window.scrollY > 100);
    
    // Remove toggle icon and navbar when click navabr link(scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// SCROLL REVEAL
ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.home-content,.heading,.heading-portfolio,.heading-contact', { origin: 'top' });
ScrollReveal().reveal('.home-img,.contact form,.portfolio-box', { origin: 'bottom' });
ScrollReveal().reveal('h1,.about-img', { origin: 'left' });
ScrollReveal().reveal('.home-sci,.about-content', { origin: 'right' });

// TYPED JS
const typed = new  Typed('.multiple-text',{
    strings: ['Student','Frontend Developer','Video Editor'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
