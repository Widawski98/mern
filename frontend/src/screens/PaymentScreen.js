import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps'

export default function PaymentScreen(props) {
    const cart = useSelector(state => state.cart);
    const {shippingAdress} = cart;
    if(!shippingAdress.adress ){
        props.history.push('/shipping')
    }
    const [paymentMethod, setPaymentMethod] = useState('Paypal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        props.history.push('/placeorder');
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Payment Method</h1>
                </div>
                <div>
                    <div>
                        <input
                         type="radio"
                          id="paypal"
                           value="Paypal"
                            name="paymentMethod"
                             required 
                             checked
                             onChange={(e)=> setPaymentMethod(e.target.value)}>

                             </input>
                             <label htmlFor="paypal">PayPal</label>
                    </div>
                </div>

                  <div>
                    <div>
                        <input
                         type="radio"
                          id="stripe"
                           value="Stripe"
                            name="paymentMethod"
                             required 
                             onChange={(e)=> setPaymentMethod(e.target.value)}>

                             </input>
                             <label htmlFor="stripe">Stripe</label>
                    </div>
                </div>
                <button className="primary" type="submit">Continue</button>
            </form>
        </div>
    )
}
