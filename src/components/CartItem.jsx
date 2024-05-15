import { useDispatch } from 'react-redux';
import { editItem, removeItem } from '../features/cart/cartSlice';
import { FormatPrice, generateAmountOptions } from "../utils";
export default function CartItem({ cartItem }) {
    const dispatch = useDispatch();
  const { cartID, title, price, company, image, amount, productColor } =
    cartItem;
    const handleAmount = (e) => {
        dispatch(editItem({cartID,amount:Number(e.target.value)}))
    }
    const removeItemFromTheCart = () => {
        dispatch(removeItem(cartID))
    }

  return (
    <article
      key={cartItem.cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      <img
        src={image}
        alt={title}
        className="w-24 h-24 rounded-lg sm:h-32 lg:w-32 object-cover"
      />

      <div className="sm:ml-16 sm:w-48">
        <h3 className="capitalize font-medium">{title} </h3>
        <h4 className="mt-2 capitalize text-neutral-content">{company}</h4>
        <p className="mt-4 text-sm capitalize flex items-center gap-x-2">
          color : 
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productColor }}
          ></span>
        </p>
      </div>
      <div className="sm:ml-12">
        <div className="form-control max-w-xs">
          <label className="label-text">Amount</label>
        </div>
        <select
          name="amount"
          id="amount"
          className="mt-2 select select-bordered select-xs"
          
          onChange={handleAmount}
        >
          {generateAmountOptions(amount+5)}
        </select>
      <div className='mt-2 link link-primary text-sm' onClick={removeItemFromTheCart}>remove</div>
      </div>
      <p className='font-medium sm:ml-auto'>{FormatPrice(price)}</p>
    </article>
  );
}
