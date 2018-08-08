/* global React:true */
/* global alert:true */

// Data flows down from the parent as this.props
class TeaListItem extends React.Component {
  constructor (props) {
    super(props)
    this.alertChoice = this.alertChoice.bind(this)
  }
  // this is the shorthand for declaring a function inside a class
  alertChoice () {
    alert(`I love tea ` + this.props.tea)
  }
  // always need a render function in a react component
  // return an li that has a click event listener. On click it triggers the alertChoice function
  // this.props.children is what is between the opening and closing tags of TeaListItem in the parent class <App /> in this case
  // this.props.tea was passed down in a syntax like an HTML attribute
  // inside the render function is JSX cannot use normal comments
  render () {
    return (
      <li onClick={this.alertChoice}>{this.props.children} {this.props.tea}</li>
    )
  }
}
