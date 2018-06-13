// console.log($);
// console.log('modal practice app.js is linked to this index.html');


$( () => {
  //Grab the 'About Game' button, the modal element, and the close button
  const $openBtn = $("#openModal");
  const $modal = $("#modal");
  const $closeBtn = $("#close");

  const openModal = () => {
    $modal.show(400);
    // $modal.css("display", "block");
  }

  const closeModal = () => {
    $modal.hide(400);
  }

  setTimeout(openModal, 5000);
  $openBtn.on("click", openModal);
  $closeBtn.on("click", closeModal);
});//End of Document Ready Function
