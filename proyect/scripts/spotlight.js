const url = 'data/information.json';
const spotlights = document.querySelector('#spotlights');

async function getEnterpriseDataCart() {
  const response = await fetch(url);
  const data = await response.json();
  displayEnterpriseCart(data.especialists);
}
        function pickUnique0to3() {
        if (!pickUnique0to3.pool) {
            pickUnique0to3.pool = [0,1,2,3];
        }
        if (pickUnique0to3.pool.length === 0) {
            return null;
        }
        const i = Math.floor(Math.random() * pickUnique0to3.pool.length);
        return pickUnique0to3.pool.splice(i, 1)[0];
        }

 async function displayEnterpriseCart(especialists) {
  let i = 0;
  while(i < 3) { 
        console.log(especialists);
        i++;
        let numberSelected = pickUnique0to3();

        let card = document.createElement('section');
        let names = document.createElement('h2');
        let phone = document.createElement('p');
        let especialty = document.createElement('p');
        let portrait = document.createElement('img');

        portrait.setAttribute('src', especialists[numberSelected].img);
        portrait.setAttribute('alt', `Portrait of ${especialists[numberSelected].name}`); 
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute("width", "200"); 
        portrait.setAttribute("height", "150");

        names.textContent = especialists[numberSelected].name;
        phone.textContent = `Phone: ${especialists[numberSelected].phone}`;
        especialty.textContent = `Specialty: ${especialists[numberSelected].especialty}`;

        card.appendChild(names);
        card.appendChild(portrait);
        card.appendChild(phone);
        card.appendChild(especialty);
        card.classList.toggle('oneCard');

        spotlights.appendChild(card);
  }
}

getEnterpriseDataCart();