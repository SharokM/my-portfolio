const body = document.querySelector("body");
const ballButton = document.querySelector(".ball");
const header = document.querySelector(".header");
const switchContainer = document.querySelector(".switch-container");
const dropdown = document.querySelector(".dropdown");
const dropDownButton = document.querySelector("#dropdownbutton");
const dropdownContent = document.querySelector(".dropdown-content");
const dropdownContext = document.querySelector("#dropdown-context");
const switchButton = document.querySelector(".switch");
const darkModeButton = document.querySelector(".dark-mode")
const sliderToggle = document.querySelector(".slider");
const lightModeButton = document.querySelector(".light-mode");
const highlightSpan = document.querySelector(".highlightSpan");
const spans = document.querySelectorAll("span");


// Select all span elements
spans.forEach(span => {
  // Add class on hover
  span.addEventListener("mouseover", () => {
    span.classList.add("highlightSpan");
  });
  // Remove class when mouse leaves
  span.addEventListener("mouseout", () => {
    span.classList.remove("highlightSpan");
  });
});

// DROPDOWN MENU 
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropdownbutton')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

// SWITCH BUTTON 
darkModeButton.addEventListener("click", function () {
    if (body.classList.contains("dark-palette")) {
      body.classList.remove("dark-palette");
    } else {
      body.classList.add("dark-palette");
    }
   });

