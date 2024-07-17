import { useContext } from "react";
import classes from "./MealItem.module.css";
import CartContext from "../../../store/CartContext";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: 1,
      price: props.price,
    });
  };

  return (
    <div className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price.toFixed(2)}</div>
      </div>
      <div>
        <button className={classes.addbutton} onClick={addToCartHandler}>
          + Add
        </button>
      </div>
    </div>
  );
};

export default MealItem;
