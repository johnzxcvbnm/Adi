const addToDo = () => {
  $("#submit").on("click", () => {
    //console.log("working");
    const $inputBox = $("#input-box");
    const todo = $inputBox.val();

    //Empties input box
    $inputBox.val("");

    //put todo text inside #to-do-list
    // make a div with a class of to-do-item
    //wrap my text inside an h3
    //add a button to the div, that says "COMPLETE"
    const $div = $("<div>").addClass("to-do-item");
    $div.html(`<h3>${todo}</h3>`).appendTo($("#to-do-list"));

    const $button = $("<button>");
    $button
      .text("COMPLETE")
      .on("click", moveToDo)
      .appendTo($div);
  });
}

const moveToDo = (event) => {
  //The button is clicked
  //Need to access the parent
  const $toDoDiv = $(event.currentTarget).parent();

  //Remove the class of the to-do-item
  $toDoDiv
    .removeClass("to-do-item")
  //put a new class on there, done-item
    .addClass("done-item")
  //detach it from current location and
  //append to new location
    .appendTo($("#completed"))
  //get to the button so
  //we can change the button text to "REMOVE"
    .children()
    .eq(1)
    .text("REMOVE")
  //add a new event listener/handler that will remove this item from the DOM    .on("click", removeToDo)
    .on("click", removeToDo)
}

const removeToDo = (event) => {
  $(event.currentTarget).parent().remove();
}

$( () => {
  addToDo();
}); //End of On Ready Function
