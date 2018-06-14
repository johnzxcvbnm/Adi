$( () => {
  const $colorPalette = $("#color-palette");
  const $myPalette = $("#my-palette");
  const $generate = $("#generate");

  const addColor = (event) => {
    // const $square = $("<div>").addClass("square");
    // $square.css("background-color", $(event.currentTarget).css("background-color"));
    // $myPalette.append($square);

    $myPalette.append( $("<div>").addClass("square").css("background-color", $(event.currentTarget).css("background-color") ) );
  }

  const makePalette = () => {
    $colorPalette.empty();
    for(let i = 0; i < 150; i++){
      const $square = $("<div>");
      $square.addClass("square");
      $colorPalette.append($square);

      const randHex = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6,'0');
      $square.css("background-color", randHex);

      $square.on("click", addColor);
    }
  }

  $generate.on("click", makePalette);
});//End of Document Ready function
