// if (typeof $ == 'undefined'){
//   console.log('oops! I still have to link my jQuery properly!');
// } else {console.log('I did it! I linked jQuery and this js file properly!')};
//

//name all variables that are jQuery objects starting with a $

const $div = $('<div>');
// const vanilladiv = document.createElement('div');
// console.log($div);
// console.log(vanilladiv);
const $myDiv = $("<div>");
$myDiv.addClass("dairy");

//Select body $("Body")
//document ready function
$(() => {
  // console.log($("body"));
  $("body").append($div);
  $("body").prepend($myDiv);



$div.addClass("meat");

const $h3 = $("<h3>");
$h3.text("Ostrich");
$div.append($h3);

const $myh3 = $("<h3>");
$myh3.text("YOLO");
$myDiv.append($myh3);

const $anotherDiv = $("<div>").addClass("vegetable");
const $anotherH3 = $("<h3>").text("Kefir");
$("body").append($anotherDiv);
$anotherDiv.append($anotherH3);


const $divs = $("div");
// console.log($divs);
// $divs.hide("slow");

const $meat = $(".meat");
// console.log($meat);

// $meat.remove();

const $img = $("<img>").attr("src", "https://images.unsplash.com/photo-1452195100486-9cc805987862?auto=format&fit=crop&w=750&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D");
$img.attr("alt", "Cheese");
$("body").prepend($img);

// console.log($divs);
// console.log($divs.eq(2).children());


// const $myNewH3 = $("<h3>").text("Wine");
// $divs.eq(2).empty();
// $divs.eq(2).append($myNewH3);

$divs.eq(2).empty().append($("<h3>").text("Wine"));

$("body").css("border", "1em solid black");
// $("body").append("border", "1em solid black");

});//End of the Document Ready Function
