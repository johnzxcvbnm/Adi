class DivThree extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.state;
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
      <div>
        <h3 onClick={ () => this.changeIt(this.state.tardis.name)}>{this.state.tardis.name}</h3>
      </div>
    )
  }
}

class DivTwo extends React.Component {
  render() {
    return (
      <div>
        <DivThree state={this.props.state} changeIt={this.props.changeIt} name={this.props.name} />
        <DivThree state={this.props.state} changeIt={this.props.changeIt} name={this.props.name} />
      </div>
    )
  }
}

class DivOne extends React.Component {
  render() {
    return (
      <div>
        <DivTwo state={this.props.state} changeIt={this.props.changeIt} name={this.props.name} />
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
        <DivOne state={this.state} changeIt={this.changeIt} name={this.state.tardis.name}/>
    )
  }
}


ReactDOM.render(
  <App />,
  document.querySelector(".container")
);
