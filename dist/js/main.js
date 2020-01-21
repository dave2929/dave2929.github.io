// Select DOM Items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
const btnLines = document.querySelectorAll(".btn-line");
const navLinks = document.querySelectorAll(".nav-link");

// Set intial state of menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach(item => item.classList.add("show"));

    // Set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach(item => item.classList.remove("show"));

    // Set menu state
    showMenu = false;
  }
}

// Select DOM Items
const colorSelector = document.querySelector(".color");
const divBgimg = document.querySelector("#bg-img");
const smHeading = document.querySelector(".sm-heading");
const jobs = document.querySelectorAll(".job");
const workPage = document.querySelector("#work");
const workBody = document.querySelector("#body-work");
const aboutBody = document.querySelector("#body-about");
const contactBody = document.querySelector("#body-contact");
const contacts = document.querySelectorAll(".contact-box");

let color = true;

// Store local color
colorSelector.addEventListener("click", toggleColor);

function toggleColor() {
  if (color) {
    color = false;
    localStorage.setItem("dark-theme-enabled", false);
    changeTheme();
    // alert("0");
  } else {
    color = true;
    localStorage.setItem("dark-theme-enabled", true);
    changeTheme();
    // alert("1");
  }
}

changeTheme();
function changeTheme() {
  if (localStorage.getItem("dark-theme-enabled") == "false") {
    if (divBgimg !== null) {
      colorSelector.classList.add("light");
      divBgimg.classList.add("light");
      smHeading.classList.add("light");
      btnLines.forEach(item => item.classList.add("light"));
      menuNav.classList.add("light");
      menuBranding.classList.add("light");
      navLinks.forEach(item => item.classList.add("light"));
    }
    if (aboutBody !== null) {
      jobs.forEach(item => item.classList.add("light"));
      aboutBody.classList.add("light");
      btnLines.forEach(item => item.classList.add("light"));
      menuNav.classList.add("light");
      menuBranding.classList.add("light");
      navLinks.forEach(item => item.classList.add("light"));
    }

    if (workBody !== null) {
      workPage.classList.add("light");
      workBody.classList.add("light");
      smHeading.classList.add("light");
      btnLines.forEach(item => item.classList.add("light"));
      menuNav.classList.add("light");
      menuBranding.classList.add("light");
      navLinks.forEach(item => item.classList.add("light"));
    }

    if (contactBody !== null) {
      contactBody.classList.add("light");
      contacts.forEach(item => item.classList.add("light"));
      btnLines.forEach(item => item.classList.add("light"));
      menuNav.classList.add("light");
      menuBranding.classList.add("light");
      navLinks.forEach(item => item.classList.add("light"));
    }
    // alert("2");
  } else {
    if (divBgimg !== null) {
      colorSelector.classList.remove("light");
      divBgimg.classList.remove("light");
      smHeading.classList.remove("light");
      btnLines.forEach(item => item.classList.remove("light"));
      menuNav.classList.remove("light");
      menuBranding.classList.remove("light");
      navLinks.forEach(item => item.classList.remove("light"));
    }
    if (aboutBody !== null) {
      jobs.forEach(item => item.classList.remove("light"));
      aboutBody.classList.remove("light");
      btnLines.forEach(item => item.classList.remove("light"));
      menuNav.classList.remove("light");
      menuBranding.classList.remove("light");
      navLinks.forEach(item => item.classList.remove("light"));
    }
    if (workBody !== null) {
      workPage.classList.remove("light");
      workBody.classList.remove("light");
      smHeading.classList.remove("light");
      btnLines.forEach(item => item.classList.remove("light"));
      menuNav.classList.remove("light");
      menuBranding.classList.remove("light");
      navLinks.forEach(item => item.classList.remove("light"));
    }

    if (contactBody !== null) {
      contactBody.classList.remove("light");
      contacts.forEach(item => item.classList.remove("light"));
      btnLines.forEach(item => item.classList.remove("light"));
      menuNav.classList.remove("light");
      menuBranding.classList.remove("light");
      navLinks.forEach(item => item.classList.remove("light"));
    }
    // alert("3");
  }
}
