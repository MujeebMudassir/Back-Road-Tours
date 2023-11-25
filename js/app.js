// nav toggle
const menubtn = document.querySelector(".toggle-container");
menubtn.addEventListener("click", () => {
  const navCenter = document.querySelector(".nav-center");
  navCenter.classList.toggle("active");
});

const navlink = document.querySelectorAll(".nav-list li a");
console.log(navlink);
navlink.forEach((list) => {
  const navCenter = document.querySelector(".nav-center");
  list.addEventListener("click", () => {
    navCenter.classList.remove("active");
  });
});
