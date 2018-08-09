class People extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      peopleListIsVisible: true,
      addPersonIsVisible: false,
      personIsVisible: false,
      editPersonIsVisible: false,
      people: [],
      person: {}
    }
    this.toggleState = this.toggleState.bind(this);
    this.getPeople = this.getPeople.bind(this);
    this.getPerson = this.getPerson.bind(this);
    this.deletePerson = this.deletePerson.bind(this);
  }

  componentDidMount() {
    this.getPeople();
  }

  deletePerson(person, index){
    fetch('people/' + person.id,
      {
        method: 'DELETE'
      })
      .then(data => {
        this.setState({
          people: [
            ...this.state.people.slice(0, index),
            ...this.state.people.slice(index + 1)
          ]
        })
      })
  }

  toggleState(...st) {
    let toUpdate = {}
    for (let key of st) {
      toUpdate[key] = !this.state[key]
    }
    this.setState(toUpdate)
  }
  // This now works
  getPerson(person) {
    this.setState({ person: person })
  }

  getPeople() {
    fetch('/people')
      .then(response => response.json())
        .then(data => {
          this.setState({
            people: data
          })
        }).catch(error => console.log(error))
  }


  render() {
    return (
      <div className="people column">
        <h2>People</h2>
        {
          this.state.peopleListIsVisible ?
            <button
              className="button is-success"
              onClick={
                () => this.toggleState("addPersonIsVisible", "peopleListIsVisible")
              }>Add a Person</button>
          : ''
        }
        {
          this.state.peopleListIsVisible ?
          <PeopleList
            people={this.state.people}
            getPerson={this.getPerson}
            people={this.state.people}
            toggleState={this.toggleState}
            deletePerson={this.deletePerson}
          />
          : '' }
        {
          this.state.addPersonIsVisible ?
          <PersonForm
            toggleState={this.toggleState}
          />
          : ''
        }
        {
          this.state.personIsVisible ?
          <Person
            person={this.state.person}
            toggleState={this.toggleState}
          />
          : ''
        }
      </div>
    )
  }
}
