
const addH2 = () => {
  let $h2 = $("<h2>").text("Just getting started");
  $("body").append($h2);
}

const changeH2 = () => {
  $("h2").text("YOLO bro, yolo.");
}

const byeH2 = () => {
  $("h2").remove();
  $("body").append( $("<img>").attr("src", "https://i.redditmedia.com/z2Ql7czargFHKd5P7MF6ibiFxxnuFoycAUrEWwJFbGg.jpg?s=4f3dc6fba2d3590db280e3d5f440886a") );
}

const randColorRGB = () => {
  const red = Math.floor( Math.random() * 256 );
  const green = Math.floor( Math.random() * 256 );
  const blue = Math.floor( Math.random() * 256 );
  // return "rgb(" + red + ", " + green + ", " + blue + ")";
  return `rgb( ${red}, ${green}, ${blue})`;
}

const generateSquares = (num) => {
  for(let i = 1; i <= num; i++){
    // console.log(i);
    // console.log(randColorRGB());
    $("body").append( $("<div>").addClass("square")
                                .css("background-color", randColorRGB() )
                                .text(i)
                                .attr("id", "square" + i) );
  }
}

const buildTable = (myArray) => {

  $myTable = $("<table>");
  for(let i = 0; i < myArray.length; i++){
    // const $myRow = $("<tr>");
    // const $myName = $("<th>").text(myArray[i].name).addClass("name");
    // const $myAddress = $("<th>").text(myArray[i].address).addClass("address");
    // $myRow.append($myName).append($myAddress);
    //
    // $myTable.append( $myRow );
  }
  $("body").append($myTable);

}

const data = [
  { name: "Megatron", address: "Cybertron" },
  { name: "Some guy", address: "Some street" },
  { name: "Grace Hopper", address: "Arlington, Virginia" },
  { name: "Ching Shih", address: "The High Seas" },
  { name: "Slimer", address: "The Library" },
  { name: "Umbra", address: "The Void" },
  { name: "Hypatia", address: "The Neoplatonic school at Alexandria" },
  { name: "Matt Huntington", address: "Remote" },
  { name: "Ronald McDonald", address: "I simply do not know" },
  { name: "Jem", address: "Starlight Music" }
];


const populateData = () => {

  for( let i =0; i < data.length; i++){
    // console.log(data[i]);
    const $infoContainer = $("<div>").addClass("info-container");
    const $nameDiv = $("<div>").addClass("name").text(data[i].name);
    const $addressDiv = $("<div>").addClass("address").text(data[i].address);
    $infoContainer.append($nameDiv);
    $infoContainer.append($addressDiv);
    $("body").append($infoContainer);
  }
}

const addData = (name, address) => {
  data.push( {name: name, address: address });
  $("body").empty();
  populateData();
}

const findData = (name) => {
  for(let i = 0; i < data.length; i++){
    if(data[i].name === name){
      return i;
    }
  }
  return -1;
}


const removeData = (name) => {
  if(findData(name) === -1){
    return;
  }
  
  data.splice(findData(name), 1);
  $("body").empty();
  populateData();
}


$( () => {
  // generateSquares(1001);

  populateData();
  addData("Karolin", "NY");
  removeData("Some guy");
  // buildTable(data);


}); //End of On Ready Function */
