// const getString = window.location.search;
// console.log(getString);

const myInfo = new URLSearchParams(window.location.search)
console.log(myInfo);

// console.log(myInfo.get('first'));
// console.log(myInfo.get('last'));
// console.log(myInfo.get('ordinance'));
// console.log(myInfo.get('date'));
// console.log(myInfo.get('location'));
// console.log(myInfo.get('phone'));
// console.log(myInfo.get('email'));

document.querySelector('#results').innerHTML = `
<p>Tanks ${myInfo.get('first')} ${myInfo.get('last')}, of ${myInfo.get('organization')}.</p>
<p>The data of your enterprise, ${myInfo.get('organization')}, are:</p>
<p>Phone: ${myInfo.get('phone')}</p>
<p>Email: ${myInfo.get('email')}</p>
<p>Membership Level: ${myInfo.get('level')}</p>

<span>You Submit Your Informantion at ${myInfo.get('timestamp')}</span>
`
