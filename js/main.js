const elThemeBtn = document.querySelector(".theme-btn")
const elBody = document.querySelector(".site-body")
const elMenuBtn = document.querySelector(".menu-btn")
const elBtnClose = document.querySelector(".btn-close")
const elHeader = document.querySelector(".header")

let theme = localStorage.getItem("theme") || ""
if (theme === "body--dark") {
  elBody.classList.toggle("body--dark")
}
elMenuBtn.addEventListener("click", () => {
  elHeader.classList.add("header--active")
})
elThemeBtn.addEventListener("click", () => {
  elBody.classList.toggle("body--dark")
  if (theme === "body--dark") {
    localStorage.setItem("theme", "")
  } else {
    localStorage.setItem("theme", "body--dark")
  }
})
elBtnClose.addEventListener("click", () => { 
  elHeader.classList.remove("header--active")
})