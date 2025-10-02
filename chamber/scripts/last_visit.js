
const visitsDisplayDates = document.querySelector(".visitsDates");

let lastVisit = localStorage.getItem("visitsDates-ls");

const msToDays = 86400000;

let daysbetewn = (Date.now() - lastVisit) / msToDays;

if (daysbetewn < msToDays) {
    visitsDisplayDates.textContent = `Back so soon! Awesome!`;
} else if (daysbetewn > msToDays && daysbetewn < (msToDays * 2)) {
    visitsDisplayDates.textContent = `You last visited 1 day ago.`;
} else if (daysbetewn > msToDays) {
    visitsDisplayDates.textContent = `You last visited ${daysbetewn} days ago.`;
} else {
    visitsDisplayDates.textContent = `Welcome! Let us know if you have any questions.`;
}

const now = Date.now();

localStorage.setItem("visitsDates-ls", now);

