import { FormatPrice } from "../utils";
import { useState } from "react";
export default function Formrange({ name, label, size }) {
  const step = 1000;
  const maxPrice = 100000;
  const [selectPrice, setSelectPrice] = useState(maxPrice);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer">
        <span className="caption-top label-text">{label}</span>
        <span>{FormatPrice(selectPrice)}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectPrice}
        onChange={(e) => setSelectPrice(e.target.value)}
        className={`range range-primary ${size}`}
        step={step}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold text-md">0</span>
        <span className="font-bold text-md">Max: {FormatPrice(maxPrice)}</span>
      </div>
    </div>
  );
}
