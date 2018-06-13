// console.log('app.js');

$(() => {

  $('.outside').on('click', (event) => {
    console.log('OUTSIDE target is: ', event.target);
    console.log('OUTSIDE currentTarget is: ', event.currentTarget);
    $(event.currentTarget).css("background-color", "black");
    return false;
    // event.stopPropagation();
  });

  $('.inside').on('click', (event) => {
    console.log('INSIDE target is: ', event.target);
    console.log('INSIDE currentTarget is: ', event.currentTarget);
    return false;
    // event.stopPropagation();
  });

  $('body').on('click', (event) => {
    console.log('BODY target is: ', event.target);
    console.log('Body currentTarget is: ', event.currentTarget);
    return false;
    // event.stopPropagation();
  });

}); //End of Document Ready Function
