# Array Methods with Callbacks

## Lesson Objectives

1. Define and understand the various different callback methods that can be used on an array.
2. Understand what each method does and when we might want to use it.

**Question: What array methods have we used before?**

### Callback Methods

1. Every
1. Filter
1. Find
1. Find Index
1. For Each
1. Map
1. Reduce
1. Some
1. Sort

## What is an Array Method with a Callback?

An array method that accepts with a callback is executes a function on the element of the given array and returns some output.

**Okay...but what does that mean?**

Lets take a look:

``` const iceCream = ['Vanilla','Chocolate','Strawberry','Rocky Road'];```

What if I want to go over each item in this array and add the word Ice Cream to these items?

... How would you solve this?

Lucky for us we have the `.map` method.

```
const iceCream = ['Vanilla','Chocolate','Strawberry','Rocky Road'];

var updateIceCream = iceCream.map(x => x +" Ice Cream");

console.log(updateIceCream);
```

*What is happening here?**


## Now you try
### Activity - 30 mins

With the following arrays, define and perform the previous methods. Each group will then be assigned a method to teach to the class.

const classArray = ['Javascript','HTML','CSS','Data Analysis', 'Marketing', 'Database Design', 'Visual Design'];

const numberArray =  [31, 203, 30, 84, 5, 62, 770, 8, 99, 10, 0];
