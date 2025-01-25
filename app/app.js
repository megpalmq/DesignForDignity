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

// Project Data
const projectData = {
  project1: {
    title: "Team 1",
    members:
      "Group Members: Justin Bortone, Katharine Brunette, Gabriella Garcia,Brian Padgett, Teresa Ralston, Camella Nicole Casinelli, Na Yeon Kim",
    description:
      "Food Access in Indianapolis & through the Boner Center for the elderly/ Songdo or Seoul largely. Indy Hunger Network work to ensure that anyone in need, including seniors, has access to nutritious food Indy Hunger Network. The Equitable Food Access Initiative EFAI Website Elderly individuals face difficult choices Map the Meal Gap.",
    projectType: "Infographic Poster",
    image: "assets/images/project1.jpg",
    behance: `<div id="project-behance">
              <button>
                <a
                  href="https://www.behance.net/gallery/213076287/Yonsei-x-Herron"
                  >Design Info</a
                >
              </button>`,
  },
  project2: {
    title: "Team 2",
    members:
      "Group Members: Sydnie Barrett, Merce' Burney, Zoe Law, Hayden Coles,Logan Montoya, Ogla Glebova, Chaeeun Kim ",
    description:
      "Focused on food nutrition, diet/amount for the day–What makes up a balanced diet for the elderly? Highlight the specific nutritional needs of seniors (high-fiber foods, lean proteins, healthy fats, and calcium-rich options to support bone health. Include daily recommended intake of essential vitamins and minerals. Educate on portion control and adjusting caloric intake to meet lower activity levels (balanced diet)",
    projectType: "Brochure",
    image: "assets/images/project2.jpg",
    behance: "Full Project Behance/ Portofolio Link: #",
  },
  project3: {
    title: "Team 3",
    members:
      "Group Members: Megan Palmquist, Mira Render, Trevion Slack, Annika Solis, Parker Thomason, Xuan Xin Neo, Jeana Lee ",
    description:
      "Impact of Diet on Blood Pressure and Cardiovascular Health/How does blood pressure relate to diet? Importance of a heart-healthy diet; low-sodium foods and how they help manage hypertension, a common issue among seniors. DASH Diet (Dietary Approaches to Stop Hypertension), rich in fruits, vegetables, whole grains, and low-fat dairy, and its blood pressure benefits foods to avoid (processed snacks high in sodium, and alternatives (herbs)",
    projectType: "Infographic Poster",
    image: "assets/images/realworldimage.jpg",
    behance: "https://www.behance.net/gallery/213076287/Yonsei-x-Herron",
  },
  project4: {
    title: "Team 4",
    members:
      "Group Members: Gwen Canfield, Nicholas Gilbert, Isabella Parrales, Shyann Raser, Ella Teipen, Jhanayree Romero, Dabeen Jung ",
    description:
      "Meal Planning for Seniors with Chronic Conditions. Offer advice on how to adapt meals for common elderly health conditions such as diabetes, arthritis, or digestive issues like acid reflux or constipation. Include diabetes-friendly meal options (low in refined sugars and high in fiber) and joint-supporting nutrients like omega-3 fatty acids.",
    projectType: "Brochure",
    image: "assets/images/project2.jpg",
    behance: "Full Project Behance/ Portofolio Link: #",
  },
  project5: {
    title: "Team 5",
    members:
      "Group Members: Janeal Dade, Charlie Krause, Jansing Lunato, Marin McCoy, William Spink, Um Sohyun, Douaa Mir",
    description:
      "Importance of Hydration for the Elderly. Raise awareness about the risk of dehydration among older adults, who often experience reduced thirst sensation.Include daily water intake recommendations and tips on staying hydrated, such as eating water-rich foods like cucumbers, melons, and soups. ",
    projectType: "Brochure",
    image: "assets/images/project2.jpg",
    behance: "Full Project Behance/ Portofolio Link: #",
  },
  project6: {
    title: "Team 6",
    members:
      "Group Members: Maci Bennett, Cole Robinson, Tyler Schmadeke, Ryann Smith, Leilani Turner, Rachel Seng, Rafaella Flavia Velasquez Lau",
    description:
      "Exercise and Food Synergy: Connection between physical activity and nutrition; how regular exercise helps the elderly maintain muscle mass and energy levels when paired with proper diet. Create a section on simple exercises that can be done at home or outdoors, paired with suggestions on post-exercise recovery meals to support mobility and strength. ",
    projectType: "Infographic Poster",
    image: "assets/images/project2.jpg",
    behance: "Full Project Behance/ Portofolio Link: #",
  },
  project7: {
    title: "Team 7",
    members:
      "Group Members: Courtney Davis, Daniel Johnson, Riya Patel, Sierra Pruneski,Ariana Katarina Shahinfar, Aruzhan Zhaugashty",
    description:
      "Understanding Food Insecurity and Mental Health in the Elderly: Emotional and psychological impact of food insecurity on seniors. Lack of consistent access to nutritious food can contribute to anxiety, depression, and feelings of isolation. Link mental health and nutrition, showing how eating well can improve mood and cognitive function, and the consequences of poor nutrition on mental health. ",
    projectType: "Infographic Poster",
    image: "assets/images/project2.jpg",
    behance: "Full Project Behance/ Portofolio Link: #",
  },
  project8: {
    title: "Team 8",
    members:
      "Group Members: Ayaan Alam, Neferti Huynh, Dylan Jewell, Jay Macek, Scharlot Schepers, Huiseung Noh",
    description:
      "The Role of Fiber in Senior Health: Need fiber for digestive health, especially in preventing constipation, which is common among older adults.Fiber-rich foods: Whole grains, beans, fruits, and vegetables. Benefits: Improved digestion, weight management, and reduced risk of chronic diseases. American Heart Association (for heart and digestive health). Map the Meal Gap or Meals on Wheels meal plans",
    projectType: "Infographic Poster",
    image: "assets/images/project2.jpg",
    behance: "Full Project Behance/ Portofolio Link: #",
  },
};
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
