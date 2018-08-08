// class Heading extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = { username: null }
//     this.updateUsername = this.updateUsername.bind(this);
//   }
//   updateUsername(newName){
//     this.setState({username: newName})
//   }
//   render() {
//     return <header>
//       <Greeting name={this.state.username} />
//       <Auth onLogin={this.updateUsername}/>
//     </header>
//   }
// }
//
//
// ReactDOM.render(
//     <Heading />,
//     document.querySelector('main')
// );

class MovieInfo extends React.Component {
  render() {
    return (
      <ul>
        <li>Title: {this.props.data.Title}</li>
        <li>Director: {this.props.data.Director}</li>
        <li>Actors: {this.props.data.Actors}</li>
        <li>Year: {this.props.data.Year}</li>
        <li>Rated: {this.props.data.Rated}</li>
      </ul>
    )
  }
}

class OMDBQueryForm extends React.Component {
  constructor(props){
    super(props);
    this.queryOMDB = this.queryOMDB.bind(this);
    this.state = { foundMovie: null }
  }

  queryOMDB(event){
      event.preventDefault();
      fetch('http://www.omdbapi.com/?apikey=53aa2cd6&t=' + this.refs.title.value).then((response)=>{
          response.json().then((data)=>{
              this.setState({foundMovie: data})
              // console.log(data);
          });
      });
  }

  render() {
    return <form onSubmit={this.queryOMDB}>
    {/*Comments*/}
        <input
          ref="title"
          type="text"
          placeholder="Movie Title" />
        <input type="submit" value="Find Movie Info" />
        {
          (this.state.foundMovie !== null)?
            <MovieInfo data={this.state.foundMovie}/>
          :
            null
        }
      </form>
  }
}

ReactDOM.render(
  <OMDBQueryForm />,
  document.querySelector("main")
);
