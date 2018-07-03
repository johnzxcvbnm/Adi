# 🎙️💰👟 Represent 🎙️💰👟

![](https://i.imgur.com/GquWxXI.png)

> Get your AngularJS data **represent**ed correctly.
>
> Data in `app.js` --> represented in `index.html`


### Directions

* Include the Angular CDN
* Set up the **module / app** bound to the `html` tag
* Set up the **controller** bound to the `body` tag

* Model the following data in your Angular controller, and display it on the page according to the appropriate directive.


### Data

Display all three values of the following data object on the webpage.

```javascript
  this.track = {
    Artist: "Run-D.M.C.",
    Title: "My Adidas",
    Lyric: "My Adidas walk through concert doors/And roam all over coliseum floors."
  }
```

**this.track** is singular because it represents one track object. Below is **this.tracks**, plural, because it represents many track objects (in an array). Use a repeat to display all of these tracks on your page.

```javascript
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
```

Within the repeat, make it so that the track will only display the "lyric" value **if** the Artist is Lil Wayne.

## Reference: Directives

* `ng-app`
* `ng-controller='ControllerName as obj`
* `{{ }}`
* `ng-repeat`
* `ng-if`


## Bonus

Create a new app (new index.html, new app.js)
- Make a clicker counter
- display the number 0
- make a button that every time you click, the value goes up on the display by 1
- make a button that every time you click, the value on the display goes down
- make a reset button that resents the counter to 0
- if the counter shows a negative number change the css to have a background color that is red or red-ish. 
