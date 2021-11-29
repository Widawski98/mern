import Axios from 'axios';
import {CART_ADD_ITEM, CART_REMOVE_ITEM, CART_SAVE_SHIPPING_ADRESS, CART_SAVE_PAYMENT_METHOD} from '../contants/cartContants';

export const addToCart = (productId, qty) => async (dispatch, getState) => {
  const { data } = await Axios.get(`/api/products/${productId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      product: data._id,
      qty,
    },
  });
  localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().cart.cartItems));
};


export const removeFromCart = (productId) => (dispatch, getState) => {
  dispatch({type: CART_REMOVE_ITEM, payload: productId});
  localStorage.setItem('cartItems', JSON.stringify(getState().cartItems));
}

export const saveShippingAdress = (data) => (dispatch) => {
  dispatch({ type: CART_SAVE_SHIPPING_ADRESS, payload: data });
  localStorage.setItem('shippingAddress', JSON.stringify(data));
};
export const savePaymentMethod = (data) => (dispatch) =>{
dispatch({type: CART_SAVE_PAYMENT_METHOD , payload:data})

}