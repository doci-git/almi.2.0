// toggle menu
let toggleBtn = document.querySelector(".fa-bars");
let menu = document.querySelector(".menu");

toggleBtn.addEventListener("click", function () {
  menu.classList.toggle("active");
  // GET ALL LINKS IN NAVBAR
});
const links = document.querySelectorAll(".menu li a");

links.forEach((l) => {
  // BIND CLICK EVENT ON ALL LINKS
  l.addEventListener("click", () => {
    // ON CLICK, REMOVE active CLASS FROM navBarLinks
    menu.classList.remove("active");
  });
});

const nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.body.scrollTop >= 200) {
    nav.classList.add("navbarT");
  } else {
    nav.classList.add("sticky");
    //nav.classList.remove("navbarT");
  }
};

var i = 0;
function read() {
  if (!i) {
    document.getElementById("more").style.display = "inline";
    document.getElementById("dots").style.display = "none";
    document.getElementById("read").innerHTML = "Leggi di Meno";
    i = 1;
  } else {
    document.getElementById("more").style.display = "none";
    document.getElementById("dots").style.display = "inline";
    document.getElementById("read").innerHTML = "Leggi di Più";
    i = 0;
  }
}

// slide image
const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevtBtn = document.querySelector(".prevBtn");

slides.forEach(function (slide, index) {
  slide.style.left = `${index * 100}%`;
});
let counter = 0;

nextBtn.addEventListener("click", function () {
  counter++;
  carousel();
});

prevtBtn.addEventListener("click", function () {
  counter--;
  carousel();
});

function carousel() {
  if (counter === slides.length) {
    counter = 0;
  }
  if (counter < 0) {
    counter = slides.length - 1;
  }
  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
}
