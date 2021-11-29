
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter,Link,Route, } from 'react-router-dom';
import { signout } from './actions/userAction';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentScreen from './screens/PaymentScreen';
import placeOrderScreen from './screens/placeOrderScreen';
import ProductScreen from './screens/ProductScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAdressScreen from './screens/ShippingAdressScreen';
import SignInScreen from './screens/SignInScreen';




function App() {

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
    <header className="row">
        <div ><Link to="/" className="brand">Network</Link></div>
        <div>
            <Link to="/cart">Cart
            {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>

            {
              userInfo ? (
                <div className="dropdown">
                <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="/orderhistory">Order History</Link>
                  </li>
                  <Link to="#signout" onClick={signoutHandler}>Sign out</Link>
                </ul>
                </div>
              ) : (
                <Link to="/signin">Sign in</Link>
              )
            }
            
        </div>
    </header>
    <main>
      <Route path="/cart/:id?" component={CartScreen}></Route>
          <Route path="/product/:id" component={ProductScreen}></Route>
          <Route path="/signin" component={SignInScreen}></Route>
          <Route path="/register" component={RegisterScreen}></Route>
          <Route path="/shipping" component={ShippingAdressScreen}></Route>
          <Route path="/payment" component={PaymentScreen}></Route>
          <Route path="/placeorder" component={placeOrderScreen}></Route>
          <Route path="/" component={HomeScreen} exact></Route>
          <Route path="/order/:id" component={OrderScreen} exact></Route>
          <Route path="/orderhistory" component={OrderHistoryScreen} exact></Route>
   

    </main>
    <footer className="row center">
        ALL RIGHT RESEVRVED
    </footer>
 </div>
 </BrowserRouter>
  );
}

export default App;
