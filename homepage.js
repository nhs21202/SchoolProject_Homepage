
var item = document.querySelectorAll("nav-item");
item.forEach((element) => {
  element.addEventListener("click", function () {
    item.forEach((e) => e.classList.remove(" active"));
    this.classList.add(" active");
  });
});
