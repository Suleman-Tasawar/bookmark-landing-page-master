let simpleTabButton = document.getElementById("simple--btn");
let speedTabButton = document.getElementById("speedy--btn");
let easyTabButton = document.getElementById("easy--btn");
let simpleTab = document.getElementById("simple--tab");
let speedTab = document.getElementById("speedy--tab");
let easyTab = document.getElementById("easy--tab");
let faqToggleBtn = document.querySelectorAll(".faq--toggler");
let faqToggle = document.querySelectorAll("#faq--toggle");
let mainNavMenu = document.getElementById("main--menu");
let hamburgerMenu = document.getElementById("hamburger");
let hamburgerMenuClose = document.getElementById("hamburger--close");

hamburgerMenu.addEventListener("click", () => {
  mainNavMenu.style.display = "flex";
});

hamburgerMenuClose.addEventListener("click", () => {
  mainNavMenu.style.display = "none";
});

//Tabs
simpleTabButton.addEventListener("click", () => {
  simpleTabButton.classList.add(".features--accordian--hover");
  speedTabButton.classList.remove(".features--accordian--hover");
  easyTabButton.classList.remove(".features--accordian--hover");
  simpleTab.style.display = "flex";
  speedTab.style.display = "none";
  easyTab.style.display = "none";
});

speedTabButton.addEventListener("click", () => {
  speedTabButton.classList.add("features--accordian--hover");
  simpleTabButton.classList.remove("features--accordian--hover");
  easyTabButton.classList.remove("features--accordian--hover");
  speedTab.style.display = "flex";
  simpleTab.style.display = "none";
  easyTab.style.display = "none";
});

easyTabButton.addEventListener("click", () => {
  easyTabButton.classList.add(".features--accordian--hover");
  simpleTabButton.classList.remove(".features--accordian--hover");
  speedTabButton.classList.remove(".features--accordian--hover");
  easyTab.style.display = "flex";
  simpleTab.style.display = "none";
  speedTab.style.display = "none";
});
/*
faqToggleBtn.addEventListener("click", () => {
  console.log("faq--toggler");
});
*/
for (let i = 0; i < 5; i++) {
  faqToggleBtn[i].addEventListener("click", () => {
    if (faqToggle[i].style.display == "block") {
      faqToggle[i].style.display = "none";
    } else {
      faqToggle[i].style.display = "block";
    }
  });
}
