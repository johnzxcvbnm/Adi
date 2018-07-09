# Intro to React

# Lesson Objectives

1. Define what React Is
1. Describe how react differs from most other front-end frameworks
1. Create a basic component
1. Assign JSX to a variable
1. Embed an expression into JSX
1. Create multi-line JSX variables
1. Create a custom component
1. Customize an instance of a component with properties
1. Handle user events
1. Conditionally render HTML
1. Create multiple elements from an array
1. Pass properties to children
1. Customize a component by using the tag's content
1. Change a component's state through interaction
1. Pass State to Child Component
1. Separate Components into their own files

## Define what React Is

React is a front-end framework which is designed to make building a Single Page JavaScript Application easier

## Describe how react differs from most other front-end frameworks

- Most other front-end frameworks attempt to separate data from presentation in some kind of an MVC structure
    - For example
        - One set files for HTML (View)
        - One set of files for your Controllers
        - One set of files for your Models (data)
    - Great for teams where developers specialize on one technology (CSS or JavaScript)
- React puts all the Views, Controllers, and Models for one small section of the application together into one file
    - Great for teams where one developer handles just a small section of the application and that's it

## Create a basic component

### HTML

Let's set up the HTML

```HTML
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <title></title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.2/umd/react-dom.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
        <script type="text/babel" src="js/app.js"></script>
    </head>
    <body>
        <main></main>
    </body>
</html>
```

Let's talk about all those script tags

- react.js
    - The core React functionality
    - React can be used for applications that aren't in the browser
        - so it's separated out from code that deals with the browser
- react-dom.js
    - This allows the core React js to work with the browser's DOM
- browser.min.js (babel-core)
    - Babel is a transpiler that will translate ES6 code to ES5
    - it also handles turning JSX into regular JS

### JS

- Let's create a component which is just an H1 tag
- We'll insert it into the `main` tag of our html

```JavaScript
ReactDOM.render(
  <h1 className="foo">Hello, world!</h1>,
  document.querySelector('main')
);
```

- This code will find the main tag and render an `h1` tag inside of it
    - **NOTE** we can't set class with the `class` attribute anymore
        - We have to use className so it doesn't get confused
        - All other attributes should work normally
- React mixes HTML with JavaScript (JSX)
    - Notice that the HTML does not have quotes or backticks around it

use `python -m SimpleHTTPServer` to start a basic server for our code

## Assign JSX to a variable

JSX just renders into regular JavaScript, so we can assign it to variable:

```JavaScript
const myJSX = <h1>Hello, World!</h1>

ReactDOM.render(
  myJSX,
  document.querySelector('main')
);
```

## Embed an expression into JSX

We can create variables and insert them into our JSX:

```JavaScript
const user = "Matt";
const myJSX = <h1>Hello, {user}!</h1>

ReactDOM.render(
  myJSX,
  document.querySelector('main')
);
```

We can even execute functions inside the `{}`

```JavaScript
const formatUser = (user)=>{
    return user + "!!"
}
const user = "Matt";
const myJSX = <h1>Hello, {formatUser(user)}</h1>

ReactDOM.render(
  myJSX,
  document.querySelector('main')
);
```

## Create multi-line JSX variables

JSX can be split onto multiple lines:

```JavaScript
const formatUser = (user)=>{
    return user + "!!"
}
const user = "Matt";
const myJSX =
    <section>
        <h1>Hello, {formatUser(user)}</h1>
        Welcome to the app
    </section>

ReactDOM.render(
  myJSX,
  document.querySelector('main')
);
```

## Create a custom component

With JSX, we can create our own tags!!

```JavaScript
class Heading extends React.Component {
    render() {
        return <h1>Hello, World!</h1>;
    }
}

ReactDOM.render(
    <Heading></Heading>,
    document.querySelector('main')
);
```

- This mimics what is going on with Web Components
- The idea is that we can write our own custom tags, which are much more semantic, and they will render as regular HTML

Now that our Heading code has been encapsulated as component, it is easy to reuse:

```JavaScript
class Heading extends React.Component {
    render() {
        return <h1>Hello, World!</h1>;
    }
}

ReactDOM.render(
    <section>
        <Heading></Heading>
        <Heading></Heading>
    </section>,
    document.querySelector('main')
);
```

**NOTE: There must be one single top level element for JSX, you can't have two siblings be at the top of that component**

## Customize an instance of a component with properties

We can customize each instance of a component with properties

```JavaScript
class Heading extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

ReactDOM.render(
    <section>
        <Heading name="Matt"></Heading>
        <Heading name="Helen"></Heading>
    </section>,
    document.querySelector('main')
);
```

## Handle user events

We can handle user events (clicks, hover, etc) by defining event handlers and registering them right on the element:

```JavaScript
const sayHello = () => {
    alert("oh hai");
}

class Heading extends React.Component {
    render() {
        return <h1 onClick={sayHello}>Hello, {this.props.name}!</h1>;
    }
}

ReactDOM.render(
    <section>
        <Heading name="Matt"></Heading>
        <Heading name="Helen"></Heading>
    </section>,
    document.querySelector('main')
);
```

It's a little more component-y if we make these functions part of the component, though:

```JavaScript
class Heading extends React.Component {
    sayHello() {
        alert("oh hai");
    }
    render() {
        return <h1 onClick={this.sayHello}>Hello, {this.props.name}!</h1>;
    }
}

ReactDOM.render(
    <section>
        <Heading name="Matt"></Heading>
        <Heading name="Helen"></Heading>
    </section>,
    document.querySelector('main')
);
```

What if we want to get at properties of the component?

```JavaScript
class Heading extends React.Component {
    sayHello() {
        console.log(this); //undefined?!?
    }
    render() {
        return <h1 onClick={this.sayHello}>Hello, {this.props.name}!</h1>;
    }
}

ReactDOM.render(
    <section>
        <Heading name="Matt"></Heading>
        <Heading name="Helen"></Heading>
    </section>,
    document.querySelector('main')
);
```

Normally, these event handlers don't have `this` bound correctly.  We have to manually do this:

```JavaScript
class Heading extends React.Component {
    constructor(props) {
        super(props);
        this.sayHello = this.sayHello.bind(this);
    }
    sayHello() {
        console.log(this.props);
        alert("My name is " + this.props.name);
    }
    render() {
        return <h1 onClick={this.sayHello}>Hello, {this.props.name}!</h1>;
    }
}

ReactDOM.render(
    <section>
        <Heading name="Matt"></Heading>
        <Heading name="Helen"></Heading>
    </section>,
    document.querySelector('main')
);
```

## Conditionally render HTML

Depending on some condition, you may want to render different HTML:

```JavaScript
class Heading extends React.Component {
    render() {
        if(this.props.userType === 'admin'){
            return <h1>Hello!  You are an admin</h1>;
        } else {
            return <h1>Hello!</h1>;
        }
    }
}

ReactDOM.render(
    <section>
        <Heading userType="admin"></Heading>
        <Heading></Heading>
    </section>,
    document.querySelector('main')
);
```

We've got some redundant code here, though.  We can use an inline ternary operator if we'd like:

```JavaScript
class Heading extends React.Component {
    render() {
        return <h1>
            Hello! {(this.props.userType==='admin')?'You are an admin':''}
        </h1>;
    }
}

ReactDOM.render(
    <section>
        <Heading userType="admin"></Heading>
        <Heading></Heading>
    </section>,
    document.querySelector('main')
);
```

You can also render JSX, conditionally:

```JavaScript
class Heading extends React.Component {
    render() {
        return <div>
            <h1>Hello!</h1>
            {
                (this.props.userType==='admin')?
                (
                    <em>You are an admin</em>
                ):
                null
            }
        </div>;
    }
}

ReactDOM.render(
    <section>
        <Heading userType="admin"></Heading>
        <Heading></Heading>
    </section>,
    document.querySelector('main')
);
```

## Create multiple elements from an array

If we have an array of values, we can generate JSX elements from it:

```JavaScript
const nums = [1,5,8,10];
class List extends React.Component {
    render() {
        return <ul>
            {nums.map((num) => (
                <li>{num}</li>
            ))}
        </ul>;
    }
}

ReactDOM.render(
    <List></List>,
    document.querySelector('main')
);
```

Each element that's being generated, must have a unique key to help React identify which elements have been changed, added, or removed:

```JavaScript
const nums = [1,5,8,10];
class List extends React.Component {
    render() {
        return <ul>
            {nums.map((num, index) => (
                <li key={index}>{num}</li>
            ))}
        </ul>;
    }
}

ReactDOM.render(
    <List></List>,
    document.querySelector('main')
);
```

## Pass properties to children

You can have components within components:

```JavaScript
const nums = [1,5,8,10];

class ListItem extends React.Component {
    render(){
        return <li>This is a list item</li>
    }
}

class List extends React.Component {
    render() {
        return <ul>
            {nums.map((num, index) => (
                <ListItem key={index}></ListItem>
            ))}
        </ul>;
    }
}

ReactDOM.render(
    <List></List>,
    document.querySelector('main')
);
```

To have the number show up, we simply create a property on the ListItem component

```JavaScript
const nums = [1,5,8,10];

class ListItem extends React.Component {
    render(){
        return <li>This is a list item: {this.props.number}</li>
    }
}

class List extends React.Component {
    render() {
        return <ul>
            {nums.map((num, index) => (
                <ListItem number={num} key={index}></ListItem>
            ))}
        </ul>;
    }
}

ReactDOM.render(
    <List></List>,
    document.querySelector('main')
);
```

## Customize a component by using the tag's content

If using the component's tag's attribute doesn't seem semantic, you can use the content of the tag.


```JavaScript
class Person extends React.Component {
    render() {
        return <div>
            The name of the person is {this.props.children}
        </div>;
    }
}

ReactDOM.render(
    <section>
        <Person>Bob</Person>
        <Person>Sally</Person>
    </section>,
    document.querySelector('main')
);
```

You can further customize the content with tags and additional HTML/JSX:

```JavaScript
class Person extends React.Component {
    render() {
        return <div>
            The name of the person is {this.props.children}
        </div>;
    }
}

ReactDOM.render(
    <section>
        <Person>
            <em>Bob</em>.  He is awesome.
        </Person>
        <Person>Sally.  All hail Sally</Person>
    </section>,
    document.querySelector('main')
);
```

## Change a component's state through interaction

We want to interact with a component, and have it visually change.  To do this, we use the component's "state"

1. Create a basic form:

    ```JavaScript
    class Auth extends React.Component {
        render(){
            return <form>
                <input type="text" placeholder="Your Name" />
                <input type="submit" value="Log In" />
            </form>;
        }
    }

    ReactDOM.render(
        <Auth></Auth>,
        document.querySelector('main')
    );
    ```

1. In the component's constructor function, initialize the state object:

    ```JavaScript
    constructor(props){
        super(props)
        this.state = { username: "Not logged In" }
    }
    ```

1. Display the component's state's username property:

    ```JavaScript
    render(){
        return <form>
            {this.state.username}<br/>
            <input type="text" placeholder="Your Name" />
            <input type="submit" value="Log In" />
        </form>;
    }
    ```

1. Create an event handler for changing the user name field:

    ```JavaScript
    handleChangeName(event){
        console.log('changed user name');
    }
    ```

1. Set up handleChangeName so that it can access instance properties:

    ```JavaScript
    constructor(props){
        super(props)
        this.handleChangeName = this.handleChangeName.bind(this);        
        this.state = { username: "Not logged In" }
    }
    ```

1. When the input field changes, call handleChangeName:

    ```JavaScript
    render(){
        return <form>
            {this.state.username}<br/>
            <input
                onChange={this.handleChangeName}
                type="text"
                placeholder="Your Name" />
            <input type="submit" value="Log In" />
        </form>;
    }
    ```

1. Have handleChangeName update the component's state:

    ```JavaScript
    handleChangeName(event){
        this.setState({username:event.target.value});
    }
    ```

## Pass State to Child Component

You can pass state values to props of child components:

```JavaScript
render(){
    return <form>
        <Greeting name={this.state.username}></Greeting>
        <input
            onChange={this.handleChangeName}
            type="text"
            placeholder="Your Name" />
        <input type="submit" value="Log In" />
    </form>
}
```

Create a component to receive state values

```JavaScript
class Greeting extends React.Component{
    render(){
        return <h1>{this.props.name}</h1>
    }
}
```

## Separate Components into their own files

`/js/greeting.js`:

```JavaScript
class Greeting extends React.Component{
    render(){
        return <h1>{this.props.name}</h1>
    }
}
```

`/js/auth.js`:

```JavaScript
class Auth extends React.Component {
    constructor(props){
        super(props);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.state = { username: "Not logged In" }
    }
    handleChangeName(event){
        this.setState({username:event.target.value})
    }
    render(){
        return <form>
            <Greeting name={this.state.username}></Greeting>
            <input
                onChange={this.handleChangeName}
                type="text"
                placeholder="Your Name" />
            <input type="submit" value="Log In" />
        </form>
    }
}
```

`/js/app.js`:

```JavaScript
ReactDOM.render(
    <Auth></Auth>,
    document.querySelector('main')
)
```

Your HTML file:

```HTML
<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.3.2/umd/react.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/react-dom/16.3.2/umd/react-dom.production.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/6.26.0/babel.min.js"></script>
        <script type="text/babel" src="js/greeting.js"></script>
        <script type="text/babel" src="js/auth.js"></script>
        <script type="text/babel" src="js/app.js"></script>
    </head>
    <body>
        <main></main>
    </body>
</html>
```
