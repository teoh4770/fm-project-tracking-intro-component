const navbarList = document.querySelector(".mobile-nav");
const toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", toggleList);

function toggleList(e) {
  console.log("click done");
  navbarList.classList.toggle("hidden");
  const img = toggleBtn.children[0];
  if(!navbarList.classList.contains("hidden")) {
    img.src = "./images/icon-close.svg";
  }
  else {
    img.src = "./images/icon-hamburger.svg";
  }
}