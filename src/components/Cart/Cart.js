import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes["cart-items"]}>
        {cartCtx.items.map((item) => (
          <li key={item.id}>
            <div>
              {item.name} - ${item.price.toFixed(2)}
            </div>
            <div className={classes.quantity}>
              <button onClick={() => cartCtx.decreaseQuantity(item.id)}>
                -
              </button>
              <span>{item.amount}</span>
              <button onClick={() => cartCtx.increaseQuantity(item.id)}>
                +
              </button>
              <button
                className={classes["remove-button"]}
                onClick={() => cartCtx.removeItem(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
