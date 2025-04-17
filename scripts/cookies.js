function hideNotification() {
    const popup = document.querySelector(".cookies-consent-container");
    popup.style.display = "none";
}

document.querySelectorAll(".nav-options li").forEach(li => {
    li.addEventListener("click", e => {
      const link = li.querySelector("a");
      if (link) {
        // Zatrzymaj kliknięcie wewnątrz <a>, żeby nie wywołało dwa razy
        if (e.target !== link) {
          link.click();
        }
      }
    });
  });