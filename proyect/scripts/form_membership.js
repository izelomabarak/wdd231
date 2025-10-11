const getMembership = document.querySelector('#getMembership');
const changeMembership = document.querySelector('#changeMembership');

const membersip = localStorage.getItem("membersip-ls");
if (membersip === "1" || membersip === "2" || membersip === "3" || membersip === "4") {
    const repeated = document.querySelector(`#question${membersip}`);
    repeated.remove();
    getMembership.remove();
} else {
    changeMembership.remove();
}


