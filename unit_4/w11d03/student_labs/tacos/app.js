//TacoDisplay is used to display each Section of the taco
class TacoDisplay extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <h4>{this.props.subname}</h4>
        <p>{this.props.recipe}</p>
      </div>
    )
  }
}

//TacoHelper is used display all the different TacoDisplays that we need
class TacoHelper extends React.Component {
  render() {
    return (
      <div>
        <TacoDisplay name="Base Layer"
            subname={this.props.taco.base_layer.name}
            recipe={this.props.taco.base_layer.recipe} />
        <TacoDisplay name="Condiment"
            subname={this.props.taco.condiment.name}
            recipe={this.props.taco.condiment.recipe} />
        <TacoDisplay name="Mixin"
            subname={this.props.taco.mixin.name}
            recipe={this.props.taco.mixin.recipe} />
        <TacoDisplay name="Seasoning"
            subname={this.props.taco.seasoning.name}
            recipe={this.props.taco.seasoning.recipe} />
        <TacoDisplay name="Shell"
            subname={this.props.taco.shell.name}
            recipe={this.props.taco.shell.recipe} />
      </div>
    )
  }
}

//TacoQuery pulls a random taco from the API and stores it in the state
class TacoQuery extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      taco: null
    }
    this.query = this.query.bind(this);
  }

  //Pull a random taco every time the button is pushed
  query(event){
    fetch('http://taco-randomizer.herokuapp.com/random/?full-tack=true').then((res) => {
      res.json().then((data) => {
        this.setState({ taco: data })
        console.log(data);
      })
    })
  }

  render() {
    return(
      <div>
        {/*Every time you press the button it loads a new taco*/}
        <button onClick={this.query}>Fetch!</button>
        {
          {/*If you haven't pulled a taco yet then don't display anything*/}
          {/*Used to prevent errors on page load*/}
          (this.state.taco !== null)?
            <TacoHelper taco={this.state.taco} />
          :
            null
        }
      </div>
    )
  }
}

//Used to render everything.  Kind of useless in this app
class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <TacoQuery />
    )
  }
}

//Render our code
ReactDOM.render(
  <App />,
  document.querySelector("main")
);
