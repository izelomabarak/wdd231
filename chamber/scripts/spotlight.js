const url = 'data/information.json';
const spotlights = document.querySelector('#spotlights');

async function getEnterpriseDataCart() {
  const response = await fetch(url);
  const data = await response.json();
  displayEnterpriseCart(data.enterprises.filter(m => Number(m.membership) >= 2));
}

        function pickUnique0to3() {
        // Initialize pool once
        if (!pickUnique0to3.pool) {
            pickUnique0to3.pool = [0,1,2,3];
        }
        if (pickUnique0to3.pool.length === 0) {
            return null; // no more unique numbers available
        }
        // Pick a random index from the remaining pool
        const i = Math.floor(Math.random() * pickUnique0to3.pool.length);
        // Remove and return the chosen value (ensures no repetition)
        return pickUnique0to3.pool.splice(i, 1)[0];
        }

 async function displayEnterpriseCart(enterprises) {
  let i = 0;
  while(i < 3) { 
        // enterprises.((enterprise) => {
        console.log(enterprises);
        i++;
        let numberSelected = pickUnique0to3();

        let card = document.createElement('section');
        let names = document.createElement('h2');
        let portrait = document.createElement('img');
        let addresses = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let membership = document.createElement('p');
        let information = document.createElement('section');

        names.textContent = enterprises[numberSelected].name;
        phone.textContent = `Phone: ${enterprises[numberSelected].phone}`;
        addresses.textContent = `Addres: ${enterprises[numberSelected].addresses}`;
        website.textContent = `See his Wepsite`;
        website.setAttribute('href', enterprises[numberSelected].website);
        website.classList.toggle('website');
        membership.textContent = `Membership: ${enterprises[numberSelected].membership}`;
        
        portrait.setAttribute('src', enterprises[numberSelected].imageurl);
        portrait.setAttribute('alt', `Portrait of ${enterprises[numberSelected].name}`); 
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute("width", "200"); 
        portrait.setAttribute("height", "150");

        information.appendChild(phone);
        information.appendChild(addresses);
        information.appendChild(membership);
        information.classList.toggle('information');

        card.appendChild(names);
        card.appendChild(portrait);
        card.appendChild(information);    
        card.appendChild(website);
        card.classList.toggle('oneCard');

        spotlights.appendChild(card);
    // });
  }
}

getEnterpriseDataCart();