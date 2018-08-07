class Furniture extends React.Component {
  render() {
    return (
        <li>
          {this.props.piece}
          { (this.props.made) ? null : <button onClick={() => (this.props.restore(this.props.id))}>Restoration Advice</button> }
        </li>
    )
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newPiece: "",
      furniture: [
        {
          piece: "Grandma's Favorite Chair",
          recommendationMade: false,
          id: 1
        },
        {
          piece: 'Grand Armoire',
          recommendationMade: false,
          id: 2
        },
        {
          piece: 'Fainting Couch',
          recommendationMade: false,
          id: 3
        },
        {
          piece: 'Fabergé Egg',
          recommendationMade: false,
          id: 4
        }
      ]
    }
    this.restore = this.restore.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  restore (index) {
    const copy_array = this.state.furniture;
    copy_array[index - 1] = {
      piece: `Paint ${copy_array[index -1 ]["piece"]} white`,
      recommendationMade: true,
      id: index
    };
    this.setState({furniture: copy_array});
  }
  handleChange(event) {
    this.setState({newPiece: event.target.value})
    console.log(event.target.value);
  }
  handleSubmit(event) {
    event.preventDefault();
    // console.log("Handled");
    const update_array = this.state.furniture;
    const new_item = {
      piece: this.state.newPiece,
      recommendationMade: false,
      id: update_array.length + 1
    }
    update_array.push(new_item);
    this.setState({furniture: update_array});
  }
  render() {
    return (
      <div className="container">
        <h1 className="shop-name">Heirloom Furniture Restoration</h1>
        <form onSubmit={this.handleSubmit}>
          <label for="newPiece" />
          <input type="text" id="newPiece" onChange={this.handleChange} value={this.newPiece}/>
          <input type="submit" />
        </form>
        <ul>
          {this.state.furniture.map( (fp) => <Furniture piece={fp.piece} made={fp.recommendationMade} restore={this.restore} id={fp.id}/> )}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("main")
);
