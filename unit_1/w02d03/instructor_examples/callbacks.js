// CALLBACKS LESSON

// const electricMixer = (attachment) => {
//   console.log("This mixer is now: " + attachment());
// }
//
// const attachment = () => {
//   return "on";
// }
//
// const spiralizer = () => {
//   return "spiralizing";
// }
//
// electricMixer(() => {
//   return "spiralizing";
// });
//
// electricMixer(spiralizer);
// electricMixer(attachment);

const iceCream = ['Vanilla','Chocolate','Strawberry','Rocky Road'];

var updateIceCream = iceCream.map(x => x +" Ice Cream");

console.log(updateIceCream);
