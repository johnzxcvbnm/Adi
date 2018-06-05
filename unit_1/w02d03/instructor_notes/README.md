# CALLBACKS

---
Title: Callbacks<br>
Type: Lesson<br>
Duration: 1.5 hrs<br>
Creator: Thom Page<br>

---

## Lesson Objectives

* Use an anonymous function as an argument to another function
* Use a named function as an argument to another function
* Write a function to perform enumeration with a callback

---

## Passing a function as an argument

What datatypes can we pass as arguments to functions?

* strings
* numbers
* booleans
* arrays
* objects

Anything, really. We can also pass **functions** as arguments. A function received as a parameter can then be invoked within the receiving function.

Pseudocode passing a function

```javascript
exampleFunction = (ARGUMENT) => {
  // stuff: run the argument
}

exampleFunction(FUNCTION);
```

Proof 

```javascript
const exampleFunction = (callback) => {
  callback();
}

exampleFunction(() => { console.log('hi') });
```

Jargon: a function passed as an argument is a **callback**.

Callbacks are versatile, because they provide additional functionality to an existing function. That additional functionality can be anything at all.

They are used extensively in

* Event listeners in the DOM. Callbacks are used extensively in the DOM with event listeners: given an event, what functionality should occur?
* Javascript iterators -- **below**
* Server code, handling requests and reponses
* 'Asynchronous' patterns (such as setTimeout and setInterval) -- **below**

<br>
<hr>

	
# Electric Mixer

![electric mixer](https://i.pinimg.com/originals/14/b5/75/14b575bb9e064631727c7c1b8a30f06f.jpg)

A callback is like an electric mixer attachment. A mixer attachment _does_ something. Each attachment does something different: slice, dice, spiralize, all sorts of fancy things depending on the attachment. 

The electric mixer also _does_ something: it uses the mixer attachment.

1. Write a function `electricMixer` that takes one parameter named `attachment`. The `electricMixer` function should console log "This mixer is now: " plus the return value of the attachment.


2. Invoke `electricMixer` using an **anonymous function** as the argument. The return of the anonymous function should be a string that says: "spiralizing".


```javascript
const electricMixer = (attachment) => {	
  console.log("This mixer is now: " + attachment());
}
```

```javascript
electricMixer(() => { 
  return "spiralizing";
});
```

The callback function doesn't need to be anymous, we can give it a name and pass it as a reference:

```javascript
const spiralizer = () => {
  return "spiralizing";
}

electricMixer(spiralizer);
```

```javascript
const slicerDicer = () => {
  return "slicin' and dicin'";
}

electricMixer(spiralizer);
electricMixer(slicerDicer);
```

> Write an electricMixer function and write a new attachment for the mixer. Get your electric mixer to use the attachment.

## setInterval and setTimeout

We can still provide multiple arguments to a function even if one of those arguments is a function.

Pseudocode for **setInterval** and **setTimeout**

```javascript
functionName(CALLBACK, MILLISECONDS)
```



```javascript
setTimeout(() => {
  console.log('hi');
}, 2000);
```

```javascript
setInterval(() => {
  console.log('hi');
}, 2000);
```

> Use SetInterval to display a number that increases by 1 each second (it's a clock!)

<hr>

## forEach

**Problem:** Sick of writing for loops! Write it once and fuggedabout it. 

```javascript
const forEach = (arr) => {
	for (let elem in arr) {
		console.log(elem);
	}
}
```

Iterate over my arrays for me:

```javascript
forEach([1, 2, 3, 4, 5, 6]);
```

What if we want our iterator to do more than just console log? What if we want it to be able to do anything at all? We could pass it a function.

Write a function `forEach` that takes in two arguments: an array and a callback function.

`forEach` should run a loop over the incoming array. For each element, invoke the callback function to do something interesting with each element.

Your callback function could theoretically do anything with each array element. 

pseudocode -- invoking the forEach function

```javascript
forEach(ARRAY, CALLBACK);
```

Example invocations

```javascript
forEach([1, 2, 3], (elem) => { console.log(elem) });
```

```javascript
forEach([1, 2, 3], (whatevs) => { 
  if (whatevs % 2 == 0) {
    console.log('even number');
  }
});
```

```javascript
const forEach = (arr, callback) => {
  for (let i=0; i < arr.length; i++) {
    callback(arrayItem[i]);
  }
});
```


**Iterators**
 
Callbacks are used as arguments to **JavaScript iterators**. Iterators are a functional approach to looping.

```javascript
const arr = ["magnifying glass", "rupees", "compass", "map"];
```

There is a built-in forEach method for arrays! I want to use forEach to list each item.

The forEach function is going to want to know what process to perform on each item. For that, we pass it some functionality: a **callback**.

```
arr.forEach((item) => { console.log(item) });
```

Where does that **item** param come from? It comes from inside the `forEach` function. We can't look inside `forEach`, but we know that somewhere inside, it's invoking the function that we passed as an argument. Something like this:



We could provide any kind of interesting function to `forEach`.

<br>

#map

`.map` iterates over an array and saves transformations to a new variable.



## Lesson Objectives

1. Create a callback

## Create a callback

Let's examine a variable that is a function

```javascript
const foo = ()=>{
    console.log("I'm the function 'foo'");
}
console.log(foo);
```

We can pass a function into another function

```javascript
const foo = ()=>{
    console.log("I'm the function 'foo'");
}
const bar = (param1)=>{
    console.log(param1);
}
bar(foo);
```

Once we've done this, we can execute the function that is passed in as a parameter (called a callback)

```javascript
const foo = ()=>{
    console.log("I'm the function 'foo'");
}
const bar = (param1)=>{
    console.log("I'm about to execute a callback");
    param1();
}
bar(foo);
```

This is good because it allows us to perform some functionality and then do something unique once that's complete:

```javascript
const foo = ()=>{
    console.log("I'm the function 'foo'");
}
const awesome = ()=>{
    console.log("I'm the function 'awesome'");
}
const bar = (param1)=>{
    console.log("I'm about to execute a callback");
    param1();
}
bar(foo);
bar(awesome);
```

If we want, we don't even need to assign the functions to variables

```javascript
const bar = (param1)=>{
    console.log("I'm about to execute a callback");
    param1();
}
bar(()=>{
    console.log("I'm the function 'foo'");
});
bar(()=>{
    console.log("I'm the function 'awesome'");
});
```

This last form is very common.  For instance:

```javascript
setTimeout(()=>{
    console.log('hi');
}, 2000);
```
