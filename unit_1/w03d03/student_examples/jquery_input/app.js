$(() => {
  const list = [];

  const doNonsense = () => {
    let r = Math.floor(Math.random()*150);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);

    console.log("item clicked: ", event.currentTarget);
    $(event.currentTarget).css('background-color',`rgba(${r},${g},${b},0.5)`);
  }

  const render = () => {
    console.log("Render everything in the list");
    console.log("List: ", list);
    $("ul").empty();
    list.forEach((item) => {
      const $li =  $("<li>" + item + "</li>");
      $li.on("click", doNonsense);
      $("ul").append($li);

    });
  }

  $("form").on("submit", () => {
        console.log("clicked");
        console.log( $("#input-box").val() );
        list.push( $("#input-box").val() );
        event.preventDefault();
        $(event.currentTarget).trigger("reset");
        render();
      } );

      // $("#submit-btn2").on("click", () => {
      //   console.log( "Hi!  Your favorite show is: " + $("#input-box2").val() );
      // })
});
