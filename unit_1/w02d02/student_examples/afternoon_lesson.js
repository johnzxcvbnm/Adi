// const foo = [
//     1,
//     "hi",
//     ()=>{
//         console.log('fun');
//     }
// ];
//
// foo[2]();


// const foo = {
//     someArray:[1,2,3]
// };
//
// for(element of foo.someArray){
//     console.log(element);
// }

// const foo = [
//     ["0,0", "0,1", "0,2"],
//     ["1,0", "1,1", "1,2"],
//     ["2,0", "2,1", "2,2"]
// ];
//
// for(row of foo){
//     for(element of row){
//         console.log(element);
//     }
// }

const bootcamp = {
  skills: ["html", "CSS", "JavaScript", "Functions", "Objects"],
  feeling: () => {console.log("Feeling good, feeling challenged!");}
}

// for(let skill of bootcamp.skills){
//   console.log(skill);
// }
//
// bootcamp.feeling();

// const foo = ()=>{
//     return ()=>{
//         console.log('whaaaa?');
//     }
// };
//
// foo()(); //logs 'whaaaa?'

const myWeekend = () => {
  return { day: "Saturday",
           myEvent: "Party Time" };
}

// console.log(myWeekend());

const myFavBand = () => {
  return {
    favBand: {
      band: "Theory of a Deadman",
      favSong: () => {return "Rx (Medicate)";}
    }
  };
}

// console.log(myFavBand().favBand.favSong());

const favFood = () => {
  return () => { console.log("Cheese Cake"); };
}

// favFood()();

// const foo = {
//     someMethod:()=>{
//         return {
//             someProperty: 'some value'
//         }
//     }
// };
//
// foo.someMethod().someProperty;

// const foo = {
//     someMethod:()=>{
//         return {
//             someArray: ['peach', 'apple', 'pear']
//         }
//     }
// }
//
// foo.someMethod().someArray[2]; //pear

// const foo = {
//     someMethod:()=>{
//         return {
//             someObject: {
//                 someProperty: 'some value'
//             }
//         }
//     }
// }
//
// foo.someMethod().someObject.someProperty; //some value

// const foo = {
//     someMethod:()=>{
//         return {
//             someMethod:()=>{
//                 console.log('both methods can have the same name!');
//             }
//         }
//     }
// }
//
// foo.someMethod().someMethod(); //logs 'both methods can have the same name!'

// const foo = {
//     someMethod:()=>{
//         return ()=>{
//             console.log('hi')
//         }
//     }
// }
// foo.someMethod()();//logs hi

// const foo = [
//     1,
//     'apple',
//     ()=>{
//         return {
//             someProperty: 'some value'
//         }
//     }
// ];
//
// foo[2]().someProperty; //some value
