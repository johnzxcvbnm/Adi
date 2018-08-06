// const formatUser = (user) => {
//   return user + "!!";
// }
//
// const user = "John";
// const myJSX =
//               <section>
//                 <h1 className="foo">Hello, {formatUser(user)}!</h1>
//                 Welcome to the app
//               </section>
//
// ReactDOM.render(
//   myJSX,
//   document.querySelector('main')
// );

// class Heading extends React.Component {
//   render() {
//     return <h1>
//         Hello! { (this.props.userType === "admin") ? "You are an admin!" : "" }
//       </h1>;
//   }
// }

// class Heading extends React.Component {
//   render() {
//     return <div>
//       <h1>Hello!</h1>
//       {
//         (this.props.userType==="admin")?
//         (
//           <em>You are an admin</em>
//         ):
//         null
//       }
//       </div>;
//   }
// }
//
// ReactDOM.render(
//   <section>
//     <Heading userType="admin" />
//     <Heading />
//   </section>,
//   document.querySelector('main')
// );
// class Heading extends React.Component {
//   render() {
//     let addition = null
//     if (this.props.userType==="admin" ) {
//       addition = <em>You are an admin</em>
//     }
//     return <h1>Hello, {this.props.name}! {addition}</h1>
//   }


const nums = [1, 5, 8, 10];
class List extends React.Component {
  render() {
    return <ul>
    {
      nums.map( (num, index) => (
        <li key={index} >{num}</li>
              )
            )
    }
    </ul>;
  }
}

ReactDOM.render(
  <List></List>,
  document.querySelector('main')
);
