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

  //----------Year Two-------------//
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

})// End of Document Ready Function
