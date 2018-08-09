let tardis = {
  name: 'Time and Relative Dimension in Space',
  caps: false,
};

class DivTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tardis: props.tardis
    }
    this.changeIt = this.changeIt.bind(this);
    this.myUpdate = this.myUpdate.bind(this);
  }

  changeIt(text) {
    console.log("changeIt ", text);
    if (this.state.tardis.caps) {
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

  myUpdate() {
    this.props.update("Updated!")
  }

  render () {
    return (
      <div>
        <h3 onClick={() => this.changeIt(this.state.tardis.name)}>DivTwo: {this.state.tardis.name}</h3>
        <button onClick={this.myUpdate}>Update DivOne!</button>
      </div>
    )
  }
}

class DivOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tardis: props.tardis
    }
    this.changeIt = this.changeIt.bind(this);
    this.update = this.update.bind(this);
  }

  update(text) {
    this.setState({
      tardis: {
        name: text,
        caps: false
      }
    })
  }

  changeIt(text) {
    console.log("changeIt ", text);
    if (this.state.tardis.caps) {
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

  render () {
    return (
      <div>
        <h3 onClick={() => this.changeIt(this.state.tardis.name)}>DivOne: {this.state.tardis.name}</h3>
        <DivTwo tardis={this.state.tardis} update={this.update} />
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tardis: tardis
    }
    this.changeIt = this.changeIt.bind(this);
  }

  changeIt(text) {
    console.log("changeIt ", text);
    if (this.state.tardis.caps) {
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

  render () {
    return (
      <div>
        <h3 onClick={() => this.changeIt(this.state.tardis.name)}>App: {this.state.tardis.name}</h3>
        <DivOne tardis={this.state.tardis} />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#container")
)
