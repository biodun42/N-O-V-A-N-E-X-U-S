let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

searchBtn.addEventListener("click", () => {
  // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}

// Add this to your script.js file
const home = document.getElementById("home");
const transaction = document.getElementById("transaction");

function transactionPage() {
  transaction.style.display = "block";
  home.classList.add("inactive");
  transaction.classList.add("inactive");
  setTimeout(() => {
    home.classList.add("active");
    home.classList.remove("inactive");
    transaction.classList.remove("active");
    transaction.classList.remove("inactive");
  }, 500); // Adjust the delay time as needed
}

function homePage() {
  transaction.style.display = "none";
  home.classList.add("inactive");
  transaction.classList.add("inactive");
  setTimeout(() => {
    home.classList.remove("active");
    home.classList.remove("inactive");
    transaction.classList.add("active");
    transaction.classList.remove("inactive");
  }, 500); // Adjust the delay time as needed
}

const tableOne = document.querySelector(".table-one");
const tableTwo = document.querySelector(".table-two");
const tableThree = document.querySelector(".table-three");
const tableFour = document.querySelector(".table-four");

let one = true, two = false, three = false, four = false;

function showTableOne() {
  tableOne.classList.remove("active");
  tableTwo.classList.remove("active");
  tableThree.classList.remove("active");
  tableFour.classList.remove("active");
  one = true; two = false; three = false; four = false;
}

function showTableTwo() {
  tableOne.classList.add("active");
  tableTwo.classList.add("active");
  tableThree.classList.remove("active");
  tableFour.classList.remove("active");
  one = false; two = true; three = false; four = false;
}

function showTableThree() {
  tableOne.classList.add("active");
  tableTwo.classList.remove("active");
  tableThree.classList.add("active");
  tableFour.classList.remove("active");
  one = false; two = false; three = true; four = false;
}

function showTableFour() {
  tableOne.classList.add("active");
  tableTwo.classList.remove("active");
  tableThree.classList.remove("active");
  tableFour.classList.add("active");
  one = false; two = false; three = false; four = true;
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
const hamMenu = document.querySelector(".hamburger-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const container = document.querySelector("body");
const hamBars = document.querySelectorAll(".hambar");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  container.classList.toggle("active");
  hamBars.forEach((bar) => {
    bar.classList.toggle("active");
  }
  );
});

const navs = document.querySelectorAll(".nav");
navs.forEach((nav) => {
  nav.addEventListener("click", function () {
    hamMenu.classList.remove("active");
    offScreenMenu.classList.remove("active");
  });
});
