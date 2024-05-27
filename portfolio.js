function animateText() {
    const letters = document.querySelectorAll("h2 span");
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.style.transform = "translateY(0)";
        }, index * 100);
    });
}
animateText();
setInterval(() => {
    const letters = document.querySelectorAll("h2 span");
    letters.forEach(letter => {
        letter.style.transform = "translateY(100%)";
    });
    setTimeout(animateText, 2000);
}, 2000);
function animateContainers() {
    const imageContainer = document.querySelector(".image-container");
    const textContainer = document.querySelector(".text-container");
    imageContainer.classList.add("active");
    textContainer.classList.add("active");
}
animateContainers();
setInterval(() => {
    const imageContainer = document.querySelector(".image-container");
    const textContainer = document.querySelector(".text-container");
    imageContainer.classList.remove("active");
    textContainer.classList.remove("active");
    setTimeout(() => {
        animateContainers();
    }, 1000);
}, 6000); 