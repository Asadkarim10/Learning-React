import React from 'react';
import { Link}  from 'react-router-dom';

class Product extends React.Component {
constructor(props) {
super(props)
this.handleBuy = this.handleBuy.bind(this) 
}
handleBuy (event) {
this.props.addToCart(this.props.params.id) 
}
render() {
return (
<div>
<img src={this.props.products[this.props.params.id].src}   
style={{ height: '80%' }}  />
<p>{this.props.products[this.props.params.id].title}</p>
<Link
to={{
pathname: `/cart`,
state: { productId: this.props.params.id}
}}
onClick={this.handleBuy} 
className="btn btn-primary">
Buy
</Link>
</div>
)
}
}
export default  Product