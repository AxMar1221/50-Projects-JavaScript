window.addEventListener("load", () => {
  console.log("Window loaded");
});

const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

setInterval("location.reload()", 600000);
