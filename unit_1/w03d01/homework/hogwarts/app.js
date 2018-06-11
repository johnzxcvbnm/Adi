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
  $("body").css("text-align", "center");

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
  $(".cat").css("font-family", "fantasy");
})// End of Document Ready Function
