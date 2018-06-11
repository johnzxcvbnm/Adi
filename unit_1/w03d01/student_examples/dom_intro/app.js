// document.querySelector("h1").innerText = "Welcome to the Upside Down";
const image = document.querySelector("img");

// image.style.filter = "grayscale(100%)";
// imagestyle.width = "95%";

const eggos = document.createElement("img");
document.querySelector(".container").appendChild(eggos);

eggos.setAttribute("src", "https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg");
eggos.style.width = "100%";

eggos.remove();

const list = document.querySelectorAll("li");
console.log(list);

list[0].innerText = "Demo Dog Hangout";
list[4].style.color = "hotpink";
list[3].remove();
