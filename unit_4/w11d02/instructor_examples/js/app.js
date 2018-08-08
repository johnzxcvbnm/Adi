// class Heading extends React.Component {
//     constructor(props){
//         super(props)
//         this.sayHello = this.sayHello.bind(this);
//     }
//     sayHello(){
//         console.log(this.props);
//         alert("My name is " + this.props.name)
//     }
//     render(){
//         return <h1 onClick={this.sayHello}>Hello, {this.props.name}!</h1>
//     }
// }
//
// ReactDOM.render(
//     <section>
//         <Heading name="Matt"></Heading>
//         <Heading name="Helen"></Heading>
//     </section>,
//     document.querySelector('main')
// );

// const nums = [1,5,8,10];
//
// class ListItem extends React.Component {
//     render(){
//         return <li>This is a list item:{this.props.number}</li>
//     }
// }
//
// class List extends React.Component {
//     render(){
//         return <ul>
//             {nums.map((num, index) => <ListItem number={num} key={index}></ListItem>)}
//         </ul>
//     }
// }
//
// ReactDOM.render(
//     <List></List>,
//     document.querySelector('main')
// )

// class Person extends React.Component {
//     render(){
//         return <div>
//             The name of the person is {this.props.children}
//         </div>
//     }
// }
//
// ReactDOM.render(
//     <section>
//         <Person age="5">
//             <em>Bob</em>. He is awesome
//         </Person>
//         <Person>Sally. All hail Sally</Person>
//     </section>,
//     document.querySelector('main')
// )



ReactDOM.render(
    <Auth></Auth>,
    document.querySelector('main')
);
