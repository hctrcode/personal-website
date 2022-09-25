window.addEventListener("scroll", (event) => {
  let scroll = this.scrollY;
  var head = document.getElementsByClassName("my-header")[0];
  if (scroll >= 100) {
    head.style.display = "block";
  } else {
    head.style.display = "none";
  }
});
document.addEventListener("click", function () {
  document.getElementById("navbarNav").classList.remove("show");
});
