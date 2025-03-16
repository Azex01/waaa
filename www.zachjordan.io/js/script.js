//var socket = io();
//io.connect('http://localhost:5000');

var socket = io.connect("http://localhost:5000");

var azexImage = document.getElementById("azex-image");
var clickCount = 0;
var lockImage = false;
var navPopulated = false;

checkScrollPosition();
$("#nav-on-scroll").addClass("nav-top-hidden");
$("#nav-on-scroll").removeClass("nav-top-visible");

function socketTest() {}

const currentUrl = window.location.href;
console.log(currentUrl);
if (currentUrl.toLowerCase().includes("?lovegame")) {
  console.log("REDIRECT");
  window.location.href = "lovegame.html";
}

$(window).scroll(function () {
  var scrollY = $(window).scrollTop();
  if (scrollY >= 200) {
    if (!navPopulated) {
      //Show NavBar on scroll
      $("#nav-on-scroll").removeClass("nav-top-hidden");
      $("#nav-on-scroll").addClass("nav-top-visible");
      navPopulated = true;
    }
  } else if (scrollY) {
    if (navPopulated) {
      console.log("Hide Nav");
      $("#nav-on-scroll").addClass("nav-top-hidden");
      $("#nav-on-scroll").removeClass("nav-top-visible");
      navPopulated = false;
    }
  }
});

function projectPaused() {
  swal(
    "This project is paused!",
    "This project is currently paused due to other priorities, but I have plans to bring it back, and likely will make it free to offer a nice collaboration tool to whoever wants it.",
    "info"
  );
}

function projectRetired() {
  swal(
    "This project is retired!",
    "Unfortunately, this project is no longer available. Don't worry, it may come back some day. In the meantime, why not check out some of my other projects?",
    "info"
  );
}

function socketTest() {
  console.log("SOCKET TEST");
  console.log(socket);
  socket.emit("remote-action", {
    socketActionType: "socketTestingAction",
    userPlatform: "mobile",
  });
}

function openMobileNav() {
  $("#mobile-nav").removeClass("offscreen-nav-hidden");
  document.body.style.overflow = "hidden";
}

function closeMobileNav() {
  $("#mobile-nav").addClass("offscreen-nav-hidden");
  document.body.style.overflow = "initial";
}

function checkScrollPosition() {
  var currentURL = window.location.href;
  currentURL = currentURL.split("#")[1];
  if (currentURL == "contact") {
    toggleContactMe("show");
  }

  var scrollY = $(window).scrollTop();
  if (scrollY >= 200) {
    if (!navPopulated) {
      //Show NavBar on scroll
      console.log("Populate nav!");
      $("#nav-on-scroll").removeClass("nav-top-hidden");
      $("#nav-on-scroll").addClass("nav-top-visible");
      navPopulated = true;
    }
  } else if (scrollY) {
    if (navPopulated) {
      console.log("Hide Nav");
      $("#nav-on-scroll").addClass("nav-top-hidden");
      $("#nav-on-scroll").removeClass("nav-top-visible");
      navPopulated = false;
    }
  }
}

function openContact() {
  closeMobileNav();
  toggleContactMe("show");
}

function toggleContactMe(action) {
  if (action == "show") {
    $("#contact-me-pane").removeClass("contact-me-inactive");
    $("#contact-me-pane").addClass("contact-me-active");
  } else if (action == "hide") {
    $("#contact-me-pane").addClass("contact-me-inactive");
    $("#contact-me-pane").removeClass("contact-me-active");
  }
}

function zachShades() {
  if (!lockImage) {
    azexImage.src = "img/zach-shades.png";
  }
}

function scrollToSection(section) {
  var elmnt = document.getElementById(section);
  elmnt.scrollIntoView();
  closeMobileNav();
}

function zachNormal() {
  if (!lockImage) {
    azexImage.src = "img/zach.png";
  }
}

function iterateClickCount() {
  clickCount++;
  if (clickCount == 1) {
    zachShades();
  }
  if (clickCount == 420) {
    azexImage.src = "img/zach-shades-stupid-secret.png";
    lockImage = true;
  }
}

function toggleDropdownNav() {
  const dropNav = document.getElementById("contact-dropdown-nav");
  dropNav.classList.toggle("hidden");
}

function toggleDropdownMain() {
  const dropMain = document.getElementById("contact-dropdown-main");
  dropMain.classList.toggle("hidden");
}

// Hide any open dropdown if user clicks outside
document.addEventListener("click", function (event) {
  const dropNav = document.getElementById("contact-dropdown-nav");
  const btnNav = document.getElementById("contact-button-nav");

  const dropMain = document.getElementById("contact-dropdown-main");
  const btnMain = document.getElementById("contact-button-main");

  // If Nav dropdown is open and click is outside of it + outside of its button => hide
  if (dropNav && !dropNav.classList.contains("hidden")) {
    if (!dropNav.contains(event.target) && !btnNav.contains(event.target)) {
      dropNav.classList.add("hidden");
    }
  }

  // If Main dropdown is open and click is outside => hide
  if (dropMain && !dropMain.classList.contains("hidden")) {
    if (!dropMain.contains(event.target) && !btnMain.contains(event.target)) {
      dropMain.classList.add("hidden");
    }
  }
});
