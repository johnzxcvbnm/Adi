const returnImg = () => {
  switch(Math.floor(Math.random() * 6)){
    case 0: return "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/6/64/Original_Ice_King.png/revision/latest?cb=20160405041324";
    case 1: return "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/3/3b/Jakesalad.png/revision/latest/scale-to-width-down/310?cb=20160503014517";
    case 2: return "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/8/81/BMO.png/revision/latest?cb=20161024201513";
    case 3: return "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/e/e0/Marceline_Stock_Night.png/revision/latest?cb=20121003133650";
    case 4: return "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/0/00/Princess_Bubblegum.png/revision/latest?cb=20120921151236";
  }

   return  "https://vignette.wikia.nocookie.net/adventuretimewithfinnandjake/images/f/f3/Original_Finn.png/revision/latest?cb=20120921151658";
}

const addImage = () => {
  const $myDiv = $("<div>").addClass("randomImage");
  $myDiv.append( $("<img>").attr("src", returnImg()) );
  $myDiv.on("click", () => { $myDiv.remove(); });
  $("#container").append($myDiv);
}

$( () => {
  const $myDiv = $("<div>").addClass("randomButton");
  $myDiv.append( $("<p>").text("Add a Random Image") );
  $myDiv.on("click", addImage);
  $("#container").append($myDiv);

});//End of Document Ready Function
