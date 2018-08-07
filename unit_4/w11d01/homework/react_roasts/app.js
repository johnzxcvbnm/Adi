const coffees = [
  'Americano',
  'Café au lait',
  'Caffé Latte',
  'Caffé macchiato',
  'Cafe mocha',
  'Cappuccino',
  'Espresso',
  'Flat White',
  'Frappuccino',
  'Iced Coffee',
  'Instant coffee',
  'Irish coffee',
  'Turkish coffee'
]

const loc = "nyc";

const formatLoc = (l) => {
  return l.toUpperCase();
}

class ListCoffee extends React.Component {
  constructor(props){
    super(props);
    this.coffee = this.coffee.bind(this);
  }

  coffee(name) {
    console.log("I love " + name);
    alert("I love " + name);
  }

  render() {
    return (
      <li onClick={() => this.coffee(this.props.drink)}>{this.props.drink}: <span>{this.props.price}</span></li>
    )
  }
}

class Heading extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      coffees: coffees
    }
  }
  render() {
    return (
      <div className="container">
        <h1 className="shop-name">React Roasts Coffee Shop, {formatLoc(loc)}</h1>
        <h2>Our coffe will get your heart racing</h2>
        <ul>
          {this.state.coffees.map(coffee => <ListCoffee drink={coffee} price="$8.00"/>)}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <section>
    <Heading />
  </section>,
  document.querySelector('main')
);
