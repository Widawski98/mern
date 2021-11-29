import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAdress } from '../actions/cartActions';

import CheckoutSteps from '../components/CheckoutSteps'



export default function ShippingAdressScreen(props) {
    const userSignin = useSelector(state => state.userSignin);
    const {userInfo} = userSignin;
    if(!userInfo){
        props.history.push('/signin')
    }
    const cart = useSelector(state => state.cart);
    const {shippingAdress} = cart;
    const [fullName, setFullName] = useState(shippingAdress.fullName);
    const [adress, setAdress] = useState(shippingAdress.adress);
    const [postalCode, setPostalCode] = useState(shippingAdress.postalCode);
    const [city, setCity] = useState(shippingAdress.city);
    const [country, setCountry] = useState(shippingAdress.country);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
       e.preventDefault();
       dispatch(saveShippingAdress({fullName, adress, city, postalCode, country}));
       props.history.push('/payment');
        
    }


    return (
        <div>
         <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Shipping Adress</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Full Name</label>
                    <input type="text"
                     id="fullName"
                      placeholder="Enter full name"
                       value={fullName} 
                        onChange={(e)=>setFullName(e.target.value)} 
                        required/>
                </div>

                  <div>
                    <label htmlFor="adress">Adress</label>
                    <input type="text"
                     id="fullName"
                      placeholder="Enter adrss"
                       value={adress} 
                        onChange={(e)=>setAdress(e.target.value)} 
                        required/>
                </div>


                  <div>
                    <label htmlFor="city">City</label>
                    <input type="text"
                     id="fullName"
                      placeholder="Enter city"
                       value={city} 
                        onChange={(e)=>setCity(e.target.value)} 
                        required/>
                </div>



                  <div>
                    <label htmlFor="postalCode">Postal Code</label>
                    <input type="text"
                     id="postalCode"
                      placeholder="Enter postal code"
                       value={postalCode} 
                        onChange={(e)=>setPostalCode(e.target.value)} 
                        required/>
                </div>
                      <div>
                    <label htmlFor="coutry">Country</label>
                    <input type="text"
                     id="country"
                      placeholder="Enter country"
                       value={country} 
                        onChange={(e)=>setCountry(e.target.value)} 
                        required/>
                </div>
                <div>
                    <label htmlFor=""></label>
                    <button className="primary" type="submit">Continue</button>
                </div>
            </form>
        </div>
    )
}
