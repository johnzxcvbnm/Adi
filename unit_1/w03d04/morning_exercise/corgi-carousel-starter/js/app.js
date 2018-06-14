$( () => {
  //Index counter
  let currentImgIndex = 0;

  //Index limit
  const numOfImages = $(".carousel-images").children().length - 1;

  //Changes the CSS of picture 'num' to either hide it or display it
  const setCSS = (num, displayType) => {
    $(".carousel-images").children().eq(num).css("display", displayType);
  }

  //Adds functionality to the Next button
  //Function hides current image and displays the next one
  $(".next").on("click", () => {
    //Hides the current image
    setCSS(currentImgIndex++, "none");

    //If the Index is out of bounds, set it to the first index
    if(currentImgIndex > numOfImages){
      currentImgIndex = 0;
    }

    //Displays the new current image
    setCSS(currentImgIndex, "block");
  });

  //Adds functionality to the Previous Button
  //When user clicks it cycles backwards through the pictures
  $(".previous").on("click", () => {
    //Hides current image
    setCSS(currentImgIndex--, "none");

    //If the Index is out of bounds, set it to the last index
    if(currentImgIndex < 0){
      currentImgIndex = numOfImages;
    }

    //Displays the new image
    setCSS(currentImgIndex, "block");
  });
});//End of Document Ready Function

// $(()=>{
//   const rotateImages = (event) => {
//     const $parent = $('.carousel-images');
//     const $images = $parent.find('img');
//     if (event.data.forward) {
//       $parent.append($images.eq(0)); // Move first to the end
//     } else {
//       $parent.prepend($images.eq($images.length-1)); // Move last to the beginning
//     }
//   }
//   $('.next').on('click', null, { 'forward':true }, rotateImages);
//   $('.previous').on('click', null, { 'forward':false }, rotateImages);
// })
