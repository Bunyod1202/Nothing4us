
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

var elTabItems = document.querySelectorAll(".choose__filter-item");
var elTabLinks = document.querySelectorAll(".choose__filter-link");
var elPanelItems = document.querySelectorAll(".panel__list");

elTabLinks.forEach(function(link){
  link.addEventListener("click" , function(evt){
    evt.preventDefault();

    elTabItems.forEach(function(item){
      item.classList.remove("choose__filter-item--active");
    })

    link.parentElement.classList.add("choose__filter-item--active");

    elPanelItems.forEach(function(panel){
      panel.classList.remove("panel__list--active");
    })

    document.querySelector(link.getAttribute("href")).classList.add("panel__list--active");
  })

})

// carousel
$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass: true,
  autoplay:true,
autoplayTimeout:4000,
  autoplayHoverPause: true,
  loop:true,
  responsive:{
      0:{
          items:1,
          nav:true
      },
      600:{
          items:1,
          nav:false
      },
      1000:{
          items:1,
          nav:true,
         
      }
  }
})
// carousel
