// let selectedSection;
// let offset = window.innerWidth < 768 ? 60 : 100;

// document.addEventListener("DOMContentLoaded", function() {
//   const links = [
//     { id: 'home-link', section: 'home' },
//     { id: 'offer-link', section: 'offer' },
//     { id: 'location-link', section: 'location' },
//     { id: 'contact-link', section: 'contact' },
//     { id: 'home-footer-link', section: 'home' },
//     { id: 'offer-footer-link', section: 'offer' },
//     { id: 'location-footer-link', section: 'location' },
//     { id: 'contact-footer-link', section: 'contact' },
//     { id: 'nav-to-contact', section: 'contact' },
//     { id: 'pricing-link', section: 'pricing' },
//     { id: 'gallery-link', section: 'gallery' }
//   ];
//   //     // initializeScroll('pricing-link', 'pricing');
// //     // initializeScroll('gallery-link', 'gallery');

//   links.forEach(link => initializeScroll(link.id, link.section));
// });

// function initializeScroll(linkId, sectionId) {
//   const link = document.getElementById(linkId);
//   const section = document.getElementById(sectionId);

//   if (link && section) {
//     link.addEventListener('click', function(event) {
//       event.preventDefault();

//       const targetPosition = section.offsetTop - offset;
//       const maxScroll = document.body.scrollHeight - window.innerHeight;

//       window.scrollTo({
//         behavior: 'smooth',
//         top: targetPosition > maxScroll ? maxScroll : targetPosition
//       });
//     });
//   }
// }

let selectedSection;
// Zwiększony offset, np. do 150 zamiast 100, aby sekcja pokazywała się wyżej
let offset = window.innerWidth < 768 ? 80 : 150;

document.addEventListener("DOMContentLoaded", function() {
  const links = [
    { id: 'home-link', section: 'home' },
    { id: 'offer-link', section: 'offer' },
    { id: 'location-link', section: 'location' },
    { id: 'contact-link', section: 'contact' },
    { id: 'home-footer-link', section: 'home' },
    { id: 'offer-footer-link', section: 'offer' },
    { id: 'location-footer-link', section: 'location' },
    { id: 'contact-footer-link', section: 'contact' },
    { id: 'nav-to-contact', section: 'contact' },
    { id: 'pricing-link', section: 'pricing' },
    { id: 'gallery-link', section: 'gallery' }
  ];

  links.forEach(link => initializeScroll(link.id, link.section));
});

function initializeScroll(linkId, sectionId) {
  const link = document.getElementById(linkId);
  const section = document.getElementById(sectionId);

  if (link && section) {
    link.addEventListener('click', function(event) {
      event.preventDefault();

      const targetPosition = section.offsetTop - offset;
      const maxScroll = document.body.scrollHeight - window.innerHeight;

      window.scrollTo({
        behavior: 'smooth',
        top: targetPosition > maxScroll ? maxScroll : targetPosition
      });
    });
  }
}