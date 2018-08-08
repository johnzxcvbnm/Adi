/* global ReactDOM:true */
/* global React:true */
/* global alert:true */

// state can have a lot of different data in it. but there can only be one state for each component
// some components can be stateless or static (think back to the first lab where you were just making a dashboard and all the numbers were hard coded)
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      open: true,
      manager: 'Karolin',
      rating: 3,
      tea: ['Maple Bacon Tea', 'Chardonnay Tea', 'Dolphin Blue Tea', 'Labrador Tea', 'Ginko Biloba Tea']
    }
    // this is bound to the scope of where it is called by default
    // however, we want `this` to be the scope of this component so we must bind it
    this.handleCreateTea = this.handleCreateTea.bind(this)
  }
  handleCreateTea (tea) {
    // inefficiently, not the best-ly add to the array
    // if you are ready for es6/es7/es8 solutions to it check out:
    // https://reactjs.org/docs/optimizing-performance.html#the-power-of-not-mutating-data
    // if you are struggling with react, go ahead and just use .push it'll work fine!
    // push onto the array
    // we have to trigger a redraw - we do that by calling the function setState
    // setState can either take an object or an anonymous callback. In this case we'll just use an object to update the tea array
    // once the tea array is updated in setState you should see it in the browser
    const updateTea = this.state.tea
    updateTea.push(tea)
    // setState is a function that will trigger a redraw of the elements that have had their state changed - rather than redrawing the entire page. This helps with speed/optimization
    this.setState({
      tea: updateTea
    })
  }
  render () {
    // use a ternary operator to control what is being rendered. There are few different ways to do this,
    // think about times where you might want different views rather than seeing all the components
    // render our teas based on our data which is now living in 'this.state.tea'
    return (
      <div>
        <h1> Welcome to the Tea Shop </h1>
        { this.state.open ? <h2>Yes, we are open</h2> : <h3> Sorry, we are closed </h3>}
        <TeaForm handleCreateTea={this.handleCreateTea} />
        <ul>
          {this.state.tea.map(t => <TeaListItem tea={t}>The finest </TeaListItem>)}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
)
