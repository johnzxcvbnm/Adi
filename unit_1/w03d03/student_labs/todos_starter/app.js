//Function removes current event target from the DOM
//Is used for when the user clicks the 'REMOVE' button from the 'Things That are Done' list
const remove = (event) => {
  $(event.currentTarget).parent().remove();
}

//Function removes items from the 'Things to Do' list to the 'Things That are Done' list
const moveToDone = (event) => {

  //Creates a new <p> tag and pulls the text from the event target
  //Event target is the 'COMPLETED' button that the user has clicked on
  const $myText = $("<p>").text( $(event.currentTarget).siblings().text() );

  //Removes current event target from the DOM (aka, the 'Things to Do' list)
  $(event.currentTarget).parent().remove();

  //Creates a new button 'REMOVE' with the remove event when the user clicks on the button
  const $myButton = $("<button>").text("REMOVE");
  $myButton.on("click", remove);

  //Creates a new div to add to the 'Things That are Done' list
  //Adds the newly created text and button to the div
  //Then adds the div to the top of the 'Things that are Done' list
  const $myDiv = $("<div>").addClass("done-item");
  $myDiv.append($myText).append($myButton);
  //I added the ID 'areDone' in the HTML file to add the div right after the h2 tag
  $("#areDone").after($myDiv);

  //This last line is if you wanted to add items to the bottom of the list
  //This adds the new div to the bottom of the 'completed' div
  // $("#completed").append($myDiv);
}

//Function pulls input from the user and adds it to the 'Things to Do' list
const addToDo = () => {
  //Creates a new <p> tag and adds text from the input
  const $myText = $("<p>").text( $("#input-box").val() );

  //If the user just clicks the add button or tries to add spaces then nothing is executed
  if($myText.text().replace(/\s/g, '') != ""){
    //Creates a new button with the text "COMPLETED"
    //Adds a listener which, when executed, moves the clicked on task to the 'Things That are Done' list
    const $myButton = $("<button>").text("COMPLETED");
    $myButton.on("click", moveToDone);

    //Creates a new div and adds the new <p> and button to it
    //The new div is then attached to the top of the 'Things to Do' list
    const $newItem = $("<div>").addClass("to-do-item");
    $newItem.append($myText).append($myButton);
    $("#toDo").after($newItem);

    //The las line is if you wanted to add things to the bottom of the list instead
    //This adds the new div to the bottom of the 'Things to Do' list
    // $("#to-do-list").append( $newItem );
  }
}

//Document Ready Function
$( () => {
  //Adds a listener which, when activated, takes the input and adds it to the 'Things to Do' list
  $("#submit").on("click", addToDo );
}); //End of On Ready Function
