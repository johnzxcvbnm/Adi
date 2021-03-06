const birds = [
  {
    birdName: 'Royal Flycatcher',
    image: 'http://media.galaxant.com/000/072/608/desktop-1410170762.png',
    user: 'Veloria',
    approved: false
  },
  {
    birdName: 'Resplendent Quetzal',
    image: 'http://media.galaxant.com/000/072/604/desktop-1410170753.png',
    user: 'Allison',
    approved: false
  },
  {
    birdName: 'Livingstone\'s Turaco',
    image: 'http://media.galaxant.com/000/072/594/desktop-1410170731.png',
    user: 'Rosa',
    approved: true
  },
  {
    birdName: 'Superb Bird-of-paradise',
    image: 'http://www.funcage.com/blog/wp-content/uploads/2011/08/Superb-Bird-of-paradise.jpg',
    user: 'Alexander',
    approved: false
  },
  {
    birdName: 'Tweet_r',
    image: 'https://i.imgur.com/VGAxKX1.png',
    user: 'Debbie',
    approved: false
  },
  {
    birdName: 'King Vulture',
    image: 'https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/R-Z/Wacky%20Weekend/Strange%20Birds/ww-birds-king-vulture.adapt.945.1.jpg',
    user: 'Gibson',
    approved: true
  },
  {
    birdName: 'Secretary Bird',
    image: 'https://kids.nationalgeographic.com/content/dam/kids/photos/articles/Other%20Explore%20Photos/R-Z/Wacky%20Weekend/Strange%20Birds/ww-birds-secretary-bird.jpg',
    user: 'Harold',
    approved: true
  },
  {
    birdName: 'Frilled Coquette Hummingbird',
    image: 'https://78.media.tumblr.com/10ad7398c6cabffe666159b09bf50e57/tumblr_nzt5dl55QF1u38l26o1_500.jpg',
    user: 'Maude',
    approved: false
  },
  {
    birdName: 'Boat-billed Heron',
    image: 'https://i.redditmedia.com/sl3adn3eXY65Y4yNLxMRO_O4y-Pf1EYCxPuHpV34WqI.jpg?fit=crop&crop=faces%2Centropy&arh=2&w=640&s=f461fa6cd525892f85eb89268550867a',
    user: 'Bill',
    approved: true
  },
  {
    birdName: 'Ex-Parrot',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2014/07/14/15/MPP.jpg?w968h681',
    user: 'Monty',
    approved: false
  }
];

class Bird extends React.Component {
  render () {
    return (
      <div className='bird'>
        <h5> {this.props.bird.birdName} </h5>
        <img src={this.props.bird.image} />
        <h6>{this.props.bird.user}</h6>
      </div>
    )
  }
}

class BirdForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      birdname: '',
      image: '',
      user: ''
    }
    this.submitBird = this.submitBird.bind(this);
  }

  submitBird(event) {
    console.log("submitBird")
    event.preventDefault();
    this.props.addBird(
      this.refs.birdname.value,
      this.refs.image.value,
      this.refs.user.value
    )
  }

  render() {
    return(
      <form onSubmit={this.submitBird}>
        <input type='text' ref='birdname' placeholder="New Bird Name"/>
        <input type='text' ref='image' placeholder="Bird Image URL"/>
        <input type='text' ref='user' placeholder="User Name"/>
        <input type='submit' value="Submit New Bird"/>
      </form>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      birds: birds
    }
    this.addBird = this.addBird.bind(this);
  }

  addBird(birdname, image, user) {
    let newBird = {
      birdName: birdname,
      image: image,
      user: user,
      approved: false
    }
    let tempBirdArray = this.state.birds;
    tempBirdArray.push(newBird);
    this.setState({
      birds: tempBirdArray
    })
  }

  render() {
    return (
      <div>
        <BirdForm addBird={this.addBird} />
        <h2>User Submissions</h2>
        <div className='submissions'>
          {this.state.birds.map((bird, index) => <Bird bird={bird} index={index} />)}
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
