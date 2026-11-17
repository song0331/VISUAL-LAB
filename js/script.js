window.addEventListener("scroll", function () {
  const menu = document.querySelector('nav');

  if (window.scrollY > 220) {
    menu.classList.add("fix");
  } else {
    menu.classList.remove("fix");
  }
});
