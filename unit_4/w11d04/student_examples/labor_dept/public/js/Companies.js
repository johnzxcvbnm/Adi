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
