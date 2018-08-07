import React, { Component } from 'react'

class TeaForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTea: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({newTea: event.target.value});

    // console.log(this.state.newTea);
  }
  handleSubmit(event) {
    event.preventDefault();
    // console.log("I am being handled");
    this.props.handleCreateTea(this.state.newTea)
  }
  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <label for="newTea" />
        <input type="text" id="newTea" onChange={this.handleChange} value={this.newTea}/>
        <input type="submit" />
      </form>
    )
  }
}

class TeaListItem extends React.Component {
  constructor(props) {
    super(props);
    this.alertChoice = this.alertChoice.bind(this);
  }
  alertChoice() {
    alert("I love tea" + this.props.tea);
  }
  render() {
    return (
      <li onClick={alertChoice}>{this.props.children}{this.props.tea}</li>
    )
  }
}

class Open extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      open: true,
      tea: ['Maple Bacon Tea', 'Chardonnay Tea', 'Dolphin Blue Tea', 'Labrador Tea', 'Ginko Biloba Tea']
    }
    this.handleCreateTea = this.handleCreateTea.bind(this);
  }
  handleCreateTea(tea) {
    const updateTea = this.state.tea;
    updateTea.push(tea);
    this.setState({ tea: updateTea });
  }
  render() {
    return <div>
      <h1>Welcome to the Tea Shop</h1>
      (this.state.open)?<h2>Yes, we are open</h2>:<h3>Sorry, we are closed.</h3>
      <TeaForm handleCreateTea={this.handleCreateTea}/>
      <ul>
        { this.state.tea.map(t => <TeaListItem tea={t}>The finest</TeaListItem> )}
      </ul>
    </div>
  }
}

export default Open
