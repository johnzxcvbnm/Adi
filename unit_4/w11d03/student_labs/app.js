class FormBird extends React.Component {
  constructor(props) {
    super(props);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  handleFormSubmit(event){
    event.preventDefault();
    this.props.onLogin(this.refs.birdName.value, this.refs.image.value, this.refs.user.value)
  }
  render() {
    return (
      <div>
        <h3>Add Bird</h3>
        <form onSubmit={this.handleFormSubmit}>
          <input ref="birdName" type="text" placeholder="Bird Name" />
          <input ref="image" type="text" placeholder="Image URL" />
          <input ref="user" type="text" placeholder="User Adding" />
          <input type="submit" value="Add New Bird" />
        </form>
      </div>
    )
  }
}

class ListBirds extends React.Component {
  render() {
    return (
      <div>
        <h4>Bird Name: {this.props.birdName}</h4>
        <h4>Submitted By: {this.props.user}</h4>
        {(this.props.approved)?<button onClick={ () => this.props.changeApproved(this.props.id) }>Un-Approve</button>:<button onClick={ () => this.props.changeApproved(this.props.id) }>Approve</button>}
        <button onClick={ () => this.props.deleteBird(this.props.id)} >DELETE</button>
        <hr />
      </div>
    )
  }
}

class Heading extends React.Component {
  render() {
    return <h1>Bird Brain</h1>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      birds: [
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
      ]
    } //End of State
    this.changeApproved = this.changeApproved.bind(this);
    this.deleteBird = this.deleteBird.bind(this);
    this.createBird = this.createBird.bind(this);
  }
  createBird(bird, img, usr){
    const new_bird = {
      birdName: bird,
      image: img,
      user: usr,
      approved: false
    }
    const copy_array = this.state.birds;
    copy_array.push(new_bird);
    this.setState({birds: copy_array})
    // console.log("Creating Birb");
  }
  deleteBird(index){
    // console.log(index);
    const copy_array = this.state.birds;
    copy_array.splice(index, 1);
    this.setState({birds: copy_array});
  }
  changeApproved(index) {
    const copy_array = this.state.birds;
    copy_array[index]["approved"] = !copy_array[index]["approved"];
    this.setState({birds: copy_array})
    // console.log(index);
  }
  render() {
    return (
      <div>
        <Heading />
        <FormBird onLogin={this.createBird}/>
        <hr />
        {this.state.birds.map( (bird, index) =>
          <ListBirds
              birdName={bird.birdName}
              image={bird.image}
              user={bird.user}
              approved={bird.approved}
              id={index}
              changeApproved={this.changeApproved}
              deleteBird={this.deleteBird}
            />
          )}
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("main")
);
