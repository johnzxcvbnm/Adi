$( () => {
  //----------Year One-------------//
  // Query for your div with the id of container and set it to a variable named $container
  // console.log $container
  // Create an <h1> element and set it to a variable called $h1 and console log it
  // Add some text inside the h1 element. Example text: 'Hogwarts'
  // Why isn't your $h1 it appearing on your page?

  const $container = $("#container");
  const $h1 = $("<h1>").text("Hogwarts");
  $container.append($h1);
  // $("body").css("text-align", "center");

  //----------Year Two-------------//
  // Following what you did in Year 1, add the following:
  //
  // h2 element with your name
  // h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
  // h4 element with your pet's name
  // this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
  // h4 element with your wand (You can make it whatever you want. Need help coming up with one? Here is one of many websites to help you find your wand playbuzz.com )
  // In your main.css add an attribute of font-family: fantasy; to all elements that have a class that matches your pet's class

  $container.append( $("<h2>").text("John Kusching") )
            .append( $("<h3>").text("Slytherin") )
            .append( $("<h4>").text("James").attr("class", "cat") )
            .append( $("<h4>").text("Hawthorn Wand") );
  // $(".cat").css("font-family", "fantasy");

  //----------Year Three-------------//
  // Following what you did in previous years, add the following into an unordered list (with the attribute of storage and a value of trunk):
  //
  // list items of
  //
  // butter beer
  // invisibility cloak (add a class of secret)
  // magic map (add a class of secret)
  // time turner (add a class of secret)
  // leash (for your pet, be sure to give this list element the same class as you gave your pet)
  // Bertie Bott's Every Flavor [Jelly] Beans.
  // append the unordered list to your container div
  // In your main.css file, give the items with a class of secret an attribute of opacity: 0.5;
  //
  // In your main.css file, remove the bullet points from the list items


  $container.append( $("<ul>").attr("attribute", "storage").attr("value", "trunk") );
  // $container.append( $("<ul>") );
  $("ul").append( $("<li>").text("Butter Beer") )
         .append( $("<li>").text("Invisibility Cloak").attr("class", "secret") )
         .append( $("<li>").text("Magic Map").attr("class", "secret") )
         .append( $("<li>").text("Time Turner").attr("class", "secret") )
         .append( $("<li>").text("Leash").attr("class", "cat") )
         .append( $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans") );

// $(".cat").css("opacity", "0.5");
// $("ul").css("text-decoration", "none");

//----------Year Four-------------//
  // You want to show off how many classes you are taking
  //
  // Make a table
  // Hint: Look under More Examples, <p>Simple table with header</p> at MDN to see the correct HTML element layout
  //
  // Right above your table add an h5 that says 'Spring 2017'
  // Inside the table add a thead element
  // Inside the thead element add two th elements
  // in the first th add the text Day
  // in the second th add the text Classes
  // Create a tr element and add two td elements inside.
  // in the first td add the day Monday
  // in the second td add the classes you are taking ( Herbology, Divination, History of Magic, Charms, Potions, Transfiguration, Defense Against the Dark Arts, Quidditch practice, etc.)
  // Create more tr elements with tds inside so that you have Monday - Friday and classes each of those days
  // In your main.css file, add a gray 1px solid border around your table, th elements and td elements
  // In your main.css file, add a rule that will center your table on the page

  $container.append( $("<h5>").text("Spring 2017") );
  $container.append( $("<table>").append( $("<tr>").append( $("<th>").text("Day") )
                              .append( $("<th>").text("Classes") ) )
            .append( $("<tr>").append( $("<td>").text("Monday") )
                              .append( $("<td>").text("History of Magic") ) )
            .append( $("<tr>").append( $("<td>").text("Tuesday") )
                              .append( $("<td>").text("Herbology") ) )
            .append( $("<tr>").append( $("<td>").text("Wednesday") )
                              .append( $("<td>").text("Potions") ) )
            .append( $("<tr>").append( $("<td>").text("Thrusday") )
                              .append( $("<td>").text("Divination") ) )
            .append( $("<tr>").append( $("<td>").text("Friday") )
                              .append( $("<td>").text("Defense Against the Dark Arts") ) ) );

  //----------Year Five-------------//
  // Things get interesting
  //
  // Break your wand! (select the element that contains your wand and remove it)
  // Class was hard! Drink all your butter beer! (remove just the butter beer from your list)
  // Get a new wand (add the same element back with new text describing your new wand. Be sure to insert it after your pet in the DOM)
  // Make your new wand stand out by adding a color of indigo (or whatever color you like). But do it with magic (jQuery): Don't add this css in your main.css file
  // Send your pet on a spy mission (remove your pet from the DOM, put it somewhere else in your HTML). Make sure your pet's leash stays in your trunk (list item with the same class as your pet inside unordered list)
  // Have your pet come back (remove your pet from the DOM, put it back in its original location)

  $("h4").eq(1).remove();
  $("li").eq(0).remove();
  $("ul").before( $("<h4>").text("Black Wand").css("color", "indigo") );
  $("table").append( $(".cat").eq(0).remove() );
  $("h4").eq(0).before( $(".cat").eq(1).remove() );


})// End of Document Ready Function
