$( () => {
  $("body").append( $("<div>").attr("id", "top-container"));
  $("body").append( $("<div>").attr("id", "bottom-container"));

  $("#top-container").append( $("<h1>").text("Trois couleurs: rouge, blanc, et blue"));
  $("#top-container").append( $("<div>").attr("class", "couleur") )
                     .append( $("<div>").attr("class", "couleur") )
                     .append( $("<div>").attr("class", "couleur") );

  $(".couleur").css("background-color", "dimgrey")
               .css("width", "200px")
               .css("height", "200px")
               .css("display", "inline-block");

  $(".couleur").eq(0).attr("class", "myRed").css("background-color", "firebrick");
  $(".couleur").eq(0).attr("class", "myWhite").css("background-color", "ivory");
  $(".couleur").eq(0).attr("class", "myBlue").css("background-color", "cornflowerblue");

  $("#bottom-container").append( $("<h1>").text("Lumpy Space Princess") );
  $("#bottom-container").append( $("<div>").attr("id", "img-container") );
  $("#img-container").append( $("<img>").attr("src", "https://img00.deviantart.net/a763/i/2010/122/d/b/lumpy_space_princess_by_cyber_murph.jpg"))

  $("h1").eq(0).text("Three colors: red, white, and blue");
  $(".myWhite").css("background-color", "black");
  $(".myBlue").css("background-color", "orange");
  $("h1").eq(0).text("Three colors: red, black, and orange");

  $("body").append($("#top-container").remove());

  $("img").attr("src", "https://vignette.wikia.nocookie.net/adventuretimesuperfans/images/2/22/Ice_King_wearing_his_tunic_and_looking_happy.png/revision/latest?cb=20121012083620");
  $("h1").eq(0).text("The Ice King");

  $("#top-container").remove();
  $("#bottom-container").remove();
  $("body").append( $("<p>").text("the ice king waz here") );
  // console.log($("body"));

//   $('#start').click(animateBox);
//
// $('#reset').click(function() {
//     $('div').queue('fx', []);
// });
//
// $('#add').click(function() {
//     $('div').queue( function(){
//         $(this).animate({ height : '-=25'}, 2000);
//         $(this).dequeue();
//     });
// });
//
// function animateBox() {
//   $('div').slideUp(2000)
//            .slideDown(2000)
//            .hide(2000)
//            .show(2000, animateBox);
// }
})
