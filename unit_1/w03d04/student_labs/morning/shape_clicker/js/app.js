
$( () => {
  let myCount = 1;
  const myClass = ["triangle", "circle", "square", "triangle-down", "octagon", "heart"];

  const genShape = ($myTarget, shape) => {
    $myTarget.removeClass().addClass(shape);
  }

  const toggleBackground = (event) => {
    $(event.currentTarget).toggleClass('focus');
  }

  const turnOff = () => {
    for(let i of myClass){
      $("." + i).off("click", change);
    }
  }

  const turnOn = () => {
    turnOff();
    for(let i of myClass){
      $("." + i).on("click", change);
    }
  }

  const change = (event) => {
    genShape($(event.currentTarget), myClass[myCount++]);
    turnOn();

    if(myCount == myClass.length){
      myCount = 0;
    }

  }

  turnOn();
});//End of Document Ready Function
