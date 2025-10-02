import { places } from "../data/places_data.mjs";
console.log(places);

const cards = document.querySelector('#allplaces');

const displayEnterpriseCart = (places) => {
  cards.classList.toggle('place');
  document.querySelector("#allplaces").innerHTML = "";
  places.forEach((place) => {
    
    let card = document.createElement('div');
    let title = document.createElement('h2');
    let address = document.createElement('address');
    let description = document.createElement('p');
    let button = document.createElement('button');
    let portrait = document.createElement('figure');
    let image = document.createElement('img');

    title.textContent = place.name
    address.textContent = `Address: ${place.address}`;
    description.textContent = `Description: ${place.description}`
    button.textContent = `Learn More`;
    
    image.setAttribute('src', place.image);
    image.setAttribute('alt', `Portrait of ${place.name}`); 
    image.setAttribute('loading', 'lazy');
    image.setAttribute('class', 'hover')
    portrait.appendChild(image);

    card.appendChild(title);
    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(description); 
    card.appendChild(button); 
    card.classList.toggle('oneCard')

    cards.appendChild(card);
  });
}
displayEnterpriseCart(places);