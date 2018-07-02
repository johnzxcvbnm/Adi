//Hide all the divs that contain the forms
const hideForms = () => {
  $(".form1").hide();
  $(".form2").hide();
  $(".form3").hide();
  // $(".form4").hide();
  // $(".form5").hide();
}

//Hide all the forms then
//Display the Form Div at Index
const displayForm = (index) => {
  hideForms();
  $(`.form${index}`).show();
}

//Hide all the Form Divs by default
//Enable all the Form Buttons to display a single form
const turnOnButtons = () => {
  hideForms();
  $("#actForm1").on("click", () => { displayForm(1); });
  $("#actForm2").on("click", () => { displayForm(2); });
  $("#actForm3").on("click", () => { displayForm(3); });
  // $("#actForm4").on("click", () => { displayForm(4); });
  // $("#actForm5").on("click", () => { displayForm(5); });
}

//Document Ready Function
$( () => {
  turnOnButtons();
  // console.log("File Linked");
});
