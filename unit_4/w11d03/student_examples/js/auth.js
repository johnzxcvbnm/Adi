class Auth extends React.Component {
    constructor(props){
        super(props)
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    handleFormSubmit(event){
      event.preventDefault();
      // console.log(this.refs.username.value);
      this.props.onLogin(this.refs.username.value);
    }

    render(){
        return <form onSubmit={this.handleFormSubmit}>
            <input
                ref="username"
                type="text"
                placeholder="Your Name"/>
            <input type="submit" value="Log In"/>
        </form>
    }
}
