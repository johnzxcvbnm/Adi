// const formatUser = (user) => {
//     return user + "!!"
// }
// const user = "Matt";
// const myJSX = <section>
//     <h1 className="foo">Hello, {formatUser(user)}!</h1>
//     Welcome to the app
// </section>

// class Heading extends React.Component {
//     render(){
//         return <h1>
//             Hello!
//             {
//                 (this.props.userType === 'admin')?
//                     <em>You are an admin</em>
//                 :
//                 null
//             }
//         </h1>
//     }
// }
const nums = [1,5,8,10];
class List extends React.Component {
    render(){
        return <ul>
            {nums.map(
                (num, index) => {
                    return (
                        <li key={index}>{num}</li>
                    )
                }
            )}
        </ul>
    }
}

ReactDOM.render(
    <List></List>,
    document.querySelector('main')
)

// ReactDOM.render(
//     <section>
//         <Heading userType="admin"></Heading>
//         <Heading></Heading>
//     </section>,
//     document.querySelector('main')
// );

// class Car {
//     constructor(make, model){
//         this.make = make;
//         this.model = model
//     }
//     drive(){
//         console.log('vroooom');
//     }
// }
//
// const myCar = new Car('Toyota', 'Prius')
// const sallysCar = new Car('Ford', 'F150')
// myCar.drive();
// sallysCar.drive();
