import React from "react";
import { useSelector } from "react-redux";
import { FormatPrice } from "../utils";

export default function CartTotals() {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="bg-slate-200 rounded-xl">
      <div className="card-body ">
        <p className="flex justify-between text-xl border-b-2 border-black border-opacity-15 pb-2">
          <span>Subtotal</span>
          <span className="font-medium ">{FormatPrice(cartTotal)}</span>
        </p>
        <p className="flex justify-between text-xl border-b border-black border-opacity-15 pb-2">
          <span>Shipping</span>
          <span className="font-medium ">{FormatPrice(shipping)}</span>
        </p>
        <p className="flex justify-between text-xl border-b border-black border-opacity-15 pb-2">
          <span>Tax</span>
          <span className="font-medium ">{FormatPrice(tax)}</span>
        </p>
        <p className="flex justify-between text-xl border-b-2 mt-8 pb-2">
          <span>Order Total</span>
          <span className="font-bold ">{FormatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
}
