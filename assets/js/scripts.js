const navBar = document.getElementById("nav");
const navBarHeight = navBar.scrollHeight;

window.onscroll = function (e) {
  if (window.scrollY > 120) {
    navBar.classList.add("nav-fixed");
  } else {
    navBar.classList.remove("nav-fixed");
  }
};

const mobileHamburger = document.getElementById("js-openMenu");
const closeMenu = document.getElementById("js-closeMenu");
const mobileMenu = document.getElementById("js-menu");
const menuItems = document.querySelectorAll(".menu-link, .menu-button");

mobileHamburger.addEventListener("click", function () {
  mobileMenu.classList.add("right-0");
});
closeMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("right-0");
});
menuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    mobileMenu.classList.remove("right-0");
  });
});

//current year
let currentDate = new Date().toJSON().slice(0,4);


document.getElementById('year').textContent = currentDate;

// initialize Leaflet
var map = L.map("map", {
  center: [52.2345, 21.0162],
  zoom: 16,
  fadeAnimation: true,
  markerZoomAnimation: true,
});

// add the OpenStreetMap tiles
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>',
}).addTo(map);

// show the scale bar on the lower left corner
L.control.scale({ imperial: true, metric: true }).addTo(map);

// show a marker on the map
L.marker({ lon: 20.46025, lat: 50.88531 })
  .bindPopup("FD Projekt - Częstochowska 89, Piekoszów")
  .addTo(map);
