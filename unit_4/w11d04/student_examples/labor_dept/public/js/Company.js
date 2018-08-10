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
