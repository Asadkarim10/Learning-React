import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {hashHistory, 
Router,
Route,
IndexRoute,
Link,
IndexLink
} from 'react-router';


import Modal from './modal.js';
import Cart from './cart.jsx';
import Checkout from './checkout.jsx';
import Product from'./product.jsx'; 

const PRODUCTS = [ 
{ id: 0, src: 'images/proexpress-cover.jpg', title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk' },
{ id: 1, src: 'images/practicalnode-cover.jpeg', title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM' },
{ id: 2, src: 'images/expressapirefcover.jpg',
title: 'Express API Reference', url: 'http://amzn.to/1xcHanf' },
{ id: 3, src: 'images/reactquicklycover.jpg',
title: 'React Quickly', url: 'https://www.manning.com/books/react-quickly'},
{ id: 4, src: 'images/fullstackcover.png',
title: 'Full Stack JavaScript', url: 'http://www.apress.com/9781484217504'}
]
const Heading = () => { 
return <h1>Nile Book Store</h1>
}
const Copy = () => { 
return <p>Please click on a book to view details in a modal. You can copy/paste the link of the modal. The link will open book on a separate page.
</p>
}
class App extends React.Component {
...
}
class Index extends React.Component {
...
}
let cartItems = {} 
const addToCart = (id) => {
if (cartItems[id])
cartItems[id] += 1
else
cartItems[id] = 1
}
ReactDOM.render((
<Router history={hashHistory}>
<Route path="/" component={App}>
<IndexRoute component={Index}/>
<Route path="/products/:id" component={Product}
addToCart={addToCart}
products={PRODUCTS} />
<Route path="/cart" component={Cart}
cartItems={cartItems} products={PRODUCTS}/>
</Route>
<Route path="/checkout" component={Checkout}
cartItems={cartItems} products={PRODUCTS}/>
</Router>
), document.getElementById('Content'))





ReactDOM.render(<Content />, document.getElementById('root'));
registerServiceWorker();
