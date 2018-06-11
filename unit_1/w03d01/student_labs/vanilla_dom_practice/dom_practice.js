const myId = document.getElementById("websiteLink");
console.log(myId);
const h2 = document.querySelector("h2");
console.log(h2);
h2.innerText += "!!!";

const myChildren = document.getElementsByClassName("cityFeatures");
console.log(myChildren);

const ol = document.querySelector("ol");
ol.children[0].style.color = "Blue";
ol.children[2].innerText = "Jamboree sandwich at the Jambo-ree";

// const myImg = document.createElement("img");
// myImg.setAttribute("src", "https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg");
// myId.appendChild(myImg);

// const myDel = document.querySelector("h4");
// myDel.remove();

const mainImage = document.querySelector("img");

// setInterval(function() {
//    mainImage.setAttribute("src", "https://londontheinside.com/wp-content/uploads/2017/11/StrangerThings2.png");
//    setTimeout(function() { mainImage.setAttribute("src", "https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg"), 2000});
//    console.log(mainImage);
// }, 5000);

setInterval(function() {
   mainImage.setAttribute("src", "https://londontheinside.com/wp-content/uploads/2017/11/StrangerThings2.png");}, 2000);

setInterval(function() { mainImage.setAttribute("src", "https://i.ytimg.com/vi/TgSmPqMGk2g/maxresdefault.jpg")
}, 4000);
