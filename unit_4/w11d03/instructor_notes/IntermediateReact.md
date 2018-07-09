# Intermediate React

## Lesson Objectives

1. Create references to the tags in a component
1. Update child component properties with state values
1. Call parent component methods
1. Make AJAX requests within React
1. Handle component lifecycle events

## Create references to the tags in a component

The previous section for updating state can often be overly complex when dealing with multiple form elements, especially when all you need is a reference to the form elements' values when submitting the form

1. Change input to have a reference, instead of an event handler:

    ```html
    <input
        ref="username"
        type="text"
        placeholder="Your Name" />
    ```

1. Replace handleChangeName with a form submission handler that references the text input

    ```HTML
    <form onSubmit={this.handleFormSubmit}>
        {this.state.username}
        <input 
                ref="username"
                type="text"
                placeholder="Your Name"/>
        <input type="submit" value="Log In"/>}
    </form>
    ```

    ```JavaScript
    handleFormSubmit(event){
        event.preventDefault();
        this.setState({username:this.refs.username.value});
    }
    ```

1. Update constructor with correct event handler

    ```JavaScript
    constructor(props){
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = { username: "Not logged In" }
    }
    ```

## Update child component properties with state values

We can pass state values in as properties of child components

1. Create a Greeting component

    ```JavaScript
    class Greeting extends React.Component {
        render(){
            return <h1>Welcome {this.props.name}</h1>
        }
    }
    ```

1. Use Greeting component in Auth component

    ```JavaScript
    render(){
        return <form onSubmit={this.handleFormSubmit}>
            <Greeting name={this.state.username}></Greeting>
            <input
                ref="username"
                type="text"
                placeholder="Your Name" />
            <input type="submit" value="Log In" />
        </form>;
    }
    ```

## Call parent component methods

Sometimes you want to pass information to a parent component

1. Delete Greeting component class
1. Delete Greeting component instance within Auth JSX
1. You will no longer need state within Auth component

    ```JavaScript
    constructor(props){
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleFormSubmit(event){
        event.preventDefault();
    }
    ```

1. Create a Heading around the Auth Section

    ```JavaScript
    class Heading extends React.Component {
        render(){
            return <header>
                <h1>Welcome</h1>
                <Auth></Auth>
            </header>
        }
    }

    ReactDOM.render(
        <Heading></Heading>,
        document.querySelector('main')
    );
    ```

1. Create constructor for Heading with state properties for username

    ```JavaScript
    class Heading extends React.Component {
        constructor(props){
            super(props);
            this.state = { username: null }
        }
        render(){
            return <header>
                <h1>Welcome {this.state.username}</h1>
                <Auth></Auth>
            </header>
        }
    }
    ```

1. Create a method for Heading that will update the state

    ```JavaScript
    updateUsername(newName){
        this.setState({username: newName});
    }    
    ```

1. Bind updateUsername in constructor

    ```JavaScript
    constructor(props){
        super(props);
        this.state = { username: null }
        this.updateUsername = this.updateUsername.bind(this);
    }
    ```

1. Pass this function in as a property to Auth

    ```JavaScript
    render(){
        return <header>
            <h1>Welcome {this.state.username}</h1>
            <Auth onLogin={this.updateUsername}></Auth>
        </header>
    }    
    ```

1. When the Auth component handles the form submission, call that property/function

    ```JavaScript
    handleFormSubmit(event){
        event.preventDefault();
        this.props.onLogin(this.refs.username.value);
    }    
    ```

## Make AJAX requests within React

React doesn't have any built-in functionality to handle AJAX.  Either use jQuery, fetch, or some other library to handle this

1. Set up a form that logs value of input on submit:

    ```JavaScript
    class OMDBQueryForm extends React.Component {
        constructor(props){
            super(props);
            this.queryOMDB = this.queryOMDB.bind(this);
        }
        queryOMDB(event){
            event.preventDefault();
            console.log(this.refs.title.value);
        }
        render(){
            return <form onSubmit={this.queryOMDB}>
                <input
                    ref="title"
                    type="text"
                    placeholder="Movie Title" />
                <input type="submit" value="Find Movie Info" />
            </form>
        }
    }

    ReactDOM.render(
        <OMDBQueryForm></OMDBQueryForm>,
        document.querySelector('main')
    );    
    ```

1. When submitting, make request to OMBD

    ```JavaScript
    queryOMDB(event){
        event.preventDefault();
        fetch('http://www.omdbapi.com/?apikey=53aa2cd6&t=' + this.refs.title.value).then((response)=>{
            response.json().then((data)=>{
                console.log(data);
            });
        });
    }    
    ```

1. Create a component to handle movie data

    ```JavaScript
    class MovieInfo extends React.Component {
        render(){
            return <ul>
                <li>Title:</li>
                <li>Director:</li>
                <li>Actors:</li>
                <li>Year:</li>
                <li>Rated:</li>
            </ul>
        }
    }    
    ```

1. Add it to OMDBQueryForm

    ```JavaScript
    render(){
        return <form onSubmit={this.queryOMDB}>
            <input
                ref="title"
                type="text"
                placeholder="Movie Title" />
            <input type="submit" value="Find Movie Info" />
            <MovieInfo></MovieInfo>
        </form>
    }
    ```

1. Set up state for found movie

    ```JavaScript
    constructor(props){
        super(props);
        this.queryOMDB = this.queryOMDB.bind(this);
        this.state = { foundMovie: null }
    }    
    ```

1. Now we can set the state of the form appropriately

    ```JavaScript
    queryOMDB(event){
        event.preventDefault();
        fetch('http://www.omdbapi.com/?apikey=53aa2cd6&t=' + this.refs.title.value).then((response) => {
            response.json().then((data) => {
                this.setState({foundMovie: data});
            });
        });
    }
    ```

1. And pass on the variable to the MovieInfo component

    ```html
    <MovieInfo data={this.state.foundMovie}></MovieInfo>
    ```

1. Within the MovieInfo component, we can display the info appropriately

    ```JavaScript
    render(){
        return <ul>
            <li>Title: {this.props.data.Title}</li>
            <li>Director: {this.props.data.Director}</li>
            <li>Actors: {this.props.data.Actors}</li>
            <li>Year: {this.props.data.Year}</li>
            <li>Rated: {this.props.data.Rated}</li>
        </ul>
    }
    ```

1. We'll get an error on page load because this.props.data isn't defined initially.  Let's display the component conditionally

    ```JavaScript
    render(){
        return <form onSubmit={this.queryOMDB}>
            <input
                ref="title"
                type="text"
                placeholder="Movie Title" />
            <input type="submit" value="Find Movie Info" />
            {
                (this.state.foundMovie !== null)?
                    <MovieInfo data={this.state.foundMovie}></MovieInfo>
                :
                    null
            }
        </form>
    }
    ```

## Handle component lifecycle events

A component has specific moments in its life:

1. It is created
1. It is updated
1. It is destroyed

We can perform actions during each of these moments.  Let's create an app that just counts down starting at 100.

1. Create the setup code:

    ```JavaScript
    class Counter extends React.Component {
        render(){
            return <section>
                The value:
            </section>
        }
    }

    ReactDOM.render(
        <Counter></Counter>,
        document.querySelector('main')
    );    
    ```

1. Create a state property for the count

    ```JavaScript
    class Counter extends React.Component {
        constructor(props){
            super(props)
            this.state = { count: 100 }
        }
        render(){
            return <section>
                The value: {this.state.count}
            </section>
        }
    }
    ```

1. Once the component has loaded, we want to call a function every 1000 milliseconds:

    ```JavaScript
    componentDidMount(){
        window.setInterval(
            ()=>{
                console.log('tick');
            },
            1000
        )
    }
    ```

1. The problem is that `this` is not correctly bound

    ```JavaScript
    componentDidMount(){
        window.setInterval(
            ()=>{
                console.log(this);
            },
            1000
        )
    }    
    ```

1. Let's use an arrow function

    ```JavaScript
    componentDidMount(){
        window.setInterval(
            () => {
                console.log(this);
            },
            1000
        )
    }    
    ```

1. Now we can decrement the state property

    ```JavaScript
    componentDidMount(){
        window.setInterval(
            () => {
                this.setState({ count: (this.state.count - 1) });
            },
            1000
        )
    }
    ```

1. Let's create a container that will bring the counter into existence:

    ```JavaScript
    class Container extends React.Component {
        render(){
            return <Counter></Counter>
        }
    }

    ReactDOM.render(
        <Container></Container>,
        document.querySelector('main')
    );    
    ```

1. Now were going to create a button that will create the counter and create a state property which will determine whether or not to show the counter

    ```JavaScript
    class Container extends React.Component {
        constructor(props){
            super(props)
            this.state = { buttonExists: false }
        }
        render(){
            return <section>
                <button>Toggle Counter</button>
                {
                    (this.state.buttonExists)?
                        <Counter></Counter>
                    :
                        null
                }
            </section>
        }
    }    
    ```

1. When the button is pressed, it toggles the counter's existence

    ```JavaScript
    class Container extends React.Component {
        constructor(props){
            super(props)
            this.state = { buttonExists: false }
            this.toggleButton = this.toggleButton.bind(this); //bind function
        }
        toggleButton(){ //create function
            this.setState({buttonExists: !this.state.buttonExists});
        }
        render(){ //add onClick listener
            return <section>
                <button onClick={this.toggleButton}>Toggle Counter</button>
                {
                    (this.state.buttonExists)?
                        <Counter></Counter>
                    :
                        null
                }
            </section>
        }
    }    
    ```

1. You'll notice we get a warning because the interval still exists, even though the component does not.  Let's create a pointer so that the interval can be cleared

    ```JavaScript
    componentDidMount(){
        this.timerID = window.setInterval(
            () => {
                this.setState({ count: (this.state.count - 1) });
            },
            1000
        )
    }
    ```

1. And now clear the interval when the component is destroyed

    ```JavaScript
    componentWillUnmount(){
        clearInterval(this.timerID);
    }    
    ```

1. Lastly, if some prop/state property is updated on the component, we can perform an action.

    ```JavaScript
    componentDidUpdate(previousProps, previousState){
        console.log('This component has changed.  The previous count was: ' + previousState.count);
    }    
    ```
