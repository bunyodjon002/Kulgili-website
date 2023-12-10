const text = document.querySelector(".sec-text");
const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Freelancer";
    }, 0);
    setTimeout(() => {
        text.textContent = "Backend";
    }, 4000);
    setTimeout(() => {
        text.textContent = "Fullstack";
    }, 8000);
    setTimeout(() => {
        text.textContent = "Muhandis";
    }, 12000);
}
textLoad();
setInterval(textLoad, 12000);