
$( () => {

  const remove = (event) => {
    $(event.currentTarget).parent().remove();
  }

  const moveToDone = (event) => {

    const $myDiv = $("<div>").addClass("done-item");
    const $myButton = $("<button>").text("REMOVE");
    $myButton.on("click", remove);
    let myTest = $(event.currentTarget).parent().text();

    myTest = myTest.slice(0, myTest.length - 9);
    $(event.currentTarget).parent().remove();
    $myDiv.text(myTest);
    $myDiv.append($myButton);
    $("#completed").append($myDiv);
  }

  const addToDo = () => {
    const $newItem = $("<div>").addClass("to-do-item");
    const $myButton = $("<button>").text("COMPLETED");

    $newItem.text( $("#input-box").val() );
    $myButton.on("click", moveToDone);
    $newItem.append($myButton);
    $("#to-do-list").append( $newItem );
  }

  $("#submit").on("click", addToDo );
    // event.preventDefault();
    // $(event.currentTarget).trigger("reset");
}); //End of On Ready Function
