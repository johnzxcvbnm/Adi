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
