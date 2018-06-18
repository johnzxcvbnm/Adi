# URL and Query Parameters

## Lesson Objectives

1. Read URL parameters
1. Place routes in correct order

## Read URL parameters

Most of the time, we'll use segments in the path section of the URL to modify how our application works.

To do this, we'll use request parameters. To the user, it'll just look like an extension of the url path.

Let's think of Amazon again. With 300 million products and counting, hard coding a route for each product and keeping track of it all would be nightmarish.

We'll work with a simplified example. Imagine a store: `The Botany Express` that sells a few plants. Rather than having a dedicated route for each plant, the plants are stored as data (in our case an array of strings). We can access the data by passing in the index as a part of the request URL.

To set URL parameters in your `server.js` , just add a colon after the forward slash and then a variable name.

'Regular' URL:
`/plants`

URL parameter:
`/:index`

The entire route:

```js
app.get('/:index', (req, res) => {
    res.send(plants[req.params.index]);
});
```

We can access the value of `:index` with `req.params.index`

Let's code together to see this in action.

In `student_examples`:
- `mkdir express_plants`
- `cd express_plants`
- `touch server.js`
- `npm init`
- `npm i express`

```javascript
const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam', "Witches' Butter",];

app.get('/:index', (req, res) => {
    res.send(plants[req.params.index]);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});
```

Start up your server in terminal

Now visit http://localhost:3000/0 in your browser
> Monstera Deliciosa

Now visit http://localhost:3000/3 in your browser
> Witch's Butter

Note: http://localhost:3000
> error cannot GET (we didn't write a route for this)

Let's breakdown the contents of our localhost URL:

```
    http://localhost:3000/2
    \___/  \_______/ \__/ \_/
  protocol    host   port   path*           
```

Path can be a URL or a URL parameter: it will look the same in the browser. The difference will be in the server.



## Place routes in correct order

- Express starts at the top of your server.js file and attempts to match the url being used by the browser with routes in the order in which they're defined
- URL params (e.g. :foo, :example, :index) can be anything, a number, or even a string
  - Therefore if you have these routes in this order in your `server.js`:
    - `/:color`
    - `/plants`
  - And you want to get to `/plants` - you'll always hit the `/:color` route because the URL parameter will accept _any_ string, it doesn't know that `plants` is something specific/special
  - To fix this, we put the more specific routes first
    - `/plants`
    - `/:color`
  Now, from top to bottom, the more specific route `/plants` will be triggered when the URL has `plants` and if it doesn't match `plants`, it will go to the next route.


Let's code it together



```javascript
const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam',  "Witches' Butter",];

app.get('/:index', (req, res) => { //:index can be anything, even awesome
    res.send(plants[req.params.index]);
});

app.get('/awesome', (req, res) => { //this will never be reached
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});
```

If this happens, reorder them so that more specific routes come before less specific routes (those with params in them)

```javascript
const express = require('express');
const app = express();
const port = 3000;

const plants = ['Monstera Deliciosa', 'Corpse Flower', 'Elephant-Foot Yam',  "Witches' Butter",];

app.get('/awesome', (req, res) => {
  res.send(`
    <h1>Plants are awesome!</h1>
    <img src="https://static.boredpanda.com/blog/wp-content/uuuploads/plant-sculptures-mosaicultures-internationales-de-montreal/plant-sculptures-mosaicultures-internationales-de-montreal-14.jpg" >
  `);
});

app.get('/:index', (req, res) => {
    res.send(plants[req.params.index]);
});

app.listen(port,() => {
    console.log('listening on port' , port);
});
```

# Multiple Params

We can store multiple params in the `req.params` object:

&#x1F535; **Write in (5 min)**

```
app.get('/hello/:firstname/:lastname', (req, res) => {
	console.log(req.params);
	res.send('hello ' + req.params.firstname + ' ' + req.params.lastname);
});
```

* In your browser, go to `localhost:3000/bob/bobbybob`

&#x1F535; **Check the req.params console.log in Terminal**

![](https://i.imgur.com/xrq5rSu.png)

* Try entering different firstnames and lastnames in your URL and check the results

<br>
<hr>
4:00


# The Request object

This is just interesting, as well as informative, but not necessary to get anything to work.

What happens if we console.log the entire Request Object?

`console.log(req)`?

In the `hello/:firstname/:lastname` route, before `res.send`, write in:

```
  console.log('=========================================');
  console.log('This is the entire Request Object sent from the browser to the server: ');
  console.log(req);
  console.log('========================================');
```

This will allow you to see the **entire request object**. This object contains all of the information that the browser sends to the server. There's a ton of information in there!

![](https://i.imgur.com/fvmFn3x.png)


&#x1F535; **Activity (5 min)**

* In the browser, go to the firstname/lastname route
* Have a look through the entire request object in Terminal
* Find the `req.params` object within it. 
* The `req` object is where the `req.params` object is stored when the browser makes a request to the server.

`req.params` is an object nested within the `req` object.

`req.params` is the only one we will need for today.


# req.query

A query is a key-value pair separated with an `=`, and added to the URL with a `?`.

`?someKey=someValue`

```
localhost:3000/hello?title=duke
```

```javascript
app.get('/hello/:firstname', function(req, res) {
  console.log(req.params);
  console.log(req.query);
  res.send('hello ' + req.query.title + ' ' + req.params.firstname);
});
```

You can add multiple queries

```
localhost:3000/hello?title=duke?year=2001
```

Spaces are represented with a `%`.

<br>
<hr>
License
<hr>
