// console.log("LINKED");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const baddies = [
  "Sauron",
  "Saruman",
  "The Uruk-hai",
  "Orcs"
];

// Our Setting
const lands = ['The-Shire', 'Rivendell', 'Mordor'];

// ====================================
//           Chapters
// ====================================


// ============
// Chapter 1
// ============
const makeMiddleEarth = () => {

  // HINT: Make a console.log for each of your functions to make sure that, when you click, the correct function is being called!
  // console.log('making Middle Earth');
  // console.log("Trying to make middle earth.");

  // 1. create a section tag with an id of middle-earth
  const $mySection = $("<section>").attr("id", "middle-earth");

  // 2. append the section to the body of the DOM.
  $("body").append($mySection);

  // 3. use a for loop to iterate over the lands array that does the following:
  //   3a. creates an article tag (there should be one for each land when the loop is done)
  //   3b. gives each land article an `id` tag of the corresponding land name
  //   3c. includes an h1 with the name of the land inside each land article
  //   3d. appends each land to the middle-earth section

  //Loop creates a new land, sets it with an id and text of that land, then appends it to 'middle-earth'
  for(let i = 0; i < lands.length; i++){
    const $myLand = $("<article>").attr("id", lands[i]);
    $myLand.append( $("<h1>").text(lands[i]) );
    $mySection.append($myLand);
  }

  //Chapter 6 - Stretch - Clicking on the shire will have the hobbits go to Rivendell
  // $mySection.eq(0).on("click", leaveTheShire);
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const makeHobbits = () => {

  // Goal: display an unordered list of hobbits in the shire (which is the first article tag on the page)

  // 1. create a 'ul'
  const $myHobbit = $("<ul>");

  // 2. make each hobbit an li element and append it to the 'ul' you just created
    // hint: use the given 'hobbits' array and use a for loop
  // 3. also, give each hobbit (`li`) a class of "hobbit"

  //Each iteration of the loop creates a new 'hobbit' with their name and the class 'hobbit'
  //The new item is then appended onto the Unordered List
  for(let i = 0; i < hobbits.length; i++){
    const $myListItem = $("<li>").text(hobbits[i]);
    $myListItem.addClass("hobbit");
    $myHobbit.append($myListItem);
  }

  // 4. append the ul to the shire
    // hint: get 'The-Shire' by using its id
  $("#The-Shire").append($myHobbit);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
const keepItSecretKeepItSafe = () => {

  // 1. create an empty div with an id of 'the-ring'
  const $theOne = $("<div>").attr("id", "the-ring");

  // 2. add the ring as a child of Frodo
    // hint: Frodo does not have an id, but there is a command to retrieve all elements with a certain class. This should give you an array for you to access . . .
    // when you think you have given Frodo the ring, check in your Elements tab to see that it works correctly
  //Grabs all the list items and adds 'the-ring' to the first one (Frodo)
  $("li").eq(0).append($theOne);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
const makeBaddies = () => {

  // 1. display an unordered list of baddies in Mordor
  const $myBad = $("<ul>");

  // 2. give each of the baddies a class of "baddy"

  //Each iteration of the loop creates a new 'baddy', with their name and the class 'baddy'
  //The new item is then appended onto the Unordered List
  for(let i = 0; i < baddies.length; i++){
    const $myListItem = $("<li>").text(baddies[i]);
    $myListItem.addClass("baddy");
    $myBad.append($myListItem);
  }
  // 3. remember to append the ul to Mordor
  $("#Mordor").append($myBad);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============
const makeBuddies = () => {

  // 1. create an aside tag and append it to middle-earth below mordor
  const $myBud = $("<aside>");
  $("#Mordor").after($myBud);

  // 2. display an unordered list of buddies in the aside
  const $myUL = $("<ul>");

  // 3. give each of the buddies a class of "buddy"

  //Each iteration of the loop creates a new 'buddy' and gives them a name and the class of 'buddy'
  //The new item is then appeded onto the Unordered List
  for(let i = 0; i < buddies.length; i++){
    const $myListItem = $("<li>").text(buddies[i]);
    $myListItem.addClass("buddy");
    $myUL.append($myListItem);
  }

  // 4. don't forget to append them to the aside
  $myBud.append($myUL);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

const leaveTheShire = () => {
  // 1. grab the hobbits (the ul in which they reside) and move them to Rivendell
      // hint: the hobbits ul is a childNode of The-Shire-- there is way to get a list of childNodes
  // const $myHobbits = $("#The-Shire").children.eq(0);
  const $myHobbits = $("#The-Shire").children().eq(1).remove();
  $("#Rivendell").append($myHobbits);

  //Stretch: add an event handler/listener so that when you click on the `h1` The Shire, this function will be called (be sure to do it in the window.onload/document.ready function)
  //--------Added Code to chapter one section----------//
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
const beautifulStranger = () => {

  // 1. change the buddy 'Strider' textnode to "Aragorn"
     // hint: You can get a list of elements by tag name, such as 'aside'

  //Pulls all elements with the class of 'buddy' and changes name of the fourth one
  $(".buddy").eq(3).text("Aragorn");
};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
const forgeTheFellowShip = () => {

  // 1. create a new div with an id 'the-fellowship'
  const $myDiv = $("<div>").attr("id", "the-fellowship");

  // 2. add an h1 with the text 'The Fellowship' to this new div
  $myDiv.append( $("<h1>").text("The Fellowship") );

  // 3. append the fellowship to middle-earth
  $("#middle-earth").append($myDiv);

  // 4. add the unordered lists of hobbits and buddies to 'the-fellowship'

  //Pulls the parent of the list items (Unordered Lists) and adds them to the new 'the-fellowship' Div
  const $myHobbits = $(".hobbit").parent();
  const $myBuddies = $(".buddy").parent();
  $myDiv.append($myHobbits).append($myBuddies);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
const theBalrog = () => {

  // 1. change the 'Gandalf' text to 'Gandalf the White' 4th

  //Pulls all the items with the class of 'buddy' and changes the first one ('Gandalf') to 'Gandalf the White'
  const $myWizard = $(".buddy").eq(0);
  $myWizard.text("Gandalf the White");

  // 2. add a class "the-white" to this element
  $myWizard.addClass("the-white");

  // 3. in the style.css file, add a css rule to make elements of the class "the-white" have a white background and a grey border

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
const hornOfGondor = () => {

  // 1. create a pop-up alert that the horn of gondor has been blown
  alert("The Horn of Gondor has been blown! Quickly now!");

  // 2. Boromir's been killed by the Uruk-hai! Put a linethrough on Boromir's name
  //Pulls all the items with the class of 'buddy' and adds CSS styling to put a line through 'Boromir's' name
  $(".buddy").eq(4).css("text-decoration", "line-through");

  // 3. Tricky: Remove the Uruk-Hai from the Baddies on the page
  //Pulls all the items with the class of 'baddy' and removes 'Uruk-Hai' completely
  $(".baddy").eq(2).remove();

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
const itsDangerousToGoAlone = () => {

  // 1. take Frodo and Sam out of the fellowship and move them to Mordor (they don't need to be inside a ul in Mordor)

  //Pulls all the elements with the class of 'hobbit' and removes the first element 'Frodo' from the DOM
  const $myFrodo = $(".hobbit").eq(0).remove();

  //Pulls all the elements with the class of 'hobbit' and removes the first element 'Sam' from the DOM
  const $mySam = $(".hobbit").eq(0).remove();

  //Appends 'Frodo' and 'Sam' to 'Mordor'
  $("#Mordor").append($myFrodo).append($mySam);

  // 2. add a div with an id of 'mount-doom' to Mordor
  $("#Mordor").append( $("<div>").attr("id", "mount-doom") );

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
const weWantsIt = () => {

  // 1. Create a div with an id of 'gollum' and add it to Mordor
  const $myGollum = $("<div>").attr("id", "gollum");
  $("#Mordor").append($myGollum);

  // 2. Move the ring from Frodo and give it to Gollum
  $myGollum.append( $("#the-ring").remove() );

  // 3. Move Gollum into Mount Doom
  $("#mount-doom").append($myGollum);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
const thereAndBackAgain = () => {

  // 1. remove Gollum and the Ring from the DOM
  //Take the element with the ID of 'gollum' and removes it from the DOM
  $("#gollum").remove();

  // 2. remove all the baddies from the DOM
  //Takes all the elements with the class of 'baddy' and removes them from the DOM
  $(".baddy").remove();

  // 3. Move all the hobbits back to the shire
  //Takes all the elements with the class of 'hobbit' and removes them from the DOM
  //'The-Shire' is then appended with the removed 'hobbit' collection
  const $myHobbits = $(".hobbit").remove();
  $("#The-Shire").append($myHobbits);

};

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".


// =====================================
// Don't change anything below this line
// =====================================
// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================



$(()=>{

  $('#1').on('click', makeMiddleEarth);
  $('#2').on('click', makeHobbits);
  $('#3').on('click', keepItSecretKeepItSafe);
  $('#4').on('click', makeBaddies);
  $('#5').on('click', makeBuddies);
  $('#6').on('click', leaveTheShire);
  $('#7').on('click', beautifulStranger);
  $('#8').on('click', forgeTheFellowShip);
  $('#9').on('click', theBalrog);
  $('#10').on('click', hornOfGondor);
  $('#11').on('click', itsDangerousToGoAlone);
  $('#12').on('click', weWantsIt);
  $('#13').on('click', thereAndBackAgain);

  $('body').on('click', '#The-Shire h1', leaveTheShire)
});
