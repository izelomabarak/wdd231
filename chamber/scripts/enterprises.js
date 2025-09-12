const url = 'information.json';
const cards = document.querySelector('#cards');
async function getEnterpriseDataCart() {
  const response = await fetch(url);
  const data = await response.json();
  displayEnterpriseCart(data.enterprises);
}

async function getEnterpriseDataList() {
  const response = await fetch(url);
  const data = await response.json();
  displayEnterpriseList(data.enterprises);
}

const displayEnterpriseCart = (enterprises) => {
  cards.classList.toggle('card');
  document.querySelector("#cards").innerHTML = "";
  enterprises.forEach((enterprise) => {
    
    let card = document.createElement('section');
    let names = document.createElement('h2');
    let portrait = document.createElement('img');
    let addresses = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let membership = document.createElement('p');
    let especiality = document.createElement('p');
    let information = document.createElement('section');

    names.textContent = enterprise.name
    phone.textContent = `Phone: ${enterprise.phone}`;
    addresses.textContent = `Addres: ${enterprise.addresses}`;
    website.textContent = `See his Wepsite`;
    website.setAttribute('href', enterprise.website);
    website.classList.toggle('website')
    membership.textContent = `Membership: ${enterprise.membership}`;
    especiality.textContent = `Especiality: ${enterprise.especiality}`;
    
    portrait.setAttribute('src', enterprise.imageurl);
    portrait.setAttribute('alt', `Portrait of ${enterprise.name}`); 
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute("width", "200"); 
    portrait.setAttribute("height", "150");

    information.appendChild(phone);
    information.appendChild(addresses);
    information.appendChild(especiality);
    information.appendChild(membership);
    information.classList.toggle('information')

    card.appendChild(names);
    card.appendChild(portrait);
    card.appendChild(information);    
    card.appendChild(website);
    card.classList.toggle('oneCard')

    cards.appendChild(card);
  });
}

const displayEnterpriseList = (enterprises) => {
  cards.classList.toggle('list');
  document.querySelector("#cards").innerHTML = "";
  enterprises.forEach((enterprise) => {
    
    let lists = document.createElement('section');
    let names = document.createElement('h4');
    let addresses = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');
    let membership = document.createElement('p');
    let especiality = document.createElement('p');
    let contact = document.createElement('section');
    let others = document.createElement('section');

    names.textContent = enterprise.name
    phone.textContent = `Phone: ${enterprise.phone}`;
    addresses.textContent = `Addres: ${enterprise.addresses}`;
    website.textContent = `See his Wepsite`;
    website.setAttribute('href', enterprise.website);
    website.classList.toggle('website')
    membership.textContent = `Membership: ${enterprise.membership}`;
    especiality.textContent = `Especiality: ${enterprise.especiality}`;

    contact.appendChild(phone);
    contact.appendChild(website);
    contact.classList.toggle('contact')

    others.appendChild(especiality);
    others.appendChild(membership);
    others.classList.toggle('others')

    lists.appendChild(names);
    lists.appendChild(addresses);
    lists.appendChild(others);
    lists.appendChild(contact);
    lists.classList.toggle('lists')
    
    cards.appendChild(lists);
  });
}
const grid = document.querySelector('#grid');
const list = document.querySelector('#list');

grid.addEventListener("click", () => {
  cards.classList.remove('card');
  cards.classList.remove('list');
  getEnterpriseDataCart();
});

list.addEventListener("click", () => {
  cards.classList.remove('card');
  cards.classList.remove('list');
  getEnterpriseDataList();
});
getEnterpriseDataCart();