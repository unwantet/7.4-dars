import React from "react";
import { Form, Link, useLoaderData } from "react-router-dom";
import FormCheckbox from "./FormCheckbox";
import FormInputFilter from "./FormInputFilter";
import Formrange from "./Formrange";
import FormSelect from "./FormSelect";

export default function Filters() {
  const { meta } = useLoaderData();
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  items-center mt-14">
      <FormInputFilter
        label="search product"
        type="search"
        name="search"
        size="input-sm"
      />
      {/* categories */}
      <FormSelect
        label="select categories"
        name="category"
        list={meta.categories}
        size="select-sm"
      />
      {/* companies */}
      <FormSelect
        label="select company"
        name="company"
        list={meta.companies}
        size="select-sm"
      />
      {/* sort by */}
      <FormSelect
        label="soert by"
        name="order"
        list={["a-z", "z-a", "hight", "low"]}
        size="select-sm"
      />
      {/* range */}
      <Formrange name="price" size="range-sm" label="select price" />
      {/* shipping */}
      <FormCheckbox
        size="checkbox-sm"
        label="free shopping"
        name="shipping"
        defaultValue={false}
      />
      <button type="submit" className="btn btn-primary btn-sm capitalize">
        search
      </button>
      <Link to="/products" className="btn btn-accent btn-sm capitalize">
        reset
      </Link>
    </Form>
  );
}
