// =============== MENU SHOW & HIDDEN ===============

// ===== MENU SHOW =====
// Validate if constant exists

// ===== MENU HIDDEN =====
// Validate if constant exists


// =============== REMOVE MENU IN MOBILE ===============

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

// SCROLL REVEAL ANIMATION
