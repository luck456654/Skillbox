document.querySelector(".burger__btn-open").addEventListener("click", function() {
  document.querySelector(".burger__nav").classList.add("active");
})
document.querySelector(".nav__close").addEventListener("click", function() {
  document.querySelector(".burger__nav").classList.remove("active");
})