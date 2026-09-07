const CHECKOUT_URL = "";

const menuButton = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuButton && mobileMenu) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    mobileMenu.classList.toggle("open", !open);
  });

  mobileMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      mobileMenu.classList.remove("open");
    });
  });
}

/*
  Коли матимемо пряме посилання Zenedu, вставимо його в CHECKOUT_URL.
  Purchase НЕ запускаємо на кліку CTA — лише після підтвердженої успішної оплати.
*/
if (CHECKOUT_URL) {
  document.querySelectorAll(".js-checkout").forEach(button => {
    button.href = CHECKOUT_URL;
  });
}
