// =============== MENU SHOW & HIDDEN ===============
const navMenu_holder = document.querySelector('.nav-menu')
const menuClose = document.querySelector('.menu-close')
const menuBar = document.querySelector('.menu-bar')

menuBar.addEventListener('click', () => {
    menuBar.classList.add('menu')
    navMenu_holder.classList.add('show-menu')
})

menuClose.addEventListener('click', () => {
    menuBar.classList.remove('menu')
    navMenu_holder.classList.remove('show-menu')
})

// =============== CHANGE BACKGROUND HEADER ===============
const scrollHeader = () => {
    const header = document.getElementById('header')

    this.scrollY >= 20 
        ? header.classList.add('scroll-header') 
        : header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

// =============== SCROLL SECTIOND ACTIVE LINK ===============

// =============== SCROLL ABOUT ANIMATION ===============
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.text-gradient').forEach((span) => {
    gsap.to(span, {
        backgroundSize: '100% 100%',
        ease: 'none',
        scrollTrigger: {
            trigger: span,
            start: 'top bottom',
            end: 'top center',
            scrub: true,
        },
    });
});

// =============== DARK LIGHT THEME ===============

// =============== SECTION NAVIGATION ===============
const list_item = document.querySelectorAll('.projects-navItem')
const project_container = document.querySelectorAll('.projects-container')

// Start looping throught each list item & assing each a click event

list_item.forEach(item => {
    item.addEventListener('click', () => {
        // Removing the active class to assign it to other list items.
        list_item.forEach(rm => rm.classList.remove('active-navItem'))

        // Then add the active based on the clicked list item
        item.classList.add('active-navItem')

        // Displaying none to all container when a lis item is clicked
        project_container.forEach(container => {
            container.style.display = 'none'
        })

        // Displaying the container based on the corresponding clicked list item
        const connector = item.getAttribute('data-tracker')
        const matching_container = document.getElementById(connector)

        matching_container.style.display = 'grid'

    })
})


// Active work

// =============== EMAIL JS ===============
const contactForm = document.getElementById('contact-form'),
    contactName = document.getElementById('contact-name'),
    contactEmail = document.getElementById('contact-email'),
    contactMessage = document.getElementById('contact-message'),
    errorMessage = document.getElementById('error-message')
    successMessage = document.getElementById('success-message')

    const sendEmail = (e) => {
        e.preventDefault();

        if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
            errorMessage.style.display = 'block'

            setTimeout(() => {
                errorMessage.style.display = 'none'
            }, 3000)
        }
        else {
            emailjs.sendForm('service_e7tqrdi', 'template_h33vs19', '#contact-form', 'OZSeUryvjDEc9hfzA')
            .then(() => {
                    successMessage.style.display = 'block'

                    setTimeout(() => {
                        successMessage.style.display = 'none'
                    }, 3000);
                },
                (error) => {
                    alert('Sorry, Something Unexpected Happened. Try again later!', error)
                }
            )

            contactName.value = ''
            contactEmail.value = ''
            contactMessage.value = ''
        }
    }

    contactForm.addEventListener('submit', sendEmail)

// CANVAS MOUSE ON DRAW

let banner = document.querySelector('.banner');
let canvas = document.querySelector('.dotsCanvas');
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;
const ctx = canvas.getContext('2d');
const dots = [];
const arrayColors = ['#0d1136', '#9cb1c8', '#160435', '#d9d9e7', '#3436d2'];
for (let index = 0; index < 80; index++) {
    dots.push({
        x:  Math.floor(Math.random() * canvas.width),
        y:  Math.floor(Math.random() * canvas.height),
        size: Math.random() * 1.6 + 1.6,
        color: arrayColors[Math.floor(Math.random()* 5)]
    });
}
const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI*2);
        ctx.fill();
    })
}
drawDots();
banner.addEventListener('mousemove', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
    let mouse = {
        x:  event.pageX - banner.getBoundingClientRect().left,
        y:  event.pageY - banner.getBoundingClientRect().top
    }
    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if(distance < 300){
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    })
})
banner.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawDots();
})
window.addEventListener('resize', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = banner.offsetWidth;
    canvas.height = banner.offsetHeight;

    dots = [];
    for (let index = 0; index < 50; index++) {
        dots.push({
            x:  Math.floor(Math.random() * canvas.width),
            y:  Math.floor(Math.random() * canvas.height),
            size: Math.random() * 3 + 5,
            color: arrayColors[Math.floor(Math.random()* 5)]
        });
    }
    drawDots();
})