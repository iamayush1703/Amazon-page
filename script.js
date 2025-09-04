const searchBtn = document.querySelector(".search-icon");
const searchInput = document.querySelector(".search-input");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  if(query) {
    alert("You searched for: " + query);
  } else {
    alert("Please enter something to search!");
  }
});

// --- Cart functionality ---
const cartBtn = document.querySelector(".nav-cart");
let cartCount = 0;

cartBtn.addEventListener("click", () => {
  cartCount++;
  alert("🛒 Item added to cart! Total items: " + cartCount);
});

// --- "See more" links ---
const seeMoreLinks = document.querySelectorAll(".box-content p a, .box-content p");

seeMoreLinks.forEach(link => {
  link.addEventListener("click", () => {
    alert("More details coming soon for: " + link.closest(".box-content").querySelector("h2").innerText);
  });
  });

// --- Back to top ---
const backToTop = document.querySelector(".foot-panel1 a");
backToTop.addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: "smooth" });
});