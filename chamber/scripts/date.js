const year = document.querySelector("#year");

const today = new Date();

year.innerHTML = ` © <span class="highlight">${today.getFullYear()}</span> Puebla Trade Federation`;

const modified = document.querySelector("#modified");

let lastModified = new Date(document.lastModified);
const formattedDate = `${(lastModified.getMonth() + 1).toString().padStart(2, '0')}/${lastModified.getDate().toString().padStart(2, '0')}/${lastModified.getFullYear()} ${lastModified.getHours().toString().padStart(2, '0')}:${lastModified.getMinutes().toString().padStart(2, '0')}:${lastModified.getSeconds().toString().padStart(2, '0')}`;

modified.innerHTML = `Last Modification: <span class="highlight">${formattedDate}</span>`;
