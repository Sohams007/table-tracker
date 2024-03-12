// add hovered class to selected list item
let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach((item) => {
    item.classList.remove("hovered");
  });
  this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
};

// JavaScript code to toggle the cards
document.addEventListener("DOMContentLoaded", function() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(function(card, index) {
      // Check if the card's state is stored in localStorage
      const isActive = localStorage.getItem(`card${index}`) === 'active';
      // Set the initial state based on localStorage
      if (isActive) {
          card.classList.add("active");
      }
      card.addEventListener("click", function() {
          this.classList.toggle("active");
          // Update the state in localStorage
          if (this.classList.contains("active")) {
              localStorage.setItem(`card${index}`, 'active');
          } else {
              localStorage.removeItem(`card${index}`);
          }
      });
  });
});


