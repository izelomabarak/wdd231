const submition = document.querySelector("#submitionbutton");
submition.addEventListener("click", () => {
    const submitionDate = new Date();
    const formattedSubmitioDate = `${(submitionDate.getMonth() + 1).toString().padStart(2, '0')}/${submitionDate.getDate().toString().padStart(2, '0')}/${submitionDate.getFullYear()} ${submitionDate.getHours().toString().padStart(2, '0')}:${submitionDate.getMinutes().toString().padStart(2, '0')}:${submitionDate.getSeconds().toString().padStart(2, '0')}`;
    timestamp.value = formattedSubmitioDate;
});