class DivThree extends React.Component {
  render() {
    return (
      <div>
        <h3 onClick={ () => this.props.changeIt(this.props.name)}>{this.props.name}</h3>
      </div>
    )
  }
}

class DivTwo extends React.Component {
  render() {
    return (
      <div>
        <DivThree changeIt={this.props.changeIt} name={this.props.name} />
        <DivThree changeIt={this.props.changeIt} name={this.props.name} />
      </div>
    )
  }
}

class DivOne extends React.Component {
  render() {
    return (
      <div>
        <DivTwo changeIt={this.props.changeIt} name={this.props.name} />
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        tardis: {
          name: 'Time and Relative Dimension in Space',
          caps: false,
      }
    }
    this.changeIt = this.changeIt.bind(this);
  }
  changeIt(text) {
    if (this.state.tardis.caps){
      this.setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      this.setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }
  render() {
    return (
        <DivOne changeIt={this.changeIt} name={this.state.tardis.name}/>
    )
  }
}


ReactDOM.render(
  <App />,
  document.querySelector(".container")
);
