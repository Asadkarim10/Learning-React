import React, { Component } from 'react';

class Timer extends Component {
render () { 
    return ( <div></div>)
    
}

};

export default Timer;





































// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// // class Counter extends React.Component {
// //     render() {
// //         return (
// //             <div>
// //                 <h3>{this.props.counter}</h3>
// //                 <button onClick={this.props.handleClick}>increment count</button>
// //             </div>
// //         )
// //     }
// // }
// class Counter extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             age: ""
//         }
//     }
    
//     render() {
//         const newValue = this.props.name + "10";
//         return (
//             <div>
//                 <h3>{newValue}</h3>
//                 <input type="text" value={newValue} onChange={this.props.handleInput} />
//                 <input type="button" value={newValue} onClick={this.props.handleInput} />
//             </div>
//         )
//     }
// }

// Counter.defaultProps = {
//     name: ""
// }

// Counter.propTypes = {
//     handleInput: PropTypes.func.isRequired,
//     email: function (props, propName, componentName) {
//         let emailRegularExpression =
//             /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
//         if (!emailRegularExpression.test(props[propName])) {
//             return new Error('Email validation failed!')
//         }
//     }
// }
// export default Counter;