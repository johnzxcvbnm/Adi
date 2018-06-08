class Pet {
  constructor(owner, name){
    this.owner = owner;
    this.name = name;
  }
  walk() { console.log("Walka Walka"); }
}

const james = new Pet("John", "Jameson");
// console.log(james);
// james.walk();

class Dog extends Pet {
  constructor(owner, name){
    super(owner, name);
    this.price = 20;
  }
  bark() { console.log("Bark"); }
  chaseTail() { console.log("Oh boy oh boy oh boy"); }
  getPrice() { return this.price; }
}

const patches = new Dog("John", "Patches");
// console.log(patches);
// patches.walk();
// patches.bark();
// patches.chaseTail();
// console.log(patches.getPrice());

class Cat extends Pet {
  constructor(owner, name){
    super(owner, name);
    this.price = 10;
  }
  purr() { console.log("purrrr"); }
  clean() { console.log("Cleaning"); }
  getPrice() { return this.price; }
  walk() { console.log("Strut Strut"); }
}

const louie = new Cat("John", "Louie");
// console.log(louie);
// louie.purr();
// louie.clean();
// console.log(louie.getPrice());
// louie.walk();

// patches.price = 100;
// console.log("Patches is worth: " + patches.getPrice());
// louie.price = 1000;
// louie.name = "Black Cat";
// console.log(louie);
// console.log("Louie is worth: " + louie.getPrice());

// class Card {
//   constructor(value, face, suit)
//   {
//     this.value = value;
//     this.face = face;
//     this.suit = suit;
//     this.faceUp = true;
//   }
// }

// class Deck {
//   constructor(){
//     this.cards = [];
//     this.buildDeck();
//   }
//   buildDeck() {
//     const myCard = new Card(0, " ", " ");
//
//     for(let i = 0; i < 4; i++){
//       switch(i){
//         case 0: myCard.suit = "Hearts";
//         break;
//         case 1: myCard.suit = "Diamonds";
//         break;
//         case 2: myCard.suit = "Spades";
//         break;
//         case 3: myCard.suit = "Clubs";
//       }
//
//       for(let x = 1; x < 14; x++){
//         switch(x){
//           case 1: myCard.value = 11;
//                   myCard.face = "Ace";
//                   break;
//           case 11: myCard.value = 10;
//                    myCard.face = "Jack";
//                    break;
//           case 12: myCard.value = 10;
//                    myCard.face = "Queen";
//                    break;
//           case 13: myCard.value = 10;
//                    myCard.face = "King";
//                    break;
//           default: myCard.value = x;
//                    myCard.face = x;
//                    break;
//         }
//         this.cards.push( myCard );
//
//       }
//     }
//   }
//   swap(card1, card2) {
//     const temp = this.cards[card1];
//     this.cards[card1] = this.cards[card2];
//     this.cards[card2] = temp;
//   }
//   shuffle(){
//     for(let i = 0; i < 52; i++){
//       this.swap(Math.floor(Math.random * this.cards.length), Math.floor(Math.random * this.cards.length));
//     }
//   }
// }

class Deck {
  constructor(){
    this.cards = [];
    this.buildDeck();
  }
  buildDeck() {
    let value = 0;
    let face = "";
    let suit = "";
    let faceUp = true;

    for(let i = 0; i < 4; i++){
      switch(i){
        case 0: suit = "Hearts";
        break;
        case 1: suit = "Diamonds";
        break;
        case 2: suit = "Spades";
        break;
        case 3: suit = "Clubs";
      }

      for(let x = 1; x < 14; x++){
        switch(x){
          case 1: value = 11;
                  face = "Ace";
                  break;
          case 11: value = 10;
                   face = "Jack";
                   break;
          case 12: value = 10;
                   face = "Queen";
                   break;
          case 13: value = 10;
                   face = "King";
                   break;
          default: value = x;
                   face = x;
                   break;
        }
        this.cards.push( {value: value, face: face, suit: suit, faceUp: faceUp} );

      }
    }
  }
  swap(card1, card2) {
    const temp = this.cards[card1];
    this.cards[card1] = this.cards[card2];
    this.cards[card2] = temp;
    // const temp = { value: this.cards[card1], face: this.cards[card1], suit: this.cards[card1], faceUp: this.cards[card1] };
    // this.cards[card1].value = this.cards[card2].value;
    // this.cards[card1].face = this.cards[card2].face;
    // this.cards[card1].suit = this.cards[card2].suit;
    // this.cards[card1].faceUp = this.cards[card2].faceUp;
    // this.cards[card2].value = temp.value;
    // this.cards[card2].face = temp.face;
    // this.cards[card2].suit = temp.suit;
    // this.cards[card2].faceUp = temp.faceUp;
  }
  shuffle(){
    // for(let i = 0; i < this.cards.length; i++){
    //   let randomOne = Math.floor(Math.random() * this.cards.length);
    //   let randomTwo = Math.floor(Math.random() * this.cards.length);
    //   console.log("Random one is: " + randomOne);
    //   console.log("Random two is: " + randomTwo);
    //
    //   // this.swap(randomOne, randomTwo);
    // }
    for(let i = 0; i < 52; i++){
      // this.swap(i, this.cards.length - 1 - i);
      this.swap(Math.floor(Math.random() * this.cards.length), Math.floor(Math.random() * this.cards.length));
    }
  }
}

const myDeck = new Deck();
myDeck.shuffle();
console.log(myDeck.cards);
console.log(myDeck.cards.length);
// console.log(myDeck.cards);
