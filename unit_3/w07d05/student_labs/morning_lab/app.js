const app = angular.module("myApp", []);

app.controller("mainController", function(){
  this.test = "YOLO";

  this.myArt = (art) => {
    return art === "Lil Wayne";
  }

  this.track = {
    Artist: "Run-D.M.C.",
    Title: "My Adidas",
    Lyric: "My Adidas walk through concert doors/And roam all over coliseum floors."
  }

  this.tracks = [
    {
      Artist: "J. Cole",
      Title: "Villematic",
      Lyric: "You hate it before you played it. I already forgave ya."
    },
    {
      Artist: "Snoop Dogg" ,
      Title: "Gin and Juice",
      Lyric: "Rollin' down the street, smokin' indo, sippin' on gin an juice/Lay back with my mind on my money and my money on my mind."
    },
    {
      Artist: "Lil Wayne",
      Title: "I Feel Like Dying",
      Lyric: "I can mingle with the stars and throw a party on Mars/I am a prisoner, locked up behind Xanax bars "
    },
    {
      Artist: "Lil Wayne",
      Title: "6 Foot, 7 Foot",
      Lyric: "Real gs move in silence like lasagna."
    },
    {
      Artist: "Notorious B.I.G.",
      Title: "Juicy",
      Lyric: "We used to fuss when the landlord dissed us/No heat. Wonder why Christmas missed us/Birthdays was the worst days/Now we sip champagne when we thirst-ay."
    },
    {
      Artist: "Grandmaster Flash & the Furious Five",
      Title: "The Message",
      Lyric: "Don't push me cause I'm close to the edge/I'm trying not to lose my head/It's like a jungle. Sometimes it makes me wonder/How I keep from goin' under."
    },
    {
      Artist: "Elzhi",
      Title: "Hands Up",
      Lyric: "Put your hands where I can see 'em, so they look like 12 PM"
    },
    {
      Artist: "Cypress Hill",
      Title: "Insane in the brain",
      Lyric: "Cops, come and try to snatch my crops"
    }
  ];
});
