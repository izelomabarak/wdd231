
const showHere = document.querySelectorAll(".show");
const mycarts = document.querySelectorAll(".membershipWarning");
const mytitle = document.querySelectorAll(".membershipWarning h2");
const myclose = document.querySelectorAll(".membershipWarning button");
const myinfo = document.querySelectorAll(".membershipWarning p");

myclose.addEventListener("click", () => mycarts.close());

function displayItems(){
  const membershipCart = document.createElement('article');
  const openButton = document.createElement('button');
  openButton.innerHTML = `Contract`;
  membershipCart.appendChild(openButton);
  showHere.appendChild(membershipCart);
  openButton.addEventListener("click", () => showStuff());
};

function showStuff() {
    mytitle.innerHTML = 'You dont have a Membership';
    myinfo.innerHTML = `For Contract our Specialists you need a Membership.`;
    mycarts.showModal();
}

displayItems();