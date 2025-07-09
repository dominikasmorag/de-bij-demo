// document.addEventListener('DOMContentLoaded', function () {
//   const offerLink = document.getElementById('offer-link');
//   const subOffer = offerLink.querySelector('.sub-offer');

//   // Toggle po kliknięciu w "Oferta"
//   offerLink.addEventListener('click', function (e) {
//     e.stopPropagation(); // zapobiega zamknięciu od globalnego click
//     if (subOffer.style.display === "block") {
//       subOffer.style.display = "none";
//     } else {
//       subOffer.style.display = "block";
//     }
//   });

//   // Kliknięcie poza menu chowa dropdown
//   document.addEventListener('click', function () {
//     subOffer.style.display = "none";
//   });
// });

document.addEventListener('DOMContentLoaded', function () {
  const offerLink = document.getElementById('offer-link');
  const offerText = document.getElementById('offer-text');
  const subOffer = offerLink.querySelector('.sub-offer');
  const offerDropdownIcon = offerLink.querySelector('.offer-dropdown-icon');

  // Kliknięcie w strzałkę rozwija submenu
  offerDropdownIcon.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    if (subOffer.style.display === "block") {
      subOffer.style.display = "none";
    } else {
      subOffer.style.display = "block";
    }
  });

  // Kliknięcie poza menu chowa dropdown
  document.addEventListener('click', function () {
    subOffer.style.display = "none";
  });

  // Kliknięcie w submenu nie chowa menu
  subOffer.addEventListener('click', function(e){
    e.stopPropagation();
  });
});