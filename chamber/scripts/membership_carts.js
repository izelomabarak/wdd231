import { temples } from "../data/membership_data.mjs";
console.log(temples);


const showHere = document.querySelector("#showHere");
const mycarts = document.querySelector("#membershipCarts");
const mytitle = document.querySelector("#membershipCarts h2");
const myclose = document.querySelector("#membershipCarts button");
const myinfo = document.querySelector("#membershipCarts p");

myclose.addEventListener("click", () => mycarts.close());

function displayItems(data){
    console.log(data);
    data.forEach(x => {
        console.log(x);
        const membershipCart = document.createElement('article');
        const membershipLevel = document.createElement('h3');
        membershipLevel.innerHTML = x.name;
        const openButton = document.createElement('button');
        openButton.innerHTML = `Learn More`;
        membershipCart.appendChild(membershipLevel);
        membershipCart.appendChild(openButton);
        showHere.appendChild(membershipCart);
        openButton.addEventListener("click", () => showStuff(x));
    })
};

function showStuff(x) {
    mytitle.innerHTML = x.name;
    myinfo.innerHTML = `Number ${x.number} cost ${x.costs}$ benefits: ${x.benefits}.`;
    mycarts.showModal();
}
displayItems(temples);