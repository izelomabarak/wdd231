const openButton = document.querySelector("#openButton");
const dialogBox = document.querySelector("#dialogBox");
const closeButton = document.querySelector("#closeButton");
const dialogBoxTex = document.querySelector("#dialogBox div");

openButton1.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxTex.innerHTML = `One Apple contains 95 calories`
});

openButton2.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxTex.innerHTML = `One Orange contains 45 calories`
});

openButton3.addEventListener("click", () => {
    dialogBox.showModal();
    dialogBoxTex.innerHTML = `One Banana contains 105 calories`
});

closeButton.addEventListener("click", () => {
    dialogBox.close();
});