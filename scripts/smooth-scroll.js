// let selectedSection;
// const offset = 100;

// document.addEventListener("DOMContentLoaded", function() {
//     initializeScroll('home-link', 'home');
//     initializeScroll('offer-link', 'offer');
//     initializeScroll('location-link', 'location');
//     initializeScroll('pricing-link', 'pricing');
//     initializeScroll('gallery-link', 'gallery');
//     initializeScroll('contact-link', 'contact');

//     initializeScroll('home-footer-link', 'home');
//     initializeScroll('offer-footer-link', 'offer');
//     initializeScroll('location-footer-link', 'location');
//     initializeScroll('pricing-footer-link', 'pricing');
//     initializeScroll('gallery-footer-link', 'gallery');
//     initializeScroll('contact-footer-link', 'contact');

//     initializeScroll('nav-to-contact', 'contact');
// }
// )

// function initializeScroll(link, section) {
//     document.getElementById(link).addEventListener('click', function(event) {

//         selectedSection = document.getElementById(section);

//         window.scrollTo({
//             behavior: 'smooth',
//             top: selectedSection.offsetTop - offset
//         });
//     });
// }


let selectedSection;
let offset;

if (window.innerWidth < 768) {
    offset = 60;
} else {
    offset = 100;
}

document.addEventListener("DOMContentLoaded", function() {
    initializeScroll('home-link', 'home');
    initializeScroll('offer-link', 'offer');
    initializeScroll('location-link', 'location');
    // initializeScroll('pricing-link', 'pricing');
    // initializeScroll('gallery-link', 'gallery');
    initializeScroll('contact-link', 'contact');

    initializeScroll('home-footer-link', 'home');
    initializeScroll('offer-footer-link', 'offer');
    initializeScroll('location-footer-link', 'location');
    initializeScroll('pricing-footer-link', 'pricing');
    initializeScroll('gallery-footer-link', 'gallery');
    initializeScroll('contact-footer-link', 'contact');

    initializeScroll('nav-to-contact', 'contact');
});

function initializeScroll(link, section) {
    document.getElementById(link).addEventListener('click', function(event) {
        selectedSection = document.getElementById(section);

        const targetPosition = selectedSection.offsetTop - offset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;

        window.scrollTo({
            behavior: 'smooth',
            top: targetPosition > maxScroll ? maxScroll : targetPosition
        });
    });
}