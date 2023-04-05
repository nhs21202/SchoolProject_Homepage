// changing the active class on the navbar
var item = document.querySelectorAll(".nav-item");
item.forEach((element) => {
  element.addEventListener("click", function () {
    item.forEach((e) => e.classList.remove("active1"));
    this.classList.add("active1");
  });
});

function openBox(event, boxName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active2", "");
  }
  document.getElementById(boxName).style.display = "flex";
  event.currentTarget.className += " active2";
}

const headerE1 = document.querySelector(".navbar");
window.addEventListener ("scroll", () => {
  if (window.scrollY >50){
    headerE1.classList.add("navbar-scrolled");
  }
  else{
    headerE1.classList.remove("navbar-scrolled");
  }
});

