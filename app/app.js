// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

// Window Resize Event
$(window).on("resize", function () {
  const width = $(window).width();
});
mobileMenu.addEventListener("click", () => {
  console.log("Mobile menu clicked");
  navLinks.classList.toggle("open");
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
  let pageID = hashTag.replace("#", "");

  if (pageID === "") {
    pageID = "home";
  }

  $.get(`assets/pages/${pageID}.html`, function (data) {
    $("#app").html(data);

    // Wait for DOM update, then scroll to #projects if it exists
    setTimeout(() => {
      const projectsSection = document.getElementById("projects");
      const aboutSection = document.getElementById("about");
      const homePage = document.getElementById("home");
      const proj1 = document.getElementById("project1");
      const proj2 = document.getElementById("project2");
      const proj3 = document.getElementById("project3");
      const proj4 = document.getElementById("project4");
      const proj5 = document.getElementById("project5");
      const proj6 = document.getElementById("project6");
      const proj7 = document.getElementById("project7");
      const proj8 = document.getElementById("project8");
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
      }
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: "smooth" });
      }
      if (homePage) {
        homePage.scrollIntoView({ behavior: "smooth" });
      }
      if (proj1) {
        proj1.scrollIntoView({ behavior: "smooth" });
      }
      if (proj2) {
        proj2.scrollIntoView({ behavior: "smooth" });
      }
      if (proj3) {
        proj3.scrollIntoView({ behavior: "smooth" });
      }
      if (proj4) {
        proj4.scrollIntoView({ behavior: "smooth" });
      }
      if (proj5) {
        proj5.scrollIntoView({ behavior: "smooth" });
      }
      if (proj6) {
        proj6.scrollIntoView({ behavior: "smooth" });
      }
      if (proj7) {
        proj7.scrollIntoView({ behavior: "smooth" });
      }
      if (proj8) {
        proj8.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Short delay to ensure content is loaded
  }).fail(function () {
    console.log("Error loading page: " + pageID);
  });
}

// Initialize URL Listener
function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

function initListeners() {
  initURLListener();

  if ($("#map").length > 0) {
    initMap();
  }

  initModal();

  initSlideShow();

  initScrollAnimation();
}

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

let slideIndex = 1;
function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let slides = document
    .getElementsByClassName("slides")[0]
    .getElementsByTagName("img");

  // Wrap around the slide index if it's out of bounds
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

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target === modal) {
    closeModal();
  }
};

// Optional: Check if an element is in the viewport
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

// Initialize the modal and slideshow
function initModal() {
  const modal = document.getElementById("modal");
  openModal(); // You can also call this when needed to open the modal
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
