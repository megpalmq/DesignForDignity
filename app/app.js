// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Window Resize Event
$(window).on("resize", function () {
  const width = $(window).width();
});

// Scroll Event
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Navigation Functions
function navigateToProject(projectId) {
  window.location.href = `./${projectId}.html`;
}

function changeRoute() {
  const hashTag = window.location.hash;
  let pageID = hashTag.replace("#", ""); // Change const to let

  if (pageID === "") {
    pageID = "home";
  }

  $.get(`assets/pages/${pageID}.html`, function (data) {
    $("#app").html(data);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }).fail(function () {
    console.log("Error loading page: " + pageID);
  });
}

// Initialize URL Listener
function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

// Initialize Listeners
function initListeners() {
  // Initialize URL listener
  initURLListener();

  // Initialize map
  if ($("#map").length > 0) {
    initMap();
  }

  // Initialize modal
  initModal();

  // Initialize slide show
  initSlideShow();

  // Initialize scroll animation
  initScrollAnimation();
}

// Map Initialization
function initMap() {
  const map = L.map("map").setView([39.8283, -98.5795], 4);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const locations = [
    { lat: 39.7684, lng: -86.158, popup: "Food Insecurity in Indianapolis" },
    { lat: 37.5665, lng: 126.978, popup: "Food Insecurity in Seoul, Korea" },
  ];

  locations.forEach((location) => {
    L.marker([location.lat, location.lng]).addTo(map).bindPopup(location.popup);
  });
}

// Modal Initialization
function initModal() {
  const modal = document.getElementById("modal");

  // Open modal
  function openModal() {
    modal.style.display = "block";
  }

  // Close modal
  function closeModal() {
    modal.style.display = "none";
  }

  // Optional: Close the modal when the user clicks outside of the modal content
  window.onclick = function (event) {
    if (event.target == modal) {
      closeModal();
    }
  };
}

// Slide Show Initialization
function initSlideShow() {
  let slideIndex = 1;

  // Function to display the current slide
  function currentSlide(n) {
    showSlides((slideIndex = n));
  }

  // Function to navigate through the slides
  function plusSlides(n) {
    showSlides((slideIndex += n));
  }

  // Function to show the slide corresponding to the current index
  function showSlides(n) {
    let slides = document
      .getElementsByClassName("slides")[0]
      .getElementsByTagName("img");

    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    // Show the current slide
    slides[slideIndex - 1].style.display = "block";
  }
}

// Scroll Animation Initialization
function initScrollAnimation() {
  // Add 'visible' class to all elements with 'scroll-animate' class
  function animateOnScroll() {
    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((element) => {
      if (isElementInViewport(element)) {
        element.classList.add("visible");
      }
    });
  }

  // Trigger the animation function on scroll
  window.addEventListener("scroll", animateOnScroll);

  // Check visibility of elements on page load
  function checkVisibility() {
    $(".group-photo3").each(function () {
      let elementTop = $(this).offset().top;
      let windowBottom = $(window).scrollTop() + $(window).height();

      if (elementTop < windowBottom - 100) {
        $(this).addClass("visible");
      }
    });
  }

  $(window).on("scroll", checkVisibility);
  checkVisibility();
}

// Helper Function: Check if an element is in viewport
function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Initialize Listeners on Document Ready
$(document).ready(function () {
  initListeners();
  $(window).on("hashchange", changeRoute);
});
