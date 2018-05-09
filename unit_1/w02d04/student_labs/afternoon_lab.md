# Lab - Classes


## Car

1. Write a class called `Car`.<br>
2. New `Car` instances should have properties `make`, `model`, and `year`<br>
3. These properties will be given to a new `Car` when it is created; however, if `year` is not defined, it should default to being the current year. <br>
4. Create a new `Car` instance and store it inside a variable called `firstExampleCar`. Give it a `make` and `model` of "Ford" and "Fusion", and a year of 2010.<br>
5. Create another new `Car` instance and store it inside a variable called `secondExampleCar`. Give it a `make` and `model` but do not give it a year. Check to see what the year is on this `secondExampleCar`

## Create the following objects

1. Create a class for a Pet
    - attributes
        - owner - string
        - name - string
    - instantiating a new pet takes the pets name as a parameter and sets the attribute;
    - create one pet and log it

1. Create a class for a Dog
    - this should inherit from Pet
    - attributes
        - price - 20
    - methods
        - bark() - log "bark"
        - chaseTail() - log "oh boy oh boy oh boy"
        - getPrice() - return price
    - create a new dog and log it


1. Create a class for a Cat
    - this should inherit from Pet
    - attributes
        - price - 10
    - methods
        - purr() - log "purrrrr"
        - clean() - log "cleaning"
        - getPrice() - return price
    - create a new cat and log it



## Stretch

- Using classes, generate a deck of cards, stored in an array
- Figure out how to shuffle the array and `console.log` the top card
- Figure out how to compare the top and bottom card and `console.log` both cards and a message that says which card is bigger (or a tie)

