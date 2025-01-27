// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");
let width = $(window).width();

// Handle mousemove event
$(window).on("mousemove", function (e) {
  let normalizedPosition = e.pageX / (width / 2) - 1;
  let speedSlow = 100 * normalizedPosition;
  let speedFast = 200 * normalizedPosition;

  $(".spanSlow").each(function () {
    $(this).css("transform", `translate(${speedSlow}px)`);
  });

  $(".spanFast").each(function () {
    $(this).css("transform", `translate(${speedFast}px)`);
  });
});

// Recalculate width on window resize
$(window).on("resize", function () {
  width = $(window).width();
});

mobileMenu.addEventListener("click", () => {
  console.log("Mobile menu clicked");
  navLinks.classList.toggle("open");
});

window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 10) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

function navigateToProject(projectId) {
  // Redirect to the corresponding project page
  window.location.href = `./${projectId}.html`;
}

function initListeners() {
  // Event listeners for project cards
  $("#project1").click(function () {
    showProjectDetails("project1");
  });

  $("#project2").click(function () {
    showProjectDetails("project2");
  });
  $("#project3").click(function () {
    showProjectDetails("project3");
  });
  $("#project4").click(function () {
    showProjectDetails("project4");
  });
  $("#project5").click(function () {
    showProjectDetails("project5");
  });
  $("#project6").click(function () {
    showProjectDetails("project6");
  });
  $("#project7").click(function () {
    showProjectDetails("project7");
  });
  $("#project8").click(function () {
    showProjectDetails("project8");
  });
}

$(document).ready(function () {
  initListeners();
});

function changeRoute() {
  let hashTag = window.location.hash;
  let pageID = hashTag.replace("#", "");

  // Default to 'home' if no hash is set
  if (pageID === "") {
    pageID = "home";
  }

  // Dynamically load the page using the pageID
  $.get(`assets/pages/${pageID}.html`, function (data) {
    console.log("Data loaded: ");
    $("#app").html(data);

    window.scrollTo({ top: 0, behavior: "smooth" });
  }).fail(function () {
    console.log("Error loading page: " + pageID);
  });
}

function initURLListener() {
  $(window).on("hashchange", changeRoute);
  changeRoute();
}

$(document).ready(function () {
  initURLListener();
  changeRoute();
});
$(window).on("hashchange", changeRoute);
if ($("#map").length > 0) {
  // Initialize the map
  const map = L.map("map").setView([39.8283, -98.5795], 4); // Default center in USA

  // Add tile layer (OpenStreetMap in this case)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  const locations = [
    { lat: 39.7684, lng: -86.158, popup: "Food Insecurity in Indianapolis" },
    { lat: 37.5665, lng: 126.978, popup: "Food Insecurity in Seoul, Korea" },
  ];

  // Loop through the locations and add markers to the map
  locations.forEach((location) => {
    L.marker([location.lat, location.lng]).addTo(map).bindPopup(location.popup);
  });
} else {
  console.log("Map container not found.");
}
let slideIndex = 1;

// Function to open the modal
function openModal() {
  document.getElementById("modal").style.display = "block";
}

// Function to close the modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}

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

// Optional: Close the modal when the user clicks outside of the modal content
window.onclick = function (event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    closeModal();
  }
};
$(window).on("scroll", function () {
  $(".scroll-animate").each(function () {
    let elementTop = $(this).offset().top;
    let windowBottom = $(window).scrollTop() + $(window).height() * 0.8;

    if (elementTop < windowBottom) {
      $(this).addClass("animate");
    } else {
      $(this).removeClass("animate"); // Optional for re-triggering
    }
  });
});
