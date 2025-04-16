
function toggleMenu() {
    let navOptions = document.querySelector(".nav-options");



    if (navOptions.style.display === "grid") {
        navOptions.style.display = "none";  
    } else {
        navOptions.style.display = "grid";
        navOptions.style.gridTemplateColumns = "1fr";
        navOptions.style.position = "fixed"; 
        navOptions.style.top = "50px"; 
        navOptions.style.right = "0"; 
        navOptions.style.left = "auto";
        navOptions.style.margin = "0";
        navOptions.style.width = "200px"; 
        navOptions.style.zIndex = "1000"; 
        
    }
}

window.addEventListener("resize", () => {
    let navOptions = document.querySelector(".nav-options");

    if (window.innerWidth > 1200) {
        navOptions.style.display = "flex";
        navOptions.style.flexDirection = "row"; 
        navOptions.style.position = "static"; 
        navOptions.style.margin = "auto";
        navOptions.style.width = "auto";
        navOptions.style.boxShadow = "none"; 
        navOptions.style.right = "auto"; 
        menuItems.forEach(item => {
            item.style.borderBottom = "none";
        });
    } else {
        navOptions.style.display = "none";  
    }
  
});

