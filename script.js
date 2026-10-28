
// =========================================
// 1. AUTOMATIC COPYRIGHT YEAR
// =========================================

const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// =========================================
// 2. MOBILE NAVIGATION
// =========================================

const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {

  // Open or close the navigation menu
  menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      String(isOpen)
    );
  });


  // Close menu when a navigation link is clicked
  const navigationLinks = navigation.querySelectorAll("a");

  navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

      navigation.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}
