
const visitsDisplayDates = document.querySelector(".visitsDates");

let lastVisit = Number(localStorage.getItem("visitsDates-ls"));

const msToDays = 86400000;

let daysbetewn = (Date.now() - lastVisit) / msToDays;

let mesage = `Welcome! Let us know if you have any questions.`;

if (daysbetewn < 1) {
    mesage = `Back so soon! Awesome!`;
} else if (daysbetewn > 1 && daysbetewn < 2) {
    mesage = `You last visited 1 day ago.`;
} else {
    mesage = `You last visited ${Math.floor(daysbetewn)} days ago.`;
}

visitsDisplayDates.textContent = mesage;


const now = Date.now();

localStorage.setItem("visitsDates-ls", now);

