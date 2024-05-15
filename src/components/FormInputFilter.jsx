import React from "react";

export default function FormInputFilter({
  type,
  defaultValue,
  name,
  label,
  size,
}) {
  return (
    <div className="form-control">
      <label className="w-full ">
        <div className="label">
          <span className="label-text capitalize">{label}</span>
        </div>
        <input
          type={type}
          name={name}
          placeholder={label}
          defaultValue={defaultValue}
          className={`input input-bordered w-full ${size}`}
        />
      </label>
    </div>
  );
}
