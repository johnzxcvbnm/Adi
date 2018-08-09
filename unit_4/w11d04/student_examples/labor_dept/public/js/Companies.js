class CompanyForm extends React.Component {
  render() {
    return (
      <div className="field">
        <form>
          <label className="label" for="company_name">Name</label>
          <div className="control">
            <input className="input" type="text" id="company_name" />
          </div>
          <label className="label" for="industry">Industry</label>
          <div className="control">
            <input className="input" type="text" id="industry" />
          </div>
          <label className="label" for="rating">Rating</label>
          <div className="control">
            <input className="input" type="text" id="rating" />
          </div>
          <label className="label" for="mission_statement">Mission Statement</label>
          <div className="control">
            <input className="input" type="text" id="mission_statement" />
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
                  <button className="button is-danger is-small">
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
              getCompany={this.getCompany}
              companies={this.state.companies}
              toggleState={this.toggleState}/>
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
              toggleState={this.toggleState}/>
          : ''
        }
      </div>
    )
  }
}
