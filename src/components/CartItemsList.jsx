import { useState } from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem';

export default function CartItemsList() {
    const cartItems = useSelector(state => state.cart.cartItems);
    console.log(cartItems);
    return (
        <div >
            {cartItems.map(item => {
                return <CartItem key={item.cartID} cartItem={item}/>
            })}
        </div>
    )
}
