import { useState } from "react";
import * as R from "ramda";

const initialProducts = [
  {
    id: 0,
    name: "Baklava",
    count: 1,
  },
  {
    id: 1,
    name: "Cheese",
    count: 5,
  },
  {
    id: 2,
    name: "Spaghetti",
    count: 2,
  },
];

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts);

  const addProduct = (product,productId) => {
    product.count = productId === product.id ? product.count + 1 : product.count;
    return product;
  };

  function handleIncreaseClick(productId) {
    setProducts(R.map(product => addProduct(product,productId), products));
  }

  const removeProduct = (product,productId) => {
    product.count = productId === product.id ? product.count - 1 : product.count;
    return product.count > 0;
  };

  function handleDecreaseClick(productId) {
    setProducts(R.filter(product => removeProduct(product,productId), products));
  }

  return (
    <div  className='counter'>
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              handleIncreaseClick(product.id);
            }}
          >
            +
          </button >
          <button onClick= { () => {
            handleDecreaseClick(product.id)
          }}>-</button>
        </li>
      ))}
    </ul>
    </div>
  );
}
