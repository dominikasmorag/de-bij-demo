document.querySelectorAll(".nav-options li").forEach(li => {
    li.addEventListener("click", e => {
      const link = li.querySelector("a");
      if (link) {
        if (e.target !== link) {
          link.click();
        }
      }
    });
  });