/* global React:true */

// the state of this component is what has been typed inside the input field
// two functions one to handle the changes in the input field, and one to deal with the submit

// input has three parts a function that gets called on change, a value that gets updated and don't forget to bind this inside the constructor

// Submit is a little tricky. Typically, data flows down, but sometimes we have to lift up state to a parent component. We do that through a function call. So we trigger handleSubmit and handleSubmit passes the value of our input to the parent function handleCreateTea

// handleCreate Tea was explicitly passed down in the parent component <App/>
// therefore we have access to it with props

class TeaForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newTea: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  handleChange (event) {
    this.setState({
      newTea: event.target.value
    })
  }
  handleSubmit (event) {
    event.preventDefault()
    this.props.handleCreateTea(this.state.newTea)
  }
  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <label for='newTea' />
        <input type='text' id='newTea' onChange={this.handleChange} value={this.newTea} />
        <input type='submit' />
      </form>
    )
  }
}
