document.addEventListener("DOMContentLoaded", function () {
  // add padding top to show content behind navbar
  navbar_height = document.querySelector(".navbar.fixed-top").offsetHeight;
  document.body.style.paddingTop = navbar_height + "px";
});
