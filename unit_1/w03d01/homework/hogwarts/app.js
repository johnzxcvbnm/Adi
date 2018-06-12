$( () => {
  //----------Year One-------------//
  // Query for your div with the id of container and set it to a variable named $container
  // console.log $container
  // Create an <h1> element and set it to a variable called $h1 and console log it
  // Add some text inside the h1 element. Example text: 'Hogwarts'
  // Why isn't your $h1 it appearing on your page?

  const $container = $("#container").append( $("<h1>").text("Hogwarts") );
  // const $h1 = $("<h1>").text("Hogwarts");
  // $container.append($h1);
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

  //Adds basic text to the bottom of the container class
  $container.append( $("<h2>").text("John Kusching") )
            .append( $("<h3>").text("of House Slytherin") )
            .append( $("<h4>").text("Jamie the Cat").attr("class", "cat") )
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

  //Adds an unordered list complete with filled in list values to the end of the container class
  //Also sets the attribute of the 'ul' to 'storage' and the value to 'trunk'
  $container.append( $("<ul>").attr("attribute", "storage").attr("value", "trunk")
            .append( $("<li>").text("Butter Beer") )
            .append( $("<li>").text("Invisibility Cloak").attr("class", "secret") )
            .append( $("<li>").text("Magic Map").attr("class", "secret") )
            .append( $("<li>").text("Time Turner").attr("class", "secret") )
            .append( $("<li>").text("Leash").attr("class", "cat") )
            .append( $("<li>").text("Bertie Bott's Every Flavor [Jelly] Beans") ) );


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

  //Title for the Table
  $container.append( $("<h5>").text("Spring 2017") );
  //Creates a new table with two coloumns and fills them in, all in one line.  Spaced so it's easier to read and understand.
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

  $("h4").eq(1).remove(); //Removes the 'Wand' h4
  $("li").eq(0).remove(); //Removes the 'Butter Beer'
  $("ul").before( $("<h4>").text("Black Wand").css("color", "indigo") ); //Creates a new h4 'Wand', changes it's text color and places it back where the old wand was
  $("table").append( $(".cat").eq(0).remove() ); //Removes 'Jamie the Cat' from the top and adds him to the bottom of the table
  $("h4").eq(0).before( $(".cat").eq(1).remove() ); //Removes 'Jamie the Cat' from the bottom of the table and places him back where he was

  //----------Year Six-------------//

  // School is so fun!
  //
  // Nosey roommate alert! hide (use jQuery method hide) to hide all your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
  // Nosey roommate falls asleep 2 seconds later (chain the jQuery method delay on your hide method (give argument of at least 2000) to prevent showing your secret elements too soon.
  // Use jQuery method show to reveal all of your belongings with a class of secret (give an argument of 'slow' - to see this function in action)
  // Accident! You transmogrified your pet's leash into half cabbage
  // add the class cabbage to your pet's leash. Do not replace your pet's leash's original class. Your pet, which also has the same class should remain unaffected
  // add an attribute of color:CHARTREUSE; in your main.css for all elements that have a class of cabbage
  // Fix your pet's leash by removing the class of cabbage (be sure to keep your pet's leash's original class)

  //Hides everything with the class of secret, then waits two seconds, then shows them again, all with the slow animation
  $(".secret").hide("slow").delay("2000").show("slow");

  //Add the class 'cabbage' to the 'leash' item, then promptly removes the class 'cabbage'
  $(".cat").eq(1).addClass("cabbage").removeClass("cabbage");

  //----------Year Seven-------------//
  //   Though your time at Hogwarts is nearly over, your journey of learning has just begun
  //
  // Update your class schedule to read 'Fall 2018'
  // Celebrate by buying more butter beer! Append a list item with the text 'Butter beer' as the first list item inside your unordered list with the value of trunk
  // Whoops! You broke your trunk when you stood on it while singing karaoke. Get a new storage container for your stuff; replace the unodered list's property of trunk with a new property of chest
  // Add some CSS to your page. Feel free to experiment and make this page your own
  // Take a screenshot of your page and add it to your homework folder

  //Changes Spring 2018 to Fall 2018
  $("h5").text("Fall 2018");

  //Adds 'Butter Beer' back to the top of the 'ul'
  $("li").eq(0).before( $("<li>").text("Butter Beer") );

  //Changes the value of the 'ul' to 'chest'
  $("<ul>").attr("value", "chest");

  //Creates a new div, adds the 'Fall 2018' h5 and the table as children, then styles the div with some CSS
  const $myLeftDiv = $("<div>").append( $("h5") ).append( $("table") ).css("background-color", "#91FCC5").css("padding", "1.5% 4% 4% 4%");

  //Creates a new div, add the unordered list as a child, then styles the div
  const $myRightDiv = $("<div>").append( $("ul") ).css("background-color", "#BE8A4F").css("border", "2px solid black").css("padding", "2% 5% 2% 2%");

  //Creates a new div at the now empty bottom of the container class div, adds the $myLeftDiv and $myRightDiv as children, then uses flexbox to display them side by side
  $container.append( $("<div>").append($myLeftDiv).append($myRightDiv).css("display", "flex").css("justify-content", "space-evenly") );

  //Adds text above the unordered list to give meaning to the list
  $("li").eq(0).before( $("<h5>").text("My Chest") );

  //Adding CSS
  $("ul").css("margin", "auto");
  $("h5").css("text-decoration", "underline").css("font-weight", "700");
})// End of Document Ready Function
