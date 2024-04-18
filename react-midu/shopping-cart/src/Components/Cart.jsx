/* eslint-disable react/prop-types */
import { CartIcon, ClearCartIcon } from "./Icons.jsx";
import { useId } from "react";
import "./Cart.css";
import { useCart } from "../hocks/useCart.js";

function CartItem({ thumbnail, price, title, quantity, addToCart }) {
  return (
    <li>
      <img src={thumbnail} alt={title} />
      <div>
        <strong>{title}</strong> - ${price}
      </div>
      <footer>
        <small>Cantidad: {quantity}</small>
        <button onClick={addToCart}>➕</button>
      </footer>
    </li>
  );
}
export function Cart() {
  const cartCheckboxId = useId();
  const { cart, clearCart, addToCart } = useCart();

  return (
    <>
      <label htmlFor={cartCheckboxId} className="cart-button">
        <CartIcon />
      </label>
      <input type="checkbox" id={cartCheckboxId} hidden />

      <aside className="cart">
         <button onClick={clearCart}>
          <ClearCartIcon />
        </button>
        <ul>
          {cart.map((product) => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>
       
      </aside>
    </>
  );
}
