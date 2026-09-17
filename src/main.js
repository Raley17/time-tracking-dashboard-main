// We make the timeframe a string so we can change it easily
let activeTimeframe = "weekly";

// We make a var so the function can initialise its process while fetch does its work.
let jsonData = [];

function updateCards(timeframe) {
  jsonData.forEach((element) => {
    const card = document.querySelector(`[data-title="${element.title}"]`);
    const hour = card.querySelector(".hour");
    const previous = card.querySelector(".previous");
    hour.textContent = `${element.timeframes[timeframe].current}hrs`;
    previous.textContent = `Previous - ${element.timeframes[timeframe].previous}hrs`;
  });
}

fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    // Sustitute we give jsonData the value of the actual data.
    jsonData = data;
    updateCards(activeTimeframe);
  });

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    document.querySelector("nav a.focused").classList.remove("focused");
    link.classList.add("focused");
    activeTimeframe = link.textContent.trim().toLowerCase();
    updateCards(activeTimeframe);
  });
});
