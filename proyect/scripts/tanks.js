const myInfo = new URLSearchParams(window.location.search)
console.log(myInfo);

const levelMembership = myInfo.get('level');

if (levelMembership === "1") {
document.querySelector('#results').innerHTML = `
<p>Tanks ${myInfo.get('name')}, now you are part of the membership of Member in Greenhouses Gidance Group, thats guives you the posibility of contract ours specialist and go to our charms and events.</p>
<span>You Join at ${myInfo.get('timestamp')}</span>`;
let membersip = 1;
localStorage.setItem("membersip-ls", membersip);
} else if (levelMembership === "2") {
document.querySelector('#results').innerHTML = `
<p>Tanks ${myInfo.get('name')}, now you are part of the membership of Special in Greenhouses Gidance Group, thats guives you the posibility of contract ours specialist and go to our charms and events whit a 20% of discount.</p>
<span>You Join at ${myInfo.get('timestamp')}</span>`; 
let membersip = 2;
localStorage.setItem("membersip-ls", membersip);
} else if (levelMembership === "3") {
document.querySelector('#results').innerHTML = `
<p>Tanks ${myInfo.get('name')}, now you are part of the membership of Associated in Greenhouses Gidance Group, thats guives you the posibility of contract ours specialist and go to our charms and events whit a 60% of discount.</p>
<span>You Join at ${myInfo.get('timestamp')}</span>`; 
let membersip = 3;
localStorage.setItem("membersip-ls", membersip);
} else if (levelMembership === "4") {
document.querySelector('#results').innerHTML = `
<p>Tanks ${myInfo.get('name')}, now you are part of the membership of Business Associated in Greenhouses Gidance Group, thats guives you the posibility of contract ours specialist and go to our charms and events totaly free.</p>
<span>You Join at ${myInfo.get('timestamp')}</span>`; 
let membersip = 4;
localStorage.setItem("membersip-ls", membersip);
} else {
document.querySelector('#results').innerHTML = `
<p>You membership was canceled.</p>
<span>You left at ${myInfo.get('timestamp')}</span>`;
let membersip = 0;
localStorage.setItem("membersip-ls", membersip);
}
