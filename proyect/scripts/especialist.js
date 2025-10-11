const url = 'data/information.json';
const cards = document.querySelector('#cards');

async function getEnterpriseDataCart() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayEnterpriseCart(data.especialists);
  } catch (error) {
    console.error('An error occurred during the asynchronous operation:', error);
    throw new Error('Failed to retrieve data.');
  }
}

const displayEnterpriseCart = (especialists) => {
  const membersip = localStorage.getItem("membersip-ls");
  if (membersip === "1" || membersip === "2" || membersip === "3" || membersip === "4") {
  especialists.forEach((especialist) => {
      let card = document.createElement('section');
      let names = document.createElement('h2');
      let phone = document.createElement('p');
      let especialty = document.createElement('p');
      let contract = document.createElement('form')
      let portrait = document.createElement('img');

      portrait.setAttribute('src', especialist.img);
      portrait.setAttribute('alt', `Portrait of ${especialist.name}`); 
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute("width", "200"); 
      portrait.setAttribute("height", "150");

      names.textContent = especialist.name;
      phone.textContent = `Phone: ${especialist.phone}`;
      especialty.textContent = `Specialty: ${especialist.especialty}`;

      contract.setAttribute('method', 'GET');
      contract.setAttribute('action', 'contract.html');
      let label = document.createElement('label');
      let input = document.createElement('input');
      input.setAttribute('type', 'submit');
      input.setAttribute('value', 'Contract a Especialist');
      label.appendChild(input);
      input.textContent = `Contract`;
      contract.appendChild(input);

      card.appendChild(names);
      card.appendChild(portrait);
      card.appendChild(phone);
      card.appendChild(especialty);
      card.appendChild(contract);
      card.classList.toggle('oneCard');

      cards.appendChild(card);
    });
  } else {
      especialists.forEach((especialist) => {
      let card = document.createElement('section');
      let names = document.createElement('h2');
      let phone = document.createElement('p');
      let especialty = document.createElement('p');
      let coment = document.createElement('div');
      let portrait = document.createElement('img');

      portrait.setAttribute('src', especialist.img);
      portrait.setAttribute('alt', `Portrait of ${especialist.name}`); 
      portrait.setAttribute('loading', 'lazy');
      portrait.setAttribute("width", "200"); 
      portrait.setAttribute("height", "150");

      names.textContent = especialist.name;
      phone.textContent = `Phone: ${especialist.phone}`;
      especialty.textContent = `Specialty: ${especialist.especialty}`;

      const show = document.createElement('div')
      show.classList.toggle('showHere');
      const membershipCart = document.createElement('article');
      const openButton = document.createElement('button');
      openButton.addEventListener("click", () => showStuff());
      openButton.innerHTML = `Contract`;
      membershipCart.appendChild(openButton);
      show.appendChild(membershipCart);
      coment.appendChild(show);

      const mycarts = document.createElement('dialog')
      mycarts.classList.toggle('membershipCarts');
      const header = document.createElement('div')
      const sampleTitle = document.createElement('h2')
      const x = document.createElement('button')
      x.innerHTML = 'X';
      x.addEventListener("click", () => mycarts.close());
      header.appendChild(sampleTitle);
      header.appendChild(x);
      mycarts.appendChild(header);
      const myinfo = document.createElement('p')
      mycarts.appendChild(myinfo);
      coment.appendChild(mycarts);

      function showStuff() {
        sampleTitle.innerHTML = 'You dont have a Membership';
        myinfo.innerHTML = `For Contract our Specialists you need a Membership.`;
        mycarts.showModal();
      }
      card.appendChild(names);
      card.appendChild(portrait);
      card.appendChild(phone);
      card.appendChild(especialty);
      card.appendChild(coment)
      card.classList.toggle('oneCard');

      cards.appendChild(card);
    });
  }
}

getEnterpriseDataCart();