import { useLoaderData, Link, generatePath } from "react-router-dom";
import { customFetch, FormatPrice, generateAmountOptions } from "../utils";
import { useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export const loader = async ({ params }) => {
  const request = await customFetch(`products/${params.id}`);
  return { product: request.data.data };
};

export default function SingleProduct() {
  const dispatch = useDispatch();

  const { product } = useLoaderData();
  const { image, title, description, price, company, colors } =
    product.attributes;
  const dollarAmout = FormatPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState();

  // object for redux

  const cartProduct = {
    cardID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    amount: Number(amount),
    productColor,
    company,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section className="align-content">
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products" className="capitalize">
              products
            </Link>
          </li>
        </ul>
      </div>
      {/* product */}

      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16  ">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full "
        />
        <div>
          <h1 className="capitalize text-3xl font-bold ">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{dollarAmout}</p>
          <p className="mt-6 leading-8">{description}</p>
          <div className="mt-2">
            {colors.map((color) => {
              return (
                <button
                  key={color}
                  className={`badge w-6 h-6 mr-2 ${
                    color == productColor && "border-2 border-black "
                  } }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color)}
                ></button>
              );
            })}
          </div>
          <div className="form-control w-full max-w-xs ">
            <label className="label">
              <h4 className="text-md font-medium tracking-wider capitalize">
                amount
              </h4>
            </label>
            <select
              className="select select-bordered w-full max-w-xs"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            >
              {generateAmountOptions(20)}
            </select>
            <div className="mt-10">
              <button
                className="btn btn-secondary btn-md"
                onClick={() => {
                  addToCart();
                }}
              >
                add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
