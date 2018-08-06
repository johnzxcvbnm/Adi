class Test extends React.Component {
  render() {
    return <h1>YOLO</h1>;
  }
}

const receipts = [
  {
    person: 'Karolin',
    order: {
      main: 'Burrito',
      protein: 'Organic Tofu',
      rice: 'Purple Rice',
      sauce: 'Green Crack',
      toppings: [
        'Baby Bok Choy', 'Cucumber Kimchi'
      ],
      drink: 'Korchata',
      cost: 22
    },
    paid: false
  },
  {
    person: 'Mark',
    order: {
      main: 'Rice Bowl',
      protein: 'Ginger Soy Chix',
      rice: 'Sticky Rice',
      sauce: 'Korilla',
      toppings: [
        'Yuzu Pickled Sweet Pepper', 'Kale'
      ],
      drink: 'Korchata',
      cost: 19
    },
    paid: false
  },
  {
    person: 'Matt',
    order: {
      main: 'Salad Bowl',
      protein: 'Organic Tofu',
      rice: 'none',
      sauce: "K'lla",
      toppings: [
        'Blue Potato Salad', 'Pico De Gallo', 'Red Kimchi'
      ],
      drink: 'Sparkling Blood Orange Soda',
      cost: 20
    },
    paid: false
  }
]

const containerStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center"
};

const receiptStyle = {
  border: "3px solid red",
  margin: "20px",
  width: "27%",
  padding: "10px",
  minWidth: "250px"
}

class Receipt extends React.Component {
  constructor(props){
    super(props);
    this.now_paid = this.now_paid.bind(this);
  }
  now_paid() {
    this.props.receipt.paid = true;
    console.log("Paid");
    console.log(this.props.receipt.paid);
  }
  render () {
    console.log(this.props.receipt.paid);
    return (
      <div onClick={this.now_paid} style={receiptStyle}>
        <h2>{this.props.receipt.person}</h2>
        <h5><span>Main: </span>{this.props.receipt.order.main}</h5>
        <h5><span>Protien: </span>{this.props.receipt.order.protein}</h5>
        <h5><span>Rice: </span>{this.props.receipt.order.rice}</h5>
        <h5><span>Sauce: </span>{this.props.receipt.order.sauce}</h5>
        <h5><span>Drink: </span>{this.props.receipt.order.drink}</h5>
        <h5><span>Cost: </span>{this.props.receipt.order.cost}</h5>
      </div>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      receipts: receipts
    }
  }

  render () {
    return (
      <div>
        <h1 className="truck-name" style={{textAlign: "center"}}>Korilla</h1>
        <div className="container" style={containerStyle}>
          {this.state.receipts.map(receipt => receipt.paid ? null : <Receipt receipt={receipt} />)}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('main')
);
