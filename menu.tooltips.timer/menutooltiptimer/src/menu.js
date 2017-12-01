import React, { Component } from 'react';
import Link from './link';
//import './Menu.css';
//const menu = require('../../menu.json');
//import menu from '../../menu.json';

class Menu extends Component {

  render() {
    let menu = [
        "Home",
        "About",
        "Services",
        "Portfolio",
        "Contact us"
    ];
    return (
        <div>
            {
                menu.map((v,i)=>{
                    return <div key={i}><Link label={v}/></div>
                })
            }
        </div>
    );
  }
}

export default Menu;





// import React, { Component } from 'react';
// import logo from './images/logo.svg';
// import image from './images/Capture.PNG';
// import './App.css';
// // import List from './list';
// // import Button from './button';
// // import Mouse from './mouse';
// import Counter from './counter';
// class Autocomplete extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       first: "",
//       email: "",
//       last: ""
//     }
//   }
//   changeHandler(event) {
//     this.setState({ [event.target.id || event.target.name]: event.target.value })
//   }
//   render() {
//     console.log(this.state);
//     const arr1 = [{ name: "abc" }, { name: "cde" }, { name: "efg" }, { name: "ikl" }]
//     return (
//       <div>
//         {/* <Counter handleInput={this.changeHandler.bind(this)}/> */}
//         {/* <img src={logo} /> */}
//         {/* <Counter email="abc" handleInput={this.changeHandler.bind(this)} /> */}
//         {/* <Counter email="abc@email.com" handleInput={this.changeHandler.bind(this)} /> */}
//         {/* <ul>
//           {
//             arr1.map(function (item, index) {
//               return <li key={index}>{item.name}</li>
//             })
//           }
//         </ul> */
//           <ul>
//             {
//               arr1.map((item, index) => <li key={index}>{item.name}</li>)
//             }
//           </ul>
//         }
//       </div>
//     )
//   }
// }
// export default Autocomplete;