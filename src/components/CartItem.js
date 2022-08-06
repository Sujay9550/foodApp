import { useDispatch } from "react-redux";
import Pizza from "../icons/pizza.png";
import Burger from "../icons/burger.png";
import Biryani from "../icons/biryani.png";
import Wrap from "../icons/wrap.png";
import Deserts from "../icons/deserts.png";
import { cartActions } from "../store/cart-slice";

import classes from "./CartItem.module.css";

const CartItem = (props) => {
  let foodIcon;
  const dispatch = useDispatch();

  const { id, title, price, quantity, total } = props.item;

  const foodTitle = title;

  switch (foodTitle) {
    case "Pizza":
      foodIcon = Pizza;
      break;

    case "Burger":
      foodIcon = Burger;
      break;

    case "Biryani":
      foodIcon = Biryani;
      break;

    case "Wraps":
      foodIcon = Wrap;
      break;

    case "Deserts":
      foodIcon = Deserts;
      break;
  }

  const addItemHandler = () => {
    dispatch(cartActions.addItemToCart({ id, title, price }));
  };

  const removeItemHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex justify-content-center align-items-center">
        <img src={foodIcon} className={classes["food-icon"]}></img>
        <h4 className={classes["food-title"]}>{title}</h4>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <span
          className={`${classes["food-quantity"]} badge secondary-badge rounded-pill`}
        >
          {`x${quantity}`}
        </span>
        <span className={`${classes["food-total-price"]} success-badge`}>
          {`Rs.${total.toFixed(2)}/-`}
        </span>
        <span className={classes["food-price"]}>{`Rs.${price.toFixed(
          2
        )}/-`}</span>
        <button
          type="button"
          className={classes["add-button"]}
          onClick={addItemHandler}
        >
          +
        </button>
        <button
          type="button"
          className={classes["remove-button"]}
          onClick={removeItemHandler}
        >
          -
        </button>
      </div>
    </li>
  );
};

export default CartItem;
