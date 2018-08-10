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
    this.handleCreate = this.handleCreate.bind(this);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
  }

  componentDidMount() {
    this.getPeople();
  }

  handleUpdateSubmit (person) {
    fetch("/people/" + person.id, {
      body: JSON.stringify(person),
      method: "PUT",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(updatedPerson => {
      return updatedPerson.json()
    })
    .then(jsonedPerson => {
      //Call the DB to update the view
      this.getPeople()
      this.toggleState("peopleListIsVisible", "personIsVisible")
    })
    .catch(error => console.log(error))
  }

  handleCreate (person) {
    console.log([person, ...this.state.people]);
    this.setState({people: [person, ...this.state.people]})
  }

  handleCreateSubmit (person) {
    fetch("/people", {
      body: JSON.stringify(person),
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdPerson => {
      return createdPerson.json()
    })
    .then(jsonedPerson => {
      this.handleCreate(jsonedPerson)
      this.toggleState("addPersonIsVisible", "peopleListIsVisible")
    })
    .catch(error => console.log(error))
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
            toggle1={"peopleListIsVisible"}
            toggle2={"addPersonIsVisible"}
            handleCreate={this.handleCreate}
            handleSubmit={this.handleCreateSubmit}
          />
          : ''
        }
        {
          this.state.personIsVisible ?
          <Person
            person={this.state.person}
            toggleState={this.toggleState}
            handleSubmit={this.handleUpdateSubmit}
          />
          : ''
        }
      </div>
    )
  }
}
