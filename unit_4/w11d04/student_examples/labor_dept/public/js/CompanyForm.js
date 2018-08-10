class CompanyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: '',
      industry: '',
      rating: 0,
      mission_statement: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange() {
    // console.log(event.target.id, this);
  }

  handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();

    //Create a new company from the input fields
    const new_company = {
      company_name: this.refs.company_name.value,
      industry: this.refs.industry.value,
      rating: this.refs.rating.value,
      mission_statement: this.refs.mission_statement.value
    }
    //Clear the form
    this.refs.company_name.value = '';
    this.refs.industry.value = '';
    this.refs.rating.value = '';
    this.refs.mission_statement.value = '';

    //Add the new company
    this.props.addCompany(new_company);
    // console.log(new_company);
  }

  render() {
    return (
      <div className="field">
        <form onSubmit={this.handleSubmit}>
          <label className="label" for="company_name">Name</label>
          <div className="control">
            <input ref="company_name" className="input" type="text" id="company_name" />
          </div>
          <label className="label" for="industry">Industry</label>
          <div className="control">
            <input ref="industry" className="input" type="text" id="industry" />
          </div>
          <label className="label" for="rating">Rating</label>
          <div className="control">
            <input ref="rating" className="input" type="text" id="rating" />
          </div>
          <label className="label" for="mission_statement">Mission Statement</label>
          <div className="control">
            <input ref="mission_statement" className="input" type="text" id="mission_statement" />
          </div>
          <div className="control">
            <input className="button is-primary" type="submit" />
          </div>
        </form>
        <button className="button is-link" onClick={() => this.props.toggleState("addCompany", "companyList")}>Cancel</button>
      </div>
    )
  }
}
