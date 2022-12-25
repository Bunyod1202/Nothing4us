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