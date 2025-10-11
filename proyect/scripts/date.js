const year = document.querySelector("#year");
const timestamp = document.querySelector("#timestamp");

const today = new Date();

year.innerHTML = ` © <span class="highlight">${today.getFullYear()}</span> Greenhouses Gidance Group`;
