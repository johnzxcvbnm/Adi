const exampleFunction = (callback) => {
  callback();
}

// exampleFunction(() => { console.log('hi'); });
// exampleFunction("Hi");

// const foo = ()=>{
//     console.log("I'm the function 'foo'");
// }
// const bar = (param1)=>{
//     console.log("I'm about to execute a callback");
//     param1();
// }
// bar(foo);


// const foo = ()=>{
//     console.log("I'm the function 'foo'");
// }
// const awesome = ()=>{
//     console.log("I'm the function 'awesome'");
// }
// const bar = (param1)=>{
//     console.log("I'm about to execute a callback");
//     param1();
// }
// bar(foo);
// bar(awesome);

// const bar = (param1)=>{
//     console.log(param1);
//     console.log("I'm about to execute a callback");
//     param1();
// }
// bar(()=>{
//     console.log("I'm the function 'foo'");
// });
// bar(()=>{
//     console.log("I'm the function 'awesome'");
// });

// const electricMixer = (attachment) => {
//   console.log("This mixer is now: " + attachment());
// }
//
// const attachment = () => {
//   return "Mixing";
// }
//
// const myNewAttachment = () => {
//   return "Dissolving";
// }
//
// electricMixer(myNewAttachment);

// electricMixer(attachment);
// electricMixer(() => { return "spiralizing"; });

// setTimeout(() => { console.log('hi'); }, 2000);
// setInterval(() => { console.log('hi');}, 2000);
let num = 1;
setInterval(() => {
  console.log(num++)}, 1000);
