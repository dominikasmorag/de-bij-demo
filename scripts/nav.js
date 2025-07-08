document.addEventListener('DOMContentLoaded', function () {
  const offerLink = document.getElementById('offer-link');
  const subOffer = offerLink.querySelector('.sub-offer');

  // Toggle po kliknięciu w "Oferta"
  offerLink.addEventListener('click', function (e) {
    e.stopPropagation(); // zapobiega zamknięciu od globalnego click
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
});