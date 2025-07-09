// function hideNotification() {
//     const popup = document.querySelector(".cookies-consent-container");
//     popup.style.display = "none";
// }

document.addEventListener("DOMContentLoaded", function() {
    const popup = document.querySelector(".cookies-consent-container");
    const acceptBtn = document.querySelector(".accept-cookies");

    // Sprawdź, czy ciasteczka zostały już zaakceptowane
    if (localStorage.getItem("cookiesAccepted")) {
        popup.style.display = "none";
    }

    acceptBtn.addEventListener("click", function() {
        popup.style.display = "none";
        localStorage.setItem("cookiesAccepted", "true");
    });
});