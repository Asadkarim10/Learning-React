import  React from 'react';
import  { BrowserRouter as Router,
    Route,
    Link}
   from  'react-router-dom';
class Checkout extends React.Component {
render() {
let count = 0
return <div><h1>Invoice</h1><table className="table table-bordered"><tbody>
{Object.keys(this.props.cartItems).map((item, index, list)=>{ 
count += this.props.cartItems[item]
return <tr key={item}>
<td>{this.props.route.products[item].title}</td> 
<td>{this.props.route.cartItems[item]}</td>
</tr>
})}
</tbody></table><p>Total: {count}</p></div>
}
}
export default  Checkout; 