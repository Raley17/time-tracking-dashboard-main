let activeTimeframe = "weekly";

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
    jsonData = data;
    updateCards(activeTimeframe);
  });

const navLinks = document.querySelectorAll("nav a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    activeTimeframe = link.textContent.trim().toLowerCase();
    updateCards(activeTimeframe);
  });
});
