import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route} from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Signin from './screens/Signin';
import Cart from './screens/Cart';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from './actions/userActions';
import ShippingAddress from './screens/ShippingAddress';
import PaymentMethod from './screens/PaymentMethod';
import PlaceOrder from './screens/PlaceOrder';
// import RegisterScreen from './screens/RegisterScreen';


function App() {
  const cart = useSelector((state) => state.cart);
  const {cartItems} = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
    return (
      <BrowserRouter>
      <div className="grid-container">
        <header className="row">
        <div>
         <Link className="brand" to="/">Iron Outlet</Link>
         </div>
         <div>
           <Link to="/cart">Cart
           {cartItems.length > 0 && (
             <span className="badge">{cartItems.length}</span>
           )}
           </Link>
           {
             userInfo ? (
               <div className="dropdown">
               <Link to="#">
               {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
               </Link>
               <ul className="dropdown-content">
                 <Link to="#signout" onClick={signoutHandler}>Sign Out</Link>
               </ul>
               </div>
             ) : (
              <Link to="/signin">Sign in</Link>
             )
           }
         </div>
        </header>
        <main>
        <Route path="/cart/:id?" component={Cart} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/signin" component={Signin} />
        {/* <Route path="/register" component={RegisterScreen} /> */}
        <Route path="/shipping" component={ShippingAddress} />
        <Route path="/payment" component={PaymentMethod} />
        <Route path="/placeorder" component={PlaceOrder} />
        <Route path="/" component={HomeScreen} exact/>
        </main>
        <footer className="row center">
        All rights reserved!
        </footer>
      </div> 
      </BrowserRouter>
    );
  }
  


export default App;
