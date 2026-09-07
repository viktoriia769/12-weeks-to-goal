/*
  Коли матимемо фінальний прямий URL сторінки оплати Zenedu,
  вставте його нижче між лапками.

  ВАЖЛИВО:
  CTA не відправляє Meta Pixel Purchase.
  Purchase має фіксуватися лише ПІСЛЯ підтвердженої успішної оплати.
*/
const CHECKOUT_URL = "";

const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!isOpen));
    mobileMenu.classList.toggle("open", !isOpen);
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("open");
    });
  });
}

document.querySelectorAll(".js-checkout").forEach((button) => {
  if (CHECKOUT_URL) {
    button.href = CHECKOUT_URL;
    button.removeAttribute("target");
  }
});
