document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.getElementById("mobile-menu");
  const navLinks = document.querySelector(".nav-links");

  if (!menuButton || !navLinks) return;

  menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const isOpen = navLinks.classList.contains("active");
    menuButton.setAttribute("aria-expanded", isOpen ? "true" : "false");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("active");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
});