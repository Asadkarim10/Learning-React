import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'

import Modal from './component/modal';
import Cart from './component/cart.js';
import Checkout from './component/checkout.js';
import Product from './component/product.js';

const PRODUCTS = [
    { id: 0, src: require('./images/proexpress-cover.jpg'), title: 'Pro Express.js', url: 'http://amzn.to/1D6qiqk' },
    { id: 1, src: require('./images/practicalnode-cover.jpeg'), title: 'Practical Node.js', url: 'http://amzn.to/NuQ0fM' },
    {
        id: 2, src: require('./images/expressapiref-cover.jpg'),
        title: 'Express API Reference', url: 'http://amzn.to/1xcHanf'
    },
    {
        id: 3, src: require('./images/reactquickly-cover.jpg'),
        title: 'React Quickly', url: 'https://www.manning.com/books/react-quickly'
    },
    {
        id: 4, src: require('./images/fullstack-cover.png'),
        title: 'Full Stack JavaScript', url: 'http://www.apress.com/9781484217504'
    }
]
const Heading = () => {
    return <h1>Nile Book Store</h1>
}
const Copy = () => {
    return <p>Please click on a book to view details in a modal. You can copy/paste the link of the modal. The link will open book on a separate page.
    </p>
}

export default class App extends React.Component {
    componentWillReceiveProps(nextProps) {
        this.isModal = (nextProps.location.state &&
            nextProps.location.state.modal)
        if (this.isModal &&
            nextProps.location.key !== this.props.location.key) {
            this.previousChildren = this.props.children
        }
    }
    render() {
        console.log('modal: ', this.isModal)
        return (
            <div className="well">
                <Heading />
                <div>
                    {(this.isModal) ? this.previousChildren : this.props.children}
                    {/* {this.props.children} */}
                    {(this.isModal) ?
                        <Modal isOpen={true} returnTo={this.props.location.state.returnTo}>
                            {this.props.children}
                        </Modal> : ''
                    }
                </div>
            </div>
        )
    }
}

class Index extends React.Component {
    render() {
        return (
            <div>
                <Copy />
                <p><Link to="/cart" className="btn btn-danger">Cart</Link></p>
                <div>
                    {PRODUCTS.map(picture => (
                        <Link key={picture.id}
                            to={{
                                pathname: `/products/${picture.id}`,
                                state: {
                                    modal: true,
                                    returnTo: this.props.location.pathname
                                }
                            }
                            }>
                            <img style={{ margin: 10 }} src={picture.src} height="100" alt="pictures" />
                        </Link>
                    ))}
                </div>
            </div>
        )
    }
}
let cartItems = {}
const addToCart = (id) => {
    if (cartItems[id])
        cartItems[id] += 1
    else
        cartItems[id] = 1
}
ReactDOM.render((
    <Router>
    <div>
        <Route path="/" component={App} />
        <Route exact path="/" component={Index} />
        <Route path="/products/:id" render={(props) => <Product  {...props} addToCart={addToCart} products={PRODUCTS} />} />
        <Route path="/cart" render={(props) => <Cart {...props} cartItems={cartItems} products={PRODUCTS} />} />
        <Route path="/checkout" render={(props) => <Checkout {...props} cartItems={cartItems} products={PRODUCTS} />} />
    </div>
    </Router>
), document.getElementById('content'))

