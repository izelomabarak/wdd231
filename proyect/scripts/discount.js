const membersip = localStorage.getItem("membersip-ls");

if (membersip === "1") {
document.querySelector('#discount').innerHTML = `
<h2>Discount</h2>
<p class="contract">You membership is Member, thats guives you 0% o discount.</p>`;
} else if (membersip === "2") {
document.querySelector('#discount').innerHTML = `
<h2>Discount</h2>
<p class="contract">You membership is Special, thats guives you 20% of discount.</p>`; 
} else if (membersip === "3") {
document.querySelector('#discount').innerHTML = `
<h2>Discount</h2>
<p class="contract">You membership is Associated, thats guives you 60% of discount.</p>`; 
} else {
document.querySelector('#discount').innerHTML = `
<h2>Discount</h2>
<p class="contract">You membership is Business Associated, totaly free.</p>`;
}
