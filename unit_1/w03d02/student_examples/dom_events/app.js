const changeColor = () => {
  $("p").toggleClass("newColor");
}

const addText = () => {
  const $p = $("<p>").text("THE EARTH IS AN OBLATE SPHEROID");
  $p.on("click",  () => { $p.toggleClass("newColor") });
  $("body").append($p);
}

const changeClass = () => {
  $("body").toggleClass("black");
}

$( () => {
  const $btn = $("#button");
  $btn.on("click", addText );
  // $btn.on("click", changeClass);
});//End of Document Ready
