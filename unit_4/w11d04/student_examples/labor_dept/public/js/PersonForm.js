class PersonForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      age: 0,
      key_skill: '',
      phone: '',
      avatar: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount(){
    if(this.props.person){
      this.setState({
        name: this.props.person.name,
        age: this.props.person.age,
        key_skill: this.props.person.key_skill,
        phone: this.props.person.phone,
        avatar: this.props.person.avatar,
        id: this.props.person.id
      })
    }
  }

  handleChange(event) {
    // console.log(this.state[event.target.id]);
    this.setState({[event.target.id]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault();
    // console.log(this.state);
    this.props.handleSubmit(this.state)
  }
  render () {
    return (
      <div className='field'>
        <form onSubmit={this.handleSubmit}>
          <label className='label' for='name'>Name</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='name'
              onChange={this.handleChange}
              value={this.state.name}/>
          </div>
          <label className='label' for='age'>Age</label>
          <div className='control'>
            <input
              className='input'
              type='number'
              id='age'
              onChange={this.handleChange}
              value={this.state.age}/>
          </div>
          <label className='label' for='key_skill'>Key Skill</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='key_skill'
              onChange={this.handleChange}
              value={this.state.key_skill}/>
          </div>
          <label className='label' for='phone'>Phone</label>
          <div className='control'>
            <input
              className='input'
              type='tel'
              id='phone'
              onChange={this.handleChange}
              value={this.state.phone}/>
          </div>
          <label className='label 'for='avatar'>Avatar</label>
          <div className='control'>
            <input
              className='input'
              type='text'
              id='avatar'
              onChange={this.handleChange}
              value={this.state.avatar}/>
          </div>
          <div className='control'>
            <input className='button is-primary' type='submit' />
          </div>
        </form>
        <button className="button is-link" onClick={ () => this.props.toggleState(this.props.toggle1, this.props.toggle2)}>Cancel</button>
      </div>
    )
  }
}
