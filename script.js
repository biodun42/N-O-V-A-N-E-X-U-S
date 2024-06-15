let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
const hamMenu = document.querySelector(".hamburger-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const container = document.querySelector("body");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

searchBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange();
});

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}

const tableOne = document.querySelector(".table-one");
const tableTwo = document.querySelector(".table-two");
const tableThree = document.querySelector(".table-three");
const tableFour = document.querySelector(".table-four");

let one = true,
  two = false,
  three = false,
  four = false;

function showTableOne() {
  tableOne.classList.remove("active");
  tableTwo.classList.remove("active");
  tableThree.classList.remove("active");
  tableFour.classList.remove("active");
  one = true;
  two = false;
  three = false;
  four = false;
}

function showTableTwo() {
  tableOne.classList.add("active");
  tableTwo.classList.add("active");
  tableThree.classList.remove("active");
  tableFour.classList.remove("active");
  one = false;
  two = true;
  three = false;
  four = false;
}

function showTableThree() {
  tableOne.classList.add("active");
  tableTwo.classList.remove("active");
  tableThree.classList.add("active");
  tableFour.classList.remove("active");
  one = false;
  two = false;
  three = true;
  four = false;
}

function showTableFour() {
  tableOne.classList.add("active");
  tableTwo.classList.remove("active");
  tableThree.classList.remove("active");
  tableFour.classList.add("active");
  one = false;
  two = false;
  three = false;
  four = true;
}

function prev() {
  if (one) {
    showTableFour();
  } else if (two) {
    showTableOne();
  } else if (three) {
    showTableTwo();
  } else if (four) {
    showTableThree();
  }
}

function next() {
  if (one) {
    showTableTwo();
  } else if (two) {
    showTableThree();
  } else if (three) {
    showTableFour();
  } else if (four) {
    showTableOne();
  }
}
// The Hambuger Menu

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  container.classList.toggle("active");
});

const navs = document.querySelectorAll(".nav");
navs.forEach((nav) => {
  nav.addEventListener("click", function () {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
    container.classList.add("active");
  });
});

const home = document.querySelector(".one");
const transaction = document.querySelector(".two");

home.addEventListener("click", () => {
  window.location.href = "index.html";
});

transaction.addEventListener("click", () => {
  window.location.href = "transaction.html";
});
