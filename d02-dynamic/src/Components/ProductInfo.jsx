import React from "react";
import * as R from "ramda";

/**
 * Capitalizes the first letter of a string
 * @param {string} str - Input string
 * @return {string} Capitalized string
 */
const capitalize = (str) => {
  const first = R.pipe(R.head, R.toUpper)(str);
  const rest = R.tail(str);
  return R.concat(first, rest);
};

/**
 * Creates an h1 element for a property
 * @param {string} key - Property key
 * @param {object} obj - Source object
 * @return {JSX.Element} Property heading
 */
const propToHeading = (key, obj) => {
  const value = R.prop(key, obj);
  return (
    <h1 key={key}>
      {capitalize(key)}: {value}
    </h1>
  );
};

/**
 * Maps object properties to heading elements
 * @param {object} obj - Source object
 * @return {Array<JSX.Element>} Heading elements
 */
const objToHeadings = (obj) => {
  const keys = R.keys(obj);
  return R.map((key) => propToHeading(key, obj), keys);
};

/**
 * Displays product information as headings
 */
const ProductInfo = () => {
  const product = {
    name: "Laptop",
    price: "$1400",
    availability: "In Stock",
  };
  
  return <div className="product">{objToHeadings(product)}</div>;
};

export default ProductInfo;
