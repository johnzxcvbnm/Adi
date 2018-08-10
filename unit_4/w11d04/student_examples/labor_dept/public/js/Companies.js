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

class Company extends React.Component {
  render() {
    return (
      <tr>
        <td><h3>{this.props.company.company_name}</h3></td>
        <td>{this.props.company.industry}</td>
        <td>{this.props.company.rating}</td>
        <td>{this.props.company.mission_statement}</td>
        <td>
            <button
                className="button is-warning"
                onClick={ () => this.props.toggleState("companyList", "companySingle")}>
                    See Full List
            </button>
        </td>
      </tr>
    )
  }
}

class CompanyList extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.companies.map((company, index) => {
            return (
              <tr>
                <td
                  onClick={() => {
                    this.props.toggleState("companyList", "companySingle");
                    this.props.getCompany(company);
                  }}>
                  <h2><b>{company.company_name}</b></h2>
                </td>
                <td>{company.industry}</td>
                <td>
                  <button className="button is-warning is-small">Edit</button>
                </td>
                <td>
                  <button
                    className="button is-danger is-small"
                    onClick={() => this.props.deleteCompany(company, index)}>
                    Delete
                  </button>
                </td>
              </tr>
            )
          })} {/*End of Map*/}
        </tbody>
      </table>
    )
  }
} //End of CompanyList

class Companies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      companyList: true,
      addCompany: false,
      companySingle: false,
      editCompany: false,
      companies: [],
      company: {}
    }
    this.toggleState = this.toggleState.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getCompanies = this.getCompanies.bind(this);
    this.getCompany = this.getCompany.bind(this);
    this.deleteCompany = this.deleteCompany.bind(this);
    this.addCompany = this.addCompany.bind(this);
  }

  addCompany( company ) {
    // console.log("Adding Company");
    // console.log(company);
    fetch("/companies",
    {
      body: JSON.stringify(company),
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      }
    })
    .then(createdCompany => {
      return createdCompany.json()
    })
    .then(jsonedCompany => {
      console.log([jsonedCompany, ...this.state.companies])
      this.setState({ companies: [jsonedCompany, ...this.state.companies]})
      this.toggleState("addCompany", "companyList")
    })
    .catch(error => console.log(error))
  }

  deleteCompany(company, index){
    // console.log("DELETING");
    // console.log(company);
    fetch("/companies/" + company.id,
    {
      method: 'DELETE'
    })
    .then(data => {
      this.setState({
        companies: [
          ...this.state.companies.slice(0, index),
          ...this.state.companies.slice(index + 1)
        ]
      })
    })
  }

  getCompanies() {
    fetch("/companies")
      .then(res => res.json())
        .then(data => {
          this.setState({
            companies: data
          })
        }).catch(error => console.log(error))
  }

  toggleState(...st) {
    let toUpdate = {};
    for(let key of st) {
      toUpdate[key] = !this.state[key];
    }
    this.setState(toUpdate);
  }

  getCompany( my_company ){
    this.setState({ company: my_company });
  }

  componentDidMount() {
    this.getCompanies();
  }

  render() {
    return (
      <div className="companies column">
        <h2>Companies</h2>
        {
          this.state.companyList ?
            <button
              className="button is-success"
              onClick={() => this.toggleState("companyList", "addCompany")}>
              Add a Company
            </button>
          : ''
        }
        {
          this.state.companyList ?
            <CompanyList
              companies={this.state.companies}
              getCompany={this.getCompany}
              toggleState={this.toggleState}
              deleteCompany={this.deleteCompany}/>
          : ''
        }
        {
          this.state.companySingle ?
            <Company
              company={this.state.company}
              toggleState={this.toggleState} />
          : ''
        }
        {
          this.state.addCompany ?
            <CompanyForm
              addCompany={this.addCompany}
              toggleState={this.toggleState}/>
          : ''
        }
      </div>
    )
  }
}
